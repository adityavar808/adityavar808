import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { ExternalLink, Star, GitFork, Sparkles } from 'lucide-react';

export default function FloatingCard({ project, onClickCard }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Subtle float animation
    meshRef.current.position.y = project.position[1] + Math.sin(t * 1.5 + project.position[0]) * 0.12;
    // Slow rotational hover response
    if (!hovered) {
      meshRef.current.rotation.y = project.rotation[1] + Math.sin(t * 0.8) * 0.05;
    } else {
      meshRef.current.rotation.y = project.rotation[1] + 0.15;
    }
  });

  return (
    <group
      ref={meshRef}
      position={project.position}
      rotation={project.rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* 3D Glass Box Mesh */}
      <mesh scale={hovered ? [3.4, 2.2, 0.15] : [3.2, 2.0, 0.1]}>
        <boxGeometry />
        <meshPhysicalMaterial
          color={hovered ? "#0071e3" : "#0a0a0f"}
          roughness={0.1}
          metalness={0.8}
          transmission={0.6}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      {/* Glowing Border Box */}
      <mesh scale={hovered ? [3.45, 2.25, 0.14] : [3.25, 2.05, 0.09]}>
        <boxGeometry />
        <meshBasicMaterial
          color={hovered ? "#00f0ff" : project.color}
          wireframe={true}
          transparent={true}
          opacity={hovered ? 0.9 : 0.4}
        />
      </mesh>

      {/* Embedded 3D HTML UI */}
      <Html
        transform
        occlude
        position={[0, 0, 0.1]}
        style={{
          width: '320px',
          height: '200px',
          pointerEvents: 'auto',
          userSelect: 'none'
        }}
      >
        <div 
          onClick={() => onClickCard(project)}
          className={`w-full h-full p-5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
            hovered ? 'glass-panel-glow border-[#00f0ff]/50' : 'glass-panel'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#2997ff] px-2 py-0.5 rounded bg-[#0071e3]/20 border border-[#0071e3]/40">
                {project.category}
              </span>
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <span className="flex items-center space-x-1"><Star size={12} className="text-yellow-400" /> <span>{project.stars}</span></span>
                <span className="flex items-center space-x-1"><GitFork size={12} className="text-cyan-400" /> <span>{project.forks}</span></span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors flex items-center gap-1.5">
              {project.name} <Sparkles size={14} className="text-[#2997ff]" />
            </h3>
            
            <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-[10px] bg-black/60 text-gray-300 px-2 py-0.5 rounded border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-1.5 rounded-full bg-[#0071e3]/30 text-[#00f0ff] hover:bg-[#0071e3] transition-colors">
              <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
}
