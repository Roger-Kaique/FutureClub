"use client";

import { FormEvent, useMemo, useState } from "react";

const challenges = [
  "Falta de estratégia",
  "Instagram",
  "Conteúdo",
  "Poucos clientes",
  "Posicionamento",
  "Processos",
  "Automação",
  "Dados / métricas",
];

const interests = [
  "Estratégia",
  "Instagram",
  "Conteúdo",
  "Posicionamento de marca",
  "Marketing digital",
  "Automação",
  "Tecnologia",
  "Análise de dados",
];

const situations = [
  "Estou começando",
  "Já tenho clientes",
  "Quero crescer",
  "Estou com dificuldade para crescer",
  "Preciso organizar minha operação",
];

const budgets = [
  "Até R$ 1.000",
  "R$ 1.000 — R$ 2.500",
  "R$ 2.500 — R$ 5.000",
  "R$ 5.000+",
  "Ainda não sei",
];

type FormData = {
  name: string;
  company: string;
  segment: string;
  instagram: string;
  phone: string;
  situation: string;
  objective: string;
  budget: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  segment: "",
  instagram: "",
  phone: "",
  situation: "",
  objective: "",
  budget: "",
};

const steps = [
  "Sobre você",
  "Momento atual",
  "Desafios",
  "Interesses",
  "Objetivo",
  "Investimento",
];

export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormData>(initialForm);

  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const progress = useMemo(
    () => ((currentStep + 1) / steps.length) * 100,
    [currentStep],
  );

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleSelection(
    value: string,
    current: string[],
    setCurrent: (value: string[]) => void,
  ) {
    if (current.includes(value)) {
      setCurrent(current.filter((item) => item !== value));
      return;
    }

    setCurrent([...current, value]);
  }

  function validateStep() {
    if (currentStep === 0) {
      if (!form.name || !form.company || !form.segment || !form.phone) {
        alert("Preencha nome, empresa, segmento e WhatsApp.");
        return false;
      }
    }

    if (currentStep === 1 && !form.situation) {
      alert("Selecione o momento atual do seu negócio.");
      return false;
    }

    if (currentStep === 4 && !form.objective.trim()) {
      alert("Conte um pouco sobre o seu objetivo.");
      return false;
    }

    if (currentStep === 5 && !form.budget) {
      alert("Selecione uma faixa de investimento.");
      return false;
    }

    return true;
  }

  function nextStep() {
    if (!validateStep()) {
      return;
    }

    setCurrentStep((current) =>
      Math.min(current + 1, steps.length - 1),
    );
  }

  function previousStep() {
    setCurrentStep((current) => Math.max(current - 1, 0));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateStep()) {
      return;
    }

    const message = [
      "Olá, Trama Branding! Quero iniciar uma conversa.",
      "",
      "NOVO DIAGNÓSTICO",
      "",
      `Nome: ${form.name}`,
      `Empresa: ${form.company}`,
      `Segmento: ${form.segment}`,
      `Instagram: ${form.instagram || "Não informado"}`,
      `WhatsApp: ${form.phone}`,
      "",
      `Momento atual: ${form.situation}`,
      `Desafios: ${
        selectedChallenges.length > 0
          ? selectedChallenges.join(", ")
          : "Não informado"
      }`,
      `Interesses: ${
        selectedInterests.length > 0
          ? selectedInterests.join(", ")
          : "Não informado"
      }`,
      "",
      `Objetivo: ${form.objective}`,
      `Investimento: ${form.budget}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/5531989340928?text=${encodeURIComponent(
      message,
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  function restart() {
    setForm(initialForm);
    setSelectedChallenges([]);
    setSelectedInterests([]);
    setCurrentStep(0);
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <section
        id="diagnostico"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.12)]">
            <span className="text-3xl text-cyan-300">✓</span>
          </div>

          <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            Diagnóstico enviado
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Obrigado, {form.name.split(" ")[0]}.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Suas informações foram organizadas e encaminhadas para o nosso
            WhatsApp. Agora podemos continuar a conversa com mais contexto
            sobre o seu negócio.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25">
              Próximo passo
            </p>

            <p className="mt-3 text-lg text-white/75">
              A conversa continuará pelo WhatsApp.
            </p>

            <p className="mt-2 text-sm leading-6 text-white/35">
              O diagnóstico já seguirá junto com sua mensagem para que a
              conversa comece de forma mais objetiva.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5531989340928"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-300"
            >
              Abrir WhatsApp
              <span>→</span>
            </a>

            <button
              type="button"
              onClick={restart}
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm text-white/65 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              Preencher novamente
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#08090d] px-6 py-32 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
            10 — Diagnóstico
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Antes de conversar, queremos entender o seu negócio.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Um diagnóstico rápido para entendermos seu momento, seus objetivos
            e onde podemos construir crescimento junto com você.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/[0.08] bg-[#0d1016] p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
                  Etapa {currentStep + 1} de {steps.length}
                </p>

                <p className="mt-2 text-sm font-medium text-white/75">
                  {steps[currentStep]}
                </p>
              </div>

              <span className="text-xs text-white/30">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-cyan-300 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-5 hidden grid-cols-6 gap-2 sm:grid">
              {steps.map((step, index) => (
                <div key={step} className="text-[10px] text-white/20">
                  <div
                    className={`mb-2 h-1 rounded-full ${
                      index <= currentStep
                        ? "bg-cyan-300/70"
                        : "bg-white/[0.06]"
                    }`}
                  />

                  <span
                    className={
                      index === currentStep ? "text-cyan-300/80" : ""
                    }
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-12">
            {currentStep === 0 && (
              <StepContainer
                label="01 — Sobre você"
                title="Vamos começar pelo básico."
                description="Essas informações nos ajudam a entender quem está por trás do negócio."
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    label="Seu nome *"
                    placeholder="Como podemos chamar você?"
                    value={form.name}
                    onChange={(value) => updateField("name", value)}
                  />

                  <Input
                    label="Empresa *"
                    placeholder="Nome da empresa"
                    value={form.company}
                    onChange={(value) => updateField("company", value)}
                  />

                  <Input
                    label="Segmento *"
                    placeholder="Ex.: estética, restaurante, loja..."
                    value={form.segment}
                    onChange={(value) => updateField("segment", value)}
                  />

                  <Input
                    label="Instagram"
                    placeholder="@suaempresa"
                    value={form.instagram}
                    onChange={(value) => updateField("instagram", value)}
                  />

                  <Input
                    label="WhatsApp *"
                    placeholder="(00) 00000-0000"
                    value={form.phone}
                    onChange={(value) => updateField("phone", value)}
                  />
                </div>
              </StepContainer>
            )}

            {currentStep === 1 && (
              <StepContainer
                label="02 — Momento atual"
                title="Em que momento seu negócio está?"
                description="Não existe resposta certa. Queremos entender o cenário atual."
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {situations.map((option) => (
                    <OptionButton
                      key={option}
                      label={option}
                      selected={form.situation === option}
                      onClick={() => updateField("situation", option)}
                    />
                  ))}
                </div>
              </StepContainer>
            )}

            {currentStep === 2 && (
              <StepContainer
                label="03 — Desafios"
                title="O que mais está impedindo seu negócio de crescer?"
                description="Selecione tudo que fizer sentido para o momento atual."
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {challenges.map((challenge) => (
                    <CheckButton
                      key={challenge}
                      label={challenge}
                      selected={selectedChallenges.includes(challenge)}
                      onClick={() =>
                        toggleSelection(
                          challenge,
                          selectedChallenges,
                          setSelectedChallenges,
                        )
                      }
                    />
                  ))}
                </div>
              </StepContainer>
            )}

            {currentStep === 3 && (
              <StepContainer
                label="04 — O que você procura"
                title="Em quais áreas você gostaria de ajuda?"
                description="Escolha as áreas que mais fazem sentido para seu negócio."
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {interests.map((interest) => (
                    <CheckButton
                      key={interest}
                      label={interest}
                      selected={selectedInterests.includes(interest)}
                      onClick={() =>
                        toggleSelection(
                          interest,
                          selectedInterests,
                          setSelectedInterests,
                        )
                      }
                    />
                  ))}
                </div>
              </StepContainer>
            )}

            {currentStep === 4 && (
              <StepContainer
                label="05 — Objetivo"
                title="Onde você quer chegar?"
                description="Quanto melhor entendermos seu objetivo, melhor será nossa conversa."
              >
                <textarea
                  required
                  value={form.objective}
                  onChange={(event) =>
                    updateField("objective", event.target.value)
                  }
                  placeholder="Conte um pouco sobre o resultado que você gostaria de alcançar."
                  className="min-h-48 w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-white/[0.04]"
                />
              </StepContainer>
            )}

            {currentStep === 5 && (
              <StepContainer
                label="06 — Investimento"
                title="Qual faixa de investimento faz sentido hoje?"
                description="Essa informação nos ajuda a entender se existe alinhamento neste momento."
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {budgets.map((option) => (
                    <OptionButton
                      key={option}
                      label={option}
                      selected={form.budget === option}
                      onClick={() => updateField("budget", option)}
                    />
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                    Tudo certo?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Ao enviar, suas respostas serão organizadas
                    automaticamente em uma mensagem e encaminhadas para o
                    WhatsApp da Trama Branding.
                  </p>
                </div>
              </StepContainer>
            )}

            <div className="mt-12 flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={previousStep}
                disabled={currentStep === 0}
                className={`rounded-full px-5 py-3 text-sm transition ${
                  currentStep === 0
                    ? "cursor-not-allowed text-white/15"
                    : "border border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                ← Voltar
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Continuar
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Enviar diagnóstico
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-white/20">
          As informações enviadas serão utilizadas exclusivamente para
          entendermos seu negócio e iniciar o atendimento.
        </p>
      </div>
    </section>
  );
}

