import Banner from "./layout/Banner";
import Carousel from "./layout/Carosel";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { projetos, habilidades } from "./Service/Dados";

export default function App() {
  return (
    <div className="app">
      <section className="banner-section">
        <Banner />
      </section>
      
      <Header />

      {/* SEÇÃO DE PROJETOS MODIFICADA PARA GRADE DE CARDS */}
      {/* SEÇÃO DE PROJETOS MODIFICADA COM MOLDURA PARA O ZOOM */}
      <section className="projects-section">
        <div className="section-container">
          <h2><i>Projetos em Destaque</i></h2>
          
          <div className="projects-grid">
            {projetos.map((item, index) => (
              <div className="item large-card" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {/* Nova div que serve como moldura para o zoom */}
                  <div className="card-imagem">
                    <img src={item.imagem} alt={item.nome} loading="lazy" />
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
          
          {/* Nova estrutura limpa sem duplicação e sem as classes antigas do carrossel */}
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
