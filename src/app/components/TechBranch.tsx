import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Layout, 
  Cpu,
  GitBranch,
  Package,
  Zap,
  Lock,
  Globe,
  Server
} from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export function TechBranch() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const technologies: Technology[] = [
    { name: 'React', icon: <Code2 size={28} />, description: 'UI Library' },
    { name: 'TypeScript', icon: <Layout size={28} />, description: 'Type Safety' },
    { name: 'Node.js', icon: <Cpu size={28} />, description: 'Runtime' },
    { name: 'Database', icon: <Database size={28} />, description: 'Storage' },
    { name: 'Cloud', icon: <Cloud size={28} />, description: 'Infrastructure' },
    { name: 'Mobile', icon: <Smartphone size={28} />, description: 'Native Apps' },
    { name: 'Git', icon: <GitBranch size={28} />, description: 'Version Control' },
    { name: 'API', icon: <Package size={28} />, description: 'Integration' },
    { name: 'Security', icon: <Lock size={28} />, description: 'Protection' },
    { name: 'Web', icon: <Globe size={28} />, description: 'Platform' },
    { name: 'Server', icon: <Server size={28} />, description: 'Backend' },
    { name: 'Performance', icon: <Zap size={28} />, description: 'Speed' },
  ];

  return (
    <div className="tech-branch">
      {/* Contenedor de ramas */}
      <div className="branch-container">
        {/* Línea central (tronco) */}
        <div className="trunk"></div>

        {/* Tecnologías en las ramas */}
        <div className="tech-nodes">
          {technologies.map((tech, index) => {
            const isLeft = index % 2 === 0;
            const row = Math.floor(index / 2);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={tech.name}
                className={`tech-node ${isLeft ? 'left' : 'right'} ${isHovered ? 'hovered' : ''}`}
                style={{
                  top: `${10 + row * 15}%`,
                  animationDelay: `${index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Rama que conecta al tronco */}
                <div className="branch-line"></div>

                {/* Nodo tecnológico */}
                <div className="node-circle">
                  <div className="node-inner">
                    <div className="node-icon">{tech.icon}</div>
                  </div>
                </div>

                {/* Información de la tecnología */}
                <div className={`tech-info ${isLeft ? 'info-left' : 'info-right'}`}>
                  <h3 className="tech-name">{tech.name}</h3>
                  <p className="tech-desc">{tech.description}</p>
                </div>

                {/* Partículas flotantes */}
                <div className="particles">
                  <span className="particle"></span>
                  <span className="particle"></span>
                  <span className="particle"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tech-branch {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 4rem 2rem;
          overflow: hidden;
        }

        /* Contenedor principal */
        .branch-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }

        /* Línea central (tronco) */
        .trunk {
          position: absolute;
          left: 50%;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(0, 0, 0, 0.1) 0%, 
            rgba(0, 0, 0, 0.3) 50%, 
            rgba(0, 0, 0, 0.1) 100%
          );
          transform: translateX(-50%);
          z-index: 1;
        }

        .trunk::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 12px;
          height: 12px;
          background: #000;
          border-radius: 50%;
          transform: translate(-50%, -6px);
        }

        /* Contenedor de nodos */
        .tech-nodes {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        /* Nodo tecnológico */
        .tech-node {
          position: absolute;
          width: 50%;
          display: flex;
          align-items: center;
          opacity: 0;
          animation: fadeInNode 0.6s ease-out forwards;
        }

        @keyframes fadeInNode {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tech-node.left {
          left: 0;
          justify-content: flex-end;
          padding-right: 3rem;
        }

        .tech-node.right {
          right: 0;
          justify-content: flex-start;
          padding-left: 3rem;
        }

        /* Rama que conecta */
        .branch-line {
          position: absolute;
          height: 2px;
          background: rgba(0, 0, 0, 0.15);
          transition: all 0.4s ease;
        }

        .tech-node.left .branch-line {
          right: 0;
          width: 3rem;
          transform-origin: right;
        }

        .tech-node.right .branch-line {
          left: 0;
          width: 3rem;
          transform-origin: left;
        }

        .tech-node:hover .branch-line {
          background: rgba(0, 0, 0, 0.5);
          transform: scaleX(1.1);
        }

        /* Círculo del nodo */
        .node-circle {
          position: relative;
          width: 90px;
          height: 90px;
          background: #ffffff;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          z-index: 3;
        }

        .tech-node:hover .node-circle {
          transform: scale(1.15);
          border-color: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .node-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          transition: all 0.3s ease;
        }

        .tech-node:hover .node-inner {
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
        }

        .node-icon {
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .tech-node:hover .node-icon {
          color: #fff;
          transform: rotate(5deg) scale(1.1);
        }

        /* Información de la tecnología */
        .tech-info {
          position: absolute;
          opacity: 0;
          transition: all 0.4s ease;
          pointer-events: none;
          white-space: nowrap;
        }

        .tech-node:hover .tech-info {
          opacity: 1;
        }

        .tech-node.left .tech-info {
          right: 120px;
          text-align: right;
        }

        .tech-node.right .tech-info {
          left: 120px;
          text-align: left;
        }

        .tech-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #000;
          margin-bottom: 0.25rem;
        }

        .tech-desc {
          font-size: 0.875rem;
          color: #666;
        }

        /* Partículas */
        .particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tech-node:hover .particles {
          opacity: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
          animation: particle-float 2s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          top: -30px;
          left: -20px;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          top: -40px;
          left: 10px;
          animation-delay: 0.3s;
        }

        .particle:nth-child(3) {
          top: -35px;
          left: -5px;
          animation-delay: 0.6s;
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .tech-branch {
            padding: 3rem 1.5rem;
          }

          .node-circle {
            width: 75px;
            height: 75px;
          }

          .tech-node.left {
            padding-right: 2rem;
          }

          .tech-node.right {
            padding-left: 2rem;
          }

          .branch-line {
            width: 2rem !important;
          }

          .tech-node.left .tech-info {
            right: 95px;
          }

          .tech-node.right .tech-info {
            left: 95px;
          }

          .tech-name {
            font-size: 1.1rem;
          }

          .tech-desc {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 768px) {
          .tech-branch {
            padding: 2rem 1rem;
          }

          .trunk {
            width: 2px;
          }

          .node-circle {
            width: 65px;
            height: 65px;
          }

          .tech-node.left,
          .tech-node.right {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          .tech-info {
            position: relative !important;
            opacity: 1 !important;
            white-space: normal !important;
            margin-top: 0.5rem;
            text-align: center !important;
          }

          .tech-node.left .tech-info {
            right: auto !important;
          }

          .tech-node.right .tech-info {
            left: auto !important;
          }

          .tech-node.left,
          .tech-node.right {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            padding: 0;
          }

          .branch-line {
            display: none;
          }

          .tech-name {
            font-size: 1rem;
          }

          .tech-desc {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .node-circle {
            width: 55px;
            height: 55px;
          }

          .tech-name {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
