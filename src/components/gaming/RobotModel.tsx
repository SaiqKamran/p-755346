
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Award, Building, Circle, CircleCheck, CircleDot, FileText, Laptop, Users } from "lucide-react";

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
    className="w-full flex justify-center items-center py-12 bg-[#0F0F0F] rounded-2xl mt-12 shadow-2xl relative"
    style={{
      background: "linear-gradient(135deg, #0F0F0F 80%, #1A1A1A 100%)",
    }}
  >
    {/* Left Side Stats */}
    <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-8">
      <motion.div 
        className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Award className="w-8 h-8 text-yellow-400 mb-2" />
        <h3 className="text-yellow-400 text-2xl font-bold">3 Decades</h3>
        <p className="text-white/80">(29 Years) of Transformative Training</p>
      </motion.div>

      <motion.div 
        className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Users className="w-8 h-8 text-yellow-400 mb-2" />
        <h3 className="text-yellow-400 text-2xl font-bold">3 Lakh +</h3>
        <p className="text-white/80">Placement Worldwide</p>
      </motion.div>

      <motion.div 
        className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <CircleDot className="w-8 h-8 text-yellow-400 mb-2" />
        <h3 className="text-yellow-400 text-2xl font-bold">10</h3>
        <p className="text-white/80">Average Class size</p>
      </motion.div>
    </div>

    {/* Robot Model in Center */}
    <div style={{ width: "100%", height: "400px" }} className="mx-20">
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

    {/* Right Side Stats */}
    <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-8">
      <motion.div 
        className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Laptop className="w-8 h-8 text-yellow-400 mb-2" />
        <h3 className="text-yellow-400 text-2xl font-bold">4</h3>
        <p className="text-white/80">Computer Labs</p>
      </motion.div>

      <motion.div 
        className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Building className="w-8 h-8 text-yellow-400 mb-2" />
        <div className="space-y-4">
          <div>
            <h3 className="text-yellow-400 text-2xl font-bold">100%</h3>
            <p className="text-white/80">Placement Assistance</p>
          </div>
          <div className="border-t border-yellow-400/20 pt-4">
            <p className="text-white/80">Cafeteria for Students</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-yellow-400/20 backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <FileText className="w-8 h-8 text-yellow-400 mb-2" />
        <div className="space-y-4">
          <div>
            <p className="text-white/80">2 years access to Onlinevarsity from the date of certification</p>
          </div>
          <div className="border-t border-yellow-400/20 pt-4">
            <h3 className="text-yellow-400 text-2xl font-bold">100%</h3>
            <p className="text-white/80">Certificate Authentication available for Employers, Govt authorities, Embassies as & when required.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

useGLTF.preload("/vintage_robot_animated.glb");
