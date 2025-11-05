export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  date: string;
  category: "game" | "web" | "ai" | "other";
  image?: string;
  demoUrl?: string;
  embedUrl?: string; // For games/websites to embed
  githubUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "purrfect-timing",
    title: "Purrfect Timing",
    description: "A Unity-based card game with AI opponents featuring slap detection mechanics and WebGL deployment",
    longDescription: "Purrfect Timing is an engaging card game developed in Unity that combines fast-paced gameplay with strategic elements. The game features intelligent AI opponents, polished sound effects, and a complete user interface with menus and instruction screens.",
    technologies: ["Unity", "C#", "ShaderLab", "HTML", "WebGL"],
    date: "Sep. 2025",
    category: "game",
    highlights: [
      "Implemented core gameplay mechanics including slap detection logic and scoring rules",
      "Designed card flow automation and AI-controlled opponent behavior",
      "Developed complete win/lose condition systems",
      "Integrated sound effects for enhanced user experience",
      "Deployed to WebGL with full menu navigation and instruction screens",
    ],
    // You can add embedUrl later when you upload the game
    // embedUrl: "https://your-game-url.com/purrfect-timing"
  },
  {
    id: "build-a-monster",
    title: "Build-A-Monster Game",
    description: "Educational game teaching chatbot development with OpenAI API integration built in Godot",
    longDescription: "Build-A-Monster is an innovative educational game designed in Godot that teaches players about chatbot development, including UI design, prompt engineering, and API integration. It combines gameplay with practical learning about AI systems.",
    technologies: ["Godot", "OpenAI API", "Python", "Streamlit"],
    date: "Oct. 2024",
    category: "game",
    highlights: [
      "Designed educational gameplay focused on teaching chatbot development concepts",
      "Integrated OpenAI API for NLP-driven chatbot functionality",
      "Implemented Python backend logic for seamless API communication",
      "Built UI using Godot engine with Streamlit for enhanced gameplay experience",
      "Created interactive tutorials covering prompt engineering techniques",
    ],
  },
  {
    id: "small-business-website",
    title: "Small Business Website",
    description: "Real-time inventory management system for a restaurant with React frontend and Notion API backend",
    longDescription: "A full-stack web application built for a restaurant to manage their inventory in real-time. The system tracks 20+ products with a secure Notion API database backend, providing seamless synchronization between frontend and backend systems.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Notion API"],
    date: "Mar. 2024",
    category: "web",
    highlights: [
      "Engineered real-time inventory management system tracking 20+ products",
      "Implemented secure Notion API database integration",
      "Strengthened backend integration for seamless data synchronization",
      "Built responsive React frontend with intuitive user interface",
      "Ensured data consistency across frontend and backend operations",
    ],
  },
];

// Helper functions for filtering
export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};
