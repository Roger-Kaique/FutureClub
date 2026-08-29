const showcaseCases = [
  {
    number: "01",
    category: "Social Media",
    title:
      "Presença que deixa de ser postagem e passa a ser posicionamento.",
    description:
      "Estratégia de conteúdo, identidade e relacionamento para transformar uma presença digital em uma extensão real da marca.",
    image: "/images/gallery01.jpg",
    tags: ["Conteúdo", "Marca", "Instagram"],
  },
  {
    number: "02",
    category: "Estratégia",
    title:
      "Uma direção clara para o próximo estágio do negócio.",
    description:
      "Diagnóstico, planejamento e execução conectados aos objetivos da empresa.",
    image: "/images/gallery02.jpg",
    tags: ["Planejamento", "Posicionamento", "Crescimento"],
  },
  {
    number: "03",
    category: "Dados + Automação",
    title:
      "Mais informação. Menos trabalho manual.",
    description:
      "Processos, automações e análise para transformar a operação em uma estrutura mais inteligente.",
    image: "/images/gallery03.jpg",
    tags: ["Dados", "Automação", "Processos"],
  },
];

export default function CaseShowcase() {
  return (
    <section
      id="showcase"
      className="case-showcase"
    >
      <div className="case-showcase-intro">
        <p className="case-showcase-eyebrow">
          07 — Projetos em movimento
        </p>

        <h2>
          Estratégia ganha força
          <span>quando vira execução.</span>
        </h2>

        <p className="case-showcase-description">
          Alguns negócios precisam de presença. Outros precisam de
          posicionamento. Outros precisam reorganizar a operação. A Future Club
          conecta essas necessidades em uma única visão.
        </p>
      </div>

      <div className="case-showcase-list">
        {showcaseCases.map((item) => (
          <article
            key={item.number}
            className="case-showcase-card"
          >
            <div className="case-showcase-image">
              <img
                src={item.image}
                alt={`${item.category} — ${item.title}`}
                className="case-showcase-photo"
              />

              <div className="case-showcase-image-overlay" />

              <div className="case-showcase-grid" />

              <div className="case-showcase-top">
                <span>{item.number}</span>

                <span>{item.category}</span>
              </div>

              <div className="case-showcase-image-center">
                <span>{item.number}</span>
              </div>

              <div className="case-showcase-image-bottom">
                <span>Future Club</span>
              </div>
            </div>

            <div className="case-showcase-content">
              <span className="case-showcase-number">
                Case {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="case-showcase-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="case-showcase-link">
                <span>Ver projeto</span>

                <span>↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="case-showcase-end">
        <p>Mais cases em breve</p>

        <span>
          Cada novo projeto adiciona uma nova história à Future Club.
        </span>
      </div>
    </section>
  );
}