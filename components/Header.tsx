"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem", href: "#publico" },
  { label: "Como funciona", href: "#processo" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur border-b border-slatePro-100"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/assets/img/logo-vital-marques-horizontal.png"
            alt="Vital & Marques Assessoria Contábil"
            width={180}
            height={48}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slatePro-700 transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            variant="whatsapp"
            href="https://wa.me/5561999999999"
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-slatePro-200 px-4 py-2 text-sm font-semibold text-slatePro-700 transition hover:border-brand-300 hover:text-brand-700 lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-slatePro-950/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              className="absolute right-0 top-0 h-full w-80 bg-white p-6"
              initial={shouldReduceMotion ? false : { x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: 40, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slatePro-500">
                  Navegação
                </span>
                <button
                  type="button"
                  className="text-sm font-semibold text-slatePro-500"
                  onClick={() => setIsOpen(false)}
                >
                  Fechar
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-semibold text-slatePro-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <Button
                  variant="whatsapp"
                  href="https://wa.me/5561999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full justify-center"
                >
                  Agendar consultoria
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
