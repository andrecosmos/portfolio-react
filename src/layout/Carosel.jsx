
import { useRef } from "react";

export default function Carousel({ items, reverse = false, size }) {
  const carrosselRef = useRef(null);
  const loopItems = [...items, ...items];

  const scroll = (direction) => {
    if (carrosselRef.current) {
      const scrollAmount = 300;
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
          &#10094;
        </button>
      )}
      <div className="carrossel" ref={carrosselRef}>
        {loopItems.map((item, index) => (
          <div
            className="item"
            key={index}
            style={{ "--delay": `${index + 1}s` }}
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imagem} alt={item.nome} loading="lazy" />
            </a>
          </div>
        ))}
      </div>
      {reverse && (
        <button className="arrow right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      )}
    </div>
  );
}