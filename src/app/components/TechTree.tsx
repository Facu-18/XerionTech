import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  Layout, 
  Cpu,
  GitBranch,
  Package,
  Server,
  Layers,
  Boxes,
  Globe,
  Palette
} from 'lucide-react';

interface Tech {
  name: string;
  icon: React.ReactNode;
  category: string;
}

export function TechTree() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const techTree = {
    root: { name: 'Full Stack Developer', icon: <Code2 size={32} />, category: 'Core' },
    
    frontend: [
      { name: 'React', icon: <Layout size={24} />, category: 'Frontend' },
      { name: 'TypeScript', icon: <Boxes size={24} />, category: 'Frontend' },
      { name: 'Tailwind', icon: <Palette size={24} />, category: 'Frontend' },
      { name: 'Next.js', icon: <Globe size={24} />, category: 'Frontend' },
    ],
    
    backend: [
      { name: 'Node.js', icon: <Cpu size={24} />, category: 'Backend' },
      { name: 'Express', icon: <Server size={24} />, category: 'Backend' },
      { name: 'REST API', icon: <Package size={24} />, category: 'Backend' },
    ],
    
    database: [
      { name: 'MongoDB', icon: <Database size={24} />, category: 'Database' },
      { name: 'PostgreSQL', icon: <Database size={24} />, category: 'Database' },
    ],
    
    tools: [
      { name: 'Git', icon: <GitBranch size={24} />, category: 'Tools' },
      { name: 'Docker', icon: <Layers size={24} />, category: 'Tools' },
      { name: 'AWS', icon: <Cloud size={24} />, category: 'Tools' },
    ],
  };

  return (
    <div className="tech-tree">
      <div className="tree-container">
        {/* SVG para las conexiones */}
        <svg className="tree-connections" width="100%" height="100%">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="rgba(0,0,0,0.2)" />
            </marker>
          </defs>

          {/* Líneas desde root a categorías */}
          <line className="connection-line" x1="50%" y1="120" x2="25%" y2="280" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <line className="connection-line" x1="50%" y1="120" x2="75%" y2="280" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <line className="connection-line" x1="50%" y1="120" x2="35%" y2="480" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <line className="connection-line" x1="50%" y1="120" x2="65%" y2="480" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />

          {/* Líneas horizontales entre hermanos frontend */}
          <line className="connection-line sibling" x1="10%" y1="280" x2="40%" y2="280" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeDasharray="5,5" />
          
          {/* Líneas horizontales entre hermanos backend */}
          <line className="connection-line sibling" x1="60%" y1="280" x2="90%" y2="280" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" strokeDasharray="5,5" />
        </svg>

        {/* Nodo raíz */}
        <div className="tree-level root-level">
          <div
            className={`tech-node root ${hoveredTech === techTree.root.name ? 'active' : ''}`}
            onMouseEnter={() => setHoveredTech(techTree.root.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="node-circle large">
              <div className="node-icon">{techTree.root.icon}</div>
            </div>
            <div className="node-label">
              <span className="node-name">{techTree.root.name}</span>
            </div>
          </div>
        </div>

        {/* Nivel 1: Frontend y Backend */}
        <div className="tree-level level-1">
          {/* Frontend */}
          <div className="tech-group">
            <div className="group-label">Frontend</div>
            <div className="tech-row">
              {techTree.frontend.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`tech-node ${hoveredTech === tech.name ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="node-circle">
                    <div className="node-icon">{tech.icon}</div>
                  </div>
                  <div className="node-label">
                    <span className="node-name">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="tech-group">
            <div className="group-label">Backend</div>
            <div className="tech-row">
              {techTree.backend.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`tech-node ${hoveredTech === tech.name ? 'active' : ''}`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="node-circle">
                    <div className="node-icon">{tech.icon}</div>
                  </div>
                  <div className="node-label">
                    <span className="node-name">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nivel 2: Database y Tools */}
        <div className="tree-level level-2">
          {/* Database */}
          <div className="tech-group">
            <div className="group-label">Database</div>
            <div className="tech-row">
              {techTree.database.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`tech-node ${hoveredTech === tech.name ? 'active' : ''}`}
                  style={{ animationDelay: `${(index + 7) * 0.1}s` }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="node-circle">
                    <div className="node-icon">{tech.icon}</div>
                  </div>
                  <div className="node-label">
                    <span className="node-name">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="tech-group">
            <div className="group-label">DevOps & Tools</div>
            <div className="tech-row">
              {techTree.tools.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`tech-node ${hoveredTech === tech.name ? 'active' : ''}`}
                  style={{ animationDelay: `${(index + 9) * 0.1}s` }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="node-circle">
                    <div className="node-icon">{tech.icon}</div>
                  </div>
                  <div className="node-label">
                    <span className="node-name">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tech-tree {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          padding: 2rem 1rem 4rem;
          overflow: hidden;
        }

        .tree-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 2rem;
        }

        /* SVG Conexiones */
        .tree-connections {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 0;
        }

        .connection-line {
          transition: stroke 0.3s ease;
        }

        .connection-line.sibling {
          opacity: 0.5;
        }

        /* Niveles del árbol */
        .tree-level {
          position: relative;
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-bottom: 4rem;
          z-index: 1;
        }

        .root-level {
          margin-bottom: 6rem;
        }

        .level-1 {
          margin-bottom: 4rem;
        }

        .level-2 {
          margin-bottom: 2rem;
        }

        /* Grupos de tecnologías */
        .tech-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .group-label {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .tech-row {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Nodo tecnológico */
        .tech-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          opacity: 0;
          animation: fadeInNode 0.5s ease-out forwards;
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

        .node-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: hidden;
        }

        .node-circle.large {
          width: 110px;
          height: 110px;
        }

        .node-circle::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          transform: scale(0);
          border-radius: 50%;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .tech-node:hover .node-circle::before,
        .tech-node.active .node-circle::before {
          transform: scale(1);
        }

        .tech-node:hover .node-circle,
        .tech-node.active .node-circle {
          border-color: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transform: translateY(-5px);
        }

        .node-icon {
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .tech-node:hover .node-icon,
        .tech-node.active .node-icon {
          color: #fff;
          transform: scale(1.1) rotate(5deg);
        }

        .node-label {
          text-align: center;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .tech-node:hover .node-label,
        .tech-node.active .node-label {
          opacity: 1;
          transform: translateY(-2px);
        }

        .node-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #000;
          display: block;
        }

        .tech-node.root .node-name {
          font-size: 1.1rem;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .tree-level {
            gap: 2rem;
          }

          .tech-row {
            gap: 1.25rem;
          }
        }

        @media (max-width: 1024px) {
          .tree-level {
            flex-direction: column;
            gap: 3rem;
          }

          .node-circle {
            width: 70px;
            height: 70px;
          }

          .node-circle.large {
            width: 95px;
            height: 95px;
          }

          .tech-row {
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .tech-tree {
            padding: 1rem 0.5rem 3rem;
          }

          .tree-level {
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .root-level {
            margin-bottom: 3rem;
          }

          .node-circle {
            width: 60px;
            height: 60px;
          }

          .node-circle.large {
            width: 80px;
            height: 80px;
          }

          .tech-row {
            gap: 0.75rem;
          }

          .node-name {
            font-size: 0.75rem;
          }

          .group-label {
            font-size: 0.75rem;
          }

          .tree-connections {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .node-circle {
            width: 55px;
            height: 55px;
          }

          .node-circle.large {
            width: 70px;
            height: 70px;
          }

          .tech-row {
            gap: 0.5rem;
          }

          .node-name {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}
