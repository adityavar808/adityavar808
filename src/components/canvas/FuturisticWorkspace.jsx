import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import FloatingCard from './FloatingCard';
import HologramTech from './HologramTech';
import VirtualMonitor from './VirtualMonitor';

function CameraRig({ cameraView }) {
  useFrame((state) => {
    let targetPos = [0, 0, 8];
    let targetLook = [0, 0, 0];

    if (cameraView === 'PROJECTS') {
      targetPos = [0, 1.2, 5.5];
      targetLook = [0, 1.2, 0];
    } else if (cameraView === 'HOLOGRAMS') {
      targetPos = [0, -0.8, 5.0];
      targetLook = [0, -1.0, 0];
    } else if (cameraView === 'STATS') {
      targetPos = [0, 2.5, 4.5];
      targetLook = [0, 2.5, -2];
    }

    // Smooth lerp for camera transition
    state.camera.position.lerp(new THREE.Vector3(...targetPos), 0.05);
    state.camera.lookAt(new THREE.Vector3(...targetLook));
  });

  return null;
}

function ReflectiveFloor() {
  return (
    <group position={[0, -2.5, 0]}>
      {/* Dark Metallic Floor Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#050508" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Cyber Grid Overlay */}
      <gridHelper args={[50, 50, "#0071e3", "#1c1c24"]} position={[0, 0.01, 0]} />

      {/* Contact Shadows */}
      <ContactShadows opacity={0.6} scale={20} blur={2.5} far={10} resolution={512} color="#0071e3" />
    </group>
  );
}

export default function FuturisticWorkspace({ profileData, cameraView, onClickProject }) {
  return (
    <div className="w-full h-full absolute inset-0 bg-[#050507]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050507"]} />
        
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#ffffff" castShadow />
        <pointLight position={[-10, 5, -5]} intensity={2.0} color="#0071e3" />
        <pointLight position={[10, 5, 5]} intensity={2.0} color="#00f0ff" />
        <spotLight position={[0, 10, 0]} intensity={1.8} color="#2997ff" angle={0.6} penumbra={0.8} />

        {/* Camera Rig Animation */}
        <CameraRig cameraView={cameraView} />

        {/* Orbit Controls with Damping */}
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minDistance={3}
          maxDistance={14}
          dampingFactor={0.05}
        />

        {/* Space Particle Background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1.5} />

        {/* 3D Floating Repository Cards */}
        {profileData.projects.map((proj) => (
          <FloatingCard key={proj.id} project={proj} onClickCard={onClickProject} />
        ))}

        {/* 3D Holographic Tech Spheres */}
        {profileData.holograms.map((tech, idx) => (
          <HologramTech key={idx} tech={tech} />
        ))}

        {/* 3D Virtual Telemetry Monitors */}
        {profileData.monitors.map((mon) => (
          <VirtualMonitor key={mon.id} monitor={mon} />
        ))}

        {/* Reflective Ground Floor */}
        <ReflectiveFloor />
      </Canvas>
    </div>
  );
}
