import * as THREE from 'three';
import { FaceLandmarker, HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { createNoise3D } from 'simplex-noise';
import './style.css';

// --- CONFIGURATION ---
const CONFIG = {
    particleCount: 20000,
    particleSize: 0.02, // Brighter size
    particleColor: 0xfff000, // Electric Yellow
    lerpFactor: 0.6,
    noiseScale: 0.5,
    noiseStrength: 0.004,
    modelPathFace: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
    modelPathHand: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task'
};

const noise3D = createNoise3D();
const handConnections = [[0, 1, 2, 3, 4], [0, 5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [0, 5, 9, 13, 17, 0]];

// --- DOM ---
const video = document.getElementById('webcam');
const mainCanvas = document.getElementById('main-canvas');
const webcamCanvas = document.getElementById('webcam-canvas');
const webcamCtx = webcamCanvas.getContext('2d');
const statusText = document.getElementById('status-text');

// --- THREE.JS ENGINE ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Try a simpler renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: mainCanvas, antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);
camera.position.z = 10;

// --- GEOMETRY ---
const particleGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(CONFIG.particleCount * 3);
for (let i = 0; i < CONFIG.particleCount * 3; i++) positions[i] = (Math.random() - 0.5) * 10;
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particleMaterial = new THREE.PointsMaterial({
    color: CONFIG.particleColor,
    size: CONFIG.particleSize,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
});
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Hands
function createHand(color) {
    const group = new THREE.Group();
    const dotsGeom = new THREE.BufferGeometry();
    dotsGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(21 * 3), 3));
    const dots = new THREE.Points(dotsGeom, new THREE.PointsMaterial({ color: color, size: 0.2 }));
    group.add(dots);
    const lines = handConnections.map(chain => {
        const line = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.8 }));
        group.add(line);
        return { line, chain };
    });
    scene.add(group);
    return { group, dotsGeom, lines };
}
const hand1 = createHand(0x00ffff);
const hand2 = createHand(0xffffff);

// --- TRACKING ENGINE ---
let faceLandmarker, handLandmarker;
let faceResults, handResults;
let lastVideoTime = -1;
const faceTargetPos = new Float32Array(468 * 3);
const faceCurrentPos = new Float32Array(468 * 3);

async function init() {
    statusText.innerText = 'CALIBRATING SYSTEM...';
    try {
        const resolver = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
        faceLandmarker = await FaceLandmarker.createFromOptions(resolver, {
            baseOptions: { modelAssetPath: CONFIG.modelPathFace, delegate: "GPU" },
            runningMode: "VIDEO", numFaces: 1
        });
        handLandmarker = await HandLandmarker.createFromOptions(resolver, {
            baseOptions: { modelAssetPath: CONFIG.modelPathHand, delegate: "GPU" },
            runningMode: "VIDEO", numHands: 2
        });

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.onloadeddata = () => {
            webcamCanvas.width = video.videoWidth;
            webcamCanvas.height = video.videoHeight;
            // HIDE LOADING SCREEN
            document.getElementById('loading-screen').style.display = 'none';
            animate();
        };
    } catch (e) {
        statusText.innerText = 'SYSTEM ERROR: CHECK CAMERA';
        console.error(e);
    }
}

function updateFace(time) {
    if (!faceResults?.faceLandmarks?.length) return;
    const landmarks = faceResults.faceLandmarks[0];
    const s = 15; // Even larger
    landmarks.forEach((lm, i) => {
        if (i >= 468) return;
        faceTargetPos[i * 3] = (0.5 - lm.x) * s;
        faceTargetPos[i * 3 + 1] = (0.5 - lm.y) * s;
        faceTargetPos[i * 3 + 2] = -lm.z * 10;
    });
    for (let i = 0; i < 468 * 3; i++) faceCurrentPos[i] += (faceTargetPos[i] - faceCurrentPos[i]) * CONFIG.lerpFactor;

    const pos = particleGeometry.attributes.position.array;
    for (let i = 0; i < CONFIG.particleCount; i++) {
        const idx = i % 468;
        pos[i * 3] += (faceCurrentPos[idx * 3] - pos[i * 3]) * 0.4;
        pos[i * 3 + 1] += (faceCurrentPos[idx * 3 + 1] - pos[i * 3 + 1]) * 0.4;
        pos[i * 3 + 2] += (faceCurrentPos[idx * 3 + 2] - pos[i * 3 + 2]) * 0.4;
    }
    particleGeometry.attributes.position.needsUpdate = true;
}

function updateHand(results, handData) {
    if (!results) { handData.group.visible = false; return; }
    handData.group.visible = true;
    const pts = handData.dotsGeom.attributes.position.array;
    const s = 15;
    results.forEach((lm, i) => {
        pts[i * 3] = (0.5 - lm.x) * s;
        pts[i * 3 + 1] = (0.5 - lm.y) * s;
        pts[i * 3 + 2] = -lm.z * 10;
    });
    handData.dotsGeom.attributes.position.needsUpdate = true;
    handData.lines.forEach(({ line, chain }) => {
        const lPos = new Float32Array(chain.length * 3);
        chain.forEach((idx, i) => {
            lPos[i * 3] = pts[idx * 3]; lPos[i * 3 + 1] = pts[idx * 3 + 1]; lPos[i * 3 + 2] = pts[idx * 3 + 2];
        });
        line.geometry.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
        line.geometry.attributes.position.needsUpdate = true;
    });
}

function animate() {
    const time = performance.now();

    if (video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;
        faceResults = faceLandmarker.detectForVideo(video, time);
        handResults = handLandmarker.detectForVideo(video, time);

        webcamCtx.clearRect(0, 0, webcamCanvas.width, webcamCanvas.height);
        if (faceResults && faceResults.faceLandmarks && faceResults.faceLandmarks.length > 0) {
            webcamCtx.fillStyle = "#00ff00";
            faceResults.faceLandmarks[0].forEach(lm => {
                webcamCtx.fillRect(lm.x * webcamCanvas.width, lm.y * webcamCanvas.height, 4, 4);
            });
        }
    }

    updateFace(time * 0.001);
    updateHand(handResults?.landmarks?.[0], hand1);
    updateHand(handResults?.landmarks?.[1], hand2);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
