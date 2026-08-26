"use client";

import { useState } from "react";

const operations = [
  {
    number: "01",
    title: "Estratégia",
    short: "Direção",
    description:
      "Definimos prioridades, objetivos e um caminho claro para o negócio avançar.",
    items: [
      "Planejamento",
      "Posicionamento",
      "Objetivos",
      "Direção estratégica",
    ],
  },
  {
    number: "02",
    title: "Marketing",
    short: "Aquisição",
    description:
      "Criamos estratégias para aproximar a marca das pessoas certas e gerar oportunidades.",
    items: [
      "Campanhas",
      "Aquisição",
      "Funil",
      "Conversão",
    ],
  },
  {
    number: "03",
    title: "Social Media",
    short: "Presença",
    description:
      "Transformamos as redes sociais em uma extensão real da estratégia do negócio.",
    items: [
      "Instagram",
      "Calendário",
      "Conteúdo",
      "Gestão",
    ],
  },
  {
    number: "04",
    title: "Marca",
    short: "Posicionamento",
    description:
      "Construímos uma presença que faz sentido para o negócio e para as pessoas que ele quer alcançar.",
    items: [
      "Identidade",
      "Posicionamento",
      "Tom de voz",
      "Percepção",
    ],
  },
  {
    number: "05",
    title: "Conteúdo",
    short: "Comunicação",
    description:
      "Criamos conteúdo com propósito, consistência e conexão com os objetivos da marca.",
    items: [
      "Planejamento",
      "Criação",
      "Narrativa",
      "Distribuição",
    ],
  },
  {
    number: "06",
    title: "Comunidade",
    short: "Relacionamento",
    description:
      "Transformamos audiência em relacionamento e relacionamento em comunidade.",
    items: [
      "Engajamento",
      "Relacionamento",
      "Experiência",
      "Fidelização",
    ],
  },
  {
    number: "07",
    title: "Automação",
    short: "Eficiência",
    description:
      "Eliminamos tarefas repetitivas e criamos processos mais inteligentes.",
    items: [
      "Automação",
      "Integrações",
      "Processos",
      "Fluxos",
    ],
  },
  {
    number: "08",
    title: "Dados",
    short: "Inteligência",
    description:
      "Organizamos informações para transformar números em decisões melhores.",
    items: [
      "Métricas",
      "Dashboards",
      "Análise",
      "Insights",
    ],
  },
];

export default function OperationsSection() {
  const [active, setActive] = useState(0);

  const current = operations[active];

  return (
    <section
      id="operacoes"
      className="operations-section"
    >
      <div className="operations-background-glow" />

      <div className="operations-container">
        <div className="operations-header">
          <div>
            <p className="section-eyebrow">
              04 — Áreas de operação
            </p>

            <h2>
              Tudo o que fazemos
              <span> está conectado.</span>
            </h2>
          </div>

          <p>
            Não trabalhamos cada serviço como uma ilha. Estratégia,
            comunicação, tecnologia e dados trabalham juntos para cuidar
            do negócio de forma mais completa.
          </p>
        </div>

        <div className="operations-interface">
          <div className="operations-list">
            {operations.map((operation, index) => (
              <button
                key={operation.number}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={
                  index === active
                    ? "operation-item active"
                    : "operation-item"
                }
              >
                <span className="operation-number">
                  {operation.number}
                </span>

                <span className="operation-name">
                  {operation.title}
                </span>

                <span className="operation-short">
                  {operation.short}
                </span>

                <span className="operation-arrow">
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="operation-detail">
            <div className="operation-detail-glow" />

            <div className="operation-detail-top">
              <span>
                {current.number}
              </span>

              <span>
                FUTURE CLUB
              </span>
            </div>

            <div className="operation-detail-main">
              <p className="operation-detail-label">
                Área de operação
              </p>

              <h3>
                {current.title}
              </h3>

              <p>
                {current.description}
              </p>

              <div className="operation-tags">
                {current.items.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="operation-detail-orbit orbit-one" />
            <div className="operation-detail-orbit orbit-two" />

            <div className="operation-detail-core">
              <span>{current.number}</span>
            </div>
          </div>
        </div>

        <div className="operations-statement">
          <div className="operations-statement-line" />

          <p>
            Uma única área pode gerar resultado.
            <span> Todas conectadas podem mudar o negócio.</span>
          </p>

          <div className="operations-statement-line" />
        </div>
      </div>
    </section>
  );
}