import LeadForm from "../components/LeadForm";
import Navbar from "../components/Navbar";
import MovingGallery from "../components/MovingGallery";
import TeamSection from "../components/TeamSection";
import OperationsSection from "../components/OperationsSection";
import DiagnosisSection from "../components/DiagnosisSection";
import TransitionBand from "../components/TransitionBand";
import CaseShowcase from "../components/CaseShowcase";

const services = [
  {
    number: "01",
    title: "Estratégia",
    description:
      "Planejamento, posicionamento e direção para transformar objetivos em um caminho claro de crescimento.",
    tags: ["Planejamento", "Posicionamento", "Direção"],
  },
  {
    number: "02",
    title: "Presença",
    description:
      "Cuidamos da presença digital da marca, do conteúdo ao relacionamento com a comunidade.",
    tags: ["Instagram", "Conteúdo", "Comunidade"],
  },
  {
    number: "03",
    title: "Crescimento",
    description:
      "Construímos estratégias para atrair as pessoas certas, gerar oportunidades e desenvolver o negócio.",
    tags: ["Marketing", "Aquisição", "Conversão"],
  },
  {
    number: "04",
    title: "Tecnologia",
    description:
      "Desenvolvemos sistemas e automações para reduzir tarefas manuais e melhorar a operação.",
    tags: ["Desenvolvimento", "Automação", "Processos"],
  },
  {
    number: "05",
    title: "Inteligência",
    description:
      "Transformamos dados em decisões para entender o que funciona e onde existe oportunidade.",
    tags: ["Dados", "Métricas", "Análise"],
  },
];

const problems = [
  "Posta, mas não sabe se está funcionando.",
  "Tem seguidores, mas não constrói comunidade.",
  "Investe em marketing, mas não entende os números.",
  "Possui processos, mas ainda faz muita coisa manualmente.",
  "Tem um bom produto, mas não sabe como posicioná-lo.",
  "Sabe que precisa crescer, mas não possui um plano claro.",
];

const process = [
  ["01", "Entender", "Conhecemos o negócio, o mercado e os objetivos."],
  ["02", "Planejar", "Criamos uma direção clara para o crescimento."],
  ["03", "Executar", "Transformamos estratégia em ação."],
  ["04", "Medir", "Acompanhamos dados, resultados e oportunidades."],
  ["05", "Otimizar", "Melhoramos continuamente o que fazemos."],
];

const differences = [
  {
    number: "01",
    title: "Visão de negócio",
    description:
      "Antes de pensar em conteúdo, entendemos objetivos, contexto, público e o momento da empresa.",
  },
  {
    number: "02",
    title: "Execução próxima",
    description:
      "Não entregamos apenas planejamento. Participamos da execução e acompanhamos o que acontece.",
  },
  {
    number: "03",
    title: "Tecnologia aplicada",
    description:
      "Usamos automação, sistemas e processos para tornar a operação mais eficiente.",
  },
  {
    number: "04",
    title: "Decisões por dados",
    description:
      "Acompanhamos métricas para aprender, ajustar estratégias e identificar novas oportunidades.",
  },
];

