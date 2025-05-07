
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function ShrekModelScene() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/shrek.glb") as any;
  
  useFrame(() => {
    if (!group.current) return;
    // Optional: Add any animation here if needed
  });
  
  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        scale={2} 
        position={[0, -1.5, 0]} 
      />
    </group>
  );
}

export const ShrekModel = () => {
  return (
    <div className="relative h-[600px] w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={1.2} />
        <directionalLight intensity={1.5} position={[5, 8, 6]} />
        <Suspense fallback={null}>
          <ShrekModelScene />
        </Suspense>
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
