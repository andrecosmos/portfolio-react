import { useState } from "react";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % items.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">

      {/* ITEM */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={items[index].imagem}
          alt={items[index].nome}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* INFO */}
      <div className="text-center mt-3">
        <h3 className="text-xl">{items[index].nome}</h3>
      </div>

      {/* CONTROLES */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 px-3 py-1"
      >
        ▶
      </button>
    </div>
  );
}