export default function TeamSection() {
  return (
    <section
      id="equipe"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
    >
      <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              09 — Quem está por trás
            </p>

            <div className="mt-8 h-px w-20 bg-cyan-400/40" />

            <p className="mt-8 max-w-sm text-sm leading-6 text-white/35">
              A Trama Branding  nasceu da união entre comunicação, tecnologia e
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
              Comunicação e tecnologia trabalhando juntas para transformar
              estratégia em crescimento.
            </p>
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 lg:p-14">
          <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.035em] text-white/90 sm:text-4xl lg:text-5xl">
            Cuidamos do negócio,
            <span className="text-cyan-300/70">
              {" "}
              não apenas da presença digital.
            </span>
          </p>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/35 sm:text-base">
            Cada decisão precisa fazer sentido dentro de uma visão maior.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* ROGER */}

          <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#10141b]">
              <img
                src="/images/roger-01.jpg"
                alt="Roger — Trama Branding"
                className="h-full w-full object-cover object-center grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-black/10" />

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md">
                Tecnologia + Dados
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/70">
                  Fundador
                </p>

                <h3 className="mt-2 text-3xl font-medium">
                  Roger
                </h3>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-medium">
                Tecnologia, sistemas e inteligência
              </h4>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Responsável pela estrutura tecnológica da Trama Branding, com
                foco em sistemas, automação, dados, análise e processos.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Tecnologia",
                  "Dados",
                  "Automação",
                  "Sistemas",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/45"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* JULIA */}

          <article className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0d1016] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#10141b]">
              <img
                src="/images/julia-01.jpg"
                alt="Julia — Trama Branding"
                className="h-full w-full object-cover object-center grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-black/10" />

              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-md">
                Conteúdo + Comunidade
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/70">
                  Fundadora
                </p>

                <h3 className="mt-2 text-3xl font-medium">
                  Julia
                </h3>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-medium">
                Conteúdo, posicionamento e comunidade
              </h4>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Responsável pela comunicação, conteúdo, posicionamento de
                marca, gestão de perfis e construção de relacionamento com a
                audiência.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Instagram",
                  "Conteúdo",
                  "Marca",
                  "Comunidade",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/45"
                  >
                    {item}
                  </span>
                ))}
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
  );
}