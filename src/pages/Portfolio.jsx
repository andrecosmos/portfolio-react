import "./Portfolio.module.css";
import Carousel from "../components/Carousel";
import { projetos } from "../data/projetos";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">André Cosmos</h1>
        <p className="text-gray-400">Desenvolvedor Full Stack</p>
      </header>

      {/* BANNER */}
      <div className="flex justify-center mb-10">
        <img
          src="/assets/portfolio.png"
          alt="Banner Portfólio"
          className="w-11/12 max-w-4xl rounded-xl"
        />
      </div>

      {/* CARROSSEL 1 (igual seu original) */}
      <Carousel items={projetos} size="small" />

      {/* CARROSSEL 2 (reverse igual seu original) */}
      <Carousel items={projetos} size="large" reverse />

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        © 2026 André Cosmos
      </footer>
    </div>
  );
}
