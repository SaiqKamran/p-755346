
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

function Model() {
  const [modelLoaded, setModelLoaded] = useState(false);
  const { scene, animations } = useGLTF('/vintage_robot_animated.glb');
  
  useEffect(() => {
    if (scene) {
      setModelLoaded(true);
    }
  }, [scene]);

  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

export const RobotModel = () => {
  const [error, setError] = useState<string | null>(null);

  // Error boundary for 3D content
  const handleError = (err: Error) => {
    console.error("Error in 3D rendering:", err);
    setError(err.message);
  };

  return (
    <div className="h-[400px] w-full my-12 relative">
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
          <p className="text-white text-center p-4">
            Could not load 3D model. Please try refreshing the page.
          </p>
        </div>
      ) : (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: 'transparent' }}
          onError={handleError}
        >
          <ambientLight intensity={1.0} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};
