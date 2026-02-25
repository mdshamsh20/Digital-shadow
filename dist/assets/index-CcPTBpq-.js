(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const cu="183",R0=0,wh=1,C0=2,to=1,P0=2,qs=3,Zi=0,un=1,Ei=2,Ti=0,Zr=1,jc=2,Rh=3,Ch=4,L0=5,dr=100,D0=101,I0=102,U0=103,F0=104,N0=200,O0=201,B0=202,k0=203,Kc=204,$c=205,V0=206,G0=207,z0=208,H0=209,W0=210,X0=211,q0=212,Y0=213,j0=214,Zc=0,Jc=1,Qc=2,ts=3,el=4,tl=5,nl=6,il=7,Id=0,K0=1,$0=2,ri=0,Ud=1,Fd=2,Nd=3,Od=4,Bd=5,kd=6,Vd=7,Gd=300,Tr=301,ns=302,ec=303,tc=304,To=306,rl=1e3,bi=1001,sl=1002,jt=1003,Z0=1004,ba=1005,en=1006,nc=1007,mr=1008,Un=1009,zd=1010,Hd=1011,ta=1012,lu=1013,oi=1014,ti=1015,wi=1016,uu=1017,hu=1018,na=1020,Wd=35902,Xd=35899,qd=1021,Yd=1022,Hn=1023,Ri=1026,gr=1027,jd=1028,fu=1029,is=1030,du=1031,pu=1033,no=33776,io=33777,ro=33778,so=33779,al=35840,ol=35841,cl=35842,ll=35843,ul=36196,hl=37492,fl=37496,dl=37488,pl=37489,ml=37490,gl=37491,_l=37808,vl=37809,xl=37810,Sl=37811,Ml=37812,El=37813,yl=37814,bl=37815,Tl=37816,Al=37817,wl=37818,Rl=37819,Cl=37820,Pl=37821,Ll=36492,Dl=36494,Il=36495,Ul=36283,Fl=36284,Nl=36285,Ol=36286,J0=3200,Q0=0,eg=1,qi="",Dn="srgb",rs="srgb-linear",lo="linear",st="srgb",Ur=7680,Ph=519,tg=512,ng=513,ig=514,mu=515,rg=516,sg=517,gu=518,ag=519,Lh=35044,Dh="300 es",ni=2e3,uo=2001;function og(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ho(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cg(){const t=ho("canvas");return t.style.display="block",t}const Ih={};function Uh(...t){const e="THREE."+t.shift();console.log(e,...t)}function Kd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=Kd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=Kd(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function fo(...t){const e=t.join(" ");e in Ih||(Ih[e]=!0,Ue(...t))}function lg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ug={[Zc]:Jc,[Qc]:nl,[el]:il,[ts]:tl,[Jc]:Zc,[nl]:Qc,[il]:el,[tl]:ts};class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=Math.PI/180,Bl=180/Math.PI;function la(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function hg(t,e){return(t%e+e)%e}function rc(t,e,n){return(1-n)*t+n*e}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(d!==S||c!==u||l!==m||h!==_){let p=c*u+l*m+h*_+d*S;p<0&&(u=-u,m=-m,_=-_,S=-S,p=-p);let f=1-o;if(p<.9995){const M=Math.acos(p),T=Math.sin(M);f=Math.sin(f*M)/T,o=Math.sin(o*M)/T,c=c*f+u*o,l=l*f+m*o,h=h*f+_*o,d=d*f+S*o}else{c=c*f+u*o,l=l*f+m*o,h=h*f+_*o,d=d*f+S*o;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],u=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+h*d+c*m-l*u,e[n+1]=c*_+h*u+l*d-o*m,e[n+2]=l*_+h*m+o*u-c*d,e[n+3]=h*_-o*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),u=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d+u*m*_;break;case"YZX":this._x=u*h*d+l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d-u*m*_;break;case"XZY":this._x=u*h*d-l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d+u*m*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sc=new N,Fh=new xs;class ke{constructor(e,n,i,r,s,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],m=i[5],_=i[8],S=r[0],p=r[3],f=r[6],M=r[1],T=r[4],b=r[7],C=r[2],w=r[5],P=r[8];return s[0]=a*S+o*M+c*C,s[3]=a*p+o*T+c*w,s[6]=a*f+o*b+c*P,s[1]=l*S+h*M+d*C,s[4]=l*p+h*T+d*w,s[7]=l*f+h*b+d*P,s[2]=u*S+m*M+_*C,s[5]=u*p+m*T+_*w,s[8]=u*f+m*b+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,m=l*s-a*c,_=n*d+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=d*S,e[1]=(r*l-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(h*n-r*c)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*c-l*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ac.makeScale(e,n)),this}rotate(e){return this.premultiply(ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new ke,Nh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fg(){const t={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?lo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[rs]:{primaries:e,whitePoint:i,transfer:lo,toXYZ:Nh,fromXYZ:Oh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Nh,fromXYZ:Oh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const Ye=fg();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class dg{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=ho("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ho("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pg=0;class _u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=la(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oc(r[a].image)):s.push(oc(r[a]))}else s=oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let mg=0;const cc=new N;class nn extends vs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=bi,r=bi,s=en,a=mr,o=Hn,c=Un,l=nn.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=la(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rl:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rl:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Gd;nn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],_=c[9],S=c[2],p=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,b=(m+1)/2,C=(f+1)/2,w=(h+u)/4,P=(d+S)/4,v=(_+p)/4;return T>b&&T>C?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=P/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=w/r,s=v/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=v/s),this.set(i,r,s,n),this}let M=Math.sqrt((p-_)*(p-_)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gg extends vs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _u(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends gg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $d extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _g extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e,n,i,r,s,a,o,c,l,h,d,u,m,_,S,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,h,d,u,m,_,S,p)}set(e,n,i,r,s,a,o,c,l,h,d,u,m,_,S,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=_,f[11]=S,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Nr.setFromMatrixColumn(e,0).length(),s=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*d,_=o*h,S=o*d;n[0]=c*h,n[4]=-c*d,n[8]=l,n[1]=m+_*l,n[5]=u-S*l,n[9]=-o*c,n[2]=S-u*l,n[6]=_+m*l,n[10]=a*c}else if(e.order==="YXZ"){const u=c*h,m=c*d,_=l*h,S=l*d;n[0]=u+S*o,n[4]=_*o-m,n[8]=a*l,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=S+u*o,n[10]=a*c}else if(e.order==="ZXY"){const u=c*h,m=c*d,_=l*h,S=l*d;n[0]=u-S*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=S-u*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const u=a*h,m=a*d,_=o*h,S=o*d;n[0]=c*h,n[4]=_*l-m,n[8]=u*l+S,n[1]=c*d,n[5]=S*l+u,n[9]=m*l-_,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,_=o*c,S=o*l;n[0]=c*h,n[4]=S-u*d,n[8]=_*d+m,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=m*d+_,n[10]=u-S*d}else if(e.order==="XZY"){const u=a*c,m=a*l,_=o*c,S=o*l;n[0]=c*h,n[4]=-d,n[8]=l*h,n[1]=u*d+S,n[5]=a*h,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*h,n[10]=S*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vg,e,xg)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Oi.crossVectors(i,dn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Oi.crossVectors(i,dn)),Oi.normalize(),Ta.crossVectors(dn,Oi),r[0]=Oi.x,r[4]=Ta.x,r[8]=dn.x,r[1]=Oi.y,r[5]=Ta.y,r[9]=dn.y,r[2]=Oi.z,r[6]=Ta.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],m=i[13],_=i[2],S=i[6],p=i[10],f=i[14],M=i[3],T=i[7],b=i[11],C=i[15],w=r[0],P=r[4],v=r[8],E=r[12],q=r[1],A=r[5],B=r[9],k=r[13],H=r[2],V=r[6],G=r[10],U=r[14],J=r[3],$=r[7],le=r[11],fe=r[15];return s[0]=a*w+o*q+c*H+l*J,s[4]=a*P+o*A+c*V+l*$,s[8]=a*v+o*B+c*G+l*le,s[12]=a*E+o*k+c*U+l*fe,s[1]=h*w+d*q+u*H+m*J,s[5]=h*P+d*A+u*V+m*$,s[9]=h*v+d*B+u*G+m*le,s[13]=h*E+d*k+u*U+m*fe,s[2]=_*w+S*q+p*H+f*J,s[6]=_*P+S*A+p*V+f*$,s[10]=_*v+S*B+p*G+f*le,s[14]=_*E+S*k+p*U+f*fe,s[3]=M*w+T*q+b*H+C*J,s[7]=M*P+T*A+b*V+C*$,s[11]=M*v+T*B+b*G+C*le,s[15]=M*E+T*k+b*U+C*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],_=e[3],S=e[7],p=e[11],f=e[15],M=c*m-l*u,T=o*m-l*d,b=o*u-c*d,C=a*m-l*h,w=a*u-c*h,P=a*d-o*h;return n*(S*M-p*T+f*b)-i*(_*M-p*C+f*w)+r*(_*T-S*C+f*P)-s*(_*b-S*w+p*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],_=e[12],S=e[13],p=e[14],f=e[15],M=n*o-i*a,T=n*c-r*a,b=n*l-s*a,C=i*c-r*o,w=i*l-s*o,P=r*l-s*c,v=h*S-d*_,E=h*p-u*_,q=h*f-m*_,A=d*p-u*S,B=d*f-m*S,k=u*f-m*p,H=M*k-T*B+b*A+C*q-w*E+P*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/H;return e[0]=(o*k-c*B+l*A)*V,e[1]=(r*B-i*k-s*A)*V,e[2]=(S*P-p*w+f*C)*V,e[3]=(u*w-d*P-m*C)*V,e[4]=(c*q-a*k-l*E)*V,e[5]=(n*k-r*q+s*E)*V,e[6]=(p*b-_*P-f*T)*V,e[7]=(h*P-u*b+m*T)*V,e[8]=(a*B-o*q+l*v)*V,e[9]=(i*q-n*B-s*v)*V,e[10]=(_*w-S*b+f*M)*V,e[11]=(d*b-h*w-m*M)*V,e[12]=(o*E-a*A-c*v)*V,e[13]=(n*A-i*E+r*v)*V,e[14]=(S*T-_*C-p*M)*V,e[15]=(h*C-d*T+u*M)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,h=a+a,d=o+o,u=s*l,m=s*h,_=s*d,S=a*h,p=a*d,f=o*d,M=c*l,T=c*h,b=c*d,C=i.x,w=i.y,P=i.z;return r[0]=(1-(S+f))*C,r[1]=(m+b)*C,r[2]=(_-T)*C,r[3]=0,r[4]=(m-b)*w,r[5]=(1-(u+f))*w,r[6]=(p+M)*w,r[7]=0,r[8]=(_+T)*P,r[9]=(p-M)*P,r[10]=(1-(u+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),c=Nr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const l=1/a,h=1/o,d=1/c;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=ni,c=!1){const l=this.elements,h=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===ni)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===uo)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ni,c=!1){const l=this.elements,h=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===ni)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===uo)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new N,kn=new Et,vg=new N(0,0,0),xg=new N(1,1,1),Oi=new N,Ta=new N,dn=new N,Bh=new Et,kh=new xs;class Ci{constructor(e=0,n=0,i=0,r=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sg=0;const Vh=new N,Or=new xs,_i=new Et,Aa=new N,Ns=new N,Mg=new N,Eg=new xs,Gh=new N(1,0,0),zh=new N(0,1,0),Hh=new N(0,0,1),Wh={type:"added"},yg={type:"removed"},Br={type:"childadded",child:null},lc={type:"childremoved",child:null};class rn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new N,n=new Ci,i=new xs,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,n){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ns,Aa,this.up):_i.lookAt(Aa,Ns,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(_i),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),Br.child=e,this.dispatchEvent(Br),Br.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yg),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new N(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ys extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),f=this._getHandJoint(l,S);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=hg(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=hc(a,s,e+1/3),this.g=hc(a,s,e),this.b=hc(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=Jd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Ye.workingToColorSpace(Jt.copy(this),e),Math.round(We(Jt.r*255,0,255))*65536+Math.round(We(Jt.g*255,0,255))*256+Math.round(We(Jt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Dn){Ye.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(wa);const i=rc(Bi.h,wa.h,n),r=rc(Bi.s,wa.s,n),s=rc(Bi.l,wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ze;Ze.NAMES=Jd;class Tg extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new N,vi=new N,fc=new N,xi=new N,kr=new N,Vr=new N,Xh=new N,dc=new N,pc=new N,mc=new N,gc=new Rt,_c=new Rt,vc=new Rt;class zn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),vi.subVectors(i,n),fc.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(vi),c=Vn.dot(fc),l=vi.dot(vi),h=vi.dot(fc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(l*c-o*h)*u,_=(a*h-o*c)*u;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,xi.x),c.addScaledVector(a,xi.y),c.addScaledVector(o,xi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return gc.setScalar(0),_c.setScalar(0),vc.setScalar(0),gc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,i),vc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gc,s.x),a.addScaledVector(_c,s.y),a.addScaledVector(vc,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),vi.subVectors(e,n),Vn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Vn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;kr.subVectors(r,i),Vr.subVectors(s,i),dc.subVectors(e,i);const c=kr.dot(dc),l=Vr.dot(dc);if(c<=0&&l<=0)return n.copy(i);pc.subVectors(e,r);const h=kr.dot(pc),d=Vr.dot(pc);if(h>=0&&d<=h)return n.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(kr,a);mc.subVectors(e,s);const m=kr.dot(mc),_=Vr.dot(mc);if(_>=0&&m<=_)return n.copy(s);const S=m*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),n.copy(i).addScaledVector(Vr,o);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Xh.subVectors(s,r),o=(d-h)/(d-h+(m-_)),n.copy(r).addScaledVector(Xh,o);const f=1/(p+S+u);return a=S*f,o=u*f,n.copy(i).addScaledVector(kr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ua{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Ca.subVectors(this.max,Os),Gr.subVectors(e.a,Os),zr.subVectors(e.b,Os),Hr.subVectors(e.c,Os),ki.subVectors(zr,Gr),Vi.subVectors(Hr,zr),rr.subVectors(Gr,Hr);let n=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-rr.z,rr.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,rr.z,0,-rr.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-rr.y,rr.x,0];return!xc(n,Gr,zr,Hr,Ca)||(n=[1,0,0,0,1,0,0,0,1],!xc(n,Gr,zr,Hr,Ca))?!1:(Pa.crossVectors(ki,Vi),n=[Pa.x,Pa.y,Pa.z],xc(n,Gr,zr,Hr,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,Ra=new ua,Gr=new N,zr=new N,Hr=new N,ki=new N,Vi=new N,rr=new N,Os=new N,Ca=new N,Pa=new N,sr=new N;function xc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=e.dot(sr),l=n.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Lt=new N,La=new lt;let Ag=0;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lh&&(e.usage=this.usage),e}}class Qd extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ep extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xn extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const wg=new ua,Bs=new N,Sc=new N;class ha{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const n=Bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Sc)),this.expandByPoint(Bs.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rg=0;const Rn=new Et,Mc=new rn,Wr=new N,pn=new ua,ks=new ua,zt=new N;class sn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?ep:Qd)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(pn.min,ks.min),pn.expandByPoint(zt),zt.addVectors(pn.max,ks.max),pn.expandByPoint(zt)):(pn.expandByPoint(ks.min),pn.expandByPoint(ks.max))}pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Wr.fromBufferAttribute(e,l),zt.add(Wr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new N,c[v]=new N;const l=new N,h=new N,d=new N,u=new lt,m=new lt,_=new lt,S=new N,p=new N;function f(v,E,q){l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,q),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,q),h.sub(l),d.sub(l),m.sub(u),_.sub(u);const A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(A),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(A),o[v].add(S),o[E].add(S),o[q].add(S),c[v].add(p),c[E].add(p),c[q].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,E=M.length;v<E;++v){const q=M[v],A=q.start,B=q.count;for(let k=A,H=A+B;k<H;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new N,b=new N,C=new N,w=new N;function P(v){C.fromBufferAttribute(r,v),w.copy(C);const E=o[v];T.copy(E),T.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(w,E);const A=b.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,A)}for(let v=0,E=M.length;v<E;++v){const q=M[v],A=q.start,B=q.count;for(let k=A,H=A+B;k<H;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,h=new N,d=new N;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let m=0,_=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let f=0;f<h;f++)u[_++]=l[m++]}return new vn(u,h,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=e(u,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(n))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cg=0;class Ss extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Zr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=$c,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new N,Ec=new N,Da=new N,Gi=new N,yc=new N,Ia=new N,bc=new N;class vu{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ec.copy(e).add(n).multiplyScalar(.5),Da.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Ec);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Da),o=Gi.dot(this.direction),c=-Gi.dot(Da),l=Gi.lengthSq(),h=Math.abs(1-a*a);let d,u,m,_;if(h>0)if(d=a*c-o,u=a*o-c,_=s*h,d>=0)if(u>=-_)if(u<=_){const S=1/h;d*=S,u*=S,m=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ec).addScaledVector(Da,u),m}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){yc.subVectors(n,e),Ia.subVectors(i,e),bc.crossVectors(yc,Ia);let a=this.direction.dot(bc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const c=o*this.direction.dot(Ia.crossVectors(Gi,Ia));if(c<0)return null;const l=o*this.direction.dot(yc.cross(Gi));if(l<0||c+l>a)return null;const h=-o*Gi.dot(bc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xu extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qh=new Et,ar=new vu,Ua=new ha,Yh=new N,Fa=new N,Na=new N,Oa=new N,Tc=new N,Ba=new N,jh=new N,ka=new N;class ci extends rn{constructor(e=new sn,n=new xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Tc.fromBufferAttribute(d,e),a?Ba.addScaledVector(Tc,h):Ba.addScaledVector(Tc.sub(n),h))}n.add(Ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ua.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ua,Yh)===null||ar.origin.distanceToSquared(Yh)>(e.far-e.near)**2))&&(qh.copy(s).invert(),ar.copy(e.ray).applyMatrix4(qh),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const p=u[_],f=a[p.materialIndex],M=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,C=T;b<C;b+=3){const w=o.getX(b),P=o.getX(b+1),v=o.getX(b+2);r=Va(this,f,e,i,l,h,d,w,P,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,f=S;p<f;p+=3){const M=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);r=Va(this,a,e,i,l,h,d,M,T,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const p=u[_],f=a[p.materialIndex],M=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,C=T;b<C;b+=3){const w=b,P=b+1,v=b+2;r=Va(this,f,e,i,l,h,d,w,P,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let p=_,f=S;p<f;p+=3){const M=p,T=p+1,b=p+2;r=Va(this,a,e,i,l,h,d,M,T,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Pg(t,e,n,i,r,s,a,o){let c;if(e.side===un?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Zi,o),c===null)return null;ka.copy(o),ka.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(ka);return l<n.near||l>n.far?null:{distance:l,point:ka.clone(),object:t}}function Va(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Fa),t.getVertexPosition(c,Na),t.getVertexPosition(l,Oa);const h=Pg(t,e,n,i,Fa,Na,Oa,jh);if(h){const d=new N;zn.getBarycoord(jh,Fa,Na,Oa,d),r&&(h.uv=zn.getInterpolatedAttribute(r,o,c,l,d,new lt)),s&&(h.uv1=zn.getInterpolatedAttribute(s,o,c,l,d,new lt)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,c,l,d,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new N,materialIndex:0};zn.getNormal(Fa,Na,Oa,u.normal),h.face=u,h.barycoord=d}return h}class Lg extends nn{constructor(e=null,n=1,i=1,r,s,a,o,c,l=jt,h=jt,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=new N,Dg=new N,Ig=new ke;class hr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ac.subVectors(i,n).cross(Dg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ac),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ig.getNormalMatrix(e),r=this.coplanarPoint(Ac).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new ha,Ug=new lt(.5,.5),Ga=new N;class tp{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ni,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],m=s[7],_=s[8],S=s[9],p=s[10],f=s[11],M=s[12],T=s[13],b=s[14],C=s[15];if(r[0].setComponents(l-a,m-h,f-_,C-M).normalize(),r[1].setComponents(l+a,m+h,f+_,C+M).normalize(),r[2].setComponents(l+o,m+d,f+S,C+T).normalize(),r[3].setComponents(l-o,m-d,f-S,C-T).normalize(),i)r[4].setComponents(c,u,p,b).normalize(),r[5].setComponents(l-c,m-u,f-p,C-b).normalize();else if(r[4].setComponents(l-c,m-u,f-p,C-b).normalize(),n===ni)r[5].setComponents(l+c,m+u,f+p,C+b).normalize();else if(n===uo)r[5].setComponents(c,u,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const n=Ug.distanceTo(e.center);return or.radius=.7071067811865476+n,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new N,mo=new N,Kh=new Et,Vs=new vu,za=new ha,wc=new N,$h=new N;class np extends rn{constructor(e=new sn,n=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)po.fromBufferAttribute(n,r-1),mo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=po.distanceTo(mo);e.setAttribute("lineDistance",new xn(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;Kh.copy(r).invert(),Vs.copy(e.ray).applyMatrix4(Kh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=m,p=_-1;S<p;S+=l){const f=h.getX(S),M=h.getX(S+1),T=Ha(this,e,Vs,c,f,M,S);T&&n.push(T)}if(this.isLineLoop){const S=h.getX(_-1),p=h.getX(m),f=Ha(this,e,Vs,c,S,p,_-1);f&&n.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=m,p=_-1;S<p;S+=l){const f=Ha(this,e,Vs,c,S,S+1,S);f&&n.push(f)}if(this.isLineLoop){const S=Ha(this,e,Vs,c,_-1,m,_-1);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ha(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(po.fromBufferAttribute(o,r),mo.fromBufferAttribute(o,s),n.distanceSqToSegment(po,mo,wc,$h)>i)return;wc.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(wc);if(!(l<e.near||l>e.far))return{distance:l,point:$h.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Zh=new N,Jh=new N;class Fg extends np{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Zh.fromBufferAttribute(n,r),Jh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zh.distanceTo(Jh);e.setAttribute("lineDistance",new xn(i,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mu extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qh=new Et,kl=new vu,Wa=new ha,Xa=new N;class ip extends rn{constructor(e=new sn,n=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;Qh.copy(r).invert(),kl.copy(e.ray).applyMatrix4(Qh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=u,S=m;_<S;_++){const p=l.getX(_);Xa.fromBufferAttribute(d,p),ef(Xa,p,c,r,e,n,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=u,S=m;_<S;_++)Xa.fromBufferAttribute(d,_),ef(Xa,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ef(t,e,n,i,r,s,a){const o=kl.distanceSqToPoint(t);if(o<n){const c=new N;kl.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class rp extends nn{constructor(e=[],n=Tr,i,r,s,a,o,c,l,h){super(e,n,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ia extends nn{constructor(e,n,i=oi,r,s,a,o=jt,c=jt,l,h=Ri,d=1){if(h!==Ri&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ng extends ia{constructor(e,n=oi,i=Tr,r,s,a=jt,o=jt,c,l=Ri){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sp extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends sn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(d,2));function _(S,p,f,M,T,b,C,w,P,v,E){const q=b/P,A=C/v,B=b/2,k=C/2,H=w/2,V=P+1,G=v+1;let U=0,J=0;const $=new N;for(let le=0;le<G;le++){const fe=le*A-k;for(let ue=0;ue<V;ue++){const Fe=ue*q-B;$[S]=Fe*M,$[p]=fe*T,$[f]=H,l.push($.x,$.y,$.z),$[S]=0,$[p]=0,$[f]=w>0?1:-1,h.push($.x,$.y,$.z),d.push(ue/P),d.push(1-le/v),U+=1}}for(let le=0;le<v;le++)for(let fe=0;fe<P;fe++){const ue=u+fe+V*le,Fe=u+fe+V*(le+1),nt=u+(fe+1)+V*(le+1),et=u+(fe+1)+V*le;c.push(ue,Fe,et),c.push(Fe,nt,et),J+=6}o.addGroup(m,J,E),m+=J,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ao extends sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,u=n/c,m=[],_=[],S=[],p=[];for(let f=0;f<h;f++){const M=f*u-a;for(let T=0;T<l;T++){const b=T*d-s;_.push(b,-M,0),S.push(0,0,1),p.push(T/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const T=M+l*f,b=M+l*(f+1),C=M+1+l*(f+1),w=M+1+l*f;m.push(T,b,w),m.push(b,C,w)}this.setIndex(m),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(S,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}function ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=ss(t[n]);for(const r in i)e[r]=i[r]}return e}function Og(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ap(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Bg={clone:ss,merge:tn};var kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gg extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zg extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qa=new N,Ya=new xs,Kn=new N;class op extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,Ya,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(qa,Ya,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,tf=new lt,nf=new lt;class In extends op{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,tf,nf),n.subVectors(nf,tf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ic*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cp extends op{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xr=-90,qr=1;class Wg extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(Xr,qr,e,n);r.layers=this.layers,this.add(r);const s=new In(Xr,qr,e,n);s.layers=this.layers,this.add(s);const a=new In(Xr,qr,e,n);a.layers=this.layers,this.add(a);const o=new In(Xr,qr,e,n);o.layers=this.layers,this.add(o);const c=new In(Xr,qr,e,n);c.layers=this.layers,this.add(c);const l=new In(Xr,qr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Xg extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qg extends Fg{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ze(i),r=new Ze(r);const s=n/2,a=e/n,o=e/2,c=[],l=[];for(let u=0,m=0,_=-o;u<=n;u++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const S=u===s?i:r;S.toArray(l,m),m+=3,S.toArray(l,m),m+=3,S.toArray(l,m),m+=3,S.toArray(l,m),m+=3}const h=new sn;h.setAttribute("position",new xn(c,3)),h.setAttribute("color",new xn(l,3));const d=new Su({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function rf(t,e,n,i){const r=Yg(i);switch(n){case qd:return t*e;case jd:return t*e/r.components*r.byteLength;case fu:return t*e/r.components*r.byteLength;case is:return t*e*2/r.components*r.byteLength;case du:return t*e*2/r.components*r.byteLength;case Yd:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case pu:return t*e*4/r.components*r.byteLength;case no:case io:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ro:case so:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ol:case ll:return Math.max(t,16)*Math.max(e,8)/4;case al:case cl:return Math.max(t,8)*Math.max(e,8)/2;case ul:case hl:case dl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fl:case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Dl:case Il:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ul:case Fl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Nl:case Ol:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Yg(t){switch(t){case Un:case zd:return{byteLength:1,components:1};case ta:case Hd:case wi:return{byteLength:2,components:1};case uu:case hu:return{byteLength:2,components:4};case oi:case lu:case ti:return{byteLength:4,components:1};case Wd:case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cu}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cu);function lp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jg(t){const e=new WeakMap;function n(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=t.createBuffer();t.bindBuffer(c,u),t.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=t.SHORT;else if(l instanceof Uint32Array)m=t.UNSIGNED_INT;else if(l instanceof Int32Array)m=t.INT;else if(l instanceof Int8Array)m=t.BYTE;else if(l instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,h);else{d.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<d.length;m++){const _=d[u],S=d[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let m=0,_=d.length;m<_;m++){const S=d[m];t.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$g=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,r_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,v_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,x_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,G_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,t2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,i2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Kg,alphahash_pars_fragment:$g,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:Qg,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:r_,begin_vertex:s_,beginnormal_vertex:a_,bsdfs:o_,iridescence_fragment:c_,bumpmap_pars_fragment:l_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:f_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:__,common:v_,cube_uv_reflection_fragment:x_,defaultnormal_vertex:S_,displacementmap_pars_vertex:M_,displacementmap_vertex:E_,emissivemap_fragment:y_,emissivemap_pars_fragment:b_,colorspace_fragment:T_,colorspace_pars_fragment:A_,envmap_fragment:w_,envmap_common_pars_fragment:R_,envmap_pars_fragment:C_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:G_,envmap_vertex:L_,fog_vertex:D_,fog_pars_vertex:I_,fog_fragment:U_,fog_pars_fragment:F_,gradientmap_pars_fragment:N_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:k_,lights_pars_begin:V_,lights_toon_fragment:z_,lights_toon_pars_fragment:H_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:j_,lights_fragment_maps:K_,lights_fragment_end:$_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:e1,map_fragment:t1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:a1,morphinstance_vertex:o1,morphcolor_vertex:c1,morphnormal_vertex:l1,morphtarget_pars_vertex:u1,morphtarget_vertex:h1,normal_fragment_begin:f1,normal_fragment_maps:d1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:M1,opaque_fragment:E1,packing:y1,premultiplied_alpha_fragment:b1,project_vertex:T1,dithering_fragment:A1,dithering_pars_fragment:w1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:C1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:L1,shadowmap_vertex:D1,shadowmask_pars_fragment:I1,skinbase_vertex:U1,skinning_pars_vertex:F1,skinning_vertex:N1,skinnormal_vertex:O1,specularmap_fragment:B1,specularmap_pars_fragment:k1,tonemapping_fragment:V1,tonemapping_pars_fragment:G1,transmission_fragment:z1,transmission_pars_fragment:H1,uv_pars_fragment:W1,uv_pars_vertex:X1,uv_vertex:q1,worldpos_vertex:Y1,background_vert:j1,background_frag:K1,backgroundCube_vert:$1,backgroundCube_frag:Z1,cube_vert:J1,cube_frag:Q1,depth_vert:e2,depth_frag:t2,distance_vert:n2,distance_frag:i2,equirect_vert:r2,equirect_frag:s2,linedashed_vert:a2,linedashed_frag:o2,meshbasic_vert:c2,meshbasic_frag:l2,meshlambert_vert:u2,meshlambert_frag:h2,meshmatcap_vert:f2,meshmatcap_frag:d2,meshnormal_vert:p2,meshnormal_frag:m2,meshphong_vert:g2,meshphong_frag:_2,meshphysical_vert:v2,meshphysical_frag:x2,meshtoon_vert:S2,meshtoon_frag:M2,points_vert:E2,points_frag:y2,shadow_vert:b2,shadow_frag:T2,sprite_vert:A2,sprite_frag:w2},ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ei={basic:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:tn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:tn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:tn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:tn([ae.points,ae.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:tn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:tn([ae.common,ae.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:tn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:tn([ae.sprite,ae.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:tn([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:tn([ae.lights,ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ei.physical={uniforms:tn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ja={r:0,b:0,g:0},cr=new Ci,R2=new Et;function C2(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,c,l,h=null,d=0,u=null;function m(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const b=M.backgroundBlurriness>0;T=e.get(T,b)}return T}function _(M){let T=!1;const b=m(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),T=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(M,T){const b=m(T);b&&(b.isCubeTexture||b.mapping===To)?(l===void 0&&(l=new ci(new Ms(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ss(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),cr.copy(T.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(R2.makeRotationFromEuler(cr)),l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==st,(h!==b||d!==b.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ci(new Ao(2,2),new li({name:"BackgroundMaterial",uniforms:ss(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==st,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,T){M.getRGB(ja,ap(t)),n.buffers.color.setClear(ja.r,ja.g,ja.b,T,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:S,dispose:f}}function P2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(A,B,k,H,V){let G=!1;const U=d(A,H,k,B);s!==U&&(s=U,l(s.object)),G=m(A,H,k,V),G&&_(A,H,k,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(A,B,k,H),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return t.createVertexArray()}function l(A){return t.bindVertexArray(A)}function h(A){return t.deleteVertexArray(A)}function d(A,B,k,H){const V=H.wireframe===!0;let G=i[B.id];G===void 0&&(G={},i[B.id]=G);const U=A.isInstancedMesh===!0?A.id:0;let J=G[U];J===void 0&&(J={},G[U]=J);let $=J[k.id];$===void 0&&($={},J[k.id]=$);let le=$[V];return le===void 0&&(le=u(c()),$[V]=le),le}function u(A){const B=[],k=[],H=[];for(let V=0;V<n;V++)B[V]=0,k[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:H,object:A,attributes:{},index:null}}function m(A,B,k,H){const V=s.attributes,G=B.attributes;let U=0;const J=k.getAttributes();for(const $ in J)if(J[$].location>=0){const fe=V[$];let ue=G[$];if(ue===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),fe===void 0||fe.attribute!==ue||ue&&fe.data!==ue.data)return!0;U++}return s.attributesNum!==U||s.index!==H}function _(A,B,k,H){const V={},G=B.attributes;let U=0;const J=k.getAttributes();for(const $ in J)if(J[$].location>=0){let fe=G[$];fe===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor));const ue={};ue.attribute=fe,fe&&fe.data&&(ue.data=fe.data),V[$]=ue,U++}s.attributes=V,s.attributesNum=U,s.index=H}function S(){const A=s.newAttributes;for(let B=0,k=A.length;B<k;B++)A[B]=0}function p(A){f(A,0)}function f(A,B){const k=s.newAttributes,H=s.enabledAttributes,V=s.attributeDivisors;k[A]=1,H[A]===0&&(t.enableVertexAttribArray(A),H[A]=1),V[A]!==B&&(t.vertexAttribDivisor(A,B),V[A]=B)}function M(){const A=s.newAttributes,B=s.enabledAttributes;for(let k=0,H=B.length;k<H;k++)B[k]!==A[k]&&(t.disableVertexAttribArray(k),B[k]=0)}function T(A,B,k,H,V,G,U){U===!0?t.vertexAttribIPointer(A,B,k,V,G):t.vertexAttribPointer(A,B,k,H,V,G)}function b(A,B,k,H){S();const V=H.attributes,G=k.getAttributes(),U=B.defaultAttributeValues;for(const J in G){const $=G[J];if($.location>=0){let le=V[J];if(le===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const fe=le.normalized,ue=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const nt=Fe.buffer,et=Fe.type,Y=Fe.bytesPerElement,ee=et===t.INT||et===t.UNSIGNED_INT||le.gpuType===lu;if(le.isInterleavedBufferAttribute){const te=le.data,Ie=te.stride,pe=le.offset;if(te.isInstancedInterleavedBuffer){for(let Ne=0;Ne<$.locationSize;Ne++)f($.location+Ne,te.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)p($.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let Ne=0;Ne<$.locationSize;Ne++)T($.location+Ne,ue/$.locationSize,et,fe,Ie*Y,(pe+ue/$.locationSize*Ne)*Y,ee)}else{if(le.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)f($.location+te,le.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let te=0;te<$.locationSize;te++)p($.location+te);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let te=0;te<$.locationSize;te++)T($.location+te,ue/$.locationSize,et,fe,ue*Y,ue/$.locationSize*te*Y,ee)}}else if(U!==void 0){const fe=U[J];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv($.location,fe);break;case 3:t.vertexAttrib3fv($.location,fe);break;case 4:t.vertexAttrib4fv($.location,fe);break;default:t.vertexAttrib1fv($.location,fe)}}}}M()}function C(){E();for(const A in i){const B=i[A];for(const k in B){const H=B[k];for(const V in H){const G=H[V];for(const U in G)h(G[U].object),delete G[U];delete H[V]}}delete i[A]}}function w(A){if(i[A.id]===void 0)return;const B=i[A.id];for(const k in B){const H=B[k];for(const V in H){const G=H[V];for(const U in G)h(G[U].object),delete G[U];delete H[V]}}delete i[A.id]}function P(A){for(const B in i){const k=i[B];for(const H in k){const V=k[H];if(V[A.id]===void 0)continue;const G=V[A.id];for(const U in G)h(G[U].object),delete G[U];delete V[A.id]}}}function v(A){for(const B in i){const k=i[B],H=A.isInstancedMesh===!0?A.id:0,V=k[H];if(V!==void 0){for(const G in V){const U=V[G];for(const J in U)h(U[J].object),delete U[J];delete V[G]}delete k[H],Object.keys(k).length===0&&delete i[B]}}}function E(){q(),a=!0,s!==r&&(s=r,l(s.object))}function q(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:q,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function L2(t,e,n){let i;function r(l){i=l}function s(l,h){t.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,d){d!==0&&(t.drawArraysInstanced(i,l,h,d),n.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];n.update(m,i,1)}function c(l,h,d,u){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],h[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let _=0;for(let S=0;S<d;S++)_+=h[S]*u[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function D2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Hn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Un&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ti&&!v)}function c(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:C,samples:w}}function I2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||r;return r=u,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,m){const _=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{const M=s?0:i,T=M*4;let b=f.clippingState||null;c.value=b,b=h(_,u,T,m);for(let C=0;C!==T;++C)b[C]=n[C];f.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,_){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=c.value,_!==!0||p===null){const f=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,b=m;T!==S;++T,b+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const ji=4,sf=[.125,.215,.35,.446,.526,.582],pr=20,U2=256,Gs=new cp,af=new Ze;let Rc=null,Cc=0,Pc=0,Lc=!1;const F2=new N;class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=F2}=s;Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,Pc),this._renderer.xr.enabled=Lc,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Tr||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:wi,format:Hn,colorSpace:rs,depthBuffer:!1},r=cf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N2(s)),this._blurMaterial=B2(s,e,n),this._ggxMaterial=O2(s,e,n)}return r}_compileMaterial(e){const n=new ci(new sn,e);this._renderer.compile(n,Gs)}_sceneToCubeUV(e,n,i,r,s){const c=new In(90,1,n,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(af),d.toneMapping=ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Ms,new xu({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let f=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,f=!0):(p.color.copy(af),f=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):b===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const C=this._cubeSize;Yr(r,b*C,T>2?C:0,C,C),d.setRenderTarget(r),f&&d.render(S,c),d.render(e,c)}d.toneMapping=m,d.autoClear=u,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Tr||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Yr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Gs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,m=d*u,{_lodMax:_}=this,S=this._sizeLods[i],p=3*S*(i>_-ji?i-_+ji:0),f=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-n,Yr(s,p,f,3*S,2*S),r.setRenderTarget(s),r.render(o,Gs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Yr(e,p,f,3*S,2*S),r.setRenderTarget(e),r.render(o,Gs)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=l;const u=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*pr-1),S=s/_,p=isFinite(s)?1+Math.floor(h*S):pr;p>pr&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pr}`);const f=[];let M=0;for(let P=0;P<pr;++P){const v=P/S,E=Math.exp(-v*v/2);f.push(E),P===0?M+=E:P<p&&(M+=2*E)}for(let P=0;P<f.length;P++)f[P]=f[P]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-i;const b=this._sizeLods[r],C=3*b*(r>T-ji?r-T+ji:0),w=4*(this._cubeSize-b);Yr(n,C,w,3*b,2*b),c.setRenderTarget(n),c.render(d,Gs)}}function N2(t){const e=[],n=[],i=[];let r=t;const s=t-ji+1+sf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-ji?c=sf[a-t+ji-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,S=3,p=2,f=1,M=new Float32Array(S*_*m),T=new Float32Array(p*_*m),b=new Float32Array(f*_*m);for(let w=0;w<m;w++){const P=w%3*2/3-1,v=w>2?0:-1,E=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(E,S*_*w),T.set(u,p*_*w);const q=[w,w,w,w,w,w];b.set(q,f*_*w)}const C=new sn;C.setAttribute("position",new vn(M,S)),C.setAttribute("uv",new vn(T,p)),C.setAttribute("faceIndex",new vn(b,f)),i.push(new ci(C,null)),r>ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function cf(t,e,n){const i=new si(t,e,n);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function O2(t,e,n){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function B2(t,e,n){const i=new Float32Array(pr),r=new N(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function lf(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function uf(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class up extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new rp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ms(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ti});s.uniforms.tEquirect.value=n;const a=new ci(r,s),o=n.minFilter;return n.minFilter===mr&&(n.minFilter=en),new Wg(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function k2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===ec||m===tc)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new up(_.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,_=m===ec||m===tc,S=m===Tr||m===ns;if(_||S){let p=n.get(u);const f=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new of(t)),p=_?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return _&&M&&M.height>0||S&&M&&c(M)?(i===null&&(i=new of(t)),p=_?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===ec?u.mapping=Tr:m===tc&&(u.mapping=ns),u}function c(u){let m=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&m++;return m===_}function l(u){const m=u.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function V2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fo("WebGLRenderer: "+i+" extension not supported."),r}}}function G2(t,e,n,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function l(d){const u=[],m=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let T=0,b=M.length;T<b;T+=3){const C=M[T+0],w=M[T+1],P=M[T+2];u.push(C,w,w,P,P,C)}}else{const M=_.array;S=_.version;for(let T=0,b=M.length/3-1;T<b;T+=3){const C=T+0,w=T+1,P=T+2;u.push(C,w,w,P,P,C)}}const p=new(_.count>=65535?ep:Qd)(u,1);p.version=S;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function z2(t,e,n){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,m){t.drawElements(i,m,s,u*a),n.update(m,i,1)}function l(u,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,u*a,_),n.update(m,i,_))}function h(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];n.update(p,i,1)}function d(u,m,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)l(u[f]/a,m[f],S[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,S,0,_);let f=0;for(let M=0;M<_;M++)f+=m[M]*S[M];n.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function H2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function W2(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let q=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",q)};var m=q;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),S===!0&&(b=2),p===!0&&(b=3);let C=o.attributes.position.count*b,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*w*4*d),v=new $d(P,C,w,d);v.type=ti,v.needsUpdate=!0;const E=b*4;for(let A=0;A<d;A++){const B=f[A],k=M[A],H=T[A],V=C*w*4*A;for(let G=0;G<B.count;G++){const U=G*E;_===!0&&(r.fromBufferAttribute(B,G),P[V+U+0]=r.x,P[V+U+1]=r.y,P[V+U+2]=r.z,P[V+U+3]=0),S===!0&&(r.fromBufferAttribute(k,G),P[V+U+4]=r.x,P[V+U+5]=r.y,P[V+U+6]=r.z,P[V+U+7]=0),p===!0&&(r.fromBufferAttribute(H,G),P[V+U+8]=r.x,P[V+U+9]=r.y,P[V+U+10]=r.z,P[V+U+11]=H.itemSize===4?r.w:1)}}u={count:d,texture:v,size:new lt(C,w)},i.set(o,u),o.addEventListener("dispose",q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function X2(t,e,n,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const q2={[Ud]:"LINEAR_TONE_MAPPING",[Fd]:"REINHARD_TONE_MAPPING",[Nd]:"CINEON_TONE_MAPPING",[Od]:"ACES_FILMIC_TONE_MAPPING",[kd]:"AGX_TONE_MAPPING",[Vd]:"NEUTRAL_TONE_MAPPING",[Bd]:"CUSTOM_TONE_MAPPING"};function Y2(t,e,n,i,r){const s=new si(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new si(e,n,{type:wi,depthBuffer:!1,stencilBuffer:!1}),o=new sn;o.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xn([0,2,0,0,2,0],2));const c=new Gg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new ci(o,c),h=new cp(-1,1,1,-1,0,1);let d=null,u=null,m=!1,_,S=null,p=[],f=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let b=0;b<p.length;b++){const C=p[b];C.setSize&&C.setSize(M,T)}},this.setEffects=function(M){p=M,f=p.length>0&&p[0].isRenderPass===!0;const T=s.width,b=s.height;for(let C=0;C<p.length;C++){const w=p[C];w.setSize&&w.setSize(T,b)}},this.begin=function(M,T){if(m||M.toneMapping===ri&&p.length===0)return!1;if(S=T,T!==null){const b=T.width,C=T.height;(s.width!==b||s.height!==C)&&this.setSize(b,C)}return f===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=ri,!0},this.hasRenderPass=function(){return f},this.end=function(M,T){M.toneMapping=_,m=!0;let b=s,C=a;for(let w=0;w<p.length;w++){const P=p[w];if(P.enabled!==!1&&(P.render(M,C,b,T),P.needsSwap!==!1)){const v=b;b=C,C=v}}if(d!==M.outputColorSpace||u!==M.toneMapping){d=M.outputColorSpace,u=M.toneMapping,c.defines={},Ye.getTransfer(d)===st&&(c.defines.SRGB_TRANSFER="");const w=q2[u];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(S),M.render(l,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const hp=new nn,Vl=new ia(1,1),fp=new $d,dp=new _g,pp=new rp,hf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hf[r];if(s===void 0&&(s=new Float32Array(r),hf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ro(t,e){let n=ff[e];n===void 0&&(n=new Int32Array(e),ff[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function J2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;mf.set(i),t.uniformMatrix2fv(this.addr,!1,mf),Bt(n,i)}}function Q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;pf.set(i),t.uniformMatrix3fv(this.addr,!1,pf),Bt(n,i)}}function ev(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ot(n,i))return;df.set(i),t.uniformMatrix4fv(this.addr,!1,df),Bt(n,i)}}function tv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function iv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function rv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function sv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function av(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function ov(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function cv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function lv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vl.compareFunction=n.isReversedDepthBuffer()?gu:mu,s=Vl):s=hp,n.setTexture2D(e||s,r)}function uv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dp,r)}function hv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pp,r)}function fv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fp,r)}function dv(t){switch(t){case 5126:return j2;case 35664:return K2;case 35665:return $2;case 35666:return Z2;case 35674:return J2;case 35675:return Q2;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return rv;case 5125:return sv;case 36294:return av;case 36295:return ov;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}function pv(t,e){t.uniform1fv(this.addr,e)}function mv(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function gv(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function _v(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function vv(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xv(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Sv(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Mv(t,e){t.uniform1iv(this.addr,e)}function Ev(t,e){t.uniform2iv(this.addr,e)}function yv(t,e){t.uniform3iv(this.addr,e)}function bv(t,e){t.uniform4iv(this.addr,e)}function Tv(t,e){t.uniform1uiv(this.addr,e)}function Av(t,e){t.uniform2uiv(this.addr,e)}function wv(t,e){t.uniform3uiv(this.addr,e)}function Rv(t,e){t.uniform4uiv(this.addr,e)}function Cv(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Vl:a=hp;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Pv(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||dp,s[a])}function Lv(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||pp,s[a])}function Dv(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||fp,s[a])}function Iv(t){switch(t){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return vv;case 35675:return xv;case 35676:return Sv;case 5124:case 35670:return Mv;case 35667:case 35671:return Ev;case 35668:case 35672:return yv;case 35669:case 35673:return bv;case 5125:return Tv;case 36294:return Av;case 36295:return wv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Dv}}class Uv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dv(n.type)}}class Fv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Iv(n.type)}}class Nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function gf(t,e){t.seq.push(e),t.map[e.id]=e}function Ov(t,e,n){const i=t.name,r=i.length;for(Dc.lastIndex=0;;){const s=Dc.exec(i),a=Dc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){gf(n,l===void 0?new Uv(o,t,e):new Fv(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Nv(o),gf(n,d)),n=d}}}class ao{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);Ov(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function _f(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Bv=37297;let kv=0;function Vv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const vf=new ke;function Gv(t){Ye._getMatrix(vf,Ye.workingColorSpace,t);const e=`mat3( ${vf.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case lo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Vv(t.getShaderSource(e),o)}else return s}function zv(t,e){const n=Gv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Hv={[Ud]:"Linear",[Fd]:"Reinhard",[Nd]:"Cineon",[Od]:"ACESFilmic",[kd]:"AgX",[Vd]:"Neutral",[Bd]:"Custom"};function Wv(t,e){const n=Hv[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ka=new N;function Xv(){Ye.getLuminanceCoefficients(Ka);const t=Ka.x.toFixed(4),e=Ka.y.toFixed(4),n=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Yv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function js(t){return t!==""}function Sf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(t){return t.replace(Kv,Zv)}const $v=new Map;function Zv(t,e){let n=Ve[e];if(n===void 0){const i=$v.get(e);if(i!==void 0)n=Ve[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gl(n)}const Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(t){return t.replace(Jv,Qv)}function Qv(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ex={[to]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function tx(t){return ex[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nx={[Tr]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function ix(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":nx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const rx={[ns]:"ENVMAP_MODE_REFRACTION"};function sx(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":rx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ax={[Id]:"ENVMAP_BLENDING_MULTIPLY",[K0]:"ENVMAP_BLENDING_MIX",[$0]:"ENVMAP_BLENDING_ADD"};function ox(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ax[t.combine]||"ENVMAP_BLENDING_NONE"}function cx(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lx(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=tx(n),l=ix(n),h=sx(n),d=ox(n),u=cx(n),m=qv(n),_=Yv(s),S=r.createProgram();let p,f,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(js).join(`
`),f.length>0&&(f+=`
`)):(p=[yf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),f=[yf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Ve.tonemapping_pars_fragment:"",n.toneMapping!==ri?Wv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,zv("linearToOutputTexel",n.outputColorSpace),Xv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(js).join(`
`)),a=Gl(a),a=Sf(a,n),a=Mf(a,n),o=Gl(o),o=Sf(o,n),o=Mf(o,n),a=Ef(a),o=Ef(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=M+p+a,b=M+f+o,C=_f(r,r.VERTEX_SHADER,T),w=_f(r,r.FRAGMENT_SHADER,b);r.attachShader(S,C),r.attachShader(S,w),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(A){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(w)||"",V=B.trim(),G=k.trim(),U=H.trim();let J=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,w);else{const le=xf(r,C,"vertex"),fe=xf(r,w,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+le+`
`+fe)}else V!==""?Ue("WebGLProgram: Program Info Log:",V):(G===""||U==="")&&($=!1);$&&(A.diagnostics={runnable:J,programLog:V,vertexShader:{log:G,prefix:p},fragmentShader:{log:U,prefix:f}})}r.deleteShader(C),r.deleteShader(w),v=new ao(r,S),E=jv(r,S)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(S,Bv)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=w,this}let ux=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fx(e),n.set(e,i)),i}}class fx{constructor(e){this.id=ux++,this.code=e,this.usedTimes=0}}function dx(t,e,n,i,r,s){const a=new Zd,o=new hx,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,E,q,A,B){const k=A.fog,H=B.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=e.get(v.envMap||V,G),J=U&&U.mapping===To?U.image.height:null,$=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=le!==void 0?le.length:0;let ue=0;H.morphAttributes.position!==void 0&&(ue=1),H.morphAttributes.normal!==void 0&&(ue=2),H.morphAttributes.color!==void 0&&(ue=3);let Fe,nt,et,Y;if($){const rt=ei[$];Fe=rt.vertexShader,nt=rt.fragmentShader}else Fe=v.vertexShader,nt=v.fragmentShader,o.update(v),et=o.getVertexShaderID(v),Y=o.getFragmentShaderID(v);const ee=t.getRenderTarget(),te=t.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,pe=B.isBatchedMesh===!0,Ne=!!v.map,Vt=!!v.matcap,qe=!!U,it=!!v.aoMap,ut=!!v.lightMap,Ge=!!v.bumpMap,bt=!!v.normalMap,R=!!v.displacementMap,Pt=!!v.emissiveMap,tt=!!v.metalnessMap,ft=!!v.roughnessMap,Ee=v.anisotropy>0,y=v.clearcoat>0,g=v.dispersion>0,D=v.iridescence>0,j=v.sheen>0,K=v.transmission>0,X=Ee&&!!v.anisotropyMap,_e=y&&!!v.clearcoatMap,re=y&&!!v.clearcoatNormalMap,Pe=y&&!!v.clearcoatRoughnessMap,De=D&&!!v.iridescenceMap,Z=D&&!!v.iridescenceThicknessMap,ne=j&&!!v.sheenColorMap,ve=j&&!!v.sheenRoughnessMap,Se=!!v.specularMap,he=!!v.specularColorMap,ze=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,se=K&&!!v.thicknessMap,ie=!!v.gradientMap,me=!!v.alphaMap,Q=v.alphaTest>0,W=!!v.alphaHash,xe=!!v.extensions;let Oe=ri;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const dt={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Fe,fragmentShader:nt,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:pe,batchingColor:pe&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:rs,alphaToCoverage:!!v.alphaToCoverage,map:Ne,matcap:Vt,envMap:qe,envMapMode:qe&&U.mapping,envMapCubeUVHeight:J,aoMap:it,lightMap:ut,bumpMap:Ge,normalMap:bt,displacementMap:R,emissiveMap:Pt,normalMapObjectSpace:bt&&v.normalMapType===eg,normalMapTangentSpace:bt&&v.normalMapType===Q0,metalnessMap:tt,roughnessMap:ft,anisotropy:Ee,anisotropyMap:X,clearcoat:y,clearcoatMap:_e,clearcoatNormalMap:re,clearcoatRoughnessMap:Pe,dispersion:g,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:Z,sheen:j,sheenColorMap:ne,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:he,specularIntensityMap:ze,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:ie,opaque:v.transparent===!1&&v.blending===Zr&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:W,combine:v.combine,mapUv:Ne&&_(v.map.channel),aoMapUv:it&&_(v.aoMap.channel),lightMapUv:ut&&_(v.lightMap.channel),bumpMapUv:Ge&&_(v.bumpMap.channel),normalMapUv:bt&&_(v.normalMap.channel),displacementMapUv:R&&_(v.displacementMap.channel),emissiveMapUv:Pt&&_(v.emissiveMap.channel),metalnessMapUv:tt&&_(v.metalnessMap.channel),roughnessMapUv:ft&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:_e&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(v.sheenRoughnessMap.channel),specularMapUv:Se&&_(v.specularMap.channel),specularColorMapUv:he&&_(v.specularColorMap.channel),specularIntensityMapUv:ze&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:se&&_(v.thicknessMap.channel),alphaMapUv:me&&_(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||Ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Ne||me),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ne&&v.map.isVideoTexture===!0&&Ye.getTransfer(v.map.colorSpace)===st,decodeVideoTextureEmissive:Pt&&v.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(v.emissiveMap.colorSpace)===st,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ei,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const q in v.defines)E.push(q),E.push(v.defines[q]);return v.isRawShaderMaterial===!1&&(f(E,v),M(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function f(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function T(v){const E=m[v.type];let q;if(E){const A=ei[E];q=Bg.clone(A.uniforms)}else q=v.uniforms;return q}function b(v,E){let q=h.get(E);return q!==void 0?++q.usedTimes:(q=new lx(t,E,v,r),l.push(q),h.set(E,q)),q}function C(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:T,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:P}}function px(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function mx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function bf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,S,p,f){let M=t[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:f},t[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=p,M.group=f),e++,M}function c(u,m,_,S,p,f){const M=o(u,m,_,S,p,f);_.transmission>0?i.push(M):_.transparent===!0?r.push(M):n.push(M)}function l(u,m,_,S,p,f){const M=o(u,m,_,S,p,f);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):n.unshift(M)}function h(u,m){n.length>1&&n.sort(u||mx),i.length>1&&i.sort(m||bf),r.length>1&&r.sort(m||bf)}function d(){for(let u=e,m=t.length;u<m;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:h}}function gx(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Tf,t.set(i,[a])):r>=s.length?(a=new Tf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function _x(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Ze};break;case"SpotLight":n={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function vx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xx=0;function Sx(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Mx(t){const e=new _x,n=vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new Et,a=new Et;function o(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,S=0,p=0,f=0,M=0,T=0,b=0,C=0,w=0,P=0;l.sort(Sx);for(let E=0,q=l.length;E<q;E++){const A=l[E],B=A.color,k=A.intensity,H=A.distance;let V=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===is?V=A.shadow.map.texture:V=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=B.r*k,d+=B.g*k,u+=B.b*k;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],k);P++}else if(A.isDirectionalLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const U=A.shadow,J=n.get(A);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=A.shadow.matrix,M++}i.directional[m]=G,m++}else if(A.isSpotLight){const G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(B).multiplyScalar(k),G.distance=H,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[S]=G;const U=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,U.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[S]=U.matrix,A.castShadow){const J=n.get(A);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=V,b++}S++}else if(A.isRectAreaLight){const G=e.get(A);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=G,p++}else if(A.isPointLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const U=A.shadow,J=n.get(A);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,J.shadowCameraNear=U.camera.near,J.shadowCameraFar=U.camera.far,i.pointShadow[_]=J,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=A.shadow.matrix,T++}i.point[_]=G,_++}else if(A.isHemisphereLight){const G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(k),G.groundColor.copy(A.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==p||v.hemiLength!==f||v.numDirectionalShadows!==M||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==C||v.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,v.directionalLength=m,v.pointLength=_,v.spotLength=S,v.rectAreaLength=p,v.hemiLength=f,v.numDirectionalShadows=M,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=C,v.numLightProbes=P,i.version=xx++)}function c(l,h){let d=0,u=0,m=0,_=0,S=0;const p=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const T=l[f];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),d++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),u++}else if(T.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),S++}}}return{setup:o,setupView:c,state:i}}function Af(t){const e=new Mx(t),n=[],i=[];function r(h){l.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function c(h){e.setupView(n,h)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ex(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Af(t),e.set(r,[o])):s>=a.length?(o=new Af(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tx=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Ax=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],wf=new Et,zs=new N,Ic=new N;function wx(t,e,n){let i=new tp;const r=new lt,s=new lt,a=new Rt,o=new zg,c=new Hg,l={},h=n.maxTextureSize,d={[Zi]:un,[un]:Zi,[Ei]:Ei},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:yx,fragmentShader:bx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ci(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let f=this.type;this.render=function(w,P,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===P0&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=to);const E=t.getRenderTarget(),q=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=f!==this.type;k&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=w.length;H<V;H++){const G=w[H],U=G.shadow;if(U===void 0){Ue("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const J=U.getFrameExtents();r.multiply(J),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,U.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=$,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===qs){if(G.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new si(r.x,r.y,{format:is,type:wi,minFilter:en,magFilter:en,generateMipmaps:!1}),U.map.texture.name=G.name+".shadowMap",U.map.depthTexture=new ia(r.x,r.y,ti),U.map.depthTexture.name=G.name+".shadowMapDepth",U.map.depthTexture.format=Ri,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=jt,U.map.depthTexture.magFilter=jt}else G.isPointLight?(U.map=new up(r.x),U.map.depthTexture=new Ng(r.x,oi)):(U.map=new si(r.x,r.y),U.map.depthTexture=new ia(r.x,r.y,oi)),U.map.depthTexture.name=G.name+".shadowMap",U.map.depthTexture.format=Ri,this.type===to?(U.map.depthTexture.compareFunction=$?gu:mu,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=jt,U.map.depthTexture.magFilter=jt);U.camera.updateProjectionMatrix()}const le=U.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<le;fe++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,fe),t.clear();else{fe===0&&(t.setRenderTarget(U.map),t.clear());const ue=U.getViewport(fe);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),B.viewport(a)}if(G.isPointLight){const ue=U.camera,Fe=U.matrix,nt=G.distance||ue.far;nt!==ue.far&&(ue.far=nt,ue.updateProjectionMatrix()),zs.setFromMatrixPosition(G.matrixWorld),ue.position.copy(zs),Ic.copy(ue.position),Ic.add(Tx[fe]),ue.up.copy(Ax[fe]),ue.lookAt(Ic),ue.updateMatrixWorld(),Fe.makeTranslation(-zs.x,-zs.y,-zs.z),wf.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),U._frustum.setFromProjectionMatrix(wf,ue.coordinateSystem,ue.reversedDepth)}else U.updateMatrices(G);i=U.getFrustum(),b(P,v,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===qs&&M(U,v),U.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(E,q,A)};function M(w,P){const v=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(r.x,r.y,{format:is,type:wi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(P,null,v,u,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(P,null,v,m,S,null)}function T(w,P,v,E){let q=null;const A=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)q=A;else if(q=v.isPointLight===!0?c:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=q.uuid,k=P.uuid;let H=l[B];H===void 0&&(H={},l[B]=H);let V=H[k];V===void 0&&(V=q.clone(),H[k]=V,P.addEventListener("dispose",C)),q=V}if(q.visible=P.visible,q.wireframe=P.wireframe,E===qs?q.side=P.shadowSide!==null?P.shadowSide:P.side:q.side=P.shadowSide!==null?P.shadowSide:d[P.side],q.alphaMap=P.alphaMap,q.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,q.map=P.map,q.clipShadows=P.clipShadows,q.clippingPlanes=P.clippingPlanes,q.clipIntersection=P.clipIntersection,q.displacementMap=P.displacementMap,q.displacementScale=P.displacementScale,q.displacementBias=P.displacementBias,q.wireframeLinewidth=P.wireframeLinewidth,q.linewidth=P.linewidth,v.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const B=t.properties.get(q);B.light=v}return q}function b(w,P,v,E,q){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&q===qs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const k=e.update(w),H=w.material;if(Array.isArray(H)){const V=k.groups;for(let G=0,U=V.length;G<U;G++){const J=V[G],$=H[J.materialIndex];if($&&$.visible){const le=T(w,$,E,q);w.onBeforeShadow(t,w,P,v,k,le,J),t.renderBufferDirect(v,null,k,le,w,J),w.onAfterShadow(t,w,P,v,k,le,J)}}}else if(H.visible){const V=T(w,H,E,q);w.onBeforeShadow(t,w,P,v,k,V,null),t.renderBufferDirect(v,null,k,V,w,null),w.onAfterShadow(t,w,P,v,k,V,null)}}const B=w.children;for(let k=0,H=B.length;k<H;k++)b(B[k],P,v,E,q)}function C(w){w.target.removeEventListener("dispose",C);for(const v in l){const E=l[v],q=w.target.uuid;q in E&&(E[q].dispose(),delete E[q])}}}function Rx(t,e){function n(){let L=!1;const se=new Rt;let ie=null;const me=new Rt(0,0,0,0);return{setMask:function(Q){ie!==Q&&!L&&(t.colorMask(Q,Q,Q,Q),ie=Q)},setLocked:function(Q){L=Q},setClear:function(Q,W,xe,Oe,dt){dt===!0&&(Q*=Oe,W*=Oe,xe*=Oe),se.set(Q,W,xe,Oe),me.equals(se)===!1&&(t.clearColor(Q,W,xe,Oe),me.copy(se))},reset:function(){L=!1,ie=null,me.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ie=null,me=null,Q=null;return{setReversed:function(W){if(se!==W){const xe=e.get("EXT_clip_control");W?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=W;const Oe=Q;Q=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(W){W?ee(t.DEPTH_TEST):te(t.DEPTH_TEST)},setMask:function(W){ie!==W&&!L&&(t.depthMask(W),ie=W)},setFunc:function(W){if(se&&(W=ug[W]),me!==W){switch(W){case Zc:t.depthFunc(t.NEVER);break;case Jc:t.depthFunc(t.ALWAYS);break;case Qc:t.depthFunc(t.LESS);break;case ts:t.depthFunc(t.LEQUAL);break;case el:t.depthFunc(t.EQUAL);break;case tl:t.depthFunc(t.GEQUAL);break;case nl:t.depthFunc(t.GREATER);break;case il:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=W}},setLocked:function(W){L=W},setClear:function(W){Q!==W&&(Q=W,se&&(W=1-W),t.clearDepth(W))},reset:function(){L=!1,ie=null,me=null,Q=null,se=!1}}}function r(){let L=!1,se=null,ie=null,me=null,Q=null,W=null,xe=null,Oe=null,dt=null;return{setTest:function(rt){L||(rt?ee(t.STENCIL_TEST):te(t.STENCIL_TEST))},setMask:function(rt){se!==rt&&!L&&(t.stencilMask(rt),se=rt)},setFunc:function(rt,mi,gi){(ie!==rt||me!==mi||Q!==gi)&&(t.stencilFunc(rt,mi,gi),ie=rt,me=mi,Q=gi)},setOp:function(rt,mi,gi){(W!==rt||xe!==mi||Oe!==gi)&&(t.stencilOp(rt,mi,gi),W=rt,xe=mi,Oe=gi)},setLocked:function(rt){L=rt},setClear:function(rt){dt!==rt&&(t.clearStencil(rt),dt=rt)},reset:function(){L=!1,se=null,ie=null,me=null,Q=null,W=null,xe=null,Oe=null,dt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,m=[],_=null,S=!1,p=null,f=null,M=null,T=null,b=null,C=null,w=null,P=new Ze(0,0,0),v=0,E=!1,q=null,A=null,B=null,k=null,H=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=U>=1):J.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=U>=2);let $=null,le={};const fe=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Fe=new Rt().fromArray(fe),nt=new Rt().fromArray(ue);function et(L,se,ie,me){const Q=new Uint8Array(4),W=t.createTexture();t.bindTexture(L,W),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<ie;xe++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Q):t.texImage2D(se+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Q);return W}const Y={};Y[t.TEXTURE_2D]=et(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=et(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=et(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=et(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(ts),Ge(!1),bt(wh),ee(t.CULL_FACE),it(Ti);function ee(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function te(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ie(L,se){return d[L]!==se?(t.bindFramebuffer(L,se),d[L]=se,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=se),!0):!1}function pe(L,se){let ie=m,me=!1;if(L){ie=u.get(se),ie===void 0&&(ie=[],u.set(se,ie));const Q=L.textures;if(ie.length!==Q.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let W=0,xe=Q.length;W<xe;W++)ie[W]=t.COLOR_ATTACHMENT0+W;ie.length=Q.length,me=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,me=!0);me&&t.drawBuffers(ie)}function Ne(L){return _!==L?(t.useProgram(L),_=L,!0):!1}const Vt={[dr]:t.FUNC_ADD,[D0]:t.FUNC_SUBTRACT,[I0]:t.FUNC_REVERSE_SUBTRACT};Vt[U0]=t.MIN,Vt[F0]=t.MAX;const qe={[N0]:t.ZERO,[O0]:t.ONE,[B0]:t.SRC_COLOR,[Kc]:t.SRC_ALPHA,[W0]:t.SRC_ALPHA_SATURATE,[z0]:t.DST_COLOR,[V0]:t.DST_ALPHA,[k0]:t.ONE_MINUS_SRC_COLOR,[$c]:t.ONE_MINUS_SRC_ALPHA,[H0]:t.ONE_MINUS_DST_COLOR,[G0]:t.ONE_MINUS_DST_ALPHA,[X0]:t.CONSTANT_COLOR,[q0]:t.ONE_MINUS_CONSTANT_COLOR,[Y0]:t.CONSTANT_ALPHA,[j0]:t.ONE_MINUS_CONSTANT_ALPHA};function it(L,se,ie,me,Q,W,xe,Oe,dt,rt){if(L===Ti){S===!0&&(te(t.BLEND),S=!1);return}if(S===!1&&(ee(t.BLEND),S=!0),L!==L0){if(L!==p||rt!==E){if((f!==dr||b!==dr)&&(t.blendEquation(t.FUNC_ADD),f=dr,b=dr),rt)switch(L){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jc:t.blendFunc(t.ONE,t.ONE);break;case Rh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ch:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ch:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}M=null,T=null,C=null,w=null,P.set(0,0,0),v=0,p=L,E=rt}return}Q=Q||se,W=W||ie,xe=xe||me,(se!==f||Q!==b)&&(t.blendEquationSeparate(Vt[se],Vt[Q]),f=se,b=Q),(ie!==M||me!==T||W!==C||xe!==w)&&(t.blendFuncSeparate(qe[ie],qe[me],qe[W],qe[xe]),M=ie,T=me,C=W,w=xe),(Oe.equals(P)===!1||dt!==v)&&(t.blendColor(Oe.r,Oe.g,Oe.b,dt),P.copy(Oe),v=dt),p=L,E=!1}function ut(L,se){L.side===Ei?te(t.CULL_FACE):ee(t.CULL_FACE);let ie=L.side===un;se&&(ie=!ie),Ge(ie),L.blending===Zr&&L.transparent===!1?it(Ti):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){q!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),q=L)}function bt(L){L!==R0?(ee(t.CULL_FACE),L!==A&&(L===wh?t.cullFace(t.BACK):L===C0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):te(t.CULL_FACE),A=L}function R(L){L!==B&&(G&&t.lineWidth(L),B=L)}function Pt(L,se,ie){L?(ee(t.POLYGON_OFFSET_FILL),(k!==se||H!==ie)&&(k=se,H=ie,a.getReversed()&&(se=-se),t.polygonOffset(se,ie))):te(t.POLYGON_OFFSET_FILL)}function tt(L){L?ee(t.SCISSOR_TEST):te(t.SCISSOR_TEST)}function ft(L){L===void 0&&(L=t.TEXTURE0+V-1),$!==L&&(t.activeTexture(L),$=L)}function Ee(L,se,ie){ie===void 0&&($===null?ie=t.TEXTURE0+V-1:ie=$);let me=le[ie];me===void 0&&(me={type:void 0,texture:void 0},le[ie]=me),(me.type!==L||me.texture!==se)&&($!==ie&&(t.activeTexture(ie),$=ie),t.bindTexture(L,se||Y[L]),me.type=L,me.texture=se)}function y(){const L=le[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function j(){try{t.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function K(){try{t.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Pe(){try{t.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function De(){try{t.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function Z(){try{t.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function ne(L){Fe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Fe.copy(L))}function ve(L){nt.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),nt.copy(L))}function Se(L,se){let ie=l.get(se);ie===void 0&&(ie=new WeakMap,l.set(se,ie));let me=ie.get(L);me===void 0&&(me=t.getUniformBlockIndex(se,L.name),ie.set(L,me))}function he(L,se){const me=l.get(se).get(L);c.get(se)!==me&&(t.uniformBlockBinding(se,me,L.__bindingPointIndex),c.set(se,me))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,le={},d={},u=new WeakMap,m=[],_=null,S=!1,p=null,f=null,M=null,T=null,b=null,C=null,w=null,P=new Ze(0,0,0),v=0,E=!1,q=null,A=null,B=null,k=null,H=null,Fe.set(0,0,t.canvas.width,t.canvas.height),nt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:te,bindFramebuffer:Ie,drawBuffers:pe,useProgram:Ne,setBlending:it,setMaterial:ut,setFlipSided:Ge,setCullFace:bt,setLineWidth:R,setPolygonOffset:Pt,setScissorTest:tt,activeTexture:ft,bindTexture:Ee,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:D,texImage2D:De,texImage3D:Z,updateUBOMapping:Se,uniformBlockBinding:he,texStorage2D:re,texStorage3D:Pe,texSubImage2D:j,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:_e,scissor:ne,viewport:ve,reset:ze}}function Cx(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):ho("canvas")}function S(y,g,D){let j=1;const K=Ee(y);if((K.width>D||K.height>D)&&(j=D/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(j*K.width),_e=Math.floor(j*K.height);d===void 0&&(d=_(X,_e));const re=g?_(X,_e):d;return re.width=X,re.height=_e,re.getContext("2d").drawImage(y,0,0,X,_e),Ue("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+_e+")."),re}else return"data"in y&&Ue("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function f(y){t.generateMipmap(y)}function M(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(y,g,D,j,K=!1){if(y!==null){if(t[y]!==void 0)return t[y];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=g;if(g===t.RED&&(D===t.FLOAT&&(X=t.R32F),D===t.HALF_FLOAT&&(X=t.R16F),D===t.UNSIGNED_BYTE&&(X=t.R8)),g===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.R8UI),D===t.UNSIGNED_SHORT&&(X=t.R16UI),D===t.UNSIGNED_INT&&(X=t.R32UI),D===t.BYTE&&(X=t.R8I),D===t.SHORT&&(X=t.R16I),D===t.INT&&(X=t.R32I)),g===t.RG&&(D===t.FLOAT&&(X=t.RG32F),D===t.HALF_FLOAT&&(X=t.RG16F),D===t.UNSIGNED_BYTE&&(X=t.RG8)),g===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RG8UI),D===t.UNSIGNED_SHORT&&(X=t.RG16UI),D===t.UNSIGNED_INT&&(X=t.RG32UI),D===t.BYTE&&(X=t.RG8I),D===t.SHORT&&(X=t.RG16I),D===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGB8UI),D===t.UNSIGNED_SHORT&&(X=t.RGB16UI),D===t.UNSIGNED_INT&&(X=t.RGB32UI),D===t.BYTE&&(X=t.RGB8I),D===t.SHORT&&(X=t.RGB16I),D===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),D===t.UNSIGNED_INT&&(X=t.RGBA32UI),D===t.BYTE&&(X=t.RGBA8I),D===t.SHORT&&(X=t.RGBA16I),D===t.INT&&(X=t.RGBA32I)),g===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),g===t.RGBA){const _e=K?lo:Ye.getTransfer(j);D===t.FLOAT&&(X=t.RGBA32F),D===t.HALF_FLOAT&&(X=t.RGBA16F),D===t.UNSIGNED_BYTE&&(X=_e===st?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(y,g){let D;return y?g===null||g===oi||g===na?D=t.DEPTH24_STENCIL8:g===ti?D=t.DEPTH32F_STENCIL8:g===ta&&(D=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===oi||g===na?D=t.DEPTH_COMPONENT24:g===ti?D=t.DEPTH_COMPONENT32F:g===ta&&(D=t.DEPTH_COMPONENT16),D}function C(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==jt&&y.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){const g=y.target;g.removeEventListener("dispose",w),v(g),g.isVideoTexture&&h.delete(g)}function P(y){const g=y.target;g.removeEventListener("dispose",P),q(g)}function v(y){const g=i.get(y);if(g.__webglInit===void 0)return;const D=y.source,j=u.get(D);if(j){const K=j[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(y),Object.keys(j).length===0&&u.delete(D)}i.remove(y)}function E(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const D=y.source,j=u.get(D);delete j[g.__cacheKey],a.memory.textures--}function q(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let K=0;K<g.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(g.__webglFramebuffer[j][K]);else t.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)t.deleteFramebuffer(g.__webglFramebuffer[j]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=y.textures;for(let j=0,K=D.length;j<K;j++){const X=i.get(D[j]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(D[j])}i.remove(y)}let A=0;function B(){A=0}function k(){const y=A;return y>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),A+=1,y}function H(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function V(y,g){const D=i.get(y);if(y.isVideoTexture&&tt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&D.__version!==y.version){const j=y.image;if(j===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,y,g);return}}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+g)}function G(y,g){const D=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Y(D,y,g);return}else y.isExternalTexture&&(D.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+g)}function U(y,g){const D=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){Y(D,y,g);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+g)}function J(y,g){const D=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&D.__version!==y.version){ee(D,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+g)}const $={[rl]:t.REPEAT,[bi]:t.CLAMP_TO_EDGE,[sl]:t.MIRRORED_REPEAT},le={[jt]:t.NEAREST,[Z0]:t.NEAREST_MIPMAP_NEAREST,[ba]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[nc]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},fe={[tg]:t.NEVER,[ag]:t.ALWAYS,[ng]:t.LESS,[mu]:t.LEQUAL,[ig]:t.EQUAL,[gu]:t.GEQUAL,[rg]:t.GREATER,[sg]:t.NOTEQUAL};function ue(y,g){if(g.type===ti&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===nc||g.magFilter===ba||g.magFilter===mr||g.minFilter===en||g.minFilter===nc||g.minFilter===ba||g.minFilter===mr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,$[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,$[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,$[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,le[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,le[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===jt||g.minFilter!==ba&&g.minFilter!==mr||g.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Fe(y,g){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",w));const j=g.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const X=H(g);if(X!==y.__cacheKey){K[X]===void 0&&(K[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[X].usedTimes++;const _e=K[y.__cacheKey];_e!==void 0&&(K[y.__cacheKey].usedTimes--,_e.usedTimes===0&&E(g)),y.__cacheKey=X,y.__webglTexture=K[X].texture}return D}function nt(y,g,D){return Math.floor(Math.floor(y/D)/g)}function et(y,g,D,j){const X=y.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,D,j,g.data);else{X.sort((Z,ne)=>Z.start-ne.start);let _e=0;for(let Z=1;Z<X.length;Z++){const ne=X[_e],ve=X[Z],Se=ne.start+ne.count,he=nt(ve.start,g.width,4),ze=nt(ne.start,g.width,4);ve.start<=Se+1&&he===ze&&nt(ve.start+ve.count-1,g.width,4)===he?ne.count=Math.max(ne.count,ve.start+ve.count-ne.start):(++_e,X[_e]=ve)}X.length=_e+1;const re=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),De=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Z=0,ne=X.length;Z<ne;Z++){const ve=X[Z],Se=Math.floor(ve.start/4),he=Math.ceil(ve.count/4),ze=Se%g.width,L=Math.floor(Se/g.width),se=he,ie=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,ze,L,se,ie,D,j,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,re),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,De)}}function Y(y,g,D){let j=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=t.TEXTURE_3D);const K=Fe(y,g),X=g.source;n.bindTexture(j,y.__webglTexture,t.TEXTURE0+D);const _e=i.get(X);if(X.version!==_e.__version||K===!0){n.activeTexture(t.TEXTURE0+D);const re=Ye.getPrimaries(Ye.workingColorSpace),Pe=g.colorSpace===qi?null:Ye.getPrimaries(g.colorSpace),De=g.colorSpace===qi||re===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Z=S(g.image,!1,r.maxTextureSize);Z=ft(g,Z);const ne=s.convert(g.format,g.colorSpace),ve=s.convert(g.type);let Se=T(g.internalFormat,ne,ve,g.colorSpace,g.isVideoTexture);ue(j,g);let he;const ze=g.mipmaps,L=g.isVideoTexture!==!0,se=_e.__version===void 0||K===!0,ie=X.dataReady,me=C(g,Z);if(g.isDepthTexture)Se=b(g.format===gr,g.type),se&&(L?n.texStorage2D(t.TEXTURE_2D,1,Se,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,Se,Z.width,Z.height,0,ne,ve,null));else if(g.isDataTexture)if(ze.length>0){L&&se&&n.texStorage2D(t.TEXTURE_2D,me,Se,ze[0].width,ze[0].height);for(let Q=0,W=ze.length;Q<W;Q++)he=ze[Q],L?ie&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,he.width,he.height,ne,ve,he.data):n.texImage2D(t.TEXTURE_2D,Q,Se,he.width,he.height,0,ne,ve,he.data);g.generateMipmaps=!1}else L?(se&&n.texStorage2D(t.TEXTURE_2D,me,Se,Z.width,Z.height),ie&&et(g,Z,ne,ve)):n.texImage2D(t.TEXTURE_2D,0,Se,Z.width,Z.height,0,ne,ve,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Se,ze[0].width,ze[0].height,Z.depth);for(let Q=0,W=ze.length;Q<W;Q++)if(he=ze[Q],g.format!==Hn)if(ne!==null)if(L){if(ie)if(g.layerUpdates.size>0){const xe=rf(he.width,he.height,g.format,g.type);for(const Oe of g.layerUpdates){const dt=he.data.subarray(Oe*xe/he.data.BYTES_PER_ELEMENT,(Oe+1)*xe/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,Oe,he.width,he.height,1,ne,dt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,ne,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Se,he.width,he.height,Z.depth,0,he.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,ne,ve,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Se,he.width,he.height,Z.depth,0,ne,ve,he.data)}else{L&&se&&n.texStorage2D(t.TEXTURE_2D,me,Se,ze[0].width,ze[0].height);for(let Q=0,W=ze.length;Q<W;Q++)he=ze[Q],g.format!==Hn?ne!==null?L?ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,he.width,he.height,ne,he.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Se,he.width,he.height,0,he.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,he.width,he.height,ne,ve,he.data):n.texImage2D(t.TEXTURE_2D,Q,Se,he.width,he.height,0,ne,ve,he.data)}else if(g.isDataArrayTexture)if(L){if(se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Se,Z.width,Z.height,Z.depth),ie)if(g.layerUpdates.size>0){const Q=rf(Z.width,Z.height,g.format,g.type);for(const W of g.layerUpdates){const xe=Z.data.subarray(W*Q/Z.data.BYTES_PER_ELEMENT,(W+1)*Q/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,W,Z.width,Z.height,1,ne,ve,xe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ne,ve,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,ne,ve,Z.data);else if(g.isData3DTexture)L?(se&&n.texStorage3D(t.TEXTURE_3D,me,Se,Z.width,Z.height,Z.depth),ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ne,ve,Z.data)):n.texImage3D(t.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,ne,ve,Z.data);else if(g.isFramebufferTexture){if(se)if(L)n.texStorage2D(t.TEXTURE_2D,me,Se,Z.width,Z.height);else{let Q=Z.width,W=Z.height;for(let xe=0;xe<me;xe++)n.texImage2D(t.TEXTURE_2D,xe,Se,Q,W,0,ne,ve,null),Q>>=1,W>>=1}}else if(ze.length>0){if(L&&se){const Q=Ee(ze[0]);n.texStorage2D(t.TEXTURE_2D,me,Se,Q.width,Q.height)}for(let Q=0,W=ze.length;Q<W;Q++)he=ze[Q],L?ie&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ne,ve,he):n.texImage2D(t.TEXTURE_2D,Q,Se,ne,ve,he);g.generateMipmaps=!1}else if(L){if(se){const Q=Ee(Z);n.texStorage2D(t.TEXTURE_2D,me,Se,Q.width,Q.height)}ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne,ve,Z)}else n.texImage2D(t.TEXTURE_2D,0,Se,ne,ve,Z);p(g)&&f(j),_e.__version=X.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ee(y,g,D){if(g.image.length!==6)return;const j=Fe(y,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+D);const X=i.get(K);if(K.version!==X.__version||j===!0){n.activeTexture(t.TEXTURE0+D);const _e=Ye.getPrimaries(Ye.workingColorSpace),re=g.colorSpace===qi?null:Ye.getPrimaries(g.colorSpace),Pe=g.colorSpace===qi||_e===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,Z=g.image[0]&&g.image[0].isDataTexture,ne=[];for(let W=0;W<6;W++)!De&&!Z?ne[W]=S(g.image[W],!0,r.maxCubemapSize):ne[W]=Z?g.image[W].image:g.image[W],ne[W]=ft(g,ne[W]);const ve=ne[0],Se=s.convert(g.format,g.colorSpace),he=s.convert(g.type),ze=T(g.internalFormat,Se,he,g.colorSpace),L=g.isVideoTexture!==!0,se=X.__version===void 0||j===!0,ie=K.dataReady;let me=C(g,ve);ue(t.TEXTURE_CUBE_MAP,g);let Q;if(De){L&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ze,ve.width,ve.height);for(let W=0;W<6;W++){Q=ne[W].mipmaps;for(let xe=0;xe<Q.length;xe++){const Oe=Q[xe];g.format!==Hn?Se!==null?L?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,0,0,Oe.width,Oe.height,Se,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,ze,Oe.width,Oe.height,0,Oe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,0,0,Oe.width,Oe.height,Se,he,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe,ze,Oe.width,Oe.height,0,Se,he,Oe.data)}}}else{if(Q=g.mipmaps,L&&se){Q.length>0&&me++;const W=Ee(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ze,W.width,W.height)}for(let W=0;W<6;W++)if(Z){L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ne[W].width,ne[W].height,Se,he,ne[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ze,ne[W].width,ne[W].height,0,Se,he,ne[W].data);for(let xe=0;xe<Q.length;xe++){const dt=Q[xe].image[W].image;L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,0,0,dt.width,dt.height,Se,he,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,ze,dt.width,dt.height,0,Se,he,dt.data)}}else{L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Se,he,ne[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ze,Se,he,ne[W]);for(let xe=0;xe<Q.length;xe++){const Oe=Q[xe];L?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,0,0,Se,he,Oe.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,xe+1,ze,Se,he,Oe.image[W])}}}p(g)&&f(t.TEXTURE_CUBE_MAP),X.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function te(y,g,D,j,K,X){const _e=s.convert(D.format,D.colorSpace),re=s.convert(D.type),Pe=T(D.internalFormat,_e,re,D.colorSpace),De=i.get(g),Z=i.get(D);if(Z.__renderTarget=g,!De.__hasExternalTextures){const ne=Math.max(1,g.width>>X),ve=Math.max(1,g.height>>X);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,X,Pe,ne,ve,g.depth,0,_e,re,null):n.texImage2D(K,X,Pe,ne,ve,0,_e,re,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),Pt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,Z.__webglTexture,0,R(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,Z.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(y,g,D){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const j=g.depthTexture,K=j&&j.isDepthTexture?j.type:null,X=b(g.stencilBuffer,K),_e=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Pt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),X,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),X,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,X,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,y)}else{const j=g.textures;for(let K=0;K<j.length;K++){const X=j[K],_e=s.convert(X.format,X.colorSpace),re=s.convert(X.type),Pe=T(X.internalFormat,_e,re,X.colorSpace);Pt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,R(g),Pe,g.width,g.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,R(g),Pe,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(y,g,D){const j=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(g.depthTexture);if(K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j){if(K.__webglInit===void 0&&(K.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ue(t.TEXTURE_CUBE_MAP,g.depthTexture);const De=s.convert(g.depthTexture.format),Z=s.convert(g.depthTexture.type);let ne;g.depthTexture.format===Ri?ne=t.DEPTH_COMPONENT24:g.depthTexture.format===gr&&(ne=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ne,g.width,g.height,0,De,Z,null)}}else V(g.depthTexture,0);const X=K.__webglTexture,_e=R(g),re=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Pe=g.depthTexture.format===gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ri)Pt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,re,X,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,re,X,0);else if(g.depthTexture.format===gr)Pt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,re,X,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,re,X,0);else throw new Error("Unknown depthTexture format")}function Ne(y){const g=i.get(y),D=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const j=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=j}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let j=0;j<6;j++)pe(g.__webglFramebuffer[j],y,j);else{const j=y.texture.mipmaps;j&&j.length>0?pe(g.__webglFramebuffer[0],y,0):pe(g.__webglFramebuffer,y,0)}else if(D){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=t.createRenderbuffer(),Ie(g.__webglDepthbuffer[j],y,!1);else{const K=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,X)}}else{const j=y.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ie(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vt(y,g,D){const j=i.get(y);g!==void 0&&te(j.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Ne(y)}function qe(y){const g=y.texture,D=i.get(y),j=i.get(g);y.addEventListener("dispose",P);const K=y.textures,X=y.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=g.version,a.memory.textures++),X){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let Pe=0;Pe<g.mipmaps.length;Pe++)D.__webglFramebuffer[re][Pe]=t.createFramebuffer()}else D.__webglFramebuffer[re]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)D.__webglFramebuffer[re]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(_e)for(let re=0,Pe=K.length;re<Pe;re++){const De=i.get(K[re]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&Pt(y)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const Pe=K[re];D.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const De=s.convert(Pe.format,Pe.colorSpace),Z=s.convert(Pe.type),ne=T(Pe.internalFormat,De,Z,Pe.colorSpace,y.isXRRenderTarget===!0),ve=R(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ne,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,D.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(D.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),ue(t.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)te(D.__webglFramebuffer[re][Pe],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe);else te(D.__webglFramebuffer[re],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(g)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let re=0,Pe=K.length;re<Pe;re++){const De=K[re],Z=i.get(De);let ne=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,Z.__webglTexture),ue(ne,De),te(D.__webglFramebuffer,y,De,t.COLOR_ATTACHMENT0+re,ne,0),p(De)&&f(ne)}n.unbindTexture()}else{let re=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(re=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,j.__webglTexture),ue(re,g),g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)te(D.__webglFramebuffer[Pe],y,g,t.COLOR_ATTACHMENT0,re,Pe);else te(D.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,re,0);p(g)&&f(re),n.unbindTexture()}y.depthBuffer&&Ne(y)}function it(y){const g=y.textures;for(let D=0,j=g.length;D<j;D++){const K=g[D];if(p(K)){const X=M(y),_e=i.get(K).__webglTexture;n.bindTexture(X,_e),f(X),n.unbindTexture()}}}const ut=[],Ge=[];function bt(y){if(y.samples>0){if(Pt(y)===!1){const g=y.textures,D=y.width,j=y.height;let K=t.COLOR_BUFFER_BIT;const X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(y),re=g.length>1;if(re)for(let De=0;De<g.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Pe=y.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let De=0;De<g.length;De++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),re){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[De]);const Z=i.get(g[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Z,0)}t.blitFramebuffer(0,0,D,j,0,0,D,j,K,t.NEAREST),c===!0&&(ut.length=0,Ge.length=0,ut.push(t.COLOR_ATTACHMENT0+De),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ut.push(X),Ge.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let De=0;De<g.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,_e.__webglColorRenderbuffer[De]);const Z=i.get(g[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Z,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function R(y){return Math.min(r.maxSamples,y.samples)}function Pt(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function ft(y,g){const D=y.colorSpace,j=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||D!==rs&&D!==qi&&(Ye.getTransfer(D)===st?(j!==Hn||K!==Un)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",D)),g}function Ee(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=J,this.rebindTextures=Vt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Px(t,e){function n(i,r=qi){let s;const a=Ye.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===uu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xd)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zd)return t.BYTE;if(i===Hd)return t.SHORT;if(i===ta)return t.UNSIGNED_SHORT;if(i===lu)return t.INT;if(i===oi)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===wi)return t.HALF_FLOAT;if(i===qd)return t.ALPHA;if(i===Yd)return t.RGB;if(i===Hn)return t.RGBA;if(i===Ri)return t.DEPTH_COMPONENT;if(i===gr)return t.DEPTH_STENCIL;if(i===jd)return t.RED;if(i===fu)return t.RED_INTEGER;if(i===is)return t.RG;if(i===du)return t.RG_INTEGER;if(i===pu)return t.RGBA_INTEGER;if(i===no||i===io||i===ro||i===so)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ol||i===cl||i===ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===hl||i===fl||i===dl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ul||i===hl)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===dl)return s.COMPRESSED_R11_EAC;if(i===pl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ml)return s.COMPRESSED_RG11_EAC;if(i===gl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_l||i===vl||i===xl||i===Sl||i===Ml||i===El||i===yl||i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_l)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===Dl||i===Il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ll)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Fl||i===Nl||i===Ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new sp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new li({vertexShader:Lx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends vs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",p=new Ix,f={},M=n.getContextAttributes();let T=null,b=null;const C=[],w=[],P=new lt;let v=null;const E=new In;E.viewport=new Rt;const q=new In;q.viewport=new Rt;const A=[E,q],B=new Xg;let k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=C[Y];return ee===void 0&&(ee=new uc,C[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=C[Y];return ee===void 0&&(ee=new uc,C[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=C[Y];return ee===void 0&&(ee=new uc,C[Y]=ee),ee.getHandSpace()};function V(Y){const ee=w.indexOf(Y.inputSource);if(ee===-1)return;const te=C[ee];te!==void 0&&(te.update(Y.inputSource,Y.frame,l||a),te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",U);for(let Y=0;Y<C.length;Y++){const ee=w[Y];ee!==null&&(w[Y]=null,C[Y].disconnect(ee))}k=null,H=null,p.reset();for(const Y in f)delete f[Y];e.setRenderTarget(T),m=null,u=null,d=null,r=null,b=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ie=null,pe=null;M.depth&&(pe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=M.stencil?gr:Ri,Ie=M.stencil?na:oi);const Ne={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new si(u.textureWidth,u.textureHeight,{format:Hn,type:Un,depthTexture:new ia(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new si(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(Y){for(let ee=0;ee<Y.removed.length;ee++){const te=Y.removed[ee],Ie=w.indexOf(te);Ie>=0&&(w[Ie]=null,C[Ie].disconnect(te))}for(let ee=0;ee<Y.added.length;ee++){const te=Y.added[ee];let Ie=w.indexOf(te);if(Ie===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=w.length){w.push(te),Ie=Ne;break}else if(w[Ne]===null){w[Ne]=te,Ie=Ne;break}if(Ie===-1)break}const pe=C[Ie];pe&&pe.connect(te)}}const J=new N,$=new N;function le(Y,ee,te){J.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(te.matrixWorld);const Ie=J.distanceTo($),pe=ee.projectionMatrix.elements,Ne=te.projectionMatrix.elements,Vt=pe[14]/(pe[10]-1),qe=pe[14]/(pe[10]+1),it=(pe[9]+1)/pe[5],ut=(pe[9]-1)/pe[5],Ge=(pe[8]-1)/pe[0],bt=(Ne[8]+1)/Ne[0],R=Vt*Ge,Pt=Vt*bt,tt=Ie/(-Ge+bt),ft=tt*-Ge;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pe[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ee=Vt+tt,y=qe+tt,g=R-ft,D=Pt+(Ie-ft),j=it*qe/y*Ee,K=ut*qe/y*Ee;Y.projectionMatrix.makePerspective(g,D,j,K,Ee,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ee=Y.near,te=Y.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(te=p.depthFar)),B.near=q.near=E.near=ee,B.far=q.far=E.far=te,(k!==B.near||H!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,H=B.far),B.layers.mask=Y.layers.mask|6,E.layers.mask=B.layers.mask&-5,q.layers.mask=B.layers.mask&-3;const Ie=Y.parent,pe=B.cameras;fe(B,Ie);for(let Ne=0;Ne<pe.length;Ne++)fe(pe[Ne],Ie);pe.length===2?le(B,E,q):B.projectionMatrix.copy(E.projectionMatrix),ue(Y,B,Ie)};function ue(Y,ee,te){te===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Y){return f[Y]};let Fe=null;function nt(Y,ee){if(h=ee.getViewerPose(l||a),_=ee,h!==null){const te=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ie=!1;te.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let qe=0;qe<te.length;qe++){const it=te[qe];let ut=null;if(m!==null)ut=m.getViewport(it);else{const bt=d.getViewSubImage(u,it);ut=bt.viewport,qe===0&&(e.setRenderTargetTextures(b,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(b))}let Ge=A[qe];Ge===void 0&&(Ge=new In,Ge.layers.enable(qe),Ge.viewport=new Rt,A[qe]=Ge),Ge.matrix.fromArray(it.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(it.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ut.x,ut.y,ut.width,ut.height),qe===0&&(B.matrix.copy(Ge.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(Ge)}const pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const qe=d.getDepthInformation(te[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,r.renderState)}if(pe&&pe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let qe=0;qe<te.length;qe++){const it=te[qe].camera;if(it){let ut=f[it];ut||(ut=new sp,f[it]=ut);const Ge=d.getCameraImage(it);ut.sourceTexture=Ge}}}}for(let te=0;te<C.length;te++){const Ie=w[te],pe=C[te];Ie!==null&&pe!==void 0&&pe.update(Ie,ee,l||a)}Fe&&Fe(Y,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const et=new lp;et.setAnimationLoop(nt),this.setAnimationLoop=function(Y){Fe=Y},this.dispose=function(){}}}const lr=new Ci,Fx=new Et;function Nx(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,ap(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,M,T,b){f.isMeshBasicMaterial?s(p,f):f.isMeshLambertMaterial?(s(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),S(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,M,T):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===un&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===un&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f),T=M.envMap,b=M.envMapRotation;T&&(p.envMap.value=T,lr.copy(b),lr.x*=-1,lr.y*=-1,lr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),p.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(lr)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=T*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function S(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ox(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const b=T.program;i.uniformBlockBinding(M,b)}function l(M,T){let b=r[M.id];b===void 0&&(_(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",p));const C=T.program;i.updateUBOMapping(M,C);const w=e.render.frame;s[M.id]!==w&&(u(M),s[M.id]=w)}function h(M){const T=d();M.__bindingPointIndex=T;const b=t.createBuffer(),C=M.__size,w=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=r[M.id],b=M.uniforms,C=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let w=0,P=b.length;w<P;w++){const v=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,q=v.length;E<q;E++){const A=v[E];if(m(A,w,E,C)===!0){const B=A.__offset,k=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let V=0;V<k.length;V++){const G=k[V],U=S(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,B+H,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,H),H+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(M,T,b,C){const w=M.value,P=T+"_"+b;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{const v=C[P];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return C[P]=w,!0}else if(v.equals(w)===!1)return v.copy(w),!0}return!1}function _(M){const T=M.uniforms;let b=0;const C=16;for(let P=0,v=T.length;P<v;P++){const E=Array.isArray(T[P])?T[P]:[T[P]];for(let q=0,A=E.length;q<A;q++){const B=E[q],k=Array.isArray(B.value)?B.value:[B.value];for(let H=0,V=k.length;H<V;H++){const G=k[H],U=S(G),J=b%C,$=J%U.boundary,le=J+$;b+=$,le!==0&&C-le<U.storage&&(b+=C-le),B.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=U.storage}}}const w=b%C;return w>0&&(b+=C-w),M.__size=b,M.__cache={},this}function S(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",M),T}function p(M){const T=M.target;T.removeEventListener("dispose",p);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function kx(){return $n===null&&($n=new Lg(Bx,16,16,is,wi),$n.name="DFG_LUT",$n.minFilter=en,$n.magFilter=en,$n.wrapS=bi,$n.wrapT=bi,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class Vx{constructor(e={}){const{canvas:n=cg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Un}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,p=new Set([pu,du,fu]),f=new Set([Un,oi,ta,na,uu,hu]),M=new Uint32Array(4),T=new Int32Array(4);let b=null,C=null;const w=[],P=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let q=!1;this._outputColorSpace=Dn;let A=0,B=0,k=null,H=-1,V=null;const G=new Rt,U=new Rt;let J=null;const $=new Ze(0);let le=0,fe=n.width,ue=n.height,Fe=1,nt=null,et=null;const Y=new Rt(0,0,fe,ue),ee=new Rt(0,0,fe,ue);let te=!1;const Ie=new tp;let pe=!1,Ne=!1;const Vt=new Et,qe=new N,it=new Rt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function bt(){return k===null?Fe:1}let R=i;function Pt(x,I){return n.getContext(x,I)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cu}`),n.addEventListener("webglcontextlost",xe,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",dt,!1),R===null){const I="webgl2";if(R=Pt(I,x),R===null)throw Pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw $e("WebGLRenderer: "+x.message),x}let tt,ft,Ee,y,g,D,j,K,X,_e,re,Pe,De,Z,ne,ve,Se,he,ze,L,se,ie,me;function Q(){tt=new V2(R),tt.init(),se=new Px(R,tt),ft=new D2(R,tt,e,se),Ee=new Rx(R,tt),ft.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),y=new H2(R),g=new px,D=new Cx(R,tt,Ee,g,ft,se,y),j=new k2(E),K=new jg(R),ie=new P2(R,K),X=new G2(R,K,y,ie),_e=new X2(R,X,K,ie,y),he=new W2(R,ft,D),ne=new I2(g),re=new dx(E,j,tt,ft,ie,ne),Pe=new Nx(E,g),De=new gx,Z=new Ex(tt),Se=new C2(E,j,Ee,_e,_,c),ve=new wx(E,_e,ft),me=new Ox(R,y,ft,Ee),ze=new L2(R,tt,y),L=new z2(R,tt,y),y.programs=re.programs,E.capabilities=ft,E.extensions=tt,E.properties=g,E.renderLists=De,E.shadowMap=ve,E.state=Ee,E.info=y}Q(),S!==Un&&(v=new Y2(S,n.width,n.height,r,s));const W=new Ux(E,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=tt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=tt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(x){x!==void 0&&(Fe=x,this.setSize(fe,ue,!1))},this.getSize=function(x){return x.set(fe,ue)},this.setSize=function(x,I,z=!0){if(W.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=x,ue=I,n.width=Math.floor(x*Fe),n.height=Math.floor(I*Fe),z===!0&&(n.style.width=x+"px",n.style.height=I+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(fe*Fe,ue*Fe).floor()},this.setDrawingBufferSize=function(x,I,z){fe=x,ue=I,Fe=z,n.width=Math.floor(x*z),n.height=Math.floor(I*z),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(S===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(G)},this.getViewport=function(x){return x.copy(Y)},this.setViewport=function(x,I,z,O){x.isVector4?Y.set(x.x,x.y,x.z,x.w):Y.set(x,I,z,O),Ee.viewport(G.copy(Y).multiplyScalar(Fe).round())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,I,z,O){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,I,z,O),Ee.scissor(U.copy(ee).multiplyScalar(Fe).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){Ee.setScissorTest(te=x)},this.setOpaqueSort=function(x){nt=x},this.setTransparentSort=function(x){et=x},this.getClearColor=function(x){return x.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,z=!0){let O=0;if(x){let F=!1;if(k!==null){const oe=k.texture.format;F=p.has(oe)}if(F){const oe=k.texture.type,de=f.has(oe),ce=Se.getClearColor(),Me=Se.getClearAlpha(),Ae=ce.r,Be=ce.g,He=ce.b;de?(M[0]=Ae,M[1]=Be,M[2]=He,M[3]=Me,R.clearBufferuiv(R.COLOR,0,M)):(T[0]=Ae,T[1]=Be,T[2]=He,T[3]=Me,R.clearBufferiv(R.COLOR,0,T))}else O|=R.COLOR_BUFFER_BIT}I&&(O|=R.DEPTH_BUFFER_BIT),z&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xe,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Se.dispose(),De.dispose(),Z.dispose(),g.dispose(),j.dispose(),_e.dispose(),ie.dispose(),me.dispose(),re.dispose(),W.dispose(),W.removeEventListener("sessionstart",xh),W.removeEventListener("sessionend",Sh),nr.stop()};function xe(x){x.preventDefault(),Uh("WebGLRenderer: Context Lost."),q=!0}function Oe(){Uh("WebGLRenderer: Context Restored."),q=!1;const x=y.autoReset,I=ve.enabled,z=ve.autoUpdate,O=ve.needsUpdate,F=ve.type;Q(),y.autoReset=x,ve.enabled=I,ve.autoUpdate=z,ve.needsUpdate=O,ve.type=F}function dt(x){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function rt(x){const I=x.target;I.removeEventListener("dispose",rt),mi(I)}function mi(x){gi(x),g.remove(x)}function gi(x){const I=g.get(x).programs;I!==void 0&&(I.forEach(function(z){re.releaseProgram(z)}),x.isShaderMaterial&&re.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,z,O,F,oe){I===null&&(I=ut);const de=F.isMesh&&F.matrixWorld.determinant()<0,ce=E0(x,I,z,O,F);Ee.setMaterial(O,de);let Me=z.index,Ae=1;if(O.wireframe===!0){if(Me=X.getWireframeAttribute(z),Me===void 0)return;Ae=2}const Be=z.drawRange,He=z.attributes.position;let Re=Be.start*Ae,at=(Be.start+Be.count)*Ae;oe!==null&&(Re=Math.max(Re,oe.start*Ae),at=Math.min(at,(oe.start+oe.count)*Ae)),Me!==null?(Re=Math.max(Re,0),at=Math.min(at,Me.count)):He!=null&&(Re=Math.max(Re,0),at=Math.min(at,He.count));const Tt=at-Re;if(Tt<0||Tt===1/0)return;ie.setup(F,O,ce,z,Me);let Mt,ot=ze;if(Me!==null&&(Mt=K.get(Me),ot=L,ot.setIndex(Mt)),F.isMesh)O.wireframe===!0?(Ee.setLineWidth(O.wireframeLinewidth*bt()),ot.setMode(R.LINES)):ot.setMode(R.TRIANGLES);else if(F.isLine){let $t=O.linewidth;$t===void 0&&($t=1),Ee.setLineWidth($t*bt()),F.isLineSegments?ot.setMode(R.LINES):F.isLineLoop?ot.setMode(R.LINE_LOOP):ot.setMode(R.LINE_STRIP)}else F.isPoints?ot.setMode(R.POINTS):F.isSprite&&ot.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const $t=F._multiDrawStarts,ye=F._multiDrawCounts,fn=F._multiDrawCount,Ke=Me?K.get(Me).bytesPerElement:1,Bn=g.get(O).currentProgram.getUniforms();for(let jn=0;jn<fn;jn++)Bn.setValue(R,"_gl_DrawID",jn),ot.render($t[jn]/Ke,ye[jn])}else if(F.isInstancedMesh)ot.renderInstances(Re,Tt,F.count);else if(z.isInstancedBufferGeometry){const $t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ye=Math.min(z.instanceCount,$t);ot.renderInstances(Re,Tt,ye)}else ot.render(Re,Tt)};function vh(x,I,z){x.transparent===!0&&x.side===Ei&&x.forceSinglePass===!1?(x.side=un,x.needsUpdate=!0,ya(x,I,z),x.side=Zi,x.needsUpdate=!0,ya(x,I,z),x.side=Ei):ya(x,I,z)}this.compile=function(x,I,z=null){z===null&&(z=x),C=Z.get(z),C.init(I),P.push(C),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(C.pushLight(F),F.castShadow&&C.pushShadow(F))}),x!==z&&x.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(C.pushLight(F),F.castShadow&&C.pushShadow(F))}),C.setupLights();const O=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const ce=oe[de];vh(ce,z,F),O.add(ce)}else vh(oe,z,F),O.add(oe)}),C=P.pop(),O},this.compileAsync=function(x,I,z=null){const O=this.compile(x,I,z);return new Promise(F=>{function oe(){if(O.forEach(function(de){g.get(de).currentProgram.isReady()&&O.delete(de)}),O.size===0){F(x);return}setTimeout(oe,10)}tt.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Jo=null;function M0(x){Jo&&Jo(x)}function xh(){nr.stop()}function Sh(){nr.start()}const nr=new lp;nr.setAnimationLoop(M0),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(x){Jo=x,W.setAnimationLoop(x),x===null?nr.stop():nr.start()},W.addEventListener("sessionstart",xh),W.addEventListener("sessionend",Sh),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;const z=W.enabled===!0&&W.isPresenting===!0,O=v!==null&&(k===null||z)&&v.begin(E,k);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,I,k),C=Z.get(x,P.length),C.init(I),P.push(C),Vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(Vt,ni,I.reversedDepth),Ne=this.localClippingEnabled,pe=ne.init(this.clippingPlanes,Ne),b=De.get(x,w.length),b.init(),w.push(b),W.enabled===!0&&W.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&Qo(de,I,-1/0,E.sortObjects)}Qo(x,I,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(nt,et),Ge=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ge&&Se.addToRenderList(b,x),this.info.render.frame++,pe===!0&&ne.beginShadows();const F=C.state.shadowsArray;if(ve.render(F,x,I),pe===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&v.hasRenderPass())===!1){const de=b.opaque,ce=b.transmissive;if(C.setupLights(),I.isArrayCamera){const Me=I.cameras;if(ce.length>0)for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const He=Me[Ae];Eh(de,ce,x,He)}Ge&&Se.render(x);for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const He=Me[Ae];Mh(b,x,He,He.viewport)}}else ce.length>0&&Eh(de,ce,x,I),Ge&&Se.render(x),Mh(b,x,I)}k!==null&&B===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),O&&v.end(E),x.isScene===!0&&x.onAfterRender(E,x,I),ie.resetDefaultState(),H=-1,V=null,P.pop(),P.length>0?(C=P[P.length-1],pe===!0&&ne.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,w.pop(),w.length>0?b=w[w.length-1]:b=null};function Qo(x,I,z,O){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)C.pushLight(x),x.castShadow&&C.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ie.intersectsSprite(x)){O&&it.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Vt);const de=_e.update(x),ce=x.material;ce.visible&&b.push(x,de,ce,z,it.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ie.intersectsObject(x))){const de=_e.update(x),ce=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),it.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),it.copy(de.boundingSphere.center)),it.applyMatrix4(x.matrixWorld).applyMatrix4(Vt)),Array.isArray(ce)){const Me=de.groups;for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const He=Me[Ae],Re=ce[He.materialIndex];Re&&Re.visible&&b.push(x,de,Re,z,it.z,He)}}else ce.visible&&b.push(x,de,ce,z,it.z,null)}}const oe=x.children;for(let de=0,ce=oe.length;de<ce;de++)Qo(oe[de],I,z,O)}function Mh(x,I,z,O){const{opaque:F,transmissive:oe,transparent:de}=x;C.setupLightsView(z),pe===!0&&ne.setGlobalState(E.clippingPlanes,z),O&&Ee.viewport(G.copy(O)),F.length>0&&Ea(F,I,z),oe.length>0&&Ea(oe,I,z),de.length>0&&Ea(de,I,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Eh(x,I,z,O){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[O.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[O.id]=new si(1,1,{generateMipmaps:!0,type:Re?wi:Un,minFilter:mr,samples:ft.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const oe=C.state.transmissionRenderTarget[O.id],de=O.viewport||G;oe.setSize(de.z*E.transmissionResolutionScale,de.w*E.transmissionResolutionScale);const ce=E.getRenderTarget(),Me=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(oe),E.getClearColor($),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&Se.render(z);const Be=E.toneMapping;E.toneMapping=ri;const He=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),C.setupLightsView(O),pe===!0&&ne.setGlobalState(E.clippingPlanes,O),Ea(x,z,O),D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,Tt=I.length;at<Tt;at++){const Mt=I[at],{object:ot,geometry:$t,material:ye,group:fn}=Mt;if(ye.side===Ei&&ot.layers.test(O.layers)){const Ke=ye.side;ye.side=un,ye.needsUpdate=!0,yh(ot,z,O,$t,ye,fn),ye.side=Ke,ye.needsUpdate=!0,Re=!0}}Re===!0&&(D.updateMultisampleRenderTarget(oe),D.updateRenderTargetMipmap(oe))}E.setRenderTarget(ce,Me,Ae),E.setClearColor($,le),He!==void 0&&(O.viewport=He),E.toneMapping=Be}function Ea(x,I,z){const O=I.isScene===!0?I.overrideMaterial:null;for(let F=0,oe=x.length;F<oe;F++){const de=x[F],{object:ce,geometry:Me,group:Ae}=de;let Be=de.material;Be.allowOverride===!0&&O!==null&&(Be=O),ce.layers.test(z.layers)&&yh(ce,I,z,Me,Be,Ae)}}function yh(x,I,z,O,F,oe){x.onBeforeRender(E,I,z,O,F,oe),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(E,I,z,O,x,oe),F.transparent===!0&&F.side===Ei&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,E.renderBufferDirect(z,I,O,F,x,oe),F.side=Zi,F.needsUpdate=!0,E.renderBufferDirect(z,I,O,F,x,oe),F.side=Ei):E.renderBufferDirect(z,I,O,F,x,oe),x.onAfterRender(E,I,z,O,F,oe)}function ya(x,I,z){I.isScene!==!0&&(I=ut);const O=g.get(x),F=C.state.lights,oe=C.state.shadowsArray,de=F.state.version,ce=re.getParameters(x,F.state,oe,I,z),Me=re.getProgramCacheKey(ce);let Ae=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Be=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=j.get(x.envMap||O.environment,Be),O.envMapRotation=O.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Ae===void 0&&(x.addEventListener("dispose",rt),Ae=new Map,O.programs=Ae);let He=Ae.get(Me);if(He!==void 0){if(O.currentProgram===He&&O.lightsStateVersion===de)return Th(x,ce),He}else ce.uniforms=re.getUniforms(x),x.onBeforeCompile(ce,E),He=re.acquireProgram(ce,Me),Ae.set(Me,He),O.uniforms=ce.uniforms;const Re=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=ne.uniform),Th(x,ce),O.needsLights=b0(x),O.lightsStateVersion=de,O.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),O.currentProgram=He,O.uniformsList=null,He}function bh(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=ao.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function Th(x,I){const z=g.get(x);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function E0(x,I,z,O,F){I.isScene!==!0&&(I=ut),D.resetTextureUnits();const oe=I.fog,de=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ce=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:rs,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ae=j.get(O.envMap||de,Me),Be=O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,He=!!z.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!z.morphAttributes.position,at=!!z.morphAttributes.normal,Tt=!!z.morphAttributes.color;let Mt=ri;O.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$t=ot!==void 0?ot.length:0,ye=g.get(O),fn=C.state.lights;if(pe===!0&&(Ne===!0||x!==V)){const Gt=x===V&&O.id===H;ne.setState(O,x,Gt)}let Ke=!1;O.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==fn.state.version||ye.outputColorSpace!==ce||F.isBatchedMesh&&ye.batching===!1||!F.isBatchedMesh&&ye.batching===!0||F.isBatchedMesh&&ye.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ye.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ye.instancing===!1||!F.isInstancedMesh&&ye.instancing===!0||F.isSkinnedMesh&&ye.skinning===!1||!F.isSkinnedMesh&&ye.skinning===!0||F.isInstancedMesh&&ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ye.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ye.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ye.instancingMorph===!1&&F.morphTexture!==null||ye.envMap!==Ae||O.fog===!0&&ye.fog!==oe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ne.numPlanes||ye.numIntersection!==ne.numIntersection)||ye.vertexAlphas!==Be||ye.vertexTangents!==He||ye.morphTargets!==Re||ye.morphNormals!==at||ye.morphColors!==Tt||ye.toneMapping!==Mt||ye.morphTargetsCount!==$t)&&(Ke=!0):(Ke=!0,ye.__version=O.version);let Bn=ye.currentProgram;Ke===!0&&(Bn=ya(O,I,F));let jn=!1,ir=!1,Dr=!1;const ht=Bn.getUniforms(),Yt=ye.uniforms;if(Ee.useProgram(Bn.program)&&(jn=!0,ir=!0,Dr=!0),O.id!==H&&(H=O.id,ir=!0),jn||V!==x){Ee.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ht.setValue(R,"projectionMatrix",x.projectionMatrix),ht.setValue(R,"viewMatrix",x.matrixWorldInverse);const Ni=ht.map.cameraPosition;Ni!==void 0&&Ni.setValue(R,qe.setFromMatrixPosition(x.matrixWorld)),ft.logarithmicDepthBuffer&&ht.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ht.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),V!==x&&(V=x,ir=!0,Dr=!0)}if(ye.needsLights&&(fn.state.directionalShadowMap.length>0&&ht.setValue(R,"directionalShadowMap",fn.state.directionalShadowMap,D),fn.state.spotShadowMap.length>0&&ht.setValue(R,"spotShadowMap",fn.state.spotShadowMap,D),fn.state.pointShadowMap.length>0&&ht.setValue(R,"pointShadowMap",fn.state.pointShadowMap,D)),F.isSkinnedMesh){ht.setOptional(R,F,"bindMatrix"),ht.setOptional(R,F,"bindMatrixInverse");const Gt=F.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ht.setValue(R,"boneTexture",Gt.boneTexture,D))}F.isBatchedMesh&&(ht.setOptional(R,F,"batchingTexture"),ht.setValue(R,"batchingTexture",F._matricesTexture,D),ht.setOptional(R,F,"batchingIdTexture"),ht.setValue(R,"batchingIdTexture",F._indirectTexture,D),ht.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ht.setValue(R,"batchingColorTexture",F._colorsTexture,D));const Fi=z.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&he.update(F,z,Bn),(ir||ye.receiveShadow!==F.receiveShadow)&&(ye.receiveShadow=F.receiveShadow,ht.setValue(R,"receiveShadow",F.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Yt.envMapIntensity.value=I.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=kx()),ir&&(ht.setValue(R,"toneMappingExposure",E.toneMappingExposure),ye.needsLights&&y0(Yt,Dr),oe&&O.fog===!0&&Pe.refreshFogUniforms(Yt,oe),Pe.refreshMaterialUniforms(Yt,O,Fe,ue,C.state.transmissionRenderTarget[x.id]),ao.upload(R,bh(ye),Yt,D)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ao.upload(R,bh(ye),Yt,D),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ht.setValue(R,"center",F.center),ht.setValue(R,"modelViewMatrix",F.modelViewMatrix),ht.setValue(R,"normalMatrix",F.normalMatrix),ht.setValue(R,"modelMatrix",F.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Gt=O.uniformsGroups;for(let Ni=0,Ir=Gt.length;Ni<Ir;Ni++){const Ah=Gt[Ni];me.update(Ah,Bn),me.bind(Ah,Bn)}}return Bn}function y0(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function b0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,I,z){const O=g.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=I,g.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:z,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const z=g.get(x);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const T0=R.createFramebuffer();this.setRenderTarget=function(x,I=0,z=0){k=x,A=I,B=z;let O=null,F=!1,oe=!1;if(x){const ce=g.get(x);if(ce.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(R.FRAMEBUFFER,ce.__webglFramebuffer),G.copy(x.viewport),U.copy(x.scissor),J=x.scissorTest,Ee.viewport(G),Ee.scissor(U),Ee.setScissorTest(J),H=-1;return}else if(ce.__webglFramebuffer===void 0)D.setupRenderTarget(x);else if(ce.__hasExternalTextures)D.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Be=x.depthTexture;if(ce.__boundDepthTexture!==Be){if(Be!==null&&g.has(Be)&&(x.width!==Be.image.width||x.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(x)}}const Me=x.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(oe=!0);const Ae=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?O=Ae[I][z]:O=Ae[I],F=!0):x.samples>0&&D.useMultisampledRTT(x)===!1?O=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Ae)?O=Ae[z]:O=Ae,G.copy(x.viewport),U.copy(x.scissor),J=x.scissorTest}else G.copy(Y).multiplyScalar(Fe).floor(),U.copy(ee).multiplyScalar(Fe).floor(),J=te;if(z!==0&&(O=T0),Ee.bindFramebuffer(R.FRAMEBUFFER,O)&&Ee.drawBuffers(x,O),Ee.viewport(G),Ee.scissor(U),Ee.setScissorTest(J),F){const ce=g.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,ce.__webglTexture,z)}else if(oe){const ce=I;for(let Me=0;Me<x.textures.length;Me++){const Ae=g.get(x.textures[Me]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,z,ce)}}else if(x!==null&&z!==0){const ce=g.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ce.__webglTexture,z)}H=-1},this.readRenderTargetPixels=function(x,I,z,O,F,oe,de,ce=0){if(!(x&&x.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Ee.bindFramebuffer(R.FRAMEBUFFER,Me);try{const Ae=x.textures[ce],Be=Ae.format,He=Ae.type;if(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ce),!ft.textureFormatReadable(Be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(He)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-O&&z>=0&&z<=x.height-F&&R.readPixels(I,z,O,F,se.convert(Be),se.convert(He),oe)}finally{const Ae=k!==null?g.get(k).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(x,I,z,O,F,oe,de,ce=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me)if(I>=0&&I<=x.width-O&&z>=0&&z<=x.height-F){Ee.bindFramebuffer(R.FRAMEBUFFER,Me);const Ae=x.textures[ce],Be=Ae.format,He=Ae.type;if(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ce),!ft.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),R.readPixels(I,z,O,F,se.convert(Be),se.convert(He),0);const at=k!==null?g.get(k).__webglFramebuffer:null;Ee.bindFramebuffer(R.FRAMEBUFFER,at);const Tt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await lg(R,Tt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Re),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(Re),R.deleteSync(Tt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,z=0){const O=Math.pow(2,-z),F=Math.floor(x.image.width*O),oe=Math.floor(x.image.height*O),de=I!==null?I.x:0,ce=I!==null?I.y:0;D.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,de,ce,F,oe),Ee.unbindTexture()};const A0=R.createFramebuffer(),w0=R.createFramebuffer();this.copyTextureToTexture=function(x,I,z=null,O=null,F=0,oe=0){let de,ce,Me,Ae,Be,He,Re,at,Tt;const Mt=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(z!==null)de=z.max.x-z.min.x,ce=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,Be=z.min.y,He=z.isBox3?z.min.z:0;else{const Yt=Math.pow(2,-F);de=Math.floor(Mt.width*Yt),ce=Math.floor(Mt.height*Yt),x.isDataArrayTexture?Me=Mt.depth:x.isData3DTexture?Me=Math.floor(Mt.depth*Yt):Me=1,Ae=0,Be=0,He=0}O!==null?(Re=O.x,at=O.y,Tt=O.z):(Re=0,at=0,Tt=0);const ot=se.convert(I.format),$t=se.convert(I.type);let ye;I.isData3DTexture?(D.setTexture3D(I,0),ye=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),ye=R.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),ye=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const fn=R.getParameter(R.UNPACK_ROW_LENGTH),Ke=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Bn=R.getParameter(R.UNPACK_SKIP_PIXELS),jn=R.getParameter(R.UNPACK_SKIP_ROWS),ir=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Mt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Mt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Be),R.pixelStorei(R.UNPACK_SKIP_IMAGES,He);const Dr=x.isDataArrayTexture||x.isData3DTexture,ht=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const Yt=g.get(x),Fi=g.get(I),Gt=g.get(Yt.__renderTarget),Ni=g.get(Fi.__renderTarget);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ir=0;Ir<Me;Ir++)Dr&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(x).__webglTexture,F,He+Ir),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,g.get(I).__webglTexture,oe,Tt+Ir)),R.blitFramebuffer(Ae,Be,de,ce,Re,at,de,ce,R.DEPTH_BUFFER_BIT,R.NEAREST);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||g.has(x)){const Yt=g.get(x),Fi=g.get(I);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,A0),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,w0);for(let Gt=0;Gt<Me;Gt++)Dr?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,F,He+Gt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,F),ht?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fi.__webglTexture,oe,Tt+Gt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Fi.__webglTexture,oe),F!==0?R.blitFramebuffer(Ae,Be,de,ce,Re,at,de,ce,R.COLOR_BUFFER_BIT,R.NEAREST):ht?R.copyTexSubImage3D(ye,oe,Re,at,Tt+Gt,Ae,Be,de,ce):R.copyTexSubImage2D(ye,oe,Re,at,Ae,Be,de,ce);Ee.bindFramebuffer(R.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ht?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(ye,oe,Re,at,Tt,de,ce,Me,ot,$t,Mt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(ye,oe,Re,at,Tt,de,ce,Me,ot,Mt.data):R.texSubImage3D(ye,oe,Re,at,Tt,de,ce,Me,ot,$t,Mt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,oe,Re,at,de,ce,ot,$t,Mt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,oe,Re,at,Mt.width,Mt.height,ot,Mt.data):R.texSubImage2D(R.TEXTURE_2D,oe,Re,at,de,ce,ot,$t,Mt);R.pixelStorei(R.UNPACK_ROW_LENGTH,fn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ke),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Bn),R.pixelStorei(R.UNPACK_SKIP_ROWS,jn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ir),oe===0&&I.generateMipmaps&&R.generateMipmap(ye),Ee.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&D.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?D.setTextureCube(x,0):x.isData3DTexture?D.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?D.setTexture2DArray(x,0):D.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){A=0,B=0,k=null,Ee.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}var as=typeof self<"u"?self:{};function ra(t,e){e:{for(var n=["CLOSURE_FLAGS"],i=as,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break e}n=i}return(t=n&&n[t])!=null?t:e}function ur(){throw Error("Invalid UTF8")}function Rf(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let $a,Uc;const Gx=typeof TextDecoder<"u";let zx;const Hx=typeof TextEncoder<"u";function mp(t){if(Hx)t=(zx||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function gp(t){as.setTimeout((()=>{throw t}),0)}var zl,Wx=ra(610401301,!1),Cf=ra(748402147,!0),Eu=ra(824648567,!0),yu=ra(824656860,ra(1,!0));function Pf(){var t=as.navigator;return t&&(t=t.userAgent)?t:""}const Lf=as.navigator;function Co(t){return Co[" "](t),t}zl=Lf&&Lf.userAgentData||null,Co[" "]=function(){};const _p={};let Ks=null;function Xx(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return(function(s,a){function o(l){for(;c<s.length;){const h=s.charAt(c++),d=Ks[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}vp();let c=0;for(;;){const l=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&l===-1)break;a(l<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(t,(function(s){i[r++]=s})),r!==n?i.subarray(0,r):i}function vp(){if(!Ks){Ks={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));_p[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Ks[s]===void 0&&(Ks[s]=r)}}}}var qx=typeof Uint8Array<"u",xp=!(!(Wx&&zl&&zl.brands.length>0)&&(Pf().indexOf("Trident")!=-1||Pf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Df=/[-_.]/g,Yx={"-":"+",_:"/",".":"="};function jx(t){return Yx[t]||""}function Sp(t){if(!xp)return Xx(t);t=Df.test(t)?t.replace(Df,jx):t,t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function bu(t){return qx&&t!=null&&t instanceof Uint8Array}var os={};function Ar(){return Kx||=new ai(null,os)}function Tu(t){Mp(os);var e=t.g;return(e=e==null||bu(e)?e:typeof e=="string"?Sp(e):null)==null?e:t.g=e}var ai=class{h(){return new Uint8Array(Tu(this)||0)}constructor(t,e){if(Mp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Kx,$x;function Mp(t){if(t!==os)throw Error("illegal external caller")}function Ep(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Hl(t){return Ep(t=Error(t),"warning"),t}function cs(t,e){if(t!=null){var n=$x??={},i=n[t]||0;i>=e||(n[t]=i+1,Ep(t=Error(),"incident"),gp(t))}}function ys(){return typeof BigInt=="function"}var bs=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ui(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Zx=ui("jas",void 0,!0),If=ui(void 0,"0di"),Hs=ui(void 0,"1oa"),Sn=ui(void 0,Symbol()),Jx=ui(void 0,"0ub"),Qx=ui(void 0,"0ubs"),Wl=ui(void 0,"0ubsb"),e3=ui(void 0,"0actk"),ls=ui("m_m","Pa",!0),Uf=ui();const yp={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},bp=Object.defineProperties,be=bs?Zx:"Ga";var Cr;const Ff=[];function fa(t,e){bs||be in t||bp(t,yp),t[be]|=e}function kt(t,e){bs||be in t||bp(t,yp),t[be]=e}function da(t){return fa(t,34),t}function sa(t){return fa(t,8192),t}kt(Ff,7),Cr=Object.freeze(Ff);var us={};function En(t,e){return e===void 0?t.h!==wr&&!!(2&(0|t.v[be])):!!(2&e)&&t.h!==wr}const wr={};function Au(t,e){if(t!=null){if(typeof t=="string")t=t?new ai(t,os):Ar();else if(t.constructor!==ai)if(bu(t))t=t.length?new ai(new Uint8Array(t),os):Ar();else{if(!e)throw Error();t=void 0}}return t}class Nf{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var t3=Object.freeze({});function Tp(t,e,n){const i=128&e?0:-1,r=t.length;var s;(s=!!r)&&(s=(s=t[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(e=128&e?1:0;e<a;e++)n(e-i,t[e]);if(s){t=t[r-1];for(const o in t)!isNaN(o)&&n(+o,t[o])}}var Ap={};function Ts(t){return 128&t?Ap:void 0}function Po(t){return t.Na=!0,t}var n3=Po((t=>typeof t=="number")),Of=Po((t=>typeof t=="string")),i3=Po((t=>typeof t=="boolean")),Lo=typeof as.BigInt=="function"&&typeof as.BigInt(0)=="bigint";function Mn(t){var e=t;if(Of(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(n3(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Lo?BigInt(t):t=i3(t)?t?"1":"0":Of(t)?t.trim()||"0":String(t)}var Xl=Po((t=>Lo?t>=s3&&t<=o3:t[0]==="-"?Bf(t,r3):Bf(t,a3)));const r3=Number.MIN_SAFE_INTEGER.toString(),s3=Lo?BigInt(Number.MIN_SAFE_INTEGER):void 0,a3=Number.MAX_SAFE_INTEGER.toString(),o3=Lo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Bf(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const c3=typeof Uint8Array.prototype.slice=="function";let l3,xt=0,Dt=0;function kf(t){const e=t>>>0;xt=e,Dt=(t-e)/4294967296>>>0}function hs(t){if(t<0){kf(-t);const[e,n]=Pu(xt,Dt);xt=e>>>0,Dt=n>>>0}else kf(t)}function wu(t){const e=l3||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Dt=0,xt=e.getUint32(0,!0)}function ql(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:aa(t,e)}function u3(t,e){return Mn(ys()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):aa(t,e))}function Ru(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=ql(t,e))=="number"?n?-t:t:n?"-"+t:t}function wp(t,e){return ys()?Mn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):Mn(Cu(t,e))}function aa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else ys()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Vf(n)+Vf(t));return n}function Vf(t){return t=String(t),"0000000".slice(t.length)+t}function Cu(t,e){if(2147483648&e)if(ys())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Pu(t,e);t="-"+aa(n,i)}else t=aa(t,e);return t}function Do(t){if(t.length<16)hs(Number(t));else if(ys())t=BigInt(t),xt=Number(t&BigInt(4294967295))>>>0,Dt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Dt=xt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Dt*=1e6,xt=1e6*xt+s,xt>=4294967296&&(Dt+=Math.trunc(xt/4294967296),Dt>>>=0,xt>>>=0)}if(e){const[i,r]=Pu(xt,Dt);xt=i,Dt=r}}}function Pu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Wn(t){return Array.prototype.slice.call(t)}const pa=typeof BigInt=="function"?BigInt.asIntN:void 0,h3=typeof BigInt=="function"?BigInt.asUintN:void 0,Rr=Number.isSafeInteger,Io=Number.isFinite,fs=Math.trunc,f3=Mn(0);function $s(t){if(t!=null&&typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function ii(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function oa(t){if(t!=null&&typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Rp(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const d3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ma(t){switch(typeof t){case"bigint":return!0;case"number":return Io(t);case"string":return d3.test(t);default:return!1}}function As(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Io(t)?0|t:void 0}function Cp(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Io(t)?t>>>0:void 0}function Pp(t){const e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(Do(t),Cu(xt,Dt))}function Lu(t){return t=fs(t),Rr(t)||(hs(t),t=Ru(xt,Dt)),t}function Lp(t){var e=fs(Number(t));return Rr(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Pp(t))}function Dp(t){var e=fs(Number(t));return Rr(e)?Mn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),ys()?Mn(pa(64,BigInt(t))):Mn(Pp(t)))}function Ip(t){return Rr(t)?t=Mn(Lu(t)):(t=fs(t),Rr(t)?t=String(t):(hs(t),t=Cu(xt,Dt)),t=Mn(t)),t}function p3(t){return t==null?t:typeof t=="bigint"?(Xl(t)?t=Number(t):(t=pa(64,t),t=Xl(t)?Number(t):String(t)),t):ma(t)?typeof t=="number"?Lu(t):Lp(t):void 0}function go(t){const e=typeof t;return t==null?t:e==="bigint"?Mn(pa(64,t)):ma(t)?e==="string"?Dp(t):Ip(t):void 0}function Up(t){if(typeof t!="string")throw Error();return t}function ga(t){if(t!=null&&typeof t!="string")throw Error();return t}function Kt(t){return t==null||typeof t=="string"?t:void 0}function Du(t,e,n,i){return t!=null&&t[ls]===us?t:Array.isArray(t)?((i=(n=0|t[be])|32&i|2&i)!==n&&kt(t,i),new e(t)):(n?2&i?((t=e[If])||(da((t=new e).v),t=e[If]=t),e=t):e=new e:e=void 0,e)}function m3(t,e,n){if(e)e:{if(!ma(e=t))throw Hl("int64");switch(typeof e){case"string":e=Dp(e);break e;case"bigint":e=Mn(pa(64,e));break e;default:e=Ip(e)}}else e=go(t);return(t=e)==null?n?f3:void 0:t}const g3={};let _3=(function(){try{return Co(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Fc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const v3=_3?(Object.setPrototypeOf(Fc.prototype,Map.prototype),Object.defineProperties(Fc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Fc):class extends Map{constructor(){super()}};function Gf(t){return t}function Nc(t){if(2&t.J)throw Error("Cannot mutate an immutable Map")}var Pi=class extends v3{constructor(t,e,n=Gf,i=Gf){super(),this.J=0|t[be],this.K=e,this.S=n,this.fa=this.K?x3:i;for(let r=0;r<t.length;r++){const s=t[r],a=n(s[0],!1,!0);let o=s[1];e?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(t){return sa(Array.from(super.entries(),t))}clear(){Nc(this),super.clear()}delete(t){return Nc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.K){var t=super.keys();t=new Nf(t,S3,this)}else t=super.entries();return t}values(){if(this.K){var t=super.keys();t=new Nf(t,Pi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.K?super.forEach(((n,i,r)=>{t.call(e,r.get(i),i,r)})):super.forEach(t,e)}set(t,e){return Nc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.K?t===void 0?null:t:this.fa(t,!1,!0,void 0,!1,this.J),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.K;return n?((n=this.fa(e,!1,!0,n,this.ra,this.J))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function x3(t,e,n,i,r,s){return t=Du(t,i,n,s),r&&(t=Uu(t)),t}function S3(t){return[t,this.get(t)]}let M3;function zf(){return M3||=new Pi(da([]),void 0,void 0,void 0,g3)}function Uo(t){return Sn?t[Sn]:void 0}function _o(t,e){for(const n in t)!isNaN(n)&&e(t,+n,t[n])}Pi.prototype.toJSON=void 0;var Yl=class{};const E3={Ka:!0};function y3(t,e){e<100||cs(Qx,1)}function Fo(t,e,n,i){const r=i!==void 0;i=!!i;var s,a=Sn;!r&&bs&&a&&(s=t[a])&&_o(s,y3),a=[];var o=t.length;let c;s=4294967295;let l=!1;const h=!!(64&e),d=h?128&e?0:-1:void 0;1&e||(c=o&&t[o-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--o:c=void 0,!h||128&e||r||(l=!0,s=s-d+d)),e=void 0;for(var u=0;u<o;u++){let m=t[u];if(m!=null&&(m=n(m,i))!=null)if(h&&u>=s){const _=u-d;(e??={})[_]=m}else a[u]=m}if(c)for(let m in c){if((o=c[m])==null||(o=n(o,i))==null)continue;let _;u=+m,h&&!Number.isNaN(u)&&(_=u+d)<s?a[_]=o:(e??={})[m]=o}return e&&(l?a.push(e):a[s]=e),r&&Sn&&(t=Uo(t))&&t instanceof Yl&&(a[Sn]=(function(m){const _=new Yl;return _o(m,((S,p,f)=>{_[p]=Wn(f)})),_.da=m.da,_})(t)),a}function b3(t){return t[0]=ca(t[0]),t[1]=ca(t[1]),t}function ca(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Xl(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[be];return t.length===0&&1&e?void 0:Fo(t,e,ca)}if(t!=null&&t[ls]===us)return Fp(t);if(t instanceof ai){if((e=t.g)==null)t="";else if(typeof e=="string")t=e;else{if(xp){for(var n="",i=0,r=e.length-10240;i<r;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),vp(),n=_p[n],i=Array(Math.floor(e.length/3)),r=n[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var s=e[l],a=e[l+1],o=e[l+2],c=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+s+a+o}switch(c=0,o=r,e.length-l){case 2:o=n[(15&(c=e[l+1]))<<2]||r;case 1:e=e[l],i[h]=n[e>>2]+n[(3&e)<<4|c>>4]+o+r}e=i.join("")}t=t.g=e}return t}return t instanceof Pi?t=t.size!==0?t.V(b3):void 0:void 0}return t}function Fp(t){return Fo(t=t.v,0|t[be],ca)}let T3,A3;function Sr(t,e){return Np(t,e[0],e[1])}function Np(t,e,n,i=0){if(t==null){var r=32;n?(t=[n],r|=128):t=[],e&&(r=-16760833&r|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(r=0|t[be],Cf&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&(function(){if(Cf)throw Error("carr");cs(e3,5)})(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&kt(t,r|i),t;if(n&&(r|=128,n!==t[0]))throw Error("mid");e:{r|=64;var s=(n=t).length;if(s){var a=s-1;const c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(s=+o)<a&&(n[s+e]=c[o],delete c[o]);r=-16760833&r|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return kt(t,64|r|i),t}function w3(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[be];return t.length===0&&1&n?void 0:Hf(t,n,e)}if(t!=null&&t[ls]===us)return Wf(t);if(t instanceof Pi){if(2&(e=t.J))return t;if(!t.size)return;if(n=da(t.V()),t.K)for(t=0;t<n.length;t++){const i=n[t];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[ls]===us?Wf(r):Array.isArray(r)?Hf(r,0|r[be],!!(32&e)):void 0,i[1]=r}return n}return t instanceof ai?t:void 0}function Hf(t,e,n){return 2&e||(!n||4096&e||16&e?t=ws(t,e,!1,n&&!(16&e)):(fa(t,34),4&e&&Object.freeze(t))),t}function Iu(t,e,n){return t=new t.constructor(e),n&&(t.h=wr),t.m=wr,t}function Wf(t){const e=t.v,n=0|e[be];return En(t,n)?t:Fu(t,e,n)?Iu(t,e):ws(e,n)}function ws(t,e,n,i){return i??=!!(34&e),t=Fo(t,e,w3,i),i=32,n&&(i|=2),kt(t,e=16769217&e|i),t}function Uu(t){const e=t.v,n=0|e[be];return En(t,n)?Fu(t,e,n)?Iu(t,e,!0):new t.constructor(ws(e,n,!1)):t}function Rs(t){if(t.h!==wr)return!1;var e=t.v;return fa(e=ws(e,0|e[be]),2048),t.v=e,t.h=void 0,t.m=void 0,!0}function Cs(t){if(!Rs(t)&&En(t,0|t.v[be]))throw Error()}function Pr(t,e){e===void 0&&(e=0|t[be]),32&e&&!(4096&e)&&kt(t,4096|e)}function Fu(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(kt(e,2|n),t.h=wr,!0)}const R3=Mn(0),Hi={};function gt(t,e,n,i,r){if((e=Li(t.v,e,n,r))!==null||i&&t.m!==wr)return e}function Li(t,e,n,i){if(e===-1)return null;const r=e+(n?0:-1),s=t.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=t[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[e],o=!0;else{if(r!==s)return;n=a}else n=t[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[r]=i,i}return n}}function ct(t,e,n,i){Cs(t),Ft(t=t.v,0|t[be],e,n,i)}function Ft(t,e,n,i,r){const s=n+(r?0:-1);var a=t.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return s<=a?(t[s]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[be])>>14&1023||536870912)?i!=null&&(t[a+(r?0:-1)]={[n]:i}):t[s]=i),e)}function _r(){return t3===void 0?2:4}function vr(t,e,n,i,r){let s=t.v,a=0|s[be];i=En(t,a)?1:i,r=!!r||i===3,i===2&&Rs(t)&&(s=t.v,a=0|s[be]);let o=(t=Nu(s,e))===Cr?7:0|t[be],c=Ou(o,a);var l=!(4&c);if(l){4&c&&(t=Wn(t),o=0,c=Er(c,a),a=Ft(s,a,e,t));let h=0,d=0;for(;h<t.length;h++){const u=n(t[h]);u!=null&&(t[d++]=u)}d<h&&(t.length=d),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==o&&(kt(t,c),2&c&&Object.freeze(t)),Op(t,c,s,a,e,i,l,r)}function Op(t,e,n,i,r,s,a,o){let c=e;return s===1||s===4&&(2&e||!(16&e)&&32&i)?Mr(e)||((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&kt(t,e),Object.freeze(t)):(s===2&&Mr(e)&&(t=Wn(t),c=0,e=Er(e,i),i=Ft(n,i,r,t)),Mr(e)||(o||(e|=16),e!==c&&kt(t,e))),2&e||!(4096&e||16&e)||Pr(n,i),t}function Nu(t,e,n){return t=Li(t,e,n),Array.isArray(t)?t:Cr}function Ou(t,e){return 2&e&&(t|=2),1|t}function Mr(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Bp(t){return Au(t,!0)}function kp(t){t=Wn(t);for(let e=0;e<t.length;e++){const n=t[e]=Wn(t[e]);Array.isArray(n[1])&&(n[1]=da(n[1]))}return sa(t)}function Xi(t,e,n,i){Cs(t),Ft(t=t.v,0|t[be],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ps(t,e,n){if(2&e)throw Error();const i=Ts(e);let r=Nu(t,n,i),s=r===Cr?7:0|r[be],a=Ou(s,e);return(2&a||Mr(a)||16&a)&&(a===s||Mr(a)||kt(r,a),r=Wn(r),s=0,a=Er(a,e),Ft(t,e,n,r,i)),a&=-13,a!==s&&kt(r,a),r}function Oc(t,e){var n=Lm;return ku(Bu(t=t.v),t,void 0,n)===e?e:-1}function Bu(t){if(bs)return t[Hs]??(t[Hs]=new Map);if(Hs in t)return t[Hs];const e=new Map;return Object.defineProperty(t,Hs,{value:e}),e}function Vp(t,e,n,i,r){const s=Bu(t),a=ku(s,t,e,n,r);return a!==i&&(a&&(e=Ft(t,e,a,void 0,r)),s.set(n,i)),e}function ku(t,e,n,i,r){let s=t.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Li(e,o,r)!=null&&(s!==0&&(n=Ft(e,n,s,void 0,r)),s=o)}return t.set(i,s),s}function Vu(t,e,n){let i=0|t[be];const r=Ts(i),s=Li(t,n,r);let a;if(s!=null&&s[ls]===us){if(!En(s))return Rs(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[be];2&o&&(a=ws(a,o))}return a=Sr(a,e),a!==s&&Ft(t,i,n,a,r),a}function Gp(t,e,n,i,r){let s=!1;if((i=Li(t,i,r,(a=>{const o=Du(a,n,!1,e);return s=o!==a&&o!=null,o})))!=null)return s&&!En(i)&&Pr(t,e),i}function Je(t,e,n,i){let r=t.v,s=0|r[be];if((e=Gp(r,s,e,n,i))==null)return e;if(s=0|r[be],!En(t,s)){const a=Uu(e);a!==e&&(Rs(t)&&(r=t.v,s=0|r[be]),s=Ft(r,s,n,e=a,i),Pr(r,s))}return e}function zp(t,e,n,i,r,s,a,o){var c=En(t,n);s=c?1:s,a=!!a||s===3,c=o&&!c,(s===2||c)&&Rs(t)&&(n=0|(e=t.v)[be]);var l=(t=Nu(e,r))===Cr?7:0|t[be],h=Ou(l,n);if(o=!(4&h)){var d=t,u=n;const m=!!(2&h);m&&(u|=2);let _=!m,S=!0,p=0,f=0;for(;p<d.length;p++){const M=Du(d[p],i,!1,u);if(M instanceof i){if(!m){const T=En(M);_&&=!T,S&&=T}d[f++]=M}}f<p&&(d.length=f),h|=4,h=S?-4097&h:4096|h,h=_?8|h:-9&h}if(h!==l&&(kt(t,h),2&h&&Object.freeze(t)),c&&!(8&h||!t.length&&(s===1||s===4&&(2&h||!(16&h)&&32&n)))){for(Mr(h)&&(t=Wn(t),h=Er(h,n),n=Ft(e,n,r,t)),i=t,c=h,l=0;l<i.length;l++)(d=i[l])!==(h=Uu(d))&&(i[l]=h);c|=8,kt(t,h=c=i.length?4096|c:-4097&c)}return Op(t,h,e,n,r,s,o,a)}function Di(t,e,n){const i=t.v;return zp(t,i,0|i[be],e,n,_r(),!1,!0)}function Hp(t){return t==null&&(t=void 0),t}function Le(t,e,n,i,r){return ct(t,n,i=Hp(i),r),i&&!En(i)&&Pr(t.v),t}function Zs(t,e,n,i){e:{var r=i=Hp(i);Cs(t);const s=t.v;let a=0|s[be];if(r==null){const o=Bu(s);if(ku(o,s,a,n)!==e)break e;o.set(n,0)}else a=Vp(s,a,n,e);Ft(s,a,e,r)}i&&!En(i)&&Pr(t.v)}function Er(t,e){return-273&(2&e?2|t:-3&t)}function Gu(t,e,n,i){var r=i;Cs(t),t=zp(t,i=t.v,0|i[be],n,e,2,!0),r=r??new n,t.push(r),e=n=t===Cr?7:0|t[be],(r=En(r))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&kt(t,n),r||Pr(i)}function Fn(t,e,n){return As(gt(t,e,void 0,n))}function Wp(t){return(yu?gt(t,2,void 0,void 0,go):go(gt(t,2)))??R3}function wt(t,e){return gt(t,e,void 0,void 0,ii)??0}function Ii(t,e,n){if(n!=null){if(typeof n!="number"||!Io(n))throw Hl("int32");n|=0}ct(t,e,n)}function Ce(t,e,n){ct(t,e,$s(n))}function yn(t,e,n){Xi(t,e,ga(n),"")}function vo(t,e,n){{Cs(t);const a=t.v;let o=0|a[be];if(n==null)Ft(a,o,e);else{var i=t=n===Cr?7:0|n[be],r=Mr(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=Wn(n),i=0,t=Er(t,o),s=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??(yu?1024:0),r=0;r<n.length;r++){const c=n[r],l=Up(c);Object.is(c,l)||(s&&(n=Wn(n),i=0,t=Er(t,o),s=!1),n[r]=l)}t!==i&&(s&&(n=Wn(n),t=Er(t,o)),kt(n,t)),Ft(a,o,e,n)}}}function No(t,e,n){Cs(t),vr(t,e,Kt,2,!0).push(Up(n))}var jr=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.g=e}};function zu(t,e){if(typeof t=="string")return new jr(Sp(t),e);if(Array.isArray(t))return new jr(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new jr(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new jr(t,!1);if(t.constructor===ai)return e=Tu(t)||new Uint8Array(0),new jr(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new jr(t,!1);throw Error()}function ds(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(yr(t,o),!(128&n))return e(i>>>0,r>>>0);throw Error()}function Hu(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return yr(t,n),!!(127&e)}throw Error()}function Ji(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return yr(t,n),r}function Ui(t){return Ji(t)>>>0}function xo(t){var e=t.h;const n=t.g;var i=e[n],r=e[n+1];const s=e[n+2];return e=e[n+3],yr(t,t.g+4),t=2*((r=(i<<0|r<<8|s<<16|e<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:t*(1/0):i==0?1401298464324817e-60*t*r:t*Math.pow(2,i-150)*(r+8388608)}function C3(t){return Ji(t)}function yr(t,e){if(t.g=e,e>t.l)throw Error()}function Xp(t,e){if(e<0)throw Error();const n=t.g;if((e=n+e)>t.l)throw Error();return t.g=e,n}function qp(t,e){if(e==0)return Ar();var n=Xp(t,e);return t.Y&&t.j?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):c3?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ar():new ai(n,os)}var Xf=[];function Yp(t,e,n,i){if(So.length){const r=So.pop();return r.o(i),r.g.init(t,e,n,i),r}return new P3(t,e,n,i)}function jp(t){t.g.clear(),t.l=-1,t.h=-1,So.length<100&&So.push(t)}function Kp(t){var e=t.g;if(e.g==e.l)return!1;t.m=t.g.g;var n=Ui(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.h=n,!0}function oo(t){switch(t.h){case 0:t.h!=0?oo(t):Hu(t.g);break;case 1:yr(t=t.g,t.g+8);break;case 2:if(t.h!=2)oo(t);else{var e=Ui(t.g);yr(t=t.g,t.g+e)}break;case 5:yr(t=t.g,t.g+4);break;case 3:for(e=t.l;;){if(!Kp(t))throw Error();if(t.h==4){if(t.l!=e)throw Error();break}oo(t)}break;default:throw Error()}}function _a(t,e,n){const i=t.g.l;var r=Ui(t.g);let s=(r=t.g.g+r)-i;if(s<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),s=r-t.g.g),s)throw Error();return t.g.g=r,t.g.l=i,e}function Wu(t){var e=Ui(t.g),n=Xp(t=t.g,e);if(t=t.h,Gx){var i,r=t;(i=Uc)||(i=Uc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if($a===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),$a=!0}catch{$a=!1}}throw!$a&&(Uc=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?ur():(o=t[s++],a<194||(192&o)!=128?(s--,ur()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?ur():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,ur()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?ur():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,ur()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):ur(),n.length>=8192&&(c=Rf(c,n),n.length=0)}s=Rf(c,n)}return s}function $p(t){const e=Ui(t.g);return qp(t.g,e)}function Oo(t,e,n){var i=Ui(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var P3=class{constructor(t,e,n,i){if(Xf.length){const r=Xf.pop();r.init(t,e,n,i),t=r}else t=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:c=!1}={}){this.Y=o,this.ea=c,r&&(r=zu(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(t,e,n,i);this.g=t,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:t=!1}={}){this.ha=t}},So=[];function qf(t){return t?/^\d+$/.test(t)?(Do(t),new jl(xt,Dt)):null:L3||=new jl(0,0)}var jl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let L3;function Yf(t){return t?/^-?\d+$/.test(t)?(Do(t),new Kl(xt,Dt)):null:D3||=new Kl(0,0)}var Kl=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let D3;function Qr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ls(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Bo(t,e){if(e>=0)Ls(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Xu(t){var e=xt;t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function ps(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Nn(t,e,n){Ls(t.g,8*e+n)}function qu(t,e){return Nn(t,e,2),e=t.g.end(),ps(t,e),e.push(t.h),e}function Yu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function ko(t,e,n){Nn(t,e,2),Ls(t.g,n.length),ps(t,t.g.end()),ps(t,n)}function Mo(t,e,n,i){n!=null&&(e=qu(t,e),i(n,t),Yu(t,e))}function hi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var ju=hi(),Zp=hi(),Ku=hi(),$u=hi(),Jp=hi(),Qp=hi(),I3=hi(),Vo=hi(),em=hi(),tm=hi();function fi(t,e,n){var i=t.v;Sn&&Sn in i&&(i=i[Sn])&&delete i[e.g],e.h?e.j(t,e.h,e.g,n,e.l):e.j(t,e.g,n,e.l)}var Te=class{constructor(t,e){this.v=Np(t,e,void 0,2048)}toJSON(){return Fp(this)}j(){var t=mS,e=this.v,n=t.g,i=Sn;if(bs&&i&&e[i]?.[n]!=null&&cs(Jx,3),e=t.g,Uf&&Sn&&Uf===void 0&&(i=(n=this.v)[Sn])&&(i=i.da))try{i(n,e,E3)}catch(r){gp(r)}return t.h?t.m(this,t.h,t.g,t.l):t.m(this,t.g,t.defaultValue,t.l)}clone(){const t=this.v,e=0|t[be];return Fu(this,t,e)?Iu(this,t,!0):new this.constructor(ws(t,e,!1))}};Te.prototype[ls]=us,Te.prototype.toString=function(){return this.v.toString()};var Ds=class{constructor(t,e,n){this.g=t,this.h=e,t=ju,this.l=!!t&&n===t||!1}};function Go(t,e){return new Ds(t,e,ju)}function nm(t,e,n,i,r){Mo(t,n,am(e,i),r)}const U3=Go((function(t,e,n,i,r){return t.h===2&&(_a(t,Vu(e,i,n),r),!0)}),nm),F3=Go((function(t,e,n,i,r){return t.h===2&&(_a(t,Vu(e,i,n),r),!0)}),nm);var zo=Symbol(),Ho=Symbol(),$l=Symbol(),jf=Symbol(),Kf=Symbol();let im,rm;function Lr(t,e,n,i){var r=i[t];if(r)return r;(r={}).qa=i,r.T=(function(d){switch(typeof d){case"boolean":return T3||=[0,void 0,!0];case"number":return d>0?void 0:d===0?A3||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,im??=s,rm??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let d;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof Ds?d=s:(d=U3,a--),d?.l){s=i[++a],l=i;var h=a;typeof s=="function"&&(s=s(),l[h]=s),l=s}for(h=c+1,typeof(s=i[++a])=="number"&&s<0&&(h-=s,s=i[++a]);c<h;c++){const u=o[c];l?n(r,c,d,l,u):e(r,c,d,u)}}return i[t]=r}function sm(t){return Array.isArray(t)?t[0]instanceof Ds?t:[F3,t]:[t,void 0]}function am(t,e){return t instanceof Te?t.v:Array.isArray(t)?Sr(t,e):void 0}function Zu(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function Ju(t,e,n,i,r){const s=n.g;let a,o;t[e]=(c,l,h)=>s(c,l,h,o||=Lr(Ho,Zu,Ju,i).T,a||=Qu(i),r)}function Qu(t){let e=t[$l];if(e!=null)return e;const n=Lr(Ho,Zu,Ju,t);return e=n.ma?(i,r)=>im(i,r,n):(i,r)=>{for(;Kp(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=O3(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,oo(o),o.ha)var c=void 0;else c=o.g.g-a,o.g.g=a,c=qp(o.g,c);a=void 0,o=i,c&&((a=o[Sn]??(o[Sn]=new Yl))[s]??(a[s]=[])).push(c)}}return(i=Uo(i))&&(i.da=n.qa[Kf]),!0},t[$l]=e,t[Kf]=N3.bind(t),e}function N3(t,e,n,i){var r=this[Ho];const s=this[$l],a=Sr(void 0,r.T),o=Uo(t);if(o){var c=!1,l=r.ba;if(l){if(r=(h,d,u)=>{if(u.length!==0)if(l[d])for(const m of u){h=Yp(m);try{c=!0,s(a,h)}finally{jp(h)}}else i?.(t,d,u)},e==null)_o(o,r);else if(o!=null){const h=o[e];h&&r(o,e,h)}if(c){let h=0|t[be];if(2&h&&2048&h&&!n?.Ka)throw Error();const d=Ts(h),u=(m,_)=>{if(Li(t,m,d)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(h=Ft(t,h,m,_,d)),delete o[m]};e==null?Tp(a,0|a[be],((m,_)=>{u(m,_)})):u(e,Li(a,e,d))}}}}function O3(t){const e=(t=sm(t))[0].g;if(t=t[1]){const n=Qu(t),i=Lr(Ho,Zu,Ju,t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}function Wo(t,e,n){t[e]=n.h}function Xo(t,e,n,i){let r,s;const a=n.h;t[e]=(o,c,l)=>a(o,c,l,s||=Lr(zo,Wo,Xo,i).T,r||=om(i))}function om(t){let e=t[jf];if(!e){const n=Lr(zo,Wo,Xo,t);e=(i,r)=>cm(i,r,n),t[jf]=e}return e}function cm(t,e,n){Tp(t,0|t[be],((i,r)=>{if(r!=null){var s=(function(a,o){var c=a[o];if(c)return c;if((c=a.ba)&&(c=c[o])){var l=(c=sm(c))[0].h;if(c=c[1]){const h=om(c),d=Lr(zo,Wo,Xo,c).T;c=a.ma?rm(d,h):(u,m,_)=>l(u,m,_,d,h)}else c=l;return a[o]=c}})(n,i);s?s(e,r,i):i<500||cs(Wl,3)}})),(t=Uo(t))&&_o(t,((i,r,s)=>{for(ps(e,e.g.end()),i=0;i<s.length;i++)ps(e,Tu(s[i])||new Uint8Array(0))}))}const B3=Mn(0);function Is(t,e){if(Array.isArray(e)){var n=0|e[be];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),(t=-1537&(5|n))!==n&&kt(e,t),2&t&&Object.freeze(e),e}}function an(t,e,n){return new Ds(t,e,n)}function Us(t,e,n){return new Ds(t,e,n)}function qt(t,e,n){Ft(t,0|t[be],e,n,Ts(0|t[be]))}var k3=Go((function(t,e,n,i,r){if(t.h!==2)return!1;if(t=Wn(t=_a(t,Sr([void 0,void 0],i),r)),r=Ts(i=0|e[be]),2&i)throw Error();let s=Li(e,n,r);if(s instanceof Pi)(2&s.J)!=0?(s=s.V(),s.push(t),Ft(e,i,n,s,r)):s.Ma(t);else if(Array.isArray(s)){var a=0|s[be];8192&a||kt(s,a|=8192),2&a&&(s=kp(s),Ft(e,i,n,s,r)),s.push(t)}else Ft(e,i,n,sa([t]),r);return!0}),(function(t,e,n,i,r){if(e instanceof Pi)e.forEach(((s,a)=>{Mo(t,n,Sr([a,s],i),r)}));else if(Array.isArray(e)){for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Mo(t,n,Sr(a,i),r)}sa(e)}}));function lm(t,e,n){(e=ii(e))!=null&&(Nn(t,n,5),t=t.g,wu(e),Xu(t))}function um(t,e,n){if(e=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(pa(64,i));if(ma(i)){if(r==="string")return Lp(i);if(r==="number")return Lu(i)}})(e),e!=null&&(typeof e=="string"&&Yf(e),e!=null))switch(Nn(t,n,0),typeof e){case"number":t=t.g,hs(e),Qr(t,xt,Dt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Kl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qr(t.g,n.h,n.g);break;default:n=Yf(e),Qr(t.g,n.h,n.g)}}function hm(t,e,n){(e=As(e))!=null&&e!=null&&(Nn(t,n,0),Bo(t.g,e))}function fm(t,e,n){(e=Rp(e))!=null&&(Nn(t,n,0),t.g.g.push(e?1:0))}function dm(t,e,n){(e=Kt(e))!=null&&ko(t,n,mp(e))}function pm(t,e,n,i,r){Mo(t,n,am(e,i),r)}function mm(t,e,n){(e=e==null||typeof e=="string"||e instanceof ai?e:void 0)!=null&&ko(t,n,zu(e,!0).buffer)}function gm(t,e,n){return(t.h===5||t.h===2)&&(e=Ps(e,0|e[be],n),t.h==2?Oo(t,xo,e):e.push(xo(t.g)),!0)}var It=an((function(t,e,n){return t.h===5&&(qt(e,n,xo(t.g)),!0)}),lm,Vo),V3=Us(gm,(function(t,e,n){if((e=Is(ii,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Nn(i,r,5),i=i.g,wu(s),Xu(i))}}),Vo),eh=Us(gm,(function(t,e,n){if((e=Is(ii,e))!=null&&e.length){Nn(t,n,2),Ls(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,wu(e[i]),Xu(n)}}),Vo),G3=an((function(t,e,n){return t.h===5&&(qt(e,n,(t=xo(t.g))===0?void 0:t),!0)}),lm,Vo),Qi=an((function(t,e,n){return Eu?(t.h!==0?t=!1:(qt(e,n,ds(t.g,wp)),t=!0),t):t.h===0&&(qt(e,n,ds(t.g,Ru)),!0)}),um,Qp),Bc=an((function(t,e,n){return Eu?(t.h!==0?e=!1:(qt(e,n,(t=ds(t.g,wp))===B3?void 0:t),e=!0),e):t.h===0&&(qt(e,n,(t=ds(t.g,Ru))===0?void 0:t),!0)}),um,Qp),z3=an((function(t,e,n){return Eu?(t.h!==0?t=!1:(qt(e,n,ds(t.g,u3)),t=!0),t):t.h===0&&(qt(e,n,ds(t.g,ql)),!0)}),(function(t,e,n){if(e=(function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(h3(64,i));if(ma(i)){if(r==="string")return r=fs(Number(i)),Rr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Do(i),i=aa(xt,Dt))),i;if(r==="number")return(i=fs(i))>=0&&Rr(i)||(hs(i),i=ql(xt,Dt)),i}})(e),e!=null&&(typeof e=="string"&&qf(e),e!=null))switch(Nn(t,n,0),typeof e){case"number":t=t.g,hs(e),Qr(t,xt,Dt);break;case"bigint":n=BigInt.asUintN(64,e),n=new jl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qr(t.g,n.h,n.g);break;default:n=qf(e),Qr(t.g,n.h,n.g)}}),I3),Xt=an((function(t,e,n){return t.h===0&&(qt(e,n,Ji(t.g)),!0)}),hm,$u),va=Us((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[be],n),t.h==2?Oo(t,Ji,e):e.push(Ji(t.g)),!0)}),(function(t,e,n){if((e=Is(As,e))!=null&&e.length){n=qu(t,n);for(let i=0;i<e.length;i++)Bo(t.g,e[i]);Yu(t,n)}}),$u),$r=an((function(t,e,n){return t.h===0&&(qt(e,n,(t=Ji(t.g))===0?void 0:t),!0)}),hm,$u),Ct=an((function(t,e,n){return t.h===0&&(qt(e,n,Hu(t.g)),!0)}),fm,Zp),br=an((function(t,e,n){return t.h===0&&(qt(e,n,(t=Hu(t.g))===!1?void 0:t),!0)}),fm,Zp),Qt=Us((function(t,e,n){return t.h===2&&(t=Wu(t),Ps(e,0|e[be],n).push(t),!0)}),(function(t,e,n){if((e=Is(Kt,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&ko(i,r,mp(s))}}),Ku),Yi=an((function(t,e,n){return t.h===2&&(qt(e,n,(t=Wu(t))===""?void 0:t),!0)}),dm,Ku),pt=an((function(t,e,n){return t.h===2&&(qt(e,n,Wu(t)),!0)}),dm,Ku),Wt=(function(t,e,n=ju){return new Ds(t,e,n)})((function(t,e,n,i,r){return t.h===2&&(i=Sr(void 0,i),Ps(e,0|e[be],n).push(i),_a(t,i,r),!0)}),(function(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)pm(t,e[s],n,i,r);1&(t=0|e[be])||kt(e,1|t)}})),At=Go((function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=0|e[be];return Vp(e,a,s,n,Ts(a)),_a(t,e=Vu(e,i,n),r),!0}),pm),_m=an((function(t,e,n){return t.h===2&&(qt(e,n,$p(t)),!0)}),mm,em),H3=Us((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[be],n),t.h==2?Oo(t,Ui,e):e.push(Ui(t.g)),!0)}),(function(t,e,n){if((e=Is(Cp,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Nn(i,r,0),Ls(i.g,s))}}),Jp),W3=an((function(t,e,n){return t.h===0&&(qt(e,n,(t=Ui(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=Cp(e))!=null&&e!=null&&(Nn(t,n,0),Ls(t.g,e))}),Jp),bn=an((function(t,e,n){return t.h===0&&(qt(e,n,Ji(t.g)),!0)}),(function(t,e,n){(e=As(e))!=null&&(e=parseInt(e,10),Nn(t,n,0),Bo(t.g,e))}),tm);class X3{constructor(e,n){var i=An;this.g=e,this.h=n,this.m=Je,this.j=Le,this.defaultValue=void 0,this.l=i.Oa!=null?Ap:void 0}register(){Co(this)}}function di(t,e){return new X3(t,e)}function tr(t,e){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=Yp(n,void 0,void 0,s);try{const a=new t,o=a.v;Qu(e)(o,n);var r=a}finally{jp(n)}}return r}}function qo(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};cm(this.v,e,Lr(zo,Wo,Xo,t)),ps(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var $f=class extends Te{constructor(t){super(t)}},Zf=[0,Yi,an((function(t,e,n){return t.h===2&&(qt(e,n,(t=$p(t))===Ar()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Te){const i=e.Ra;return void(i?(e=i(e),e!=null&&ko(t,n,zu(e,!0).buffer)):cs(Wl,3))}if(Array.isArray(e))return void cs(Wl,3)}mm(t,e,n)}),em)];let kc,Jf=globalThis.trustedTypes;function Qf(t){var e;return kc===void 0&&(kc=(function(){let n=null;if(!Jf)return n;try{const i=r=>r;n=Jf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=kc)?e.createScriptURL(t):t,new class{constructor(n){this.g=n}toString(){return this.g+""}}(t)}function q3(t,...e){if(e.length===0)return Qf(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Qf(n)}var vm=[0,Xt,bn,Ct,-1,va,bn,-1,Ct],Y3=class extends Te{constructor(t){super(t)}},xm=[0,Ct,pt,Ct,bn,-1,Us((function(t,e,n){return(t.h===0||t.h===2)&&(e=Ps(e,0|e[be],n),t.h==2?Oo(t,C3,e):e.push(Ji(t.g)),!0)}),(function(t,e,n){if((e=Is(As,e))!=null&&e.length){n=qu(t,n);for(let i=0;i<e.length;i++)Bo(t.g,e[i]);Yu(t,n)}}),tm),pt,-1,[0,Ct,-1],bn,Ct,-1],Sm=[0,3,Ct,-1,2,[0,Xt],[0,bn,Ct],[0,pt,-1],[0]],Mm=[0,pt,-2],ed=class extends Te{constructor(t){super(t)}},Em=[0],ym=[0,Xt,Ct,1,Ct,-4],An=class extends Te{constructor(t){super(t,2)}},Nt={};Nt[336783863]=[0,pt,Ct,-1,Xt,[0,[1,2,3,4,5,6,7,8,9],At,Em,At,xm,At,Mm,At,ym,At,vm,At,[0,pt,-2],At,[0,pt,bn],At,Sm,At,[0,bn,-1,Ct]],[0,pt],Ct,[0,[1,3],[2,4],At,[0,va],-1,At,[0,Qt],-1,Wt,[0,pt,-1]],pt];var td=[0,Bc,-1,br,-3,Bc,va,Yi,$r,Bc,-1,br,$r,br,-2,Yi];function _t(t,e){No(t,3,e)}function Xe(t,e){No(t,4,e)}var hn=class extends Te{constructor(t){super(t,500)}o(t){return Le(this,0,7,t)}},Js=[-1,{}],nd=[0,pt,1,Js],id=[0,pt,Qt,Js];function On(t,e){Gu(t,1,hn,e)}function St(t,e){No(t,10,e)}function Qe(t,e){No(t,15,e)}var wn=class extends Te{constructor(t){super(t,500)}o(t){return Le(this,0,1001,t)}},bm=[-500,Wt,[-500,Yi,-1,Qt,-3,[-2,Nt,Ct],Wt,Zf,$r,-1,nd,id,Wt,[0,Yi,br],Yi,td,$r,Qt,987,Qt],4,Wt,[-500,pt,-1,[-1,{}],998,pt],Wt,[-500,pt,Qt,-1,[-2,{},Ct],997,Qt,-1],$r,Wt,[-500,pt,Qt,Js,998,Qt],Qt,$r,nd,id,Wt,[0,Yi,-1,Js],Qt,-2,td,Yi,-1,br,[0,br,W3],978,Js,Wt,Zf];wn.prototype.g=qo(bm);var j3=tr(wn,bm),K3=class extends Te{constructor(t){super(t)}},Tm=class extends Te{constructor(t){super(t)}g(){return Di(this,K3,1)}},Am=[0,Wt,[0,Xt,It,pt,-1]],Yo=tr(Tm,Am),$3=class extends Te{constructor(t){super(t)}},Z3=class extends Te{constructor(t){super(t)}},Vc=class extends Te{constructor(t){super(t)}l(){return Je(this,$3,2)}g(){return Di(this,Z3,5)}},wm=tr(class extends Te{constructor(t){super(t)}},[0,Qt,va,eh,[0,bn,[0,Xt,-3],[0,It,-3],[0,Xt,-1,[0,Wt,[0,Xt,-2]]],Wt,[0,It,-1,pt,It]],pt,-1,Qi,Wt,[0,Xt,It],Qt,Qi]),Rm=class extends Te{constructor(t){super(t)}},es=tr(class extends Te{constructor(t){super(t)}},[0,Wt,[0,It,-4]]),Cm=class extends Te{constructor(t){super(t)}},xa=tr(class extends Te{constructor(t){super(t)}},[0,Wt,[0,It,-4]]),J3=class extends Te{constructor(t){super(t)}},Q3=[0,Xt,-1,eh,bn],Pm=class extends Te{constructor(t){super(t)}};Pm.prototype.g=qo([0,It,-4,Qi]);var eS=class extends Te{constructor(t){super(t)}},tS=tr(class extends Te{constructor(t){super(t)}},[0,Wt,[0,1,Xt,pt,Am],Qi]),rd=class extends Te{constructor(t){super(t)}},nS=class extends Te{constructor(t){super(t)}na(){const t=gt(this,1,void 0,void 0,Bp);return t??Ar()}},iS=class extends Te{constructor(t){super(t)}},Lm=[1,2],rS=tr(class extends Te{constructor(t){super(t)}},[0,Wt,[0,Lm,At,[0,eh],At,[0,_m],Xt,pt],Qi]),th=class extends Te{constructor(t){super(t)}},Dm=[0,pt,Xt,It,Qt,-1],sd=class extends Te{constructor(t){super(t)}},sS=[0,Ct,-1],ad=class extends Te{constructor(t){super(t)}},co=[1,2,3,4,5,6],Eo=class extends Te{constructor(t){super(t)}g(){return gt(this,1,void 0,void 0,Bp)!=null}l(){return Kt(gt(this,2))!=null}},yt=class extends Te{constructor(t){super(t)}g(){return Rp(gt(this,2))??!1}},Im=[0,_m,pt,[0,Xt,Qi,-1],[0,z3,Qi]],Ut=[0,Im,Ct,[0,co,At,ym,At,xm,At,vm,At,Em,At,Mm,At,Sm],bn],jo=class extends Te{constructor(t){super(t)}},nh=[0,Ut,It,-1,Xt],aS=di(502141897,jo);Nt[502141897]=nh;var oS=tr(class extends Te{constructor(t){super(t)}},[0,[0,bn,-1,V3,H3],Q3]),Um=class extends Te{constructor(t){super(t)}},Fm=class extends Te{constructor(t){super(t)}},Zl=[0,Ut,It,[0,Ut],Ct],cS=di(508968150,Fm);Nt[508968150]=[0,Ut,nh,Zl,It,[0,[0,Im]]],Nt[508968149]=Zl;var Kr=class extends Te{constructor(t){super(t)}l(){return Je(this,th,2)}g(){ct(this,2)}},Nm=[0,Ut,Dm];Nt[478825465]=Nm;var lS=class extends Te{constructor(t){super(t)}},Om=class extends Te{constructor(t){super(t)}},ih=class extends Te{constructor(t){super(t)}},rh=class extends Te{constructor(t){super(t)}},Bm=class extends Te{constructor(t){super(t)}},od=[0,Ut,[0,Ut],Nm,-1],km=[0,Ut,It,Xt],sh=[0,Ut,It],Vm=[0,Ut,km,sh,It],uS=di(479097054,Bm);Nt[479097054]=[0,Ut,Vm,od],Nt[463370452]=od,Nt[464864288]=km;var hS=di(462713202,rh);Nt[462713202]=Vm,Nt[474472470]=sh;var fS=class extends Te{constructor(t){super(t)}},Gm=class extends Te{constructor(t){super(t)}},zm=class extends Te{constructor(t){super(t)}},Hm=class extends Te{constructor(t){super(t)}},ah=[0,Ut,It,-1,Xt],Jl=[0,Ut,It,Ct];Hm.prototype.g=qo([0,Ut,sh,[0,Ut],nh,Zl,ah,Jl]);var Wm=class extends Te{constructor(t){super(t)}},dS=di(456383383,Wm);Nt[456383383]=[0,Ut,Dm];var Xm=class extends Te{constructor(t){super(t)}},pS=di(476348187,Xm);Nt[476348187]=[0,Ut,sS];var qm=class extends Te{constructor(t){super(t)}},cd=class extends Te{constructor(t){super(t)}},Ym=[0,bn,-1],mS=di(458105876,class extends Te{constructor(t){super(t)}g(){let t;var e=this.v;const n=0|e[be];return t=En(this,n),e=(function(i,r,s,a){var o=cd;!a&&Rs(i)&&(s=0|(r=i.v)[be]);var c=Li(r,2);if(i=!1,c==null){if(a)return zf();c=[]}else if(c.constructor===Pi){if(!(2&c.J)||a)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[be])):c=[];if(a){if(!c.length)return zf();i||(i=!0,da(c))}else i&&(i=!1,sa(c),c=kp(c));return!i&&32&s&&fa(c,32),s=Ft(r,s,2,a=new Pi(c,o,m3,void 0)),i||Pr(r,s),a})(this,e,n,t),!t&&cd&&(e.ra=!0),e}});Nt[458105876]=[0,Ym,k3,[!0,Qi,[0,pt,-1,Qt]],[0,va,Ct,bn]];var oh=class extends Te{constructor(t){super(t)}},jm=di(458105758,oh);Nt[458105758]=[0,Ut,pt,Ym];var Gc=class extends Te{constructor(t){super(t)}},ld=[0,G3,-1,br],gS=class extends Te{constructor(t){super(t)}},Km=class extends Te{constructor(t){super(t)}},Ql=[1,2];Km.prototype.g=qo([0,Ql,At,ld,At,[0,Wt,ld]]);var $m=class extends Te{constructor(t){super(t)}},_S=di(443442058,$m);Nt[443442058]=[0,Ut,pt,Xt,It,Qt,-1,Ct,It],Nt[514774813]=ah;var Zm=class extends Te{constructor(t){super(t)}},vS=di(516587230,Zm);function eu(t,e){return e=e?e.clone():new th,t.displayNamesLocale!==void 0?ct(e,1,ga(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ct(e,1),t.maxResults!==void 0?Ii(e,2,t.maxResults):"maxResults"in t&&ct(e,2),t.scoreThreshold!==void 0?Ce(e,3,t.scoreThreshold):"scoreThreshold"in t&&ct(e,3),t.categoryAllowlist!==void 0?vo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ct(e,4),t.categoryDenylist!==void 0?vo(e,5,t.categoryDenylist):"categoryDenylist"in t&&ct(e,5),e}function Jm(t){const e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function ch(t,e=-1,n=""){return{categories:t.map((i=>({index:Fn(i,1)??0??-1,score:wt(i,2)??0,categoryName:Kt(gt(i,3))??""??"",displayName:Kt(gt(i,4))??""??""}))),headIndex:e,headName:n}}function xS(t){const e={classifications:Di(t,eS,1).map((n=>ch(Je(n,Tm,4)?.g()??[],Fn(n,2)??0,Kt(gt(n,3))??"")))};return(function(n){return p3(yu?gt(n,2,void 0,void 0,go):gt(n,2))})(t)!=null&&(e.timestampMs=Jm(Wp(t))),e}function Qm(t){var e=vr(t,3,ii,_r()),n=vr(t,2,As,_r()),i=vr(t,1,Kt,_r()),r=vr(t,9,Kt,_r());const s={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)s.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((e=Je(t,Vc,4)?.l())&&(s.boundingBox={originX:Fn(e,1,Hi)??0,originY:Fn(e,2,Hi)??0,width:Fn(e,3,Hi)??0,height:Fn(e,4,Hi)??0,angle:0}),Je(t,Vc,4)?.g().length)for(const a of Je(t,Vc,4).g())s.keypoints.push({x:gt(a,1,void 0,Hi,ii)??0,y:gt(a,2,void 0,Hi,ii)??0,score:gt(a,4,void 0,Hi,ii)??0,label:Kt(gt(a,3,void 0,Hi))??""});return s}function Ko(t){const e=[];for(const n of Di(t,Cm,1))e.push({x:wt(n,1)??0,y:wt(n,2)??0,z:wt(n,3)??0,visibility:wt(n,4)??0});return e}function Qs(t){const e=[];for(const n of Di(t,Rm,1))e.push({x:wt(n,1)??0,y:wt(n,2)??0,z:wt(n,3)??0,visibility:wt(n,4)??0});return e}function ud(t){return Array.from(t,(e=>e>127?e-256:e))}function hd(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Za;Nt[516587230]=[0,Ut,ah,Jl,It],Nt[518928384]=Jl;const SS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function e0(){if(Za===void 0)try{await WebAssembly.instantiate(SS),Za=!0}catch{Za=!1}return Za}async function Ws(t,e=q3``){const n=await e0()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var fr=class{};function t0(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function fd(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(e)}))}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;await self.import(t.toString())}}function n0(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function we(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function dd(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=n0(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function pd(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Zn(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Wi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}fr.forVisionTasks=function(t){return Ws("vision",t)},fr.forTextTasks=function(t){return Ws("text",t)},fr.forGenAiExperimentalTasks=function(t){return Ws("genai_experimental",t)},fr.forGenAiTasks=function(t){return Ws("genai",t)},fr.forAudioTasks=function(t){return Ws("audio",t)},fr.isSimdSupported=function(){return e0()};async function MS(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await fd(s),!self.ModuleFactory||a&&(await fd(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function zc(t,e){const n=Je(t.baseOptions,Eo,1)||new Eo;typeof e=="string"?(ct(n,2,ga(e)),ct(n,1)):e instanceof Uint8Array&&(ct(n,1,Au(e,!1)),ct(n,2)),Le(t.baseOptions,0,1,n)}function md(t){try{const e=t.H.length;if(e===1)throw Error(t.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.H.map((n=>n.message)).join(", "))}finally{t.H=[]}}function ge(t,e){t.C=Math.max(t.C,e)}function $o(t,e){t.B=new hn,yn(t.B,2,"PassThroughCalculator"),_t(t.B,"free_memory"),Xe(t.B,"free_memory_unused_out"),St(e,"free_memory"),On(e,t.B)}function ms(t,e){_t(t.B,e),Xe(t.B,e+"_unused_out")}function Zo(t){t.g.addBoolToStream(!0,"free_memory",t.C)}var tu=class{constructor(t){this.g=t,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Je(this.baseOptions,Eo,1)?.g()||Je(this.baseOptions,Eo,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=Je(i.baseOptions,ad,3);if(!s){var a=s=new ad,o=new ed;Zs(a,4,co,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new Y3,Zs(r,2,co,a)):(r=s,a=new ed,Zs(r,4,co,a))),Le(i.baseOptions,0,3,s)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),zc(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)zc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(n.modelAssetBuffer).then((i=>{zc(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let t;if(this.g.ca((e=>{t=j3(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(t,e),this.B=void 0,md(this)}finishProcessing(){this.g.finishProcessing(),md(this)}close(){this.B=void 0,this.g.closeGraph()}};function $i(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}tu.prototype.close=tu.prototype.close;class ES{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function gd(t,e,n){const i=t.g;if(n=$i(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function _d(t,e){const n=t.g,i=$i(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=$i(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=$i(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new ES(n,i,r,s)}function lh(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function yS(t,e,n,i){return lh(t,e),t.h||(t.m(),t.D()),n?(t.u||(t.u=_d(t,!0)),n=t.u):(t.A||(t.A=_d(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function i0(t,e,n){return lh(t,e),t=$i(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function r0(t,e,n){lh(t,e),t.B||(t.B=$i(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function bS(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var s0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=$i(t.createProgram(),"Failed to create WebGL program"),this.X=gd(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.W=gd(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.L=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.X),t.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function yi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function nu(t){var e=yi(t,1);if(!e){if(e=yi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=gs(t);var n=uh(t);if(r0(n,i,a0(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function a0(t){let e=yi(t,2);if(!e){const n=gs(t);e=c0(t);const i=nu(t),r=o0(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),iu(t)}return e}function gs(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=$i(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function o0(t){if(t=gs(t),!Ja)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Ja=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ja=t.R16F}return Ja}function uh(t){return t.l||(t.l=new s0),t.l}function c0(t){const e=gs(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=yi(t,2);return n||(n=i0(uh(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function iu(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Ja,Ht=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--vd===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!yi(this,0)}ka(){return!!yi(this,1)}R(){return!!yi(this,2)}ja(){return(e=yi(t=this,0))||(e=nu(t),e=new Uint8Array(e.map((n=>Math.round(255*n)))),t.g.push(e)),e;var t,e}ia(){return nu(this)}N(){return a0(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=gs(this),r=uh(this);i.activeTexture(i.TEXTURE1),n=i0(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=o0(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),r0(r,i,n),yS(r,i,!1,(()=>{c0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),iu(this)})),bS(r),iu(this)}}t.push(n)}return new Ht(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&gs(this).deleteTexture(yi(this,2)),vd=-1}};Ht.prototype.close=Ht.prototype.close,Ht.prototype.clone=Ht.prototype.clone,Ht.prototype.getAsWebGLTexture=Ht.prototype.N,Ht.prototype.getAsFloat32Array=Ht.prototype.ia,Ht.prototype.getAsUint8Array=Ht.prototype.ja,Ht.prototype.hasWebGLTexture=Ht.prototype.R,Ht.prototype.hasFloat32Array=Ht.prototype.ka,Ht.prototype.hasUint8Array=Ht.prototype.Fa;var vd=250;function Xn(...t){return t.map((([e,n])=>({start:e,end:n})))}const TS=(function(t){return class extends t{Ja(){this.i._registerModelResourcesGraphService()}}})((xd=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:t0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),we(this,i||"input_audio",(s=>{we(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Zn(this,"__graph_config__",(e=>{t(e)})),we(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),we(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)}))}addGpuBufferToStream(t,e,n){we(this,e,(i=>{const[r,s]=dd(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)}))}addBoolToStream(t,e,n){we(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){we(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){we(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){we(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){we(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){we(this,e,(i=>{we(this,t,(r=>{this.i._addStringToInputStream(r,i,n)}))}))}addStringRecordToStream(t,e,n){we(this,e,(i=>{pd(this,Object.keys(t),(r=>{pd(this,Object.values(t),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){we(this,n,(r=>{we(this,e,(s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){we(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){we(this,e,(i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)}))}addDoubleVectorToStream(t,e,n){we(this,e,(i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)}))}addFloatVectorToStream(t,e,n){we(this,e,(i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)}))}addIntVectorToStream(t,e,n){we(this,e,(i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)}))}addUintVectorToStream(t,e,n){we(this,e,(i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)}))}addStringVectorToStream(t,e,n){we(this,e,(i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)we(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,n)}))}addBoolToInputSidePacket(t,e){we(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){we(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){we(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){we(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){we(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){we(this,e,(n=>{we(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){we(this,n,(i=>{we(this,e,(r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(t,e){we(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){we(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){we(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){we(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){we(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){we(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)we(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Zn(this,t,e),we(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Wi(this,t,e),we(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Zn(this,t,e),we(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Wi(this,t,e),we(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Zn(this,t,e),we(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Wi(this,t,e),we(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Zn(this,t,e),we(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Wi(this,t,e),we(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Zn(this,t,e),we(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Wi(this,t,e),we(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Zn(this,t,e),we(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Wi(this,t,e),we(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Zn(this,t,e),we(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Wi(this,t,e),we(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Zn(this,t,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)})),we(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends xd{get ga(){return this.i}pa(t,e,n){we(this,e,(i=>{const[r,s]=dd(this,t,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)}))}Z(t,e){Zn(this,t,e),we(this,t,(n=>{this.ga._attachImageListener(n)}))}aa(t,e){Wi(this,t,e),we(this,t,(n=>{this.ga._attachImageVectorListener(n)}))}}));var xd,qn=class extends TS{};async function je(t,e,n){return(async function(i,r,s,a){return MS(i,r,s,a)})(t,n.canvas??(t0()?void 0:document.createElement("canvas")),e,n)}function l0(t,e,n,i){if(t.U){const s=new Pm;if(n?.regionOfInterest){if(!t.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ce(s,1,(r.left+r.right)/2),Ce(s,2,(r.top+r.bottom)/2),Ce(s,4,r.right-r.left),Ce(s,3,r.bottom-r.top)}else Ce(s,1,.5),Ce(s,2,.5),Ce(s,4,1),Ce(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ce(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=n0(e);n=wt(s,3)*o/a,r=wt(s,4)*a/o,Ce(s,4,n),Ce(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.pa(e,t.X,i??performance.now()),t.finishProcessing()}function Yn(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");l0(t,e,n,t.C+1)}function pi(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");l0(t,e,n,i)}function _s(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Ht([r],n,!1,t.g.i.canvas,t.P,s,e),i?t.clone():t}var Tn=class extends tu{constructor(t,e,n,i){super(t),this.g=t,this.X=e,this.U=n,this.oa=i,this.P=new s0}l(t,e=!0){if("runningMode"in t&&ct(this.baseOptions,2,oa(!!t.runningMode&&t.runningMode!=="IMAGE")),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Tn.prototype.close=Tn.prototype.close;var Cn=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Le(t=this.h=new jo,0,1,e=new yt),Ce(this.h,2,.5),Ce(this.h,3,.3)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Ce(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ce(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},Yn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},pi(this,t,n,e),this.j}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect_in"),Qe(t,"detections");const e=new An;fi(e,aS,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect_in"),Xe(n,"DETECTIONS:detections"),n.o(e),On(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=wm(s),this.j.detections.push(Qm(i));ge(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.prototype.detectForVideo=Cn.prototype.G,Cn.prototype.detect=Cn.prototype.F,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=async function(t,e){return je(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return je(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return je(Cn,t,e)};var hh=Xn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),fh=Xn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),dh=Xn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),u0=Xn([474,475],[475,476],[476,477],[477,474]),ph=Xn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),mh=Xn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),h0=Xn([469,470],[470,471],[471,472],[472,469]),gh=Xn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),f0=[...hh,...fh,...dh,...ph,...mh,...gh],d0=Xn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Sd(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var vt=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Le(t=this.h=new Fm,0,1,e=new yt),this.A=new Um,Le(this.h,0,3,this.A),this.u=new jo,Le(this.h,0,2,this.u),Ii(this.u,4,1),Ce(this.u,2,.5),Ce(this.A,2,.5),Ce(this.h,4,.5)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numFaces"in t&&Ii(this.u,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ce(this.u,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ce(this.A,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return Sd(this),Yn(this,t,e),this.j}G(t,e,n){return Sd(this),pi(this,t,n,e),this.j}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect"),Qe(t,"face_landmarks");const e=new An;fi(e,cS,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),On(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=xa(s),this.j.faceLandmarks.push(Ko(i));ge(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ge(this,i)})),this.outputFaceBlendshapes&&(Qe(t,"blendshapes"),Xe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Yo(s),this.j.faceBlendshapes.push(ch(i.g()??[]));ge(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ge(this,i)}))),this.outputFacialTransformationMatrixes&&(Qe(t,"face_geometry"),Xe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Je(i=oS(s),J3,2))&&this.j.facialTransformationMatrixes.push({rows:Fn(i,1)??0??0,columns:Fn(i,2)??0??0,data:vr(i,3,ii,_r()).slice()??[]});ge(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ge(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};vt.prototype.detectForVideo=vt.prototype.G,vt.prototype.detect=vt.prototype.F,vt.prototype.setOptions=vt.prototype.o,vt.createFromModelPath=function(t,e){return je(vt,t,{baseOptions:{modelAssetPath:e}})},vt.createFromModelBuffer=function(t,e){return je(vt,t,{baseOptions:{modelAssetBuffer:e}})},vt.createFromOptions=function(t,e){return je(vt,t,e)},vt.FACE_LANDMARKS_LIPS=hh,vt.FACE_LANDMARKS_LEFT_EYE=fh,vt.FACE_LANDMARKS_LEFT_EYEBROW=dh,vt.FACE_LANDMARKS_LEFT_IRIS=u0,vt.FACE_LANDMARKS_RIGHT_EYE=ph,vt.FACE_LANDMARKS_RIGHT_EYEBROW=mh,vt.FACE_LANDMARKS_RIGHT_IRIS=h0,vt.FACE_LANDMARKS_FACE_OVAL=gh,vt.FACE_LANDMARKS_CONTOURS=f0,vt.FACE_LANDMARKS_TESSELATION=d0;var _h=Xn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Md(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Ed(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function yd(t,e=!0){const n=[];for(const r of t){var i=Yo(r);t=[];for(const s of i.g())i=e&&Fn(s,1)!=null?Fn(s,1)??0:-1,t.push({score:wt(s,2)??0,index:i,categoryName:Kt(gt(s,3))??""??"",displayName:Kt(gt(s,4))??""??""});n.push(t)}return n}var mn=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.j=new Bm,0,1,e=new yt),this.u=new rh,Le(this.j,0,2,this.u),this.D=new ih,Le(this.u,0,3,this.D),this.A=new Om,Le(this.u,0,2,this.A),this.h=new lS,Le(this.j,0,3,this.h),Ce(this.A,2,.5),Ce(this.u,4,.5),Ce(this.D,2,.5)}get baseOptions(){return Je(this.j,yt,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){if(Ii(this.A,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ce(this.A,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.u,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ce(this.D,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Kr,n=e,i=eu(t.cannedGesturesClassifierOptions,Je(this.h,Kr,3)?.l());Le(n,0,2,i),Le(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&Je(this.h,Kr,3)?.g();return t.customGesturesClassifierOptions?(Le(n=e=new Kr,0,2,i=eu(t.customGesturesClassifierOptions,Je(this.h,Kr,4)?.l())),Le(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&Je(this.h,Kr,4)?.g(),this.l(t)}Ha(t,e){return Md(this),Yn(this,t,e),Ed(this)}Ia(t,e,n){return Md(this),pi(this,t,n,e),Ed(this)}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect"),Qe(t,"hand_gestures"),Qe(t,"hand_landmarks"),Qe(t,"world_hand_landmarks"),Qe(t,"handedness");const e=new An;fi(e,uS,this.j);const n=new hn;yn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"HAND_GESTURES:hand_gestures"),Xe(n,"LANDMARKS:hand_landmarks"),Xe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Xe(n,"HANDEDNESS:handedness"),n.o(e),On(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=xa(s);const a=[];for(const o of Di(i,Cm,1))a.push({x:wt(o,1)??0,y:wt(o,2)??0,z:wt(o,3)??0,visibility:wt(o,4)??0});this.landmarks.push(a)}ge(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ge(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=es(s);const a=[];for(const o of Di(i,Rm,1))a.push({x:wt(o,1)??0,y:wt(o,2)??0,z:wt(o,3)??0,visibility:wt(o,4)??0});this.worldLandmarks.push(a)}ge(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ge(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...yd(i,!1)),ge(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ge(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...yd(i)),ge(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function bd(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}mn.prototype.recognizeForVideo=mn.prototype.Ia,mn.prototype.recognize=mn.prototype.Ha,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(t,e){return je(mn,t,{baseOptions:{modelAssetPath:e}})},mn.createFromModelBuffer=function(t,e){return je(mn,t,{baseOptions:{modelAssetBuffer:e}})},mn.createFromOptions=function(t,e){return je(mn,t,e)},mn.HAND_CONNECTIONS=_h;var ln=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.h=new rh,0,1,e=new yt),this.u=new ih,Le(this.h,0,3,this.u),this.j=new Om,Le(this.h,0,2,this.j),Ii(this.j,3,1),Ce(this.j,2,.5),Ce(this.u,2,.5),Ce(this.h,4,.5)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numHands"in t&&Ii(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ce(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ce(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Yn(this,t,e),bd(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],pi(this,t,n,e),bd(this)}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect"),Qe(t,"hand_landmarks"),Qe(t,"world_hand_landmarks"),Qe(t,"handedness");const e=new An;fi(e,hS,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"LANDMARKS:hand_landmarks"),Xe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Xe(n,"HANDEDNESS:handedness"),n.o(e),On(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=xa(s),this.landmarks.push(Ko(i));ge(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ge(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=es(s),this.worldLandmarks.push(Qs(i));ge(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ge(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=Yo(c);const l=[];for(const h of i.g())l.push({score:wt(h,2)??0,index:Fn(h,1)??0??-1,categoryName:Kt(gt(h,3))??""??"",displayName:Kt(gt(h,4))??""??""});o.push(l)}a.call(s,...o),ge(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ln.prototype.detectForVideo=ln.prototype.G,ln.prototype.detect=ln.prototype.F,ln.prototype.setOptions=ln.prototype.o,ln.createFromModelPath=function(t,e){return je(ln,t,{baseOptions:{modelAssetPath:e}})},ln.createFromModelBuffer=function(t,e){return je(ln,t,{baseOptions:{modelAssetBuffer:e}})},ln.createFromOptions=function(t,e){return je(ln,t,e)},ln.HAND_CONNECTIONS=_h;var p0=Xn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Td(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ad(t){try{if(!t.D)return t.h;t.D(t.h)}finally{Zo(t)}}function Qa(t,e){t=xa(t),e.push(Ko(t))}var mt=class extends Tn{constructor(t,e){super(new qn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Le(t=this.j=new Hm,0,1,e=new yt),this.I=new ih,Le(this.j,0,2,this.I),this.W=new fS,Le(this.j,0,3,this.W),this.u=new jo,Le(this.j,0,4,this.u),this.O=new Um,Le(this.j,0,5,this.O),this.A=new Gm,Le(this.j,0,6,this.A),this.M=new zm,Le(this.j,0,7,this.M),Ce(this.u,2,.5),Ce(this.u,3,.3),Ce(this.O,2,.5),Ce(this.A,2,.5),Ce(this.A,3,.3),Ce(this.M,2,.5),Ce(this.I,2,.5)}get baseOptions(){return Je(this.j,yt,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Ce(this.u,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ce(this.u,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ce(this.O,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ce(this.A,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ce(this.A,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ce(this.M,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ce(this.I,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:n,Td(this),Yn(this,t,i),Ad(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Td(this),pi(this,t,r,e),Ad(this)}m(){var t=new wn;St(t,"input_frames_image"),Qe(t,"pose_landmarks"),Qe(t,"pose_world_landmarks"),Qe(t,"face_landmarks"),Qe(t,"left_hand_landmarks"),Qe(t,"left_hand_world_landmarks"),Qe(t,"right_hand_landmarks"),Qe(t,"right_hand_world_landmarks");const e=new An,n=new $f;yn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(r,s){if(s!=null)if(Array.isArray(s))ct(r,2,Fo(s,0,ca));else{if(!(typeof s=="string"||s instanceof ai||bu(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Xi(r,2,Au(s,!1),Ar())}})(n,this.j.g());const i=new hn;yn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Gu(i,8,$f,n),_t(i,"IMAGE:input_frames_image"),Xe(i,"POSE_LANDMARKS:pose_landmarks"),Xe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Xe(i,"FACE_LANDMARKS:face_landmarks"),Xe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Xe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Xe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Xe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),On(t,i),$o(this,t),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Qa(r,this.h.poseLandmarks),ge(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{ge(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=es(r),a.push(Qs(r)),ge(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{ge(this,r)})),this.outputPoseSegmentationMasks&&(Xe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ms(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[_s(this,r,!0,!this.D)],ge(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],ge(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Qa(r,this.h.faceLandmarks),ge(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{ge(this,r)})),this.outputFaceBlendshapes&&(Qe(t,"extra_blendshapes"),Xe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Yo(r),a.push(ch(r.g()??[]))),ge(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{ge(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Qa(r,this.h.leftHandLandmarks),ge(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{ge(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=es(r),a.push(Qs(r)),ge(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{ge(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Qa(r,this.h.rightHandLandmarks),ge(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{ge(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=es(r),a.push(Qs(r)),ge(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{ge(this,r)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mt.prototype.detectForVideo=mt.prototype.G,mt.prototype.detect=mt.prototype.F,mt.prototype.setOptions=mt.prototype.o,mt.createFromModelPath=function(t,e){return je(mt,t,{baseOptions:{modelAssetPath:e}})},mt.createFromModelBuffer=function(t,e){return je(mt,t,{baseOptions:{modelAssetBuffer:e}})},mt.createFromOptions=function(t,e){return je(mt,t,e)},mt.HAND_CONNECTIONS=_h,mt.POSE_CONNECTIONS=p0,mt.FACE_LANDMARKS_LIPS=hh,mt.FACE_LANDMARKS_LEFT_EYE=fh,mt.FACE_LANDMARKS_LEFT_EYEBROW=dh,mt.FACE_LANDMARKS_LEFT_IRIS=u0,mt.FACE_LANDMARKS_RIGHT_EYE=ph,mt.FACE_LANDMARKS_RIGHT_EYEBROW=mh,mt.FACE_LANDMARKS_RIGHT_IRIS=h0,mt.FACE_LANDMARKS_FACE_OVAL=gh,mt.FACE_LANDMARKS_CONTOURS=f0,mt.FACE_LANDMARKS_TESSELATION=d0;var Pn=class extends Tn{constructor(t,e){super(new qn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Le(t=this.h=new Wm,0,1,e=new yt)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return Le(this.h,0,2,eu(t,Je(this.h,th,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},Yn(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},pi(this,t,n,e),this.j}m(){var t=new wn;St(t,"input_image"),St(t,"norm_rect"),Qe(t,"classifications");const e=new An;fi(e,dS,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),_t(n,"IMAGE:input_image"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"CLASSIFICATIONS:classifications"),n.o(e),On(t,n),this.g.attachProtoListener("classifications",((i,r)=>{this.j=xS(tS(i)),ge(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.classifyForVideo=Pn.prototype.ta,Pn.prototype.classify=Pn.prototype.sa,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(t,e){return je(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return je(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return je(Pn,t,e)};var gn=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!0),this.h=new Xm,this.embeddings={embeddings:[]},Le(t=this.h,0,1,e=new yt)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){var e=this.h,n=Je(this.h,sd,2);return n=n?n.clone():new sd,t.l2Normalize!==void 0?ct(n,1,oa(t.l2Normalize)):"l2Normalize"in t&&ct(n,1),t.quantize!==void 0?ct(n,2,oa(t.quantize)):"quantize"in t&&ct(n,2),Le(e,0,2,n),this.l(t)}za(t,e){return Yn(this,t,e),this.embeddings}Aa(t,e,n){return pi(this,t,n,e),this.embeddings}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect"),Qe(t,"embeddings_out");const e=new An;fi(e,pS,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"EMBEDDINGS:embeddings_out"),n.o(e),On(t,n),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=rS(i),this.embeddings=(function(s){return{embeddings:Di(s,iS,1).map((a=>{const o={headIndex:Fn(a,3)??0??-1,headName:Kt(gt(a,4))??""??""};var c=a.v;return Gp(c,0|c[be],rd,Oc(a,1))!==void 0?(a=vr(a=Je(a,rd,Oc(a,1),void 0),1,ii,_r()),o.floatEmbedding=a.slice()):(c=new Uint8Array(0),o.quantizedEmbedding=Je(a,nS,Oc(a,2),void 0)?.na()?.h()??c),o})),timestampMs:Jm(Wp(s))}})(i),ge(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=hd(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=hd(ud(t.quantizedEmbedding),ud(e.quantizedEmbedding))}return t},gn.prototype.embedForVideo=gn.prototype.Aa,gn.prototype.embed=gn.prototype.za,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(t,e){return je(gn,t,{baseOptions:{modelAssetPath:e}})},gn.createFromModelBuffer=function(t,e){return je(gn,t,{baseOptions:{modelAssetBuffer:e}})},gn.createFromOptions=function(t,e){return je(gn,t,e)};var ru=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function AS(t){const e=(function(n){return Di(n,hn,1)})(t.ca()).filter((n=>(Kt(gt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(Je(e[0],An,7)?.j()?.g()??new Map).forEach(((n,i)=>{t.u[Number(i)]=Kt(gt(n,1))??""}))}function wd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Rd(t){try{const e=new ru(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Zo(t)}}ru.prototype.close=ru.prototype.close;var cn=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new oh,this.A=new qm,Le(this.h,0,3,this.A),Le(t=this.h,0,1,e=new yt)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ct(this.h,2,ga(t.displayNamesLocale)):"displayNamesLocale"in t&&ct(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){AS(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,wd(this),Yn(this,t,i),Rd(this)}La(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,wd(this),pi(this,t,r,e),Rd(this)}Da(){return this.u}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect");const e=new An;fi(e,jm,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect"),n.o(e),On(t,n),$o(this,t),this.outputConfidenceMasks&&(Qe(t,"confidence_masks"),Xe(n,"CONFIDENCE_MASKS:confidence_masks"),ms(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>_s(this,s,!0,!this.j))),ge(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ge(this,i)}))),this.outputCategoryMask&&(Qe(t,"category_mask"),Xe(n,"CATEGORY_MASK:category_mask"),ms(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=_s(this,i,!1,!this.j),ge(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ge(this,i)}))),Qe(t,"quality_scores"),Xe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ge(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};cn.prototype.getLabels=cn.prototype.Da,cn.prototype.segmentForVideo=cn.prototype.La,cn.prototype.segment=cn.prototype.segment,cn.prototype.setOptions=cn.prototype.o,cn.createFromModelPath=function(t,e){return je(cn,t,{baseOptions:{modelAssetPath:e}})},cn.createFromModelBuffer=function(t,e){return je(cn,t,{baseOptions:{modelAssetBuffer:e}})},cn.createFromOptions=function(t,e){return je(cn,t,e)};var su=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};su.prototype.close=su.prototype.close;var Jn=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new oh,this.u=new qm,Le(this.h,0,3,this.u),Le(t=this.h,0,1,e=new yt)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new Km,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var s=new Gc;Xi(s,3,oa(!0),!1),Xi(s,1,$s(e.keypoint.x),0),Xi(s,2,$s(e.keypoint.y),0),Zs(i,1,Ql,s)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new gS;for(s of e.scribble)Xi(e=new Gc,3,oa(!0),!1),Xi(e,1,$s(s.x),0),Xi(e,2,$s(s.y),0),Gu(o,1,Gc,e);Zs(i,2,Ql,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Yn(this,t,r);e:{try{const o=new su(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break e}this.j(o)}finally{Zo(this)}a=void 0}return a}m(){var t=new wn;St(t,"image_in"),St(t,"roi_in"),St(t,"norm_rect_in");const e=new An;fi(e,jm,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),_t(n,"IMAGE:image_in"),_t(n,"ROI:roi_in"),_t(n,"NORM_RECT:norm_rect_in"),n.o(e),On(t,n),$o(this,t),this.outputConfidenceMasks&&(Qe(t,"confidence_masks"),Xe(n,"CONFIDENCE_MASKS:confidence_masks"),ms(this,"confidence_masks"),this.g.aa("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>_s(this,s,!0,!this.j))),ge(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ge(this,i)}))),this.outputCategoryMask&&(Qe(t,"category_mask"),Xe(n,"CATEGORY_MASK:category_mask"),ms(this,"category_mask"),this.g.Z("category_mask",((i,r)=>{this.categoryMask=_s(this,i,!1,!this.j),ge(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ge(this,i)}))),Qe(t,"quality_scores"),Xe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,ge(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Jn.prototype.segment=Jn.prototype.segment,Jn.prototype.setOptions=Jn.prototype.o,Jn.createFromModelPath=function(t,e){return je(Jn,t,{baseOptions:{modelAssetPath:e}})},Jn.createFromModelBuffer=function(t,e){return je(Jn,t,{baseOptions:{modelAssetBuffer:e}})},Jn.createFromOptions=function(t,e){return je(Jn,t,e)};var Ln=class extends Tn{constructor(t,e){super(new qn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Le(t=this.h=new $m,0,1,e=new yt)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ct(this.h,2,ga(t.displayNamesLocale)):"displayNamesLocale"in t&&ct(this.h,2),t.maxResults!==void 0?Ii(this.h,3,t.maxResults):"maxResults"in t&&ct(this.h,3),t.scoreThreshold!==void 0?Ce(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ct(this.h,4),t.categoryAllowlist!==void 0?vo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ct(this.h,5),t.categoryDenylist!==void 0?vo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ct(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},Yn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},pi(this,t,n,e),this.j}m(){var t=new wn;St(t,"input_frame_gpu"),St(t,"norm_rect"),Qe(t,"detections");const e=new An;fi(e,_S,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),_t(n,"IMAGE:input_frame_gpu"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"DETECTIONS:detections"),n.o(e),On(t,n),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=wm(s),this.j.detections.push(Qm(i));ge(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{ge(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ln.prototype.detectForVideo=Ln.prototype.G,Ln.prototype.detect=Ln.prototype.F,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=async function(t,e){return je(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return je(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return je(Ln,t,e)};var au=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Cd(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Pd(t){try{const e=new au(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.u)return e;t.u(e)}finally{Zo(t)}}au.prototype.close=au.prototype.close;var _n=class extends Tn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Le(t=this.h=new Zm,0,1,e=new yt),this.A=new zm,Le(this.h,0,3,this.A),this.j=new Gm,Le(this.h,0,2,this.j),Ii(this.j,4,1),Ce(this.j,2,.5),Ce(this.A,2,.5),Ce(this.h,4,.5)}get baseOptions(){return Je(this.h,yt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numPoses"in t&&Ii(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ce(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ce(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ce(this.A,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:n,Cd(this),Yn(this,t,i),Pd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Cd(this),pi(this,t,r,e),Pd(this)}m(){var t=new wn;St(t,"image_in"),St(t,"norm_rect"),Qe(t,"normalized_landmarks"),Qe(t,"world_landmarks"),Qe(t,"segmentation_masks");const e=new An;fi(e,vS,this.h);const n=new hn;yn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),_t(n,"IMAGE:image_in"),_t(n,"NORM_RECT:norm_rect"),Xe(n,"NORM_LANDMARKS:normalized_landmarks"),Xe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),On(t,n),$o(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=xa(s),this.landmarks.push(Ko(i));ge(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ge(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=es(s),this.worldLandmarks.push(Qs(i));ge(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ge(this,i)})),this.outputSegmentationMasks&&(Xe(n,"SEGMENTATION_MASK:segmentation_masks"),ms(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>_s(this,s,!0,!this.u))),ge(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ge(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};_n.prototype.detectForVideo=_n.prototype.G,_n.prototype.detect=_n.prototype.F,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(t,e){return je(_n,t,{baseOptions:{modelAssetPath:e}})},_n.createFromModelBuffer=function(t,e){return je(_n,t,{baseOptions:{modelAssetBuffer:e}})},_n.createFromOptions=function(t,e){return je(_n,t,e)},_n.POSE_CONNECTIONS=p0;const wS=1/3,Qn=1/6,Hc=t=>Math.floor(t)|0,Wc=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function RS(t=Math.random){const e=CS(t),n=new Float64Array(e).map(s=>Wc[s%12*3]),i=new Float64Array(e).map(s=>Wc[s%12*3+1]),r=new Float64Array(e).map(s=>Wc[s%12*3+2]);return function(a,o,c){let l,h,d,u;const m=(a+o+c)*wS,_=Hc(a+m),S=Hc(o+m),p=Hc(c+m),f=(_+S+p)*Qn,M=_-f,T=S-f,b=p-f,C=a-M,w=o-T,P=c-b;let v,E,q,A,B,k;C>=w?w>=P?(v=1,E=0,q=0,A=1,B=1,k=0):C>=P?(v=1,E=0,q=0,A=1,B=0,k=1):(v=0,E=0,q=1,A=1,B=0,k=1):w<P?(v=0,E=0,q=1,A=0,B=1,k=1):C<P?(v=0,E=1,q=0,A=0,B=1,k=1):(v=0,E=1,q=0,A=1,B=1,k=0);const H=C-v+Qn,V=w-E+Qn,G=P-q+Qn,U=C-A+2*Qn,J=w-B+2*Qn,$=P-k+2*Qn,le=C-1+3*Qn,fe=w-1+3*Qn,ue=P-1+3*Qn,Fe=_&255,nt=S&255,et=p&255;let Y=.6-C*C-w*w-P*P;if(Y<0)l=0;else{const pe=Fe+e[nt+e[et]];Y*=Y,l=Y*Y*(n[pe]*C+i[pe]*w+r[pe]*P)}let ee=.6-H*H-V*V-G*G;if(ee<0)h=0;else{const pe=Fe+v+e[nt+E+e[et+q]];ee*=ee,h=ee*ee*(n[pe]*H+i[pe]*V+r[pe]*G)}let te=.6-U*U-J*J-$*$;if(te<0)d=0;else{const pe=Fe+A+e[nt+B+e[et+k]];te*=te,d=te*te*(n[pe]*U+i[pe]*J+r[pe]*$)}let Ie=.6-le*le-fe*fe-ue*ue;if(Ie<0)u=0;else{const pe=Fe+1+e[nt+1+e[et+1]];Ie*=Ie,u=Ie*Ie*(n[pe]*le+i[pe]*fe+r[pe]*ue)}return 32*(l+h+d+u)}}function CS(t){const n=new Uint8Array(512);for(let i=0;i<512/2;i++)n[i]=i;for(let i=0;i<512/2-1;i++){const r=i+~~(t()*(256-i)),s=n[i];n[i]=n[r],n[r]=s}for(let i=256;i<512;i++)n[i]=n[i-256];return n}const er={particleCount:15e3,particleSize:.12,particleColor:16766720,lerpFactor:.5,noiseScale:.5,noiseStrength:.005,modelPathFace:"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",modelPathHand:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"};RS();const PS=[[0,1,2,3,4],[0,5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[0,5,9,13,17,0]],Ki=document.getElementById("webcam"),LS=document.getElementById("main-canvas"),xr=document.getElementById("webcam-canvas"),Xc=xr.getContext("2d"),qc=document.getElementById("status-text"),Sa=new Tg,yo=new In(75,window.innerWidth/window.innerHeight,.1,1e3),Ma=new Vx({canvas:LS,antialias:!0,alpha:!0});Ma.setSize(window.innerWidth,window.innerHeight);Ma.setPixelRatio(window.devicePixelRatio>1?2:1);Ma.setClearColor(0,1);yo.position.set(0,0,8);const m0=new qg(20,20,65535,1118481);m0.rotation.x=Math.PI/2;Sa.add(m0);const ou=new ci(new Ms(1,1,1),new xu({color:16777215,wireframe:!0}));Sa.add(ou);const bo=new sn,g0=new Float32Array(er.particleCount*3);for(let t=0;t<er.particleCount*3;t++)g0[t]=(Math.random()-.5)*10;bo.setAttribute("position",new vn(g0,3));const DS=new Mu({color:er.particleColor,size:er.particleSize,transparent:!0,opacity:1,blending:jc}),IS=new ip(bo,DS);Sa.add(IS);const US=_0(65535),FS=_0(16777215);function _0(t){const e=new Ys,n=new sn;n.setAttribute("position",new vn(new Float32Array(63),3));const i=new ip(n,new Mu({color:t,size:.15}));e.add(i);const r=PS.map(s=>{const a=new np(new sn,new Su({color:t,transparent:!0,opacity:.8}));return e.add(a),{line:a,chain:s}});return Sa.add(e),{group:e,dotsGeom:n,lines:r}}let v0,x0,ea,Yc,Ld=-1;const eo=new Float32Array(468*3),Xs=new Float32Array(468*3);async function NS(){qc.innerText="LOADING AI MODELS...";try{const t=await fr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");v0=await vt.createFromOptions(t,{baseOptions:{modelAssetPath:er.modelPathFace,delegate:"GPU"},runningMode:"VIDEO",numFaces:1}),x0=await ln.createFromOptions(t,{baseOptions:{modelAssetPath:er.modelPathHand,delegate:"GPU"},runningMode:"VIDEO",numHands:2});const e=await navigator.mediaDevices.getUserMedia({video:!0});Ki.srcObject=e,Ki.onloadeddata=()=>{xr.width=Ki.videoWidth,xr.height=Ki.videoHeight,document.getElementById("loading-screen").style.display="none",qc.innerText="FIXED: READY TO TRACK",S0()}}catch(t){qc.innerText="ERROR: CHECK CAMERA PERMISSIONS",console.error(t)}}function OS(t){if(!ea?.faceLandmarks?.length)return;const e=ea.faceLandmarks[0],n=12;e.forEach((r,s)=>{s>=468||(eo[s*3]=(.5-r.x)*n,eo[s*3+1]=(.5-r.y)*n,eo[s*3+2]=-r.z*10)});for(let r=0;r<468*3;r++)Xs[r]+=(eo[r]-Xs[r])*er.lerpFactor;const i=bo.attributes.position.array;for(let r=0;r<er.particleCount;r++){const s=r%468,a=.4;i[r*3]+=(Xs[s*3]-i[r*3])*a,i[r*3+1]+=(Xs[s*3+1]-i[r*3+1])*a,i[r*3+2]+=(Xs[s*3+2]-i[r*3+2])*a}bo.attributes.position.needsUpdate=!0}function Dd(t,e){if(!t){e.group.visible=!1;return}e.group.visible=!0;const n=e.dotsGeom.attributes.position.array,i=12;t.forEach((r,s)=>{n[s*3]=(.5-r.x)*i,n[s*3+1]=(.5-r.y)*i,n[s*3+2]=-r.z*10}),e.dotsGeom.attributes.position.needsUpdate=!0,e.lines.forEach(({line:r,chain:s})=>{const a=new Float32Array(s.length*3);s.forEach((o,c)=>{a[c*3]=n[o*3],a[c*3+1]=n[o*3+1],a[c*3+2]=n[o*3+2]}),r.geometry.setAttribute("position",new vn(a,3)),r.geometry.attributes.position.needsUpdate=!0})}function S0(){const t=performance.now();Ki.currentTime!==Ld&&(Ld=Ki.currentTime,ea=v0.detectForVideo(Ki,t),Yc=x0.detectForVideo(Ki,t),Xc.clearRect(0,0,xr.width,xr.height),ea.faceLandmarks&&(Xc.fillStyle="#00ff00",ea.faceLandmarks[0].forEach(e=>{Xc.fillRect(e.x*xr.width,e.y*xr.height,3,3)}))),ou.rotation.x+=.01,ou.rotation.y+=.01,OS(),Dd(Yc?.landmarks?.[0],US),Dd(Yc?.landmarks?.[1],FS),Ma.render(Sa,yo),requestAnimationFrame(S0)}window.addEventListener("resize",()=>{yo.aspect=window.innerWidth/window.innerHeight,yo.updateProjectionMatrix(),Ma.setSize(window.innerWidth,window.innerHeight)});NS();
