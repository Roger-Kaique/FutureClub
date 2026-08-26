"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Nossa visão", href: "#visao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#processo" },
  { label: "Cases", href: "#cases" },
  { label: "Equipe", href: "#equipe" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.08] bg-[#08090d]/92 shadow-[0_10px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            : "border-b border-white/[0.04] bg-[#08090d]/55 backdrop-blur-xl"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* LOGO */}

          <a
            href="#"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Future Club - início"
          >
            <div
              className={`flex items-center justify-center rounded-full border transition-all duration-500 ${
                scrolled
                  ? "h-8 w-8 border-cyan-400/25 bg-cyan-400/[0.06]"
                  : "h-9 w-9 border-white/20 bg-white/[0.04]"
              } group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10`}
            >
              <span className="text-sm font-semibold">F</span>
            </div>

            <span
              className={`font-semibold tracking-[-0.03em] transition-all duration-500 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              future<span className="text-cyan-400">club</span>
            </span>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm text-white/50 transition duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA DESKTOP */}

          <a
            href="#diagnostico"
            className="group hidden items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-white lg:inline-flex"
          >
            <span>Vamos conversar</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className={`relative z-[60] flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
              menuOpen
                ? "border-cyan-400/30 bg-cyan-400/10"
                : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#050609]/80 backdrop-blur-xl" />

        <div className="relative flex min-h-screen items-center px-6">
          <nav className="w-full">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/60">
                Navegação
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/35">
                Estratégia, tecnologia e planejamento para construir
                crescimento.
              </p>
            </div>

            <div className="border-y border-white/[0.08]">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-5 last:border-b-0"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-white/20">
                      0{index + 1}
                    </span>

                    <span className="text-2xl font-medium text-white/75 transition group-hover:text-white">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                    →
                  </span>
                </a>
              ))}
            </div>

            <a
              href="#diagnostico"
              onClick={closeMenu}
              className="mt-8 flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] px-5 py-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.1]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/60">
                  Próximo passo
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Quero transformar meu negócio
                </p>
              </div>

              <span className="text-cyan-300">→</span>
            </a>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-cyan-300" />

              <span className="text-xs text-white/30">
                Future Club — crescimento com planejamento.
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}