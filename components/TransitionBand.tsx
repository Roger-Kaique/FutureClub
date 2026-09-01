const words = [
  "ESTRATÉGIA",
  "CONTEÚDO",
  "MARCA",
  "COMUNIDADE",
  "DADOS",
  "TECNOLOGIA",
  "CRESCIMENTO",
];

function BandRow({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  const items = [...words, ...words];

  return (
    <div className="transition-band-row">
      <div
        className={
          reverse
            ? "transition-band-track transition-band-track-reverse"
            : "transition-band-track"
        }
      >
        {items.map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="transition-band-item"
          >
            <span>{word}</span>
            <i />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TransitionBand() {
  return (
    <section className="transition-band" aria-hidden="true">
      <div className="transition-band-glow transition-band-glow-one" />

      <div className="transition-band-glow transition-band-glow-two" />

      <BandRow />

      <BandRow reverse />

      <div className="transition-band-center">
        <span>Trama Branding</span>

        <div className="transition-band-center-line" />

        <strong>
          Planejamento em movimento.
        </strong>
      </div>
    </section>
  );
}