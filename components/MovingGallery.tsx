"use client";

const gallery = [
  {
    title: "Estratégia",
    subtitle: "Pensar antes de executar",
    image: "/images/gallery01.jpg",
  },
  {
    title: "Conteúdo",
    subtitle: "Marcas que sabem se comunicar",
    image: "/images/gallery02.jpg",
  },
  {
    title: "Dados",
    subtitle: "Decisões baseadas em informação",
    image: "/images/gallery03.jpg",
  },
  {
    title: "Comunidade",
    subtitle: "Conexões que permanecem",
    image: "/images/gallery04.jpg",
  },
  {
    title: "Tecnologia",
    subtitle: "Estrutura para crescer",
    image: "/images/gallery05.jpg",
  },
  {
    title: "Crescimento",
    subtitle: "Resultado é consequência",
    image: "/images/gallery06.jpg",
  },

  // NOVAS FOTOS
  {
    title: "Visão",
    subtitle: "Enxergar além do agora",
    image: "/images/photo1.jpg",
  },
  {
    title: "Posicionamento",
    subtitle: "Ser lembrado pelo que importa",
    image: "/images/photo2.jpg",
  },
  {
    title: "Conexão",
    subtitle: "Marcas que criam relações",
    image: "/images/photo3.jpg",
  },
  {
    title: "Movimento",
    subtitle: "Ideias que saem do papel",
    image: "/images/photo4.jpg",
  },
  {
    title: "Futuro",
    subtitle: "Preparar hoje o próximo passo",
    image: "/images/photo5.jpg",
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
    <article
      className="gallery-photo-card"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
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
  const firstRow = gallery.slice(0, 6);
  const secondRow = gallery.slice(6);

  return (
    <section id="galeria" className="moving-gallery-section">
      <div className="moving-gallery-heading">
        <span>01 / VISUAL</span>

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
          {[...firstRow, ...firstRow].map((item, index) => (
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
          {[...secondRow, ...secondRow, ...secondRow].map((item, index) => (
            <GalleryCard
              key={`row2-${index}`}
              item={item}
              number={String((index % secondRow.length) + 7).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}