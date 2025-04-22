
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  return <primitive object={scene} />;
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
            <Model url={modelUrl} />
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
