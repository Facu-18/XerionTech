import { TechUniverse } from './components/TechUniverse';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="text-center pt-16 pb-8 px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Universo Tecnológico
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Explora las tecnologías flotando en el espacio digital
        </p>
      </header>

      {/* Universo de Tecnologías */}
      <main>
        <TechUniverse />
      </main>
    </div>
  );
}