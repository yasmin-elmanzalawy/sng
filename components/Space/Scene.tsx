"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sun from "./Sun";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <color attach="background" args={["black"]} />

      <ambientLight intensity={0.25} />

      <pointLight
        position={[0, 0, 0]}
        intensity={30}
        color="#ffcc55"
      />

      <Stars
        radius={120}
        depth={80}
        count={5000}
        factor={6}
      />

      <Sun />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}