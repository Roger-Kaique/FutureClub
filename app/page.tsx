import LeadForm from "../components/LeadForm";
import Navbar from "../components/Navbar";
import MovingGallery from "../components/MovingGallery";
import TeamSection from "../components/TeamSection";
import OperationsSection from "../components/OperationsSection";

import TransitionBand from "../components/TransitionBand";


const services = [
  {
    number: "01",
    title: "Estratégia",
    description:
      "Definimos prioridades, posicionamento e direção para transformar objetivos de negócio em um plano claro, consistente e executável.",
    tags: ["Planejamento", "Posicionamento", "Direção"],
  },
  {
    number: "02",
    title: "Presença",
    description:
      "Construímos uma presença digital coerente, relevante e conectada à marca, do conteúdo à experiência da comunidade.",
    tags: ["Instagram", "Conteúdo", "Comunidade"],
  },
  {
    number: "03",
    title: "Crescimento",
    description:
      "Criamos estratégias para atrair as pessoas certas, gerar oportunidades e transformar atenção em crescimento sustentável.",
    tags: ["Marketing", "Aquisição", "Conversão"],
  },
  {
    number: "04",
    title: "Tecnologia",
    description:
      "Desenvolvemos sistemas, automações e processos que reduzem complexidade, eliminam tarefas desnecessárias e tornam a operação mais eficiente.",
    tags: ["Desenvolvimento", "Automação", "Processos"],
  },
  {
    number: "05",
    title: "Inteligência",
    description:
      "Organizamos dados e indicadores para transformar informação em decisões mais precisas e oportunidades mais claras.",
    tags: ["Dados", "Métricas", "Análise"],
  },
];

const problems = [
  "Produz conteúdo, mas não consegue entender o que realmente gera resultado.",
  "Tem audiência, mas ainda não conseguiu transformar atenção em comunidade.",
  "Investe em marketing, porém não possui clareza sobre os números e retornos.",
  "Possui processos importantes, mas ainda depende de trabalho manual demais.",
  "Tem um bom produto ou serviço, mas encontra dificuldade para comunicar seu valor.",
  "Sabe que precisa crescer, mas ainda não possui uma direção clara para isso.",
];

const process = [
  [
    "01",
    "Entender",
    "Analisamos o negócio, o contexto, o mercado e os objetivos antes de propor qualquer direção.",
  ],
  [
    "02",
    "Planejar",
    "Transformamos informações em prioridades, estratégia e um caminho claro de execução.",
  ],
  [
    "03",
    "Executar",
    "Colocamos a estratégia em prática com consistência, proximidade e atenção aos detalhes.",
  ],
  [
    "04",
    "Medir",
    "Acompanhamos indicadores, comportamento e resultados para entender o que está funcionando.",
  ],
  [
    "05",
    "Otimizar",
    "Usamos aprendizado e dados para ajustar a operação e buscar evolução contínua.",
  ],
];

const differences = [
  {
    number: "01",
    title: "Visão de negócio",
    description:
      "Antes de pensar em conteúdo, entendemos objetivos, contexto, público, posicionamento e o momento real da empresa.",
  },
  {
    number: "02",
    title: "Execução próxima",
    description:
      "Nossa atuação não termina no planejamento. Participamos da execução, acompanhamos os resultados e ajustamos o percurso.",
  },
  {
    number: "03",
    title: "Tecnologia aplicada",
    description:
      "Utilizamos automação, sistemas e processos para reduzir tarefas operacionais e criar uma estrutura mais eficiente.",
  },
  {
    number: "04",
    title: "Decisões por dados",
    description:
      "Acompanhamos métricas relevantes para identificar padrões, corrigir rotas e encontrar novas oportunidades de crescimento.",
  },
];

