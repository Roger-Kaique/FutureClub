"use client";

const gallery = [
  {
    title: "Estratégia",
    subtitle: "Pensar antes de executar",
    className:
      "from-cyan-300/20 via-[#111722] to-[#08090d]",
  },
  {
    title: "Conteúdo",
    subtitle: "Marcas que sabem se comunicar",
    className:
      "from-violet-300/20 via-[#17131f] to-[#08090d]",
  },
  {
    title: "Dados",
    subtitle: "Decisões baseadas em informação",
    className:
      "from-blue-300/20 via-[#101622] to-[#08090d]",
  },
  {
    title: "Comunidade",
    subtitle: "Conexões que permanecem",
    className:
      "from-emerald-300/15 via-[#101915] to-[#08090d]",
  },
  {
    title: "Tecnologia",
    subtitle: "Estrutura para crescer",
    className:
      "from-sky-300/20 via-[#10171d] to-[#08090d]",
  },
  {
    title: "Crescimento",
    subtitle: "Resultado é consequência",
    className:
      "from-fuchsia-300/15 via-[#18121a] to-[#08090d]",
  },
];

function GalleryCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <div
      className={`group relative h-[280px] w-[390px] shrink-0 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br ${className} sm:h-[330px] sm:w-[470px]`}
    >
      {/* EFEITO DE LUZ */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.05] blur-3xl transition duration-700 group-hover:scale-150" />

      {/* LINHAS */}
      <div className="absolute inset-[8%] rounded-[1.5rem] border border-white/[0.05]" />

      <div className="absolute inset-[16%] rounded-[1.25rem] border border-white/[0.04]" />

      {/* VISUAL CENTRAL */}
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] bg-black/20 backdrop-blur-xl transition duration-700 group-hover:scale-110">
        <div className="absolute inset-4 rounded-full border border-white/[0.05]" />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(103,232,249,0.8)]" />
      </div>

      {/* TEXTO */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-7">
        <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300/60">
          Future Club
        </p>

        <h3 className="mt-2 text-2xl font-medium text-white">{title}</h3>

        <p className="mt-1 text-sm text-white/45">{subtitle}</p>
      </div>

      {/* NÚMERO */}
      <span className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
        FC
      </span>
    </div>
  );
}

export default function MovingGallery() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] py-20">
      {/* TEXTO */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            Entre estratégia e execução
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Diferentes partes de um negócio.
            <span className="block text-white/30">
              Uma visão integrada.
            </span>
          </h2>
        </div>
      </div>

      {/* PRIMEIRA LINHA */}
      <div className="relative mt-16 overflow-hidden">
        <div className="moving-gallery-track moving-gallery-left">
          {[...gallery, ...gallery].map((item, index) => (
            <GalleryCard
              key={`left-${item.title}-${index}`}
              title={item.title}
              subtitle={item.subtitle}
              className={item.className}
            />
          ))}
        </div>
      </div>

      {/* SEGUNDA LINHA */}
      <div className="relative mt-5 overflow-hidden">
        <div className="moving-gallery-track moving-gallery-right">
          {[...gallery, ...gallery].map((item, index) => (
            <GalleryCard
              key={`right-${item.title}-${index}`}
              title={item.title}
              subtitle={item.subtitle}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}