
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

function Model() {
  const { scene } = useGLTF('/vintage_robot_animated.glb');
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

function ErrorFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
      <p className="text-white text-center p-4">
        Could not load 3D model. Please try refreshing the page.
      </p>
    </div>
  );
}

export const RobotModel = () => {
  return (
    <div className="h-[400px] w-full my-12 relative">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={1.0} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};
