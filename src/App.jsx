import { useEffect } from "react"; // 1. IMPORTANTE: Importar o useEffect
import Banner from "./layout/Banner";
import Carousel from "./layout/Carosel";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { projetos, habilidades } from "./Service/Dados";

export default function App() {
  
  // 2. CÓDIGO DO FADE-IN: Dispara a animação quando os cards aparecem na tela
  useEffect(() => {
    const elementos = document.querySelectorAll("[data-animate]");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Para de observar depois que animou
        }
      });
    }, { 
      threshold: 0.15, // Ativa quando 15% do card estiver visível na tela
      rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de entrar totalmente
    });

    elementos.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <section className="banner-section">
        <Banner />
      </section>
      
      <Header />
      
      

      {/* SEÇÃO DE PROJETOS COM DETALHES VISUAIS E FADE-IN */}
      <section className="projects-section">
        <div className="section-container">
          <h2><i>Projetos em Destaque</i></h2>
          
          <div className="projects-grid">
            {projetos.map((item, index) => (
              <div 
                className="item large-card" 
                key={index}
                data-animate="fade-up" /* Identificador da animação */
                style={{ animationDelay: `${index * 0.1}s` }} /* Efeito cascata (um por um) */
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="card-imagem">
                    <img src={item.imagem} alt={item.nome} loading="lazy" />
                  </div>
                  
                  {/* IDENTIFICAÇÃO DO PROJETO (Sugestão de Conteúdo) */}
                  <div className="card-conteudo">
                    <h3>{item.nome || "Nome do Projeto"}</h3>
                    <p>{item.descricao || "Uma breve descrição sobre a solução criada e o objetivo deste projeto do portfólio."}</p>
                    {item.tags && (
                      <div className="card-tags">
                        {item.tags.map((tag, tIdx) => <span key={tIdx}>{tag}</span>)}
                      </div>
                    )}
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="skills-section">
        <div className="section-container">
          <h2><i>Habilidades</i></h2>
          <div className="skills-container">
            {habilidades.map((item, index) => (
              <div className="skill-item" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.imagem} alt={item.nome} loading="lazy" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
