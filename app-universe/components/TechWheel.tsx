import React from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Layout, 
  Cpu,
  GitBranch,
  Package
} from 'lucide-react';

interface Tech {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function TechWheel() {
  const technologies: Tech[] = [
    { name: 'React', icon: <Code2 size={24} />, color: '#61DAFB' },
    { name: 'Node.js', icon: <Cpu size={24} />, color: '#339933' },
    { name: 'Database', icon: <Database size={24} />, color: '#4479A1' },
    { name: 'Cloud', icon: <Cloud size={24} />, color: '#FF9900' },
    { name: 'Mobile', icon: <Smartphone size={24} />, color: '#3DDC84' },
    { name: 'UI/UX', icon: <Layout size={24} />, color: '#F24E1E' },
    { name: 'Git', icon: <GitBranch size={24} />, color: '#F05032' },
    { name: 'API', icon: <Package size={24} />, color: '#00D8FF' },
  ];

  return (
    <div className="tech-wheel-container">
      <div className="tech-wheel">
        {/* Centro de la rueda */}
        <div className="wheel-center">
          <div className="center-pulse"></div>
          <div className="center-content">
            <Code2 size={40} className="text-white" />
          </div>
        </div>

        {/* Tecnologías en órbita */}
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="tech-orbit"
            style={{
              '--angle': `${(360 / technologies.length) * index}deg`,
              '--delay': `${index * 0.2}s`,
            } as React.CSSProperties}
          >
            <div 
              className="tech-item"
              style={{ borderColor: tech.color }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          </div>
        ))}

        {/* Anillos decorativos */}
        <div className="orbit-ring ring-1"></div>
        <div className="orbit-ring ring-2"></div>
        <div className="orbit-ring ring-3"></div>
      </div>

      <style>{`
        .tech-wheel-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          min-height: 600px;
        }

        .tech-wheel {
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Centro de la rueda */
        .wheel-center {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          animation: float 3s ease-in-out infinite;
        }

        .center-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          animation: pulse 2s ease-out infinite;
          opacity: 0.6;
        }

        .center-content {
          position: relative;
          z-index: 1;
        }

        /* Órbitas de tecnologías */
        .tech-orbit {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: rotate 20s linear infinite;
          animation-delay: var(--delay);
        }

        .tech-item {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) rotate(var(--angle)) translateY(200px) rotate(calc(-1 * var(--angle)));
          width: 80px;
          height: 80px;
          background: white;
          border-radius: 16px;
          border: 2px solid;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-item:hover {
          transform: translateX(-50%) rotate(var(--angle)) translateY(200px) rotate(calc(-1 * var(--angle))) scale(1.15);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          z-index: 20;
        }

        .tech-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-name {
          font-size: 10px;
          font-weight: 600;
          color: #333;
          text-align: center;
        }

        /* Anillos decorativos */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(102, 126, 234, 0.2);
          pointer-events: none;
        }

        .ring-1 {
          width: 280px;
          height: 280px;
          animation: rotateReverse 15s linear infinite;
        }

        .ring-2 {
          width: 380px;
          height: 380px;
          animation: rotate 25s linear infinite;
        }

        .ring-3 {
          width: 480px;
          height: 480px;
          animation: rotateReverse 35s linear infinite;
        }

        /* Animaciones */
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tech-wheel-container {
            min-height: 500px;
            padding: 2rem 1rem;
          }

          .tech-wheel {
            width: 400px;
            height: 400px;
          }

          .wheel-center {
            width: 100px;
            height: 100px;
          }

          .tech-item {
            transform: translateX(-50%) rotate(var(--angle)) translateY(160px) rotate(calc(-1 * var(--angle)));
            width: 70px;
            height: 70px;
          }

          .tech-item:hover {
            transform: translateX(-50%) rotate(var(--angle)) translateY(160px) rotate(calc(-1 * var(--angle))) scale(1.15);
          }

          .ring-1 {
            width: 220px;
            height: 220px;
          }

          .ring-2 {
            width: 300px;
            height: 300px;
          }

          .ring-3 {
            width: 380px;
            height: 380px;
          }
        }

        @media (max-width: 480px) {
          .tech-wheel {
            width: 320px;
            height: 320px;
          }

          .wheel-center {
            width: 80px;
            height: 80px;
          }

          .tech-item {
            transform: translateX(-50%) rotate(var(--angle)) translateY(130px) rotate(calc(-1 * var(--angle)));
            width: 60px;
            height: 60px;
          }

          .tech-item:hover {
            transform: translateX(-50%) rotate(var(--angle)) translateY(130px) rotate(calc(-1 * var(--angle))) scale(1.15);
          }

          .tech-name {
            font-size: 9px;
          }

          .ring-1 {
            width: 180px;
            height: 180px;
          }

          .ring-2 {
            width: 240px;
            height: 240px;
          }

          .ring-3 {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
