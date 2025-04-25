import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Award, Building, Circle, CircleCheck, CircleDot, FileText, Laptop, Users, Star, Globe, BookOpen } from "lucide-react";
function VintageRobotModel() {
  const group = useRef<THREE.Group>(null);
  const {
    scene,
    animations
  } = useGLTF("/vintage_robot_animated.glb") as any;
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
  return <group ref={group}>
      <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />
    </group>;
}
export const RobotModel = () => <div className="w-full py-12 bg-[#0F0F0F] rounded-2xl mt-12 shadow-2xl" style={{
  background: "linear-gradient(135deg, #0F0F0F 80%, #1A1A1A 100%)"
}}>
    <div className="flex justify-between items-stretch">
      {/* Left Side Stats */}
      <div className="w-1/4 space-y-6 pl-8 flex flex-col justify-between">
        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <Award className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-yellow-400 text-xl font-bold">3 Decades</h3>
          <p className="text-white/80 text-sm">(29 Years) of Training</p>
        </motion.div>

        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.3
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <Users className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-yellow-400 text-xl font-bold">3 Lakh +</h3>
          <p className="text-white/80 text-sm">Placement Worldwide</p>
        </motion.div>

        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.4
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <CircleDot className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-yellow-400 text-xl font-bold">10</h3>
          <p className="text-white/80 text-sm">Average Class Size</p>
        </motion.div>

        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.5
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <Star className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-yellow-400 text-xl font-bold">20+</h3>
          <p className="text-white/80 text-sm">Years of Excellence</p>
        </motion.div>
      </div>

      {/* Robot Model in Center */}
      <div className="w-2/4 h-[500px]">
        <Canvas camera={{
        position: [0, 0, 5],
        fov: 50
      }} style={{
        width: "100%",
        height: "100%"
      }}>
          <color attach="background" args={["#0F0F0F"]} />
          <ambientLight intensity={0.95} />
          <directionalLight intensity={1.2} position={[5, 8, 6]} />
          <Suspense fallback={null}>
            <VintageRobotModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} rotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Right Side Stats */}
      <div className="w-1/4 space-y-6 pr-8 flex flex-col justify-between">
        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <Laptop className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-yellow-400 text-xl font-bold">4</h3>
          <p className="text-white/80 text-sm">Computer Labs</p>
        </motion.div>

        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.3
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <Building className="w-6 h-6 text-yellow-400 mb-2" />
          <div className="space-y-3">
            <div>
              <h3 className="text-yellow-400 text-xl font-bold">100%</h3>
              <p className="text-white/80 text-sm">Placement Assistance</p>
            </div>
            <div className="border-t border-yellow-400/20 pt-2">
              
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.4
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <FileText className="w-6 h-6 text-yellow-400 mb-2" />
          <div className="space-y-3">
            <div>
              <p className="text-white/80 text-sm">2 years access to Onlinevarsity</p>
            </div>
            <div className="border-t border-yellow-400/20 pt-2">
              
              
            </div>
          </div>
        </motion.div>

        <motion.div className="bg-[#1A1A1A]/50 p-4 rounded-xl border border-yellow-400/20 backdrop-blur-sm hover:border-yellow-400/40 transition-all duration-300 h-[110px]" initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.5
      }} whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(26, 26, 26, 0.7)"
      }}>
          <Globe className="w-6 h-6 text-yellow-400 mb-2" />
          <h3 className="text-yellow-400 text-xl font-bold">100%</h3>
          <p className="text-white/80 text-sm">Certificate Authentication</p>
        </motion.div>
      </div>
    </div>
  </div>;
useGLTF.preload("/vintage_robot_animated.glb");