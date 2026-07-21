import React from 'react';
import { Sparkles, Camera, Layers, Cpu, Monitor, ExternalLink, Github, Linkedin, Mail, X, Globe } from 'lucide-react';

export default function UIOverlay({ profileData, cameraView, setCameraView, activeProject, setActiveProject }) {
  const navItems = [
    { id: 'ALL', label: 'Overview', icon: Camera },
    { id: 'PROJECTS', label: '3D Projects', icon: Layers },
    { id: 'HOLOGRAMS', label: 'Tech Holograms', icon: Cpu },
    { id: 'STATS', label: 'Virtual Telemetry', icon: Monitor },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-4 sm:p-6">
      {/* Top Navigation HUD Bar */}
      <header className="pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-4 glass-panel p-3 sm:px-6 sm:py-3 rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0071e3] to-[#00f0ff] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#0071e3]/40">
              
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-black rounded-full animate-pulse"></span>
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              {profileData.name}
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#0071e3]/30 text-[#00f0ff] border border-[#0071e3]/50">
                3D WebGL Profile
              </span>
            </h1>
            <p className="text-xs text-gray-400 font-mono">{profileData.role}</p>
          </div>
        </div>

        {/* Viewport Camera Selector */}
        <div className="flex items-center bg-black/60 p-1 rounded-xl border border-white/10 space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = cameraView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCameraView(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  active
                    ? 'bg-[#0071e3] text-white shadow-md shadow-[#0071e3]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* External Links */}
        <div className="flex items-center space-x-2">
          <a
            href={profileData.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-1.5 text-xs bg-[#0071e3]/20 hover:bg-[#0071e3] text-[#00f0ff] hover:text-white px-3 py-1.5 rounded-lg border border-[#0071e3]/40 transition-all"
          >
            <Globe size={14} />
            <span>Website</span>
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </header>

      {/* Floating Instruction Banner */}
      <div className="pointer-events-none self-center bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center space-x-2 shadow-lg">
        <Sparkles size={14} className="text-[#00f0ff] animate-spin" />
        <span>Click 3D cards to inspect • Drag & rotate 3D viewport freely</span>
      </div>

      {/* Bottom HUD Quick Links */}
      <footer className="pointer-events-auto flex items-center justify-between glass-panel px-5 py-2.5 rounded-xl border border-white/10 text-xs text-gray-400">
        <div className="flex items-center space-x-4">
          <a href={profileData.github} target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-white transition-colors">
            <Github size={14} /> <span>github.com/{profileData.username}</span>
          </a>
          <a href={`mailto:${profileData.email}`} className="flex items-center space-x-1 hover:text-white transition-colors hidden sm:flex">
            <Mail size={14} /> <span>{profileData.email}</span>
          </a>
        </div>
        <div className="text-[11px] font-mono text-[#2997ff]">
           Three.js + R3F Powered
        </div>
      </footer>

      {/* Active Project Modal overlay when a 3D repository card is selected */}
      {activeProject && (
        <div className="pointer-events-auto fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="glass-panel-glow max-w-lg w-full rounded-2xl p-6 border border-[#00f0ff]/50 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"
            >
              <X size={18} />
            </button>

            <span className="text-xs uppercase font-mono text-[#00f0ff] px-2.5 py-1 rounded bg-[#0071e3]/20 border border-[#0071e3]/40">
              {activeProject.category}
            </span>

            <h2 className="text-2xl font-bold text-white mt-3 flex items-center gap-2">
              {activeProject.name}
            </h2>

            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              {activeProject.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {activeProject.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-black/80 text-cyan-200 px-3 py-1 rounded border border-cyan-500/30">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={`${profileData.github}/${activeProject.id}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 bg-[#0071e3] hover:bg-[#005bb5] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-[#0071e3]/50"
              >
                <Github size={16} />
                <span>View Repository</span>
              </a>
              <a
                href={profileData.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <span>Live Demo</span> <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
