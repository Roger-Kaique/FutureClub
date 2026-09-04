"use client";

import { useState } from "react";

const questions = [
  {
    number: "01",
    eyebrow: "Seu momento",
    title: "Onde seu negócio está hoje?",
    description:
      "Não precisamos de uma resposta perfeita. Queremos entender o cenário atual.",
    options: [
      "Estou começando",
      "Já tenho clientes",
      "Estou crescendo",
      "Estou travado",
    ],
  },
  {
    number: "02",
    eyebrow: "Seu desafio",
    title: "O que mais precisa mudar?",
    description:
      "Escolha o ponto que mais impacta o crescimento da sua empresa hoje.",
    options: [
      "Atrair mais clientes",
      "Melhorar o Instagram",
      "Posicionar melhor a marca",
      "Organizar a operação",
      "Entender os dados",
      "Automatizar processos",
    ],
  },
  {
    number: "03",
    eyebrow: "Seu objetivo",
    title: "Onde você quer chegar?",
    description:
      "Pense nos próximos meses e no que faria diferença de verdade para o negócio.",
    options: [
      "Mais vendas",
      "Mais reconhecimento",
      "Mais clientes",
      "Mais organização",
      "Mais eficiência",
      "Crescimento sustentável",
    ],
  },
];

export default function DiagnosisSection() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  function selectOption(option: string) {
    const nextAnswers = [...answers];
    nextAnswers[current] = option;
    setAnswers(nextAnswers);
  }

  function nextQuestion() {
    if (!answers[current]) {
      return;
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      return;
    }

    const formElement = document.getElementById("diagnostico");

    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function previousQuestion() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (
    <section
      id="diagnostico-preview"
      className="diagnosis-section"
    >
      <div className="diagnosis-glow" />

      <div className="diagnosis-container">
        <div className="diagnosis-intro">
          <div>
            <p className="section-eyebrow">
              11 — Diagnóstico
            </p>

            <h2>
              Antes de propor qualquer coisa,
              <span> queremos entender.</span>
            </h2>
          </div>

          <p className="diagnosis-intro-copy">
            Cada negócio possui um momento diferente. Por isso começamos
            entendendo o cenário, os desafios e os objetivos antes de pensar
            em qualquer estratégia.
          </p>
        </div>

        <div className="diagnosis-layout">
          <div className="diagnosis-sidebar">
            <p className="diagnosis-sidebar-label">
              Diagnóstico Trama Branding
            </p>

            <div className="diagnosis-sidebar-line" />

            <div className="diagnosis-step-list">
              {questions.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => {
                    if (index <= current) {
                      setCurrent(index);
                    }
                  }}
                  className={
                    index === current
                      ? "diagnosis-step active"
                      : index < current
                        ? "diagnosis-step completed"
                        : "diagnosis-step"
                  }
                >
                  <span>{item.number}</span>

                  <strong>{item.eyebrow}</strong>
                </button>
              ))}
            </div>

            <div className="diagnosis-side-note">
              <span className="diagnosis-side-dot" />

              <p>
                Estratégia começa com contexto.
              </p>
            </div>
          </div>

          <div className="diagnosis-card">
            <div className="diagnosis-card-top">
              <div>
                <span className="diagnosis-number">
                  {question.number}
                </span>

                <span className="diagnosis-eyebrow">
                  {question.eyebrow}
                </span>
              </div>

              <span className="diagnosis-progress-number">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="diagnosis-progress">
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className="diagnosis-question">
              <h3>{question.title}</h3>

              <p>{question.description}</p>
            </div>

            <div className="diagnosis-options">
              {question.options.map((option) => {
                const selected = answers[current] === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectOption(option)}
                    className={
                      selected
                        ? "diagnosis-option selected"
                        : "diagnosis-option"
                    }
                  >
                    <span className="diagnosis-option-indicator">
                      {selected ? "✓" : ""}
                    </span>

                    <span>{option}</span>

                    <span className="diagnosis-option-arrow">
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="diagnosis-actions">
              <button
                type="button"
                onClick={previousQuestion}
                disabled={current === 0}
                className="diagnosis-back"
              >
                ← Voltar
              </button>

              <button
                type="button"
                onClick={nextQuestion}
                className="diagnosis-next"
              >
                {current === questions.length - 1
                  ? "Continuar diagnóstico"
                  : "Próxima etapa"}

                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="diagnosis-footer">
          <p>
            O diagnóstico é apenas o primeiro passo. Depois dele,
            aprofundamos as informações no formulário completo.
          </p>

          <span>
            Trama Branding
          </span>
        </div>
      </div>
    </section>
  );
}