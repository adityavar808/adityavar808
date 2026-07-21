export const profileData = {
  name: "Aditya Varshney",
  username: "adityavar808",
  role: "AI/ML Engineer & Computer Vision Developer",
  bio: "Architecting high-throughput vision pipelines, low-latency deep neural nets, and autonomous AI agents inside a minimalist 3D environment.",
  website: "https://adityavarshney.netlify.app",
  email: "adityavarshney808@gmail.com",
  linkedin: "https://linkedin.com/in/adityaavarshney",
  github: "https://github.com/adityavar808",
  
  projects: [
    {
      id: "video-analysis",
      name: "Real Time Video Analysis",
      category: "Computer Vision & Tracking",
      description: "Low-latency multi-object tracking and visual stream telemetry extraction engine running on deep neural nets.",
      tags: ["PyTorch", "OpenCV", "YOLOv8", "Python"],
      stars: 48,
      forks: 12,
      position: [-2.8, 1.2, 0.5],
      rotation: [0, 0.25, 0],
      color: "#0071e3"
    },
    {
      id: "zenix",
      name: "Zenix",
      category: "AI Autonomous Framework",
      description: "Intelligent agentic task orchestration engine with vector memory, custom tool invocation, and multi-model routing.",
      tags: ["Python", "FastAPI", "LLMs", "Vector DB"],
      stars: 64,
      forks: 18,
      position: [0, 2.0, 1.2],
      rotation: [0, 0, 0],
      color: "#2997ff"
    },
    {
      id: "interviewverse",
      name: "InterviewVerse AI",
      category: "AI & Web Platform",
      description: "Real-time AI video interview trainer evaluating vocal prosody, micro-expressions, and automated feedback scoring.",
      tags: ["React", "WebRTC", "OpenAI", "Python"],
      stars: 92,
      forks: 27,
      position: [2.8, 1.2, 0.5],
      rotation: [0, -0.25, 0],
      color: "#00f0ff"
    }
  ],

  holograms: [
    { name: "PyTorch", category: "Deep Learning", icon: "🔥", color: "#ee4c2c", pos: [-3.5, -0.8, 1.5] },
    { name: "OpenCV", category: "Computer Vision", icon: "👁️", color: "#5c3ee8", pos: [-1.8, -1.0, 2.0] },
    { name: "Python", category: "Core Language", icon: "🐍", color: "#3776ab", pos: [0, -1.2, 2.2] },
    { name: "YOLOv8", category: "Object Detection", icon: "🎯", color: "#00f0ff", pos: [1.8, -1.0, 2.0] },
    { name: "FastAPI", category: "Low Latency API", icon: "⚡", color: "#059669", pos: [3.5, -0.8, 1.5] }
  ],

  monitors: [
    {
      id: "stats-main",
      title: "TELEMETRY MONITOR",
      type: "stats",
      image: "https://github-readme-stats.vercel.app/api?username=adityavar808&show_icons=true&theme=dark&title_color=2997ff&icon_color=0071e3&text_color=8e8e93&bg_color=0a0a0c&hide_border=true",
      pos: [-2.2, 2.8, -2],
      rot: [0.1, 0.3, 0]
    },
    {
      id: "streak-main",
      title: "STREAK MONITOR",
      type: "streak",
      image: "https://github-readme-streak-stats.herokuapp.com/?user=adityavar808&theme=dark&background=0a0a0c&fire=2997ff&ring=0071e3&currStreakLabel=2997ff&currStreakNum=ffffff&sideNums=ffffff&sideLabels=0071e3&dates=8e8e93&hide_border=true",
      pos: [2.2, 2.8, -2],
      rot: [0.1, -0.3, 0]
    }
  ]
};
