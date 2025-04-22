
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

function VintageRobotModel() {
  // The file is public so path is '/vintage_robot_animated.glb'
  const { scene } = useGLTF("/vintage_robot_animated.glb");
  return <primitive object={scene} scale={3.5} />;
}

export const RobotModel = () => (
  <div
    className="w-full flex justify-center items-center py-12 bg-[#1b1240] rounded-2xl mt-12 shadow-2xl"
    style={{
      // fill more space with a theme-matched background
      background:
        "linear-gradient(135deg, #1b1240 80%, #221F2C 100%)",
    }}
  >
    <div style={{ width: "100%", maxWidth: 600, height: 420 }}>
      <Canvas camera={{ position: [0, 1.5, 4], fov: 60 }}>
        {/* Match theme color for background */}
        <color attach="background" args={["#1b1240"]} />
        <ambientLight intensity={0.95} />
        <directionalLight intensity={1.2} position={[5, 8, 6]} />
        <Suspense fallback={null}>
          <Stage environment={null} intensity={0.5} adjustCamera={false}>
            <VintageRobotModel />
          </Stage>
        </Suspense>
        <OrbitControls enablePan={false} minDistance={2.5} maxDistance={8} />
      </Canvas>
    </div>
  </div>
);

// drei's useGLTF has a cache, but let's pre-load it for perf
useGLTF.preload("/vintage_robot_animated.glb");
