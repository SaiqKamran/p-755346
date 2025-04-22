
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/vintage_robot_animated.glb');
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export const RobotModel = () => {
  return (
    <div className="h-[400px] w-full my-12">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};
