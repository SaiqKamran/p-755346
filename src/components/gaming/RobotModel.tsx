
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import { Group } from 'three';

function Model() {
  const group = useRef<Group>(null);
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
  }, [actions]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={5} position={[0, -1.5, 0]} />
    </group>
  );
}

export const RobotModel = () => {
  return (
    <div className="h-[600px] w-full my-12 rounded-xl overflow-hidden bg-gradient-to-b from-purple-900/20 to-indigo-900/10 border border-purple-500/20">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 40 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#9f7aea" />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls 
            enableZoom={true} 
            enablePan={true}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