const cases = [
  {
    number: "01",
    category: "Gestão de perfil",
    title: "Construção de presença digital",
    subtitle: "Posicionamento + conteúdo + comunidade",
    description:
      "Um projeto desenvolvido para estruturar uma presença digital mais consistente, conectar conteúdo com posicionamento e criar relacionamento com a audiência.",
    challenge:
      "Transformar presença digital em algo estratégico, consistente e conectado aos objetivos do negócio.",
    solution:
      "Planejamento de conteúdo, organização da comunicação, posicionamento e acompanhamento contínuo.",
    results: ["Estratégia", "Conteúdo", "Posicionamento"],
  },
  {
    number: "02",
    category: "Gestão de perfil",
    title: "Estratégia de crescimento",
    subtitle: "Conteúdo + análise + consistência",
    description:
      "Um projeto focado em construir uma operação de conteúdo mais organizada, entender o comportamento da audiência e criar oportunidades de crescimento.",
    challenge:
      "Criar consistência e melhorar a capacidade de identificar o que realmente gera resultado.",
    solution:
      "Estratégia editorial, análise de desempenho e otimização contínua da presença digital.",
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

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute left-[45%] top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[150px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[12%] h-[430px] w-[430px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black 12%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 12%, transparent 72%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.03)]">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300" />

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
                Estratégia • Tecnologia • Crescimento
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.6rem] xl:text-[6.5rem]">
              Crescimento
              <span className="block text-white/90">não acontece</span>
              <span className="block text-white/35">por acaso.</span>
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-12 bg-cyan-300/60" />

              <p className="text-xl font-medium tracking-[-0.02em] text-white/75 sm:text-2xl">
                Acontece com planejamento.
              </p>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
              A Future Club ajuda negócios a transformar presença digital em
              crescimento real através de estratégia, posicionamento,
              conteúdo, tecnologia, automação e dados.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#diagnostico-preview"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.06)] transition duration-300 hover:bg-cyan-300"
              >
                Quero transformar meu negócio

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#galeria"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-sm font-medium text-white/70 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Explorar a Future Club

                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 border-t border-white/[0.08] sm:grid-cols-3">
              <div className="border-r border-white/[0.08] py-6 pr-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  Foco
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Pequenos negócios
                </p>
              </div>

              <div className="border-r-0 py-6 px-4 sm:border-r sm:border-white/[0.08]">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  Atuação
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Digital + Tecnologia
                </p>
              </div>

              <div className="col-span-2 py-6 pl-0 sm:col-span-1 sm:pl-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                  Visão
                </p>

                <p className="mt-2 text-sm text-white/75">
                  Crescimento sustentável
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xl animate-fade-in lg:block">
            <div className="relative aspect-square">
              <div className="absolute inset-[5%] rounded-full border border-white/[0.07]" />

              <div className="absolute inset-[14%] rounded-full border border-cyan-300/[0.08]" />

              <div className="absolute inset-[25%] rounded-full border border-white/[0.05]" />

              <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 animate-float items-center justify-center rounded-full border border-white/10 bg-[#0d1016]/80 shadow-[0_0_100px_rgba(34,211,238,0.09)] backdrop-blur-xl">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/[0.08]">
                    <span className="text-xl font-semibold text-cyan-300">
                      F
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Future Club
                  </p>

                  <p className="mt-3 text-sm font-medium text-white/80">
                    Planejamento em movimento.
                  </p>
                </div>
              </div>

              <div className="absolute left-[5%] top-[25%] animate-float-slow">
                <div className="rounded-2xl border border-white/10 bg-[#11141b]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Estratégia
                  </p>

                  <p className="mt-2 text-xs font-semibold text-white/75">
                    MARCA
                  </p>
                </div>
              </div>

              <div className="absolute right-[2%] top-[17%] animate-float">
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-4 shadow-2xl backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-cyan-300/50">
                    Inteligência
                  </p>

                  <p className="mt-2 text-xs font-semibold text-cyan-300">
                    DADOS
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[18%] left-0 animate-float-slow">
                <div className="rounded-2xl border border-white/10 bg-[#11141b]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Presença
                  </p>

                  <p className="mt-2 text-xs font-semibold text-white/75">
                    CONTEÚDO
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[8%] right-[8%] animate-float">
                <div className="rounded-2xl border border-white/10 bg-[#11141b]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Operação
                  </p>

                  <p className="mt-2 text-xs font-semibold text-white/75">
                    AUTOMAÇÃO
                  </p>
                </div>
              </div>

              <div className="absolute left-[27%] top-[21%] h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300" />
              <div className="absolute right-[23%] top-[31%] h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300" />
              <div className="absolute bottom-[27%] left-[20%] h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300" />
              <div className="absolute bottom-[19%] right-[34%] h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan-300" />

              <div className="absolute left-[29%] top-[23%] h-px w-[20%] rotate-[28deg] bg-gradient-to-r from-cyan-300/30 to-transparent" />

              <div className="absolute right-[23%] top-[34%] h-px w-[18%] -rotate-[18deg] bg-gradient-to-l from-cyan-300/25 to-transparent" />

              <div className="absolute bottom-[29%] left-[26%] h-px w-[22%] -rotate-[22deg] bg-gradient-to-r from-cyan-300/25 to-transparent" />
            </div>
          </div>
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
              Uma nova forma de cuidar da presença digital e da operação de
              pequenos negócios.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Não somos apenas uma empresa cuidando do seu Instagram.
            </h2>

            <div className="mt-8 grid gap-6 text-base leading-7 text-white/50 sm:text-lg">
              <p>
                A Future Club nasceu da combinação entre comunicação e
                tecnologia.
              </p>

              <p>
                Enquanto uma parte da nossa equipe entende pessoas, conteúdo,
                posicionamento e comunidade, a outra constrói sistemas,
                automações e estruturas baseadas em dados.
              </p>

              <p>
                O resultado é uma operação pensada para enxergar o negócio de
                forma mais ampla e transformar planejamento em crescimento.
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
                  Conteúdo, presença digital, posicionamento e construção de
                  comunidade.
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
                  Dados, automações e tecnologia para tornar o crescimento
                  mais organizado.
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
                "Entender onde o negócio está e onde precisa chegar.",
              ],
              [
                "02",
                "Consistência",
                "Transformar estratégia em execução contínua.",
              ],
              [
                "03",
                "Otimização",
                "Medir, aprender e melhorar o que realmente importa.",
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
                Precisa de direção.
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
                04 — Por que Future Club
              </p>

              <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Não tratamos o digital como uma tarefa isolada.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/45 sm:text-lg">
                Para nós, marketing, conteúdo, tecnologia e dados fazem parte
                do mesmo negócio.
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
                  "Tecnologia tratada como extra",
                  "Execução sem visão completa",
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
                Future Club
              </p>

              <h3 className="mt-4 text-2xl font-medium">
                Tudo conectado ao negócio.
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  "Estratégia orientando o conteúdo",
                  "Dados orientando as decisões",
                  "Tecnologia melhorando a operação",
                  "Execução conectada ao objetivo",
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
                Tudo começa entendendo o negócio.
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/45">
                Depois conectamos estratégia, comunicação, tecnologia e dados
                para construir uma estrutura de crescimento.
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
      {/* PORTFÓLIO */}
      {/* ========================================================= */}

      <section
        id="cases"
        className="border-t border-white/[0.06] bg-[#0a0c11] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              07 — Portfólio
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Não mostramos apenas o que fazemos.
              <span className="block text-white/30">
                Mostramos como pensamos.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Cada projeto começa com um problema. A partir dele, construímos
              estratégia, execução e acompanhamento.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {cases.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition duration-500 hover:border-cyan-400/20"
              >
                <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[380px] overflow-hidden bg-gradient-to-br from-cyan-400/[0.08] via-[#11151d] to-[#08090d]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_42%)] transition duration-700 group-hover:scale-110" />

                    <div className="absolute inset-[10%] rounded-[2rem] border border-white/[0.06]" />

                    <div className="absolute inset-[18%] rounded-[1.5rem] border border-cyan-400/[0.08]" />

                    <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-float items-center justify-center rounded-full border border-white/10 bg-[#0d1016]/75 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                      <div className="text-center">
                        <span className="text-xs uppercase tracking-[0.25em] text-cyan-300/60">
                          Case
                        </span>

                        <p className="mt-2 text-3xl font-semibold">
                          {item.number}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/50 backdrop-blur-md">
                      {item.category}
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                        Future Club
                      </p>

                      <p className="mt-2 text-sm text-white/45">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                          Projeto {item.number}
                        </span>

                        <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/45 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                        ↗
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-7 text-white/50">
                      {item.description}
                    </p>

                    <div className="mt-10 grid gap-8 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                          Desafio
                        </p>

                        <p className="mt-3 text-sm leading-6 text-white/45">
                          {item.challenge}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                          Solução
                        </p>

                        <p className="mt-3 text-sm leading-6 text-white/45">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2 border-t border-white/[0.07] pt-7">
                      {item.results.map((result) => (
                        <span
                          key={result}
                          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-white/45"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SHOWCASE CINEMATOGRÁFICO */}
      {/* ========================================================= */}

      <CaseShowcase />

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
            Seu próximo crescimento começa com uma conversa.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Conte um pouco sobre seu negócio. Antes de qualquer conversa,
            queremos entender onde você está e onde deseja chegar.
          </p>

          <a
            href="#diagnostico-preview"
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

      <DiagnosisSection />

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
              future<span className="text-cyan-400">club</span>
            </p>

            <p className="mt-1 text-xs text-white/30">
              Crescimento não acontece por acaso. Acontece com planejamento.
            </p>
          </div>

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Future Club. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}