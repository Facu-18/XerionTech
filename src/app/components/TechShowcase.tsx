import React, { useState, useEffect } from 'react';
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
  Boxes,
  Globe
} from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  description: string;
}

export function TechShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies: Technology[] = [
    { 
      name: 'React', 
      icon: <Code2 size={32} />, 
      color: '#61DAFB',
      gradient: 'linear-gradient(135deg, #61DAFB 0%, #4FA8C5 100%)',
      description: 'UI Framework'
    },
    { 
      name: 'TypeScript', 
      icon: <Boxes size={32} />, 
      color: '#3178C6',
      gradient: 'linear-gradient(135deg, #3178C6 0%, #235A97 100%)',
      description: 'Type Safety'
    },
    { 
      name: 'Node.js', 
      icon: <Cpu size={32} />, 
      color: '#339933',
      gradient: 'linear-gradient(135deg, #339933 0%, #26752A 100%)',
      description: 'Backend Runtime'
    },
    { 
      name: 'Database', 
      icon: <Database size={32} />, 
      color: '#4479A1',
      gradient: 'linear-gradient(135deg, #4479A1 0%, #336280 100%)',
      description: 'Data Storage'
    },
    { 
      name: 'AWS Cloud', 
      icon: <Cloud size={32} />, 
      color: '#FF9900',
      gradient: 'linear-gradient(135deg, #FF9900 0%, #CC7A00 100%)',
      description: 'Cloud Services'
    },
    { 
      name: 'Mobile', 
      icon: <Smartphone size={32} />, 
      color: '#3DDC84',
      gradient: 'linear-gradient(135deg, #3DDC84 0%, #2FAA68 100%)',
      description: 'Native Apps'
    },
    { 
      name: 'UI/UX', 
      icon: <Layout size={32} />, 
      color: '#F24E1E',
      gradient: 'linear-gradient(135deg, #F24E1E 0%, #C23E18 100%)',
      description: 'Design Systems'
    },
    { 
      name: 'Git', 
      icon: <GitBranch size={32} />, 
      color: '#F05032',
      gradient: 'linear-gradient(135deg, #F05032 0%, #C04028 100%)',
      description: 'Version Control'
    },
    { 
      name: 'REST API', 
      icon: <Package size={32} />, 
      color: '#00D8FF',
      gradient: 'linear-gradient(135deg, #00D8FF 0%, #00A8CC 100%)',
      description: 'API Development'
    },
    { 
      name: 'Performance', 
      icon: <Zap size={32} />, 
      color: '#FFDD00',
      gradient: 'linear-gradient(135deg, #FFDD00 0%, #CCB100 100%)',
      description: 'Optimization'
    },
    { 
      name: 'Security', 
      icon: <Lock size={32} />, 
      color: '#E535AB',
      gradient: 'linear-gradient(135deg, #E535AB 0%, #B62A89 100%)',
      description: 'Protected'
    },
    { 
      name: 'Web3', 
      icon: <Globe size={32} />, 
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      description: 'Blockchain'
    },
  ];

  return (
    <div className="tech-showcase">
      {/* Fondo animado con gradiente */}
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Grid de tecnologías */}
      <div className="tech-grid">
        {technologies.map((tech, index) => {
          const isHovered = hoveredIndex === index;
          const delay = index * 0.1;
          
          return (
            <div
              key={tech.name}
              className="tech-card-wrapper"
              style={{
                animationDelay: `${delay}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`tech-card ${isHovered ? 'hovered' : ''}`}
                style={{
                  '--gradient': tech.gradient,
                  '--color': tech.color,
                } as React.CSSProperties}
              >
                {/* Efecto de brillo en hover */}
                <div className="card-shine"></div>
                
                {/* Partículas flotantes */}
                <div className="particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="card-content">
                  <div className="icon-wrapper" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h3 className="tech-title">{tech.name}</h3>
                  <p className="tech-description">{tech.description}</p>
                </div>

                {/* Borde animado */}
                <div className="animated-border"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cursor personalizado (opcional) */}
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      <style>{`
        .tech-showcase {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 4rem 2rem;
          overflow: hidden;
        }

        /* Fondo animado */
        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float-orb 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -150px;
          right: -150px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 14s;
        }

        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        /* Grid de tecnologías */
        .tech-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Wrapper de la tarjeta */
        .tech-card-wrapper {
          animation: fadeInUp 0.8s ease-out both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tarjeta de tecnología */
        .tech-card {
          position: relative;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2rem;
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .tech-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .tech-card.hovered {
          background: var(--gradient);
        }

        .tech-card.hovered .tech-title,
        .tech-card.hovered .tech-description {
          color: white;
        }

        .tech-card.hovered .icon-wrapper {
          color: white !important;
          transform: scale(1.2) rotate(5deg);
        }

        /* Efecto de brillo */
        .card-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%
          );
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .tech-card:hover .card-shine {
          transform: translateX(100%);
        }

        /* Partículas */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tech-card:hover .particles {
          opacity: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          animation: particle-float 3s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          top: 60%;
          left: 70%;
          animation-delay: 1s;
        }

        .particle:nth-child(3) {
          top: 80%;
          left: 30%;
          animation-delay: 2s;
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-30px) scale(1.5);
            opacity: 1;
          }
        }

        /* Contenido de la tarjeta */
        .card-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .tech-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #1e293b;
          transition: color 0.3s;
        }

        .tech-description {
          font-size: 0.875rem;
          color: #64748b;
          transition: color 0.3s;
        }

        /* Borde animado */
        .animated-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      var(--gradient) border-box;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .tech-card:hover .animated-border {
          opacity: 1;
          animation: border-pulse 2s ease-in-out infinite;
        }

        @keyframes border-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        /* Cursor personalizado */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .tech-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
          }

          .tech-card {
            height: 200px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .tech-showcase {
            padding: 2rem 1rem;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .tech-card {
            height: 180px;
            padding: 1rem;
          }

          .tech-title {
            font-size: 1rem;
          }

          .tech-description {
            font-size: 0.75rem;
          }

          .gradient-orb {
            filter: blur(60px);
          }
        }

        @media (max-width: 480px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }

          .tech-card {
            height: 160px;
          }
        }
      `}</style>
    </div>
  );
}
