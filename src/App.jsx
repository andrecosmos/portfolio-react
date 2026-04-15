import Banner from "./layout/Banner";
import Carousel from "./layout/Carosel";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { projetos, habilidades } from "./Service/Dados";

export default function App() {
  return (
    <div className="app">
    
      <section className="banner-section">
        {Banner()}
      </section>
      
      <Header />
      
      <section className="skills-section">
        <div className="section-container">
          <h2><i>Habilidades</i></h2>
          <Carousel items={habilidades} size="medium" />
        </div>
      </section>

      <section className="projects-section">
        <div className="section-container">
          <h2><i>Projetos em Destaque</i></h2>
          <Carousel items={projetos} size="large" reverse />
        </div>
      </section>

      <Footer />
    </div>
  );
}