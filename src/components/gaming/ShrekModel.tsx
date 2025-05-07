
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ShrekModelScene() {
  const { scene } = useGLTF("/shrek.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      // Apply a very gentle automatic rotation if desired
      // modelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive 
        object={scene} 
        scale={1.8} 
        position={[0, -1.5, 0]} 
      />
    </group>
  );
}

export const ShrekModel = () => {
  return (
    <div className="w-full h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          intensity={1} 
          position={[5, 5, 5]} 
        />
        <ShrekModelScene />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

useGLTF.preload("/shrek.glb");
