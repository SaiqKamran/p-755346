
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, Environment } from "@react-three/drei";

const MODEL_PATH = "/vintage_robot_animated.glb";

function RobotModel() {
  const { scene } = useGLTF(MODEL_PATH, true);
  return <primitive object={scene} scale={1.6} />;
}

// Fallback loader
function Loader() {
  return (
    <div className="flex w-full h-full min-h-[340px] justify-center items-center">
      <span className="loader" />
    </div>
  );
}

export const RobotViewer: React.FC = () => (
  <div className="w-full h-[360px] bg-gradient-to-b from-[#221255] via-[#1a102e] to-[#140a24] rounded-xl mt-6 flex items-center justify-center overflow-hidden shadow-lg">
    <Canvas camera={{ position: [2.5, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.8} />
      <directionalLight intensity={2.5} position={[5, 5, 5]} />
      {/* Add some environment/ground for nice contrast */}
      <Suspense fallback={<Loader />}>
        <Stage environment={null} intensity={0.6} shadows={false}>
          <RobotModel />
        </Stage>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={true} />
    </Canvas>
  </div>
);

// To fix GLTF loader warning
useGLTF.preload(MODEL_PATH);
