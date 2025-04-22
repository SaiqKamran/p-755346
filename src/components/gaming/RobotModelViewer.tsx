
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";

function RobotModel() {
  // Load the model from the public folder
  const { scene } = useGLTF("/vintage_robot_animated.glb");
  return <primitive object={scene} scale={1.6} />;
}

export const RobotModelViewer: React.FC = () => (
  <div className="w-full h-[400px] flex items-center justify-center bg-[#181235] rounded-xl shadow-inner mt-12 mb-8 relative">
    <Canvas camera={{ position: [0, 1, 7], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} position={[10, 10, 5]} />
      <Suspense fallback={
        <Html center>
          <span className="text-white bg-black/70 px-4 py-2 rounded">Loading...</span>
        </Html>
      }>
        <Stage environment="city" intensity={0.9} shadows>
          <RobotModel />
        </Stage>
      </Suspense>
      <OrbitControls enablePan={true} enableZoom={true} />
    </Canvas>
  </div>
);

// Required for useGLTF to work with .glb models
useGLTF.preload("/vintage_robot_animated.glb");
