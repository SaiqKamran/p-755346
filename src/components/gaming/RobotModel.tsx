
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Type assertion since drei's useGLTF returns unknown for animations sometimes
function VintageRobotModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/vintage_robot_animated.glb") as any;

  // Play all animations if any present
  React.useEffect(() => {
    if (!group.current || !animations || animations.length === 0) return;
    const mixer = new THREE.AnimationMixer(group.current);
    // Play all animations the model may contain
    animations.forEach((clip: THREE.AnimationClip) => {
      mixer.clipAction(clip, group.current).play();
    });
    // Advance the animation on render
    let lastTime = performance.now();
    const update = () => {
      const now = performance.now();
      mixer.update((now - lastTime) / 1000);
      lastTime = now;
      requestAnimationFrame(update);
    };
    update();
    return () => {
      mixer.stopAllAction();
    };
  }, [animations]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={2} position={[0, -1, 0]} />
    </group>
  );
}

export const RobotModel = () => (
  <div
    className="w-full flex justify-center items-center py-12 bg-[#1b1240] rounded-2xl mt-12 shadow-2xl"
    style={{
      background: "linear-gradient(135deg, #1b1240 80%, #221F2C 100%)",
    }}
  >
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        style={{ width: "100%", height: "100%" }}
      >
        {/* Theme matching background */}
        <color attach="background" args={["#1b1240"]} />
        <ambientLight intensity={0.95} />
        <directionalLight intensity={1.2} position={[5, 8, 6]} />
        <Suspense fallback={null}>
          <VintageRobotModel />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          minDistance={2.2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  </div>
);

useGLTF.preload("/vintage_robot_animated.glb");