const cases = [
  {
    number: "01",
    category: "Gestão de perfil",
    title: "Construção de presença digital",
    subtitle: "Posicionamento + conteúdo + comunidade",
    description:
      "Um projeto desenvolvido para transformar uma presença digital dispersa em uma comunicação mais consistente, estratégica e conectada à audiência.",
    challenge:
      "Construir uma presença digital mais relevante, organizada e alinhada aos objetivos do negócio.",
    solution:
      "Estruturamos posicionamento, planejamento de conteúdo, organização da comunicação e acompanhamento contínuo da presença digital.",
    results: ["Estratégia", "Conteúdo", "Posicionamento"],
  },
  {
    number: "02",
    category: "Gestão de perfil",
    title: "Estratégia de crescimento",
    subtitle: "Conteúdo + análise + consistência",
    description:
      "Um projeto focado em transformar a produção de conteúdo em uma operação mais organizada, mensurável e preparada para gerar crescimento.",
    challenge:
      "Criar consistência, compreender o comportamento da audiência e identificar com mais clareza o que realmente gera resultado.",
    solution:
      "Desenvolvemos uma estratégia editorial, acompanhamos indicadores de desempenho e utilizamos os aprendizados para otimizar continuamente a operação.",
    results: ["Conteúdo", "Análise", "Crescimento"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
      <Navbar />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

<section className="relative flex min-h-screen items-center overflow-hidden bg-[#f5f3f0] pt-20 text-[#000000]">
 <div className="hero-photo-stream" aria-hidden="true">
  <div className="hero-photo-track hero-photo-track-one">
    {[
      "/images/gallery01.jpg",
      "/images/photo1.jpg",
      "/images/case1.jpg",
      "/images/gallery04.jpg",
      "/images/photo4.jpg",
      "/images/case3.jpg",
      "/images/gallery06.jpg",
      "/images/photo2.jpg",
    ].map((image, index) => (
      <div className="hero-photo-card" key={`hero-one-${index}`}>
        <img src={image} alt="" />
      </div>
    ))}
  </div>

  <div className="hero-photo-track hero-photo-track-two">
    {[
      "/images/photo3.jpg",
      "/images/gallery02.jpg",
      "/images/case2.jpg",
      "/images/gallery05.jpg",
      "/images/photo5.jpg",
      "/images/gallery03.jpg",
      "/images/case1.jpg",
      "/images/gallery01.jpg",
    ].map((image, index) => (
      <div className="hero-photo-card hero-photo-card-small" key={`hero-two-${index}`}>
        <img src={image} alt="" />
      </div>
    ))}
  </div>

  <div className="hero-photo-vignette" />
</div>
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4d0c8]/30 blur-[150px]" />

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.18]"
    style={{
      backgroundImage:
        "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
      backgroundSize: "90px 90px",
      maskImage:
        "radial-gradient(circle at center, black 5%, transparent 72%)",
      WebkitMaskImage:
        "radial-gradient(circle at center, black 5%, transparent 72%)",
    }}
  />

  <div className="pointer-events-none absolute -right-20 top-20 h-[300px] w-[300px] rounded-full border border-[#4a4a4a]/10" />

  <div className="pointer-events-none absolute bottom-[-120px] left-[-80px] h-[300px] w-[300px] rounded-full border border-[#4a4a4a]/10" />

  <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">

    <div className="max-w-3xl animate-fade-up">

      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#4a4a4a]/20 bg-white/40 px-4 py-2.5 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-[#4a4a4a]" />

        <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#4a4a4a]">
          Estratégia • Branding • Crescimento
        </span>
      </div>

      <h1 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.4rem]">
        Marcas fortes
        <span className="block text-[#111111]">
          não acontecem
        </span>
        <span className="block text-[#4a4a4a]/45">
          por acaso.
        </span>
      </h1>

      <div className="mt-8 flex items-center gap-4">
        <span className="h-px w-14 bg-[#4a4a4a]" />

        <p className="text-lg font-medium tracking-[-0.02em] text-[#4a4a4a] sm:text-xl">
          Acontecem com estratégia.
        </p>
      </div>

      <p className="mt-8 max-w-2xl text-base leading-8 text-[#4a4a4a] sm:text-lg">
        A Trama Branding transforma estratégia em presença, conectando
        posicionamento, identidade, comunicação e tecnologia para construir
        marcas mais relevantes e preparadas para crescer.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <a
          href="#diagnostico"
          className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#000000] px-7 py-4 text-sm font-semibold text-[#f5f3f0] shadow-[0_15px_40px_rgba(0,0,0,0.14)] transition duration-300 hover:bg-[#4a4a4a]"
        >
          Vamos conversar

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="#sobre"
          className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#4a4a4a]/25 bg-white/30 px-7 py-4 text-sm font-medium text-[#111111] backdrop-blur-xl transition duration-300 hover:border-[#000000]/30 hover:bg-white/50"
        >
          Conhecer a Trama

          <span className="transition-transform duration-300 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>

      </div>

      <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-[#4a4a4a]/15">

        <div className="border-r border-[#4a4a4a]/15 py-6 pr-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/60">
            Estratégia
          </p>

          <p className="mt-2 text-sm text-[#111111]">
            Direção
          </p>
        </div>

        <div className="border-r border-[#4a4a4a]/15 px-5 py-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/60">
            Branding
          </p>

          <p className="mt-2 text-sm text-[#111111]">
            Identidade
          </p>
        </div>

        <div className="py-6 pl-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/60">
            Crescimento
          </p>

          <p className="mt-2 text-sm text-[#111111]">
            Evolução
          </p>
        </div>

      </div>
    </div>

    <div className="relative mx-auto hidden w-full max-w-xl animate-fade-in lg:block">

      <div className="relative aspect-square">

        <div className="absolute inset-[4%] rounded-full border border-[#4a4a4a]/15" />

        <div className="absolute inset-[13%] rounded-full border border-[#4a4a4a]/10" />

        <div className="absolute inset-[24%] rounded-full border border-[#000000]/10" />

        <div className="absolute inset-[34%] rounded-full border border-[#4a4a4a]/10" />

        <div className="absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 animate-float items-center justify-center rounded-full border border-[#000000]/10 bg-[#f5f3f0]/85 shadow-[0_0_100px_rgba(0,0,0,0.10)] backdrop-blur-xl">

          <div className="text-center">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4a4a4a]/20 bg-[#d4d0c8]/35">
              <span className="text-2xl font-semibold text-[#000000]">
                T
              </span>
            </div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#4a4a4a]/60">
              Trama Branding
            </p>

            <p className="mt-3 text-sm font-medium text-[#111111]">
              Estratégia que ganha forma.
            </p>

          </div>
        </div>

        <div className="absolute left-[2%] top-[18%] animate-float-slow">

          <div className="rounded-2xl border border-[#4a4a4a]/15 bg-white/55 px-5 py-4 shadow-xl backdrop-blur-xl">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/55">
              Estratégia
            </p>

            <p className="mt-2 text-xs font-semibold text-[#111111]">
              POSICIONAMENTO
            </p>

          </div>
        </div>

        <div className="absolute right-[0%] top-[12%] animate-float">

          <div className="rounded-2xl border border-[#4a4a4a]/15 bg-[#d4d0c8]/35 px-5 py-4 shadow-xl backdrop-blur-xl">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/70">
              Marca
            </p>

            <p className="mt-2 text-xs font-semibold text-[#000000]">
              IDENTIDADE
            </p>

          </div>
        </div>

        <div className="absolute bottom-[18%] left-[0%] animate-float-slow">

          <div className="rounded-2xl border border-[#4a4a4a]/15 bg-white/55 px-5 py-4 shadow-xl backdrop-blur-xl">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/55">
              Presença
            </p>

            <p className="mt-2 text-xs font-semibold text-[#111111]">
              COMUNICAÇÃO
            </p>

          </div>
        </div>

        <div className="absolute bottom-[7%] right-[6%] animate-float">

          <div className="rounded-2xl border border-[#4a4a4a]/15 bg-white/55 px-5 py-4 shadow-xl backdrop-blur-xl">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#4a4a4a]/55">
              Crescimento
            </p>

            <p className="mt-2 text-xs font-semibold text-[#111111]">
              EVOLUÇÃO
            </p>

          </div>
        </div>

        <div className="absolute left-[25%] top-[18%] h-2 w-2 rounded-full bg-[#4a4a4a]" />

        <div className="absolute right-[25%] top-[28%] h-2 w-2 rounded-full bg-[#4a4a4a]" />

        <div className="absolute bottom-[27%] left-[19%] h-2 w-2 rounded-full bg-[#4a4a4a]" />

        <div className="absolute bottom-[18%] right-[31%] h-1.5 w-1.5 rounded-full bg-[#4a4a4a]" />

        <div className="absolute left-[27%] top-[20%] h-px w-[23%] rotate-[25deg] bg-gradient-to-r from-[#4a4a4a]/30 to-transparent" />

        <div className="absolute right-[24%] top-[31%] h-px w-[19%] -rotate-[18deg] bg-gradient-to-l from-[#4a4a4a]/25 to-transparent" />

        <div className="absolute bottom-[29%] left-[24%] h-px w-[22%] -rotate-[22deg] bg-gradient-to-r from-[#4a4a4a]/25 to-transparent" />

      </div>
    </div>
  </div>

  <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
    <span className="h-1.5 w-1.5 rounded-full bg-[#4a4a4a]" />

    <span className="text-[10px] uppercase tracking-[0.25em] text-[#4a4a4a]/45">
      Estratégia em movimento
    </span>
  </div>
</section>

      {/* ========================================================= */}
      {/* SOBRE */}
      {/* ========================================================= */}

      <section
        id="sobre"
        className="relative border-t border-white/[0.06] bg-[#0a0c11] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              01 — Sobre nós
            </p>

            <div className="mt-8 h-px w-20 bg-cyan-400/40" />

            <p className="mt-8 max-w-sm text-sm leading-6 text-white/35">
              Uma abordagem integrada para cuidar da presença, da operação e
              do crescimento de pequenos negócios.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Não cuidamos apenas da comunicação.
              <span className="text-white/30">
                {" "}
                Entendemos o negócio por inteiro.
              </span>
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-7 text-white/50 sm:text-lg">
              <p>
                A Trama Branding nasceu da união entre comunicação, estratégia e
                tecnologia.
              </p>

              <p>
                De um lado, entendemos pessoas, conteúdo, posicionamento e
                comunidade. Do outro, construímos sistemas, automações,
                processos e estruturas baseadas em dados.
              </p>

              <p>
                Essa combinação nos permite olhar além da superfície e
                construir soluções que conectam percepção de marca, operação e
                crescimento.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                  Comunicação
                </p>

                <h3 className="mt-3 text-xl font-medium">
                  Pessoas + marca
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Estratégia de conteúdo, posicionamento, presença digital e
                  relacionamento para construir marcas mais relevantes.
                </p>
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                  Tecnologia
                </p>

                <h3 className="mt-3 text-xl font-medium">
                  Sistemas + inteligência
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Dados, automações e tecnologia para transformar uma operação
                  fragmentada em uma estrutura mais eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GALERIA */}
      {/* ========================================================= */}

      <MovingGallery />

      {/* ========================================================= */}
      {/* TRANSIÇÃO */}
      {/* ========================================================= */}

      <TransitionBand />

      {/* ========================================================= */}
      {/* ÁREAS DE OPERAÇÃO */}
      {/* ========================================================= */}

      <OperationsSection />

      {/* ========================================================= */}
      {/* VISÃO */}
      {/* ========================================================= */}

      <section
        id="visao"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            02 — Nossa visão
          </p>

          <div className="mt-10 max-w-5xl">
            <p className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white/90 sm:text-5xl lg:text-7xl">
              Crescimento não acontece por acaso.
            </p>

            <p className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white/25 sm:text-5xl lg:text-7xl">
              Acontece com planejamento.
            </p>
          </div>

          <div className="mt-14 grid gap-12 border-t border-white/[0.08] pt-10 md:grid-cols-3">
            {[
              [
                "01",
                "Direção",
                "Clareza sobre onde o negócio está, onde quer chegar e quais movimentos realmente importam.",
              ],
              [
                "02",
                "Consistência",
                "Transformar estratégia em execução contínua, disciplinada e alinhada aos objetivos.",
              ],
              [
                "03",
                "Otimização",
                "Medir resultados, aprender com os dados e melhorar continuamente o que gera impacto.",
              ],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span className="text-sm text-cyan-300">{number}</span>

                <h3 className="mt-4 text-xl font-medium">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROBLEMA */}
      {/* ========================================================= */}

      <section
        id="problema"
        className="border-t border-white/[0.06] bg-[#0a0c11] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              03 — O problema
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Seu negócio não precisa de mais barulho.
              <span className="block text-white/30">
                Precisa de clareza, direção e execução.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={problem}
                className="group bg-[#0d1016] p-7 transition duration-300 hover:bg-[#11151d] md:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="text-sm text-cyan-300/50">
                    0{index + 1}
                  </span>

                  <p className="max-w-md text-lg leading-7 text-white/70 transition group-hover:text-white">
                    {problem}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DIFERENCIAIS */}
      {/* ========================================================= */}

      <section
        id="diferenciais"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="pointer-events-none absolute left-[-220px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/[0.045] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                04 — Por que Trama Branding
              </p>

              <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Não tratamos o digital como uma tarefa isolada.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/45 sm:text-lg">
                Estratégia, conteúdo, tecnologia e dados precisam trabalhar em
                conjunto para que o negócio avance de verdade.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {differences.map((item) => (
                <article
                  key={item.number}
                  className="group rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-cyan-300/60">
                      {item.number}
                    </span>

                    <span className="text-white/15 transition group-hover:text-cyan-300/50">
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-12 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-white/[0.08] md:grid-cols-2">
            <div className="border-b border-white/[0.08] bg-[#0d1016] p-8 md:border-b-0 md:border-r lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                Modelo tradicional
              </p>

              <h3 className="mt-4 text-2xl font-medium text-white/55">
                Cada serviço em uma caixa.
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  "Conteúdo separado da estratégia",
                  "Marketing separado dos dados",
                  "Tecnologia tratada como complemento",
                  "Execução sem visão integrada do negócio",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-xs text-white/20">×</span>

                    <span className="text-sm text-white/35">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cyan-400/[0.035] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                Trama Branding
              </p>

              <h3 className="mt-4 text-2xl font-medium">
                Tudo conectado ao negócio.
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  "Estratégia orientando o conteúdo",
                  "Dados orientando as decisões",
                  "Tecnologia fortalecendo a operação",
                  "Execução conectada aos objetivos",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-3"
                  >
                    <span className="text-xs text-cyan-300">✓</span>

                    <span className="text-sm text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVIÇOS */}
      {/* ========================================================= */}

      <section
        id="servicos"
        className="border-t border-white/[0.06] bg-[#0a0c11] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                05 — O que fazemos
              </p>

              <h2 className="mt-6 max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                A estratégia vem antes da entrega.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/45">
                Primeiro entendemos o negócio. Depois conectamos estratégia,
                comunicação, tecnologia e dados para construir uma estrutura
                preparada para crescer.
              </p>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group grid gap-6 py-8 transition duration-300 md:grid-cols-[80px_1fr_auto]"
                >
                  <span className="text-sm text-white/25 transition group-hover:text-cyan-300/70">
                    {service.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium transition group-hover:text-cyan-200">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-[180px] md:justify-end">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="h-fit rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* PROCESSO */}
      {/* ========================================================= */}

      <section
        id="processo"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            06 — Nosso método
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Entender. Planejar. Executar. Medir. Otimizar.
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
              >
                <span className="text-sm text-cyan-300">{number}</span>

                <h3 className="mt-8 text-xl font-medium">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* SHOWCASE CINEMATOGRÁFICO */}
      {/* ========================================================= */}

  

      {/* ========================================================= */}
      {/* EQUIPE */}
      {/* ========================================================= */}

      <TeamSection />

      {/* ========================================================= */}
      {/* TRANSIÇÃO */}
      {/* ========================================================= */}

      <TransitionBand />

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            09 — Próximo passo
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Todo crescimento começa com uma boa direção.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Conte um pouco sobre o seu negócio. Queremos entender o momento
            atual, seus desafios e onde você pretende chegar antes de propor
            qualquer caminho.
          </p>

          <a
           href="#diagnostico"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Quero transformar meu negócio

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* DIAGNÓSTICO INTERATIVO */}
      {/* ========================================================= */}

    

      {/* ========================================================= */}
      {/* FORMULÁRIO COMPLETO */}
      {/* ========================================================= */}

      <LeadForm />

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="border-t border-white/[0.06] bg-[#08090d] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold">
              Trama<span className="text-cyan-400">Branding</span>
            </p>

            <p className="mt-1 text-xs text-white/30">
              Crescimento não acontece por acaso. Acontece com planejamento.
            </p>
          </div>

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Trama Branding. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}