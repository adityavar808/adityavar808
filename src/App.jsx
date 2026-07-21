import React, { useState } from 'react';
import FuturisticWorkspace from './components/canvas/FuturisticWorkspace';
import UIOverlay from './components/UIOverlay';
import { profileData } from './data/portfolioData';

export default function App() {
  const [cameraView, setCameraView] = useState('ALL');
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#050507]">
      {/* 3D Canvas Scene */}
      <FuturisticWorkspace
        profileData={profileData}
        cameraView={cameraView}
        onClickProject={(project) => setActiveProject(project)}
      />

      {/* 2D HUD UI Overlay */}
      <UIOverlay
        profileData={profileData}
        cameraView={cameraView}
        setCameraView={setCameraView}
        activeProject={activeProject}
        setActiveProject={setActiveProject}
      />
    </div>
  );
}
