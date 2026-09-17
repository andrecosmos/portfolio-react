import { useRef } from "react";

export default function Carousel({ items, reverse = false, size }) {
  const carrosselRef = useRef(null);
  const loopItems = [...items, ...items];

  const scroll = (direction) => {
    if (carrosselRef.current) {
      const scrollAmount = 400; // Aumentado para rolar cards maiores mais rápido
      carrosselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`container ${size} ${reverse ? "manual" : ""}`}>
      {reverse && (
        <button className="arrow left" onClick={() => scroll("left")}>
          ❮
        </button>
      )}
      <div className="carrossel" ref={carrosselRef}>
        {loopItems.map((item, index) => (
          <div className="item" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imagem} alt={item.nome} loading="lazy" />
            </a>
          </div>
        ))}
      </div>
      {reverse && (
        <button className="arrow right" onClick={() => scroll("right")}>
          ❯
        </button>
      )}
    </div>
  );
}
