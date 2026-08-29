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
];

function GalleryCard({
  item,
}: {
  item: {
    title: string;
    subtitle: string;
    image: string;
  };
}) {
  return (
    <article
      className="gallery-photo-card"
      style={{
        backgroundImage: `url("${item.image}")`,
      }}
    >
      <div className="gallery-photo-overlay" />

      <div className="gallery-photo-grid" />

      <div className="gallery-photo-number">
        FC
      </div>

      <div className="gallery-photo-content">
        <span>Future Club</span>

        <h3>{item.title}</h3>

        <p>{item.subtitle}</p>
      </div>

      <div className="gallery-photo-arrow">
        ↗
      </div>
    </article>
  );
}

export default function MovingGallery() {
  const rowOne = [...gallery, ...gallery];
  const rowTwo = [...gallery, ...gallery];

  return (
    <section
      id="galeria"
      className="moving-gallery-section"
    >
      <div className="moving-gallery-heading">
        <p>
          Estratégia em movimento
        </p>

        <h2>
          Diferentes partes de um negócio.
          <span>
            Uma visão integrada.
          </span>
        </h2>
      </div>

      <div className="moving-gallery-row">
        <div className="moving-track moving-left">
          {rowOne.map((item, index) => (
            <GalleryCard
              key={`row-one-${item.title}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="moving-gallery-row moving-gallery-row-second">
        <div className="moving-track moving-right">
          {rowTwo.map((item, index) => (
            <GalleryCard
              key={`row-two-${item.title}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}