import React, { useState, useEffect, useRef } from 'react';
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
  color: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  depth: number;
}

export function TechUniverse() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Inicializar tecnologías con posiciones aleatorias
  useEffect(() => {
    const techData = [
      { name: 'React', icon: <Code2 />, color: '#61DAFB' },
      { name: 'TypeScript', icon: <Layout />, color: '#3178C6' },
      { name: 'Node.js', icon: <Cpu />, color: '#339933' },
      { name: 'Database', icon: <Database />, color: '#4479A1' },
      { name: 'Cloud', icon: <Cloud />, color: '#FF9900' },
      { name: 'Mobile', icon: <Smartphone />, color: '#3DDC84' },
      { name: 'Git', icon: <GitBranch />, color: '#F05032' },
      { name: 'API', icon: <Package />, color: '#00D8FF' },
      { name: 'Security', icon: <Lock />, color: '#E535AB' },
      { name: 'Web', icon: <Globe />, color: '#8B5CF6' },
      { name: 'Server', icon: <Server />, color: '#10B981' },
      { name: 'Performance', icon: <Zap />, color: '#FFDD00' },
    ];

    const techs: Technology[] = techData.map((tech, index) => ({
      ...tech,
      x: 15 + (Math.random() * 70),
      y: 20 + (Math.random() * 60),
      size: 70 + Math.random() * 30,
      speed: 0.3 + Math.random() * 0.5,
      depth: Math.random() * 0.5 + 0.3,
    }));

    setTechnologies(techs);
  }, []);

  // Seguir el movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generar estrellas minimalistas
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.4 + 0.2,
  }));

  return (
    <div className="tech-universe" ref={containerRef}>
      {/* Fondo espacial con estrellas minimalistas */}
      <div className="space-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Nebulosa sutil de fondo */}
      <div className="nebula-minimal"></div>

      {/* Tecnologías flotantes */}
      <div className="tech-planets">
        {technologies.map((tech, index) => {
          const parallaxX = (mousePos.x - 0.5) * 30 * tech.depth;
          const parallaxY = (mousePos.y - 0.5) * 30 * tech.depth;

          return (
            <div
              key={tech.name}
              className="tech-planet"
              style={{
                left: `${tech.x}%`,
                top: `${tech.y}%`,
                width: `${tech.size}px`,
                height: `${tech.size}px`,
                animationDuration: `${20 + index * 3}s`,
                animationDelay: `${index * 0.8}s`,
                transform: `translate(${parallaxX}px, ${parallaxY}px)`,
                '--tech-color': tech.color,
              } as React.CSSProperties}
            >
              {/* Glow sutil */}
              <div 
                className="planet-glow"
                style={{ background: tech.color }}
              ></div>
              
              {/* Contenido del planeta */}
              <div className="planet-content">
                <div 
                  className="planet-icon"
                  style={{ color: tech.color }}
                >
                  {React.cloneElement(tech.icon as React.ReactElement, { 
                    size: tech.size * 0.35 
                  })}
                </div>
                <div className="planet-name">{tech.name}</div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .tech-universe {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(to bottom, #0f172a 0%, #1e293b 100%);
          overflow: hidden;
        }

        /* Fondo espacial con estrellas minimalistas */
        .space-background {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .star {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }

        /* Nebulosa sutil */
        .nebula-minimal {
          position: absolute;
          width: 800px;
          height: 800px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        /* Tecnologías como planetas */
        .tech-planets {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .tech-planet {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: all 0.4s ease;
          animation: float-smooth linear infinite;
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
        }

        .tech-planet:hover {
          animation-play-state: paused;
          transform: translate(-50%, -50%) scale(1.15) !important;
          z-index: 100;
        }

        .tech-planet:hover .planet-glow {
          opacity: 0.5;
          transform: scale(1.4);
        }

        .tech-planet:hover .planet-name {
          opacity: 1;
        }

        .tech-planet:hover .planet-content {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--tech-color);
        }

        /* Glow del planeta */
        .planet-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70%;
          height: 70%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(15px);
          transition: all 0.4s ease;
          pointer-events: none;
        }

        /* Contenido del planeta */
        .planet-content {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .planet-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .planet-name {
          font-size: 0.7rem;
          font-weight: 600;
          color: white;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .tech-planet {
            width: 65px !important;
            height: 65px !important;
          }
        }

        @media (max-width: 768px) {
          .tech-planet {
            width: 55px !important;
            height: 55px !important;
          }

          .planet-name {
            font-size: 0.6rem;
          }

          .nebula-minimal {
            width: 600px;
            height: 600px;
            filter: blur(60px);
          }
        }

        @media (max-width: 480px) {
          .tech-planet {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}