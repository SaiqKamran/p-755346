
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Stage, Box, Sphere, Torus } from '@react-three/drei';

// Fallback model when a GLB file isn't available
function FallbackModel() {
  return (
    <group>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="purple" />
      </Box>
      <Torus args={[1.5, 0.5, 16, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="hotpink" />
      </Torus>
      <Sphere args={[0.5, 32, 32]} position={[0, 2, 0]}>
        <meshStandardMaterial color="gold" />
      </Sphere>
    </group>
  );
}

function Model({ url }: { url: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <FallbackModel />;
  }
  
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
  } catch (error) {
    console.error("Error loading model:", error);
    setHasError(true);
    return <FallbackModel />;
  }
}

interface GltfModelViewerProps {
  modelUrl: string;
  className?: string;
}

export function GltfModelViewer({ modelUrl, className }: GltfModelViewerProps) {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'rgba(0, 0, 0, 0.1)' }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
            <ErrorBoundary fallback={<FallbackModel />}>
              <Model url={modelUrl} />
            </ErrorBoundary>
          </Stage>
          <OrbitControls 
            autoRotate
            enableZoom={true}
            enablePan={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={(3 * Math.PI) / 4}
          />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

// Error boundary to catch model loading errors
class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}> {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error) {
    console.error("Error in component:", error);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
