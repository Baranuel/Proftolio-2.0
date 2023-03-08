varying vec2 vUv;
varying vec3 vColor;
uniform float uTime;
varying vec3 vPos;

void main() {
    gl_FragColor = vec4(vColor, 1.0);
}