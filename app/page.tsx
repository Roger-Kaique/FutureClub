"use client";

import { useState } from "react";
import LeadForm from "../components/LeadForm";

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

const cases = [
  {
    number: "01",
    category: "Gestão de perfil",
    title: "Construção de presença digital",
    description:
      "Estratégia de conteúdo, posicionamento, relacionamento com audiência e construção de uma presença digital consistente.",
    metrics: ["Conteúdo", "Posicionamento", "Comunidade"],
  },
  {
    number: "02",
    category: "Gestão de perfil",
    title: "Estratégia e crescimento",
    description:
      "Planejamento de conteúdo, identidade digital e acompanhamento contínuo para transformar presença em oportunidade.",
    metrics: ["Estratégia", "Conteúdo", "Crescimento"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
      {/* ========================= NAVBAR ========================= */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#08090d]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] transition duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
              <span className="text-sm font-semibold">F</span>
            </div>

            <span className="text-lg font-semibold tracking-[-0.03em]">
              future<span className="text-cyan-400">club</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a
              href="#sobre"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Sobre nós
            </a>

            <a
              href="#visao"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Nossa visão
            </a>

            <a
              href="#servicos"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Serviços
            </a>

            <a
              href="#processo"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Método
            </a>

            <a
              href="#cases"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Cases
            </a>

            <a
              href="#equipe"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Equipe
            </a>
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-medium transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 md:inline-flex"
          >
            Vamos conversar
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.06] bg-[#08090d] px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              {[
                ["#sobre", "Sobre nós"],
                ["#visao", "Nossa visão"],
                ["#servicos", "Serviços"],
                ["#processo", "Método"],
                ["#cases", "Cases"],
                ["#equipe", "Equipe"],
                ["#contato", "Vamos conversar"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ========================= HERO ========================= */}

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20 animate-fade-in">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[120px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black 20%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                Estratégia • Tecnologia • Crescimento
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Crescimento não acontece por acaso.
              <span className="mt-4 block text-white/45">
                Acontece com planejamento.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              A Future Club ajuda negócios a transformar presença digital em
              crescimento real através de estratégia, posicionamento,
              conteúdo, tecnologia, automação e dados.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-300"
              >
                Quero transformar meu negócio
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 transition duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
              >
                Conhecer a Future Club
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                  Foco
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Pequenos negócios
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                  Atuação
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Digital + Tecnologia
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                  Visão
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Crescimento sustentável
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xl animate-fade-in lg:block">
            <div className="relative aspect-square">
              <div className="absolute inset-[7%] rounded-full border border-white/[0.08]" />

              <div className="absolute inset-[17%] rounded-full border border-cyan-400/10" />

              <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] shadow-[0_0_100px_rgba(34,211,238,0.08)] backdrop-blur-xl animate-float">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                    <span className="text-lg font-semibold text-cyan-300">
                      F
                    </span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Future Club
                  </p>

                  <p className="mt-2 text-sm font-medium text-white/85">
                    Estratégia em movimento.
                  </p>
                </div>
              </div>

              <div className="absolute left-[13%] top-[26%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#11141b]/90 shadow-2xl backdrop-blur-xl">
                <span className="text-xs font-semibold text-white/70">
                  MARCA
                </span>
              </div>

              <div className="absolute right-[10%] top-[19%] flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] shadow-2xl backdrop-blur-xl">
                <span className="text-xs font-semibold text-cyan-300">
                  DADOS
                </span>
              </div>

              <div className="absolute bottom-[22%] left-[7%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#11141b]/90 shadow-2xl backdrop-blur-xl">
                <span className="text-xs font-semibold text-white/70">
                  CONTEÚDO
                </span>
              </div>

              <div className="absolute bottom-[12%] right-[18%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#11141b]/90 shadow-2xl backdrop-blur-xl">
                <span className="text-xs font-semibold text-white/70">
                  AUTO
                </span>
              </div>

              <div className="absolute left-[31%] top-[23%] h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />

             <div className="absolute right-[27%] top-[32%] h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />

              <div className="absolute bottom-[28%] left-[24%] h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
              <div className="absolute left-[25%] top-[48%] h-px w-[50%] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= SOBRE ========================= */}

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
              Não somos apenas mais uma empresa cuidando do seu Instagram.
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
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]">
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

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]">
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

      {/* ========================= VISÃO ========================= */}

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

                <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= PROBLEMA ========================= */}

      <section
        id="problema"
        className="border-t border-white/[0.06] bg-[#0a0c11] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl animate-fade-up">
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

      {/* ========================= SERVIÇOS ========================= */}

      <section
        id="servicos"
        className="border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                04 — O que fazemos
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

      {/* ========================= PROCESSO ========================= */}

      <section
        id="processo"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0c11] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            05 — Nosso método
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

      {/* ========================= CASES ========================= */}

      <section
        id="cases"
        className="border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                06 — Portfólio
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Trabalho que podemos mostrar.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/40">
              Vamos transformar nossa experiência em cases completos,
              mostrando contexto, estratégia, execução e evolução.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {cases.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-cyan-400/[0.08] via-[#11151d] to-[#08090d]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_38%)] transition duration-500 group-hover:scale-110" />

                  <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/50 backdrop-blur-md">
                    {item.category}
                  </div>

                  <div className="absolute bottom-7 left-7">
                    <span className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                      Case {item.number}
                    </span>
                  </div>

                  <div className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                    ↗
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-medium">{item.title}</h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/45">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/45"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[2rem] border border-dashed border-white/10 bg-white/[0.015] p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                  Próximos projetos
                </p>

                <h3 className="mt-2 text-xl font-medium">
                  Mais cases serão adicionados conforme nossa operação cresce.
                </h3>
              </div>

              <a
                href="#contato"
                className="inline-flex w-fit rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-white"
              >
                Quero fazer parte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= EQUIPE ========================= */}

      <section
        id="equipe"
        className="border-t border-white/[0.06] bg-[#0a0c11] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              07 — Quem está por trás
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Duas perspectivas.
              <span className="block text-white/30">Um objetivo.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              A Future Club é construída por duas áreas diferentes que
              trabalham em conjunto para cuidar do negócio de forma mais
              completa.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition duration-500 hover:border-cyan-400/20">
              <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-[#151923] to-[#0b0d12]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_48%)]" />

                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] shadow-[0_0_80px_rgba(34,211,238,0.08)]">
                  <span className="text-4xl font-semibold text-cyan-300">
                    FC
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/45 backdrop-blur-md">
                  Tecnologia + Dados
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                  Fundador
                </p>

                <h3 className="mt-3 text-3xl font-medium">
                  Tecnologia, sistemas e inteligência
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  Responsável pela estrutura tecnológica da Future Club, com
                  foco em sistemas, automação, dados, análise e processos.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Tecnologia", "Dados", "Automação", "Sistemas"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/45"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition duration-500 hover:border-cyan-400/20">
              <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-[#151923] to-[#0b0d12]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_48%)]" />

                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                  <span className="text-4xl font-semibold text-white/75">
                    FC
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/45 backdrop-blur-md">
                  Conteúdo + Comunidade
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                  Fundadora
                </p>

                <h3 className="mt-3 text-3xl font-medium">
                  Conteúdo, posicionamento e comunidade
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/45">
                  Responsável pela comunicação, conteúdo, posicionamento de
                  marca, gestão de perfis e construção de relacionamento com a
                  audiência.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Conteúdo", "Instagram", "Marca", "Comunidade"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/45"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 text-center md:p-12">
            <p className="text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
              Comunicação cria conexão.
              <span className="text-white/30">
                {" "}
                Tecnologia cria estrutura.
              </span>
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40">
              Quando as duas trabalham juntas, estratégia deixa de ser apenas
              uma ideia e passa a fazer parte da operação.
            </p>
          </div>
        </div>
      </section>

      {/* ========================= FUTURE CLUB OS ========================= */}

      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8">
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              08 — O próximo passo
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Nosso trabalho não termina no Instagram.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/45">
              Estamos construindo uma estrutura própria para organizar
              processos, dados, clientes e automações em um único lugar.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/40">
              Future Club OS — em desenvolvimento
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d1016] p-5 shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/[0.07] bg-[#090b10] p-5">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Future Club OS
                  </p>

                  <p className="mt-2 text-sm font-medium">Visão geral</p>
                </div>

                <div className="h-8 w-8 rounded-full border border-cyan-400/20 bg-cyan-400/10" />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ["Clientes", "24"],
                  ["Projetos", "18"],
                  ["Oportunidades", "42"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                      {label}
                    </p>

                    <p className="mt-3 text-2xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <div className="flex items-end gap-2">
                  {[28, 42, 35, 58, 48, 67, 78, 61, 84, 74, 92, 88].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-cyan-300/30 transition hover:bg-cyan-300/60"
                        style={{ height: `${height}px` }}
                      />
                    ),
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-[10px] text-white/25">
                  <span>Performance</span>
                  <span>Últimos 12 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= CTA ========================= */}

      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0c11] px-6 py-32 lg:px-8"
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
            href="#diagnostico"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-300"
          >
            Quero transformar meu negócio
            <span>→</span>
          </a>
        </div>
      </section>

      {/* ========================= DIAGNÓSTICO ========================= */}

      <LeadForm />

      {/* ========================= FOOTER ========================= */}

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