import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';

export default function HologramTech({ tech }) {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.rotation.x += delta * 0.3;
    innerRef.current.rotation.y -= delta * 0.8;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={tech.pos}>
      <group>
        {/* Hologram Outer Sphere Wireframe */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshBasicMaterial
            color={tech.color}
            wireframe={true}
            transparent={true}
            opacity={0.6}
          />
        </mesh>

        {/* Hologram Inner Core Geometry */}
        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color={tech.color}
            emissive={tech.color}
            emissiveIntensity={1.5}
            wireframe={false}
            transparent={true}
            opacity={0.8}
          />
        </mesh>

        {/* 3D Label Tag */}
        <Html
          position={[0, -0.8, 0]}
          center
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          <div className="flex flex-col items-center">
            <div className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/30 flex items-center space-x-1.5 shadow-lg shadow-cyan-500/20">
              <span className="text-sm">{tech.icon}</span>
              <span className="text-xs font-semibold text-cyan-200 tracking-wide font-mono">{tech.name}</span>
            </div>
            <span className="text-[9px] text-gray-400 font-mono mt-0.5">{tech.category}</span>
          </div>
        </Html>
      </group>
    </Float>
  );
}
