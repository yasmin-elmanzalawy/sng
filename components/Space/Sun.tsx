"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createSunMaterial } from "./SunMaterial";

export default function Sun() {
  const group = useRef<THREE.Group>(null!);
  const sphere = useRef<THREE.Mesh>(null!);

  const material = useMemo(() => createSunMaterial(), []);

  useFrame((state, delta) => {
    // Continuous rotation
    sphere.current.rotation.y += delta * 0.18;

    // Small wobble
    sphere.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.03;

    // Animate shader
    material.uniforms.uTime.value += delta;

    // Subtle floating motion
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={group}>
      {/* Main Sun */}
      <mesh ref={sphere} material={material}>
        <sphereGeometry args={[2.2, 128, 128]} />
      </mesh>

      {/* Inner Glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[2.2, 64, 64]} />

        <meshBasicMaterial
          color="#ff8a00"
          transparent
          opacity={0.22}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer Glow */}
      <mesh scale={1.25}>
        <sphereGeometry args={[2.2, 64, 64]} />

        <meshBasicMaterial
          color="#ffb000"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Corona */}
      <mesh scale={1.45}>
        <sphereGeometry args={[2.2, 64, 64]} />

        <meshBasicMaterial
          color="#ffd95e"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Sun Light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={45}
        color="#ffb347"
        distance={80}
        decay={2}
      />
    </group>
  );
}