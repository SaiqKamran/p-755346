
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import * as THREE from "three";

function VintageRobotModel() {
  // The file is public so path is '/vintage_robot_animated.glb'
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/vintage_robot_animated.glb") as any;
  // If glTF has animation, play the first clip (basic autoplay via AnimationMixer)
  React.useEffect(() => {
    if (!animations || animations.length === 0 || !group.current) return;
    const mixer = new THREE.AnimationMixer(group.current);
    const action = mixer.clipAction(animations[0]);
    action.play();
    let frameId: number;
    const animate = (delta: number) => {
      mixer.update(delta);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => {
      mixer.stopAllAction();
      cancelAnimationFrame(frameId);
    };
  }, [animations]);
  // Rotate slowly around Y-axis
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25; // slow rotate (0.25 radians/sec)
    }
  });
  return <primitive ref={group} object={scene} scale={3} />;
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

