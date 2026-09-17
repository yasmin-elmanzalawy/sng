import * as THREE from "three";

export function createSunMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: {
        value: 0,
      },
    },

    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {

          vUv = uv;
          vNormal = normalize(normalMatrix * normal);

          gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position,1.0);

      }
    `,

    fragmentShader: `
      uniform float uTime;

      varying vec2 vUv;
      varying vec3 vNormal;

      void main(){

          vec2 uv = vUv;

          float wave1 =
              sin((uv.x + uTime * 0.18) * 22.0);

          float wave2 =
              sin((uv.y - uTime * 0.25) * 18.0);

          float wave3 =
              sin((uv.x + uv.y + uTime * 0.12) * 35.0);

          float pattern =
              (wave1 + wave2 + wave3) / 3.0;

          pattern = pattern * 0.5 + 0.5;

          vec3 dark =
              vec3(1.0,0.22,0.0);

          vec3 mid =
              vec3(1.0,0.55,0.0);

          vec3 bright =
              vec3(1.0,0.92,0.35);

          vec3 color =
              mix(dark, mid, pattern);

          color =
              mix(color, bright, smoothstep(0.65,1.0,pattern));

          float rim =
              pow(1.0 - abs(vNormal.z),3.0);

          color += rim * 0.35;

          gl_FragColor =
              vec4(color,1.0);

      }
    `,
  });
}