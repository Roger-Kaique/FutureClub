export default function TeamSection() {
  return (
    <section
      id="equipe"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* CABEÇALHO */}

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              08 — Quem está por trás
            </p>

            <div className="mt-8 h-px w-20 bg-cyan-400/40" />

            <p className="mt-8 max-w-sm text-sm leading-6 text-white/35">
              A Future Club nasceu da união entre comunicação, tecnologia e
              uma vontade simples: cuidar de negócios de verdade.
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Duas perspectivas.
              <span className="block text-white/30">
                Um jeito diferente de cuidar.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/45 sm:text-lg">
              Não acreditamos que crescimento venha de uma única área. Um
              negócio precisa de estratégia, comunicação, relacionamento,
              tecnologia e capacidade de tomar boas decisões.
            </p>
          </div>
        </div>

        {/* FRASE CENTRAL */}

        <div className="mt-20 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 lg:p-14">
          <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.035em] text-white/90 sm:text-4xl lg:text-5xl">
            Cuidamos do negócio,
            <span className="text-cyan-300/70">
              {" "}
              não apenas da presença digital.
            </span>
          </p>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/35 sm:text-base">
            Nossa visão é conectar tudo que influencia o crescimento de uma
            empresa em uma estratégia única e coerente.
          </p>
        </div>

        {/* FUNDADORES */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* TECNOLOGIA */}

          <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_48%)]" />

              <div className="absolute inset-[12%] rounded-[2rem] border border-white/[0.06]" />

              <div className="absolute inset-[22%] rounded-full border border-cyan-300/[0.08]" />

              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] shadow-[0_0_100px_rgba(34,211,238,0.08)]">
                <span className="text-4xl font-semibold text-cyan-300">
                  FC
                </span>
              </div>

              <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/45 backdrop-blur-md">
                Tecnologia + Dados
              </div>

              <div className="absolute bottom-7 left-7">
                <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/60">
                  Estrutura
                </p>

                <p className="mt-2 text-sm text-white/55">
                  Sistemas que sustentam o crescimento.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                Fundador
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">
                Tecnologia, dados e automação
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/45">
                A frente tecnológica da Future Club transforma processos em
                sistemas, dados em informação e tarefas repetitivas em
                automações.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Sistemas",
                  "Automação",
                  "Análise de dados",
                  "Processos",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-xs text-white/45"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* COMUNICAÇÃO */}

          <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20">
            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_48%)]" />

              <div className="absolute inset-[12%] rounded-[2rem] border border-white/[0.06]" />

              <div className="absolute inset-[22%] rounded-full border border-white/[0.06]" />

              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.035] shadow-[0_0_90px_rgba(255,255,255,0.04)]">
                <span className="text-4xl font-semibold text-white/75">
                  FC
                </span>
              </div>

              <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] text-white/45 backdrop-blur-md">
                Conteúdo + Comunidade
              </div>

              <div className="absolute bottom-7 left-7">
                <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/60">
                  Conexão
                </p>

                <p className="mt-2 text-sm text-white/55">
                  Marcas que sabem se comunicar.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                Fundadora
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em]">
                Conteúdo, marca e comunidade
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/45">
                A frente de comunicação transforma posicionamento em conteúdo,
                conteúdo em relacionamento e relacionamento em comunidade.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Instagram",
                  "Conteúdo",
                  "Posicionamento",
                  "Comunidade",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-xs text-white/45"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* VISÃO DOS DOIS */}

        <div className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/[0.08] lg:grid-cols-[1fr_auto_1fr]">
          <div className="bg-[#0d1016] p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Comunicação
            </p>

            <p className="mt-4 text-xl font-medium text-white/75">
              Cria conexão.
            </p>

            <p className="mt-3 text-sm leading-6 text-white/35">
              Pessoas precisam entender, confiar e se identificar com a marca.
            </p>
          </div>

          <div className="flex items-center justify-center border-y border-white/[0.08] bg-cyan-400/[0.035] px-10 py-8 lg:border-x lg:border-y-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06]">
              <span className="text-sm font-semibold text-cyan-300">+</span>
            </div>
          </div>

          <div className="bg-[#0d1016] p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Tecnologia
            </p>

            <p className="mt-4 text-xl font-medium text-white/75">
              Cria estrutura.
            </p>

            <p className="mt-3 text-sm leading-6 text-white/35">
              Processos e dados ajudam o negócio a operar melhor e tomar
              decisões melhores.
            </p>
          </div>
        </div>

        {/* FUTURO */}

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/60">
            O que estamos construindo
          </p>

          <h3 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Uma empresa onde estratégia e tecnologia trabalham juntas.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/35 sm:text-base">
            E esse é apenas o começo da Future Club.
          </p>
        </div>
      </div>
    </section>
  );
}