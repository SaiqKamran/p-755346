
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Group } from 'three';

function Model() {
  const group = useRef<Group>(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { scene, animations } = useGLTF('/vintage_robot_animated.glb');
  const { actions } = useAnimations(animations, group);
  
  // Make the robot rotate
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  // Play animation when component mounts
  useEffect(() => {
    // Play the first animation if it exists
    const animationNames = Object.keys(actions);
    if (animationNames.length > 0) {
      const firstAnimation = actions[animationNames[0]];
      if (firstAnimation) {
        firstAnimation.reset().play();
      }
    }
    
    // Mark model as loaded
    setModelLoaded(true);
    console.log("Robot model loaded successfully");
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={4} position={[0, -2, 0]} />
    </group>
  );
}

export const RobotModel = () => {
  const [error, setError] = useState<string | null>(null);

  // Error boundary for 3D rendering
  const handleError = (e: ErrorEvent) => {
    console.error("Error in 3D rendering:", e);
    setError("Failed to load 3D model. Please refresh the page.");
  };

  useEffect(() => {
    window.addEventListener('error', handleError);
    console.log("RobotModel component mounted");
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="h-[600px] w-full my-12 rounded-xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-indigo-900/10 border border-purple-500/20">
      {error ? (
        <div className="h-full w-full flex items-center justify-center text-white">
          <p>{error}</p>
        </div>
      ) : (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 40 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-5, -5, -5]} intensity={1} color="#9f7aea" />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              autoRotate={false}
              minPolarAngle={Math.PI / 5}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};
