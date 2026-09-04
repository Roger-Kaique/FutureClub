"use client";

const gallery = [
  {
    title: "Estratégia",
    subtitle: "Pensar antes de executar",
    image: "/images/gallery01.jpg",
    fallback: "/images/gallery02.jpg",
  },
  {
    title: "Conteúdo",
    subtitle: "Marcas que sabem se comunicar",
    image: "/images/gallery02.jpg",
    fallback: "/images/gallery03.jpg",
  },
  {
    title: "Dados",
    subtitle: "Decisões baseadas em informação",
    image: "/images/gallery03.jpg",
    fallback: "/images/gallery04.jpg",
  },
  {
    title: "Comunidade",
    subtitle: "Conexões que permanecem",
    image: "/images/gallery04.jpg",
    fallback: "/images/gallery05.jpg",
  },
  {
    title: "Tecnologia",
    subtitle: "Estrutura para crescer",
    image: "/images/gallery05.jpg",
    fallback: "/images/gallery06.jpg",
  },
  {
    title: "Crescimento",
    subtitle: "Resultado é consequência",
    image: "/images/gallery06.jpg",
    fallback: "/images/gallery01.jpg",
  },
  {
    title: "Visão",
    subtitle: "Enxergar além do agora",
    image: "/images/trama1.jpg",
    fallback: "/images/gallery01.jpg",
  },
  {
    title: "Posicionamento",
    subtitle: "Ser lembrado pelo que importa",
    image: "/images/trama2.jpg",
    fallback: "/images/gallery02.jpg",
  },
  {
    title: "Conexão",
    subtitle: "Marcas que criam relações",
    image: "/images/trama3.jpg",
    fallback: "/images/gallery03.jpg",
  },
  {
    title: "Movimento",
    subtitle: "Ideias que saem do papel",
    image: "/images/trama4.jpg",
    fallback: "/images/gallery04.jpg",
  },
  {
    title: "Futuro",
    subtitle: "Preparar hoje o próximo passo",
    image: "/images/trama5.jpg",
    fallback: "/images/gallery05.jpg",
  },
  {
    title: "Identidade",
    subtitle: "Construir uma marca reconhecível",
    image: "/images/trama6.jpg",
    fallback: "/images/gallery06.jpg",
  },
  {
    title: "Presença",
    subtitle: "Comunicação que gera percepção",
    image: "/images/trama7.jpg",
    fallback: "/images/gallery01.jpg",
  },
  {
    title: "Clareza",
    subtitle: "Saber onde a marca quer chegar",
    image: "/images/trama8.jpg",
    fallback: "/images/gallery02.jpg",
  },
  {
    title: "Evolução",
    subtitle: "Crescer com consistência",
    image: "/images/trama9.jpg",
    fallback: "/images/gallery03.jpg",
  },
];

function GalleryCard({
  item,
  number,
}: {
  item: (typeof gallery)[number];
  number: string;
}) {
  return (
    <article className="gallery-photo-card">
      <img
        src={item.image}
        alt={item.title}
        className="gallery-photo-image"
        onError={(event) => {
          const img = event.currentTarget;

          if (img.src.endsWith(item.fallback)) {
            return;
          }

          img.src = item.fallback;
        }}
      />

      <div className="gallery-photo-overlay" />

      <div className="gallery-photo-content">
        <span className="gallery-photo-number">{number}</span>

        <div>
          <p>{item.subtitle}</p>
          <h3>{item.title}</h3>
        </div>

        <span className="gallery-photo-arrow">↗</span>
      </div>
    </article>
  );
}

export default function MovingGallery() {
  const firstRow = gallery.slice(0, 8);
  const secondRow = gallery.slice(8);

  return (
    <section id="galeria" className="moving-gallery-section">
      <div className="moving-gallery-heading">
        <span>02 / VISUAL</span>

        <h2>
          Ideias em
          <br />
          movimento.
        </h2>

        <p>
          Estratégia, criatividade e tecnologia criando novas possibilidades
          para marcas que querem crescer.
        </p>
      </div>

      <div className="moving-gallery-row">
        <div className="moving-track moving-left">
          {[
            ...firstRow,
            ...firstRow,
            ...firstRow,
            ...firstRow,
          ].map((item, index) => (
            <GalleryCard
              key={`row1-${index}`}
              item={item}
              number={String((index % firstRow.length) + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>

      <div className="moving-gallery-row">
        <div className="moving-track moving-right">
          {[
            ...secondRow,
            ...secondRow,
            ...secondRow,
            ...secondRow,
            ...secondRow,
          ].map((item, index) => (
            <GalleryCard
              key={`row2-${index}`}
              item={item}
              number={String((index % secondRow.length) + 9).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}