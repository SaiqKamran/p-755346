
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage } from '@react-three/drei';

// Fallback model made with pure Three.js meshes
function FallbackModel() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.5, 16, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="gold" />
      </mesh>
    </group>
  );
}

interface GltfModelViewerProps {
  modelUrl: string;
  className?: string;
}

export function GltfModelViewer({ modelUrl, className }: GltfModelViewerProps) {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'rgba(0, 0, 0, 0.1)' }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <FallbackModel />
          </Stage>
          <OrbitControls 
            autoRotate
            enableZoom={true}
            enablePan={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={(3 * Math.PI) / 4}
          />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
