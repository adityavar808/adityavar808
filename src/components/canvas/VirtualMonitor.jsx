import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Monitor } from 'lucide-react';

export default function VirtualMonitor({ monitor }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Micro breathing tilt
    groupRef.current.rotation.x = monitor.rot[0] + Math.sin(t * 1.2) * 0.02;
  });

  return (
    <group ref={groupRef} position={monitor.pos} rotation={monitor.rot}>
      {/* Monitor Frame Mesh */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.6, 2.8, 0.15]} />
        <meshStandardMaterial color="#0f0f15" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Monitor Screen Frame Glow Border */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[4.45, 2.65]} />
        <meshBasicMaterial color="#0071e3" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -1.6, -0.2]}>
        <cylinderGeometry args={[0.08, 0.12, 0.6, 16]} />
        <meshStandardMaterial color="#1c1c1e" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -1.9, -0.2]}>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <meshStandardMaterial color="#1c1c1e" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen Display Content */}
      <Html
        transform
        position={[0, 0, 0.09]}
        style={{
          width: '440px',
          height: '260px',
          pointerEvents: 'auto',
          userSelect: 'none'
        }}
      >
        <div className="w-full h-full glass-panel border border-[#2997ff]/40 rounded-lg p-2.5 flex flex-col justify-between overflow-hidden shadow-2xl relative group">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-2 py-1 bg-black/70 rounded border border-white/10 text-[11px] font-mono text-cyan-400">
            <span className="flex items-center space-x-1.5">
              <Monitor size={12} className="text-[#00f0ff]" />
              <span>{monitor.title}</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-[10px] text-emerald-400">ONLINE</span>
            </span>
          </div>

          {/* Live GitHub Stats Screen Render */}
          <div className="flex-1 my-1.5 flex items-center justify-center bg-black/60 rounded p-1 border border-white/5 relative overflow-hidden">
            <img
              src={monitor.image}
              alt={monitor.title}
              className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
            />
            {/* Scanline overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none animate-pulse"></div>
          </div>
        </div>
      </Html>
    </group>
  );
}
