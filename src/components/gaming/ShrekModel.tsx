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

  // Apply the original scene materials to keep Shrek's original colors
  React.useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Preserve original materials to keep Shrek's colors
          child.material = child.material.clone();
        }
      });
    }
  }, [scene]);

  return (
    <group ref={modelRef}>
      <primitive 
        object={scene} 
        scale={2.5} 
        position={[0, -2.8, 0]} 
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
        <ambientLight intensity={0.8} />
        <directionalLight 
          intensity={1.5} 
          position={[5, 5, 5]} 
          color="#ffffff"
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