function StepContainer({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/60">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-medium sm:text-3xl">{title}</h3>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/35">
        {description}
      </p>

      <div className="mt-8">{children}</div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/45">{label}</span>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-13 w-full rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-cyan-400/30 focus:bg-white/[0.04]"
      />
    </label>
  );
}

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-14 items-center rounded-2xl border px-5 text-left text-sm transition ${
        selected
          ? "border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-200"
          : "border-white/[0.08] bg-white/[0.025] text-white/55 hover:border-white/15 hover:bg-white/[0.04]"
      }`}
    >
      <span
        className={`mr-3 h-2.5 w-2.5 rounded-full ${
          selected
            ? "bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]"
            : "bg-white/15"
        }`}
      />

      {label}
    </button>
  );
}

function CheckButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-14 items-center rounded-2xl border px-5 text-left text-sm transition ${
        selected
          ? "border-cyan-400/40 bg-cyan-400/[0.08] text-cyan-200"
          : "border-white/[0.08] bg-white/[0.025] text-white/55 hover:border-white/15 hover:bg-white/[0.04]"
      }`}
    >
      <span
        className={`mr-3 flex h-5 w-5 items-center justify-center rounded-md border text-xs ${
          selected
            ? "border-cyan-300 bg-cyan-300 text-black"
            : "border-white/15 bg-transparent"
        }`}
      >
        {selected ? "✓" : ""}
      </span>

      {label}
    </button>
  );
}