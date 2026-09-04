"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setIsHidden(false);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 top-0 z-[100] w-full bg-black transition-transform duration-500 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* LOGO */}
        <a
          href="#sobre"
          className="flex items-center gap-3"
          aria-label="Trama Branding - Início"
        >
          <Image
            src="/images/logo.png"
            alt="Trama Branding"
            width={42}
            height={42}
            className="h-[42px] w-[42px] object-contain"
            priority
          />

          <span
            className="text-[24px] tracking-[0.02em] text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Trama Branding
          </span>
        </a>

        {/* LINKS */}
        <div className="hidden items-center gap-7 md:flex">
          <a
          href="#sobre"
            className="text-[12px] uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            Início
          </a>

          <a
            href="#galeria"
            className="text-[12px] uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            Visual
          </a>

          <a
            href="#diagnostico"
            className="text-[12px] uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            Diagnóstico
          </a>

          <a
            href="#operacoes"
            className="text-[12px] uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
          >
            Operação
          </a>
        </div>

        {/* CTA DESKTOP */}
        <a
          href="#diagnostico"
          className="hidden border border-white/30 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:block"
        >
          Fale conosco
        </a>

        {/* CTA MOBILE */}
        <a
          href="#diagnostico"
          className="border border-white/30 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:hidden"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}