import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function VintageRobotModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/vintage_robot_animated.glb") as any;

  React.useEffect(() => {
    if (!group.current || !animations || animations.length === 0) return;
    const mixer = new THREE.AnimationMixer(group.current);
    animations.forEach((clip: THREE.AnimationClip) => {
      mixer.clipAction(clip, group.current).play();
    });
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
      <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />
    </group>
  );
}

export const RobotModel = () => (
  <div
    className="w-full flex justify-center items-center py-12 bg-[#0F0F0F] rounded-2xl mt-12 shadow-2xl"
    style={{
      background: "linear-gradient(135deg, #0F0F0F 80%, #1A1A1A 100%)",
    }}
  >
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        style={{ width: "100%", height: "100%" }}
      >
        <color attach="background" args={["#0F0F0F"]} />
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
