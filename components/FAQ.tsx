"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "./ui/Container";

const faqs = [
  {
    question: "A Vital & Marques atende empresas de fora do DF?",
    answer:
      "Sim. Atendemos empresas em Valparaíso de Goiás, Brasília e de todo o Brasil com processos digitais e acompanhamento consultivo.",
  },
  {
    question: "Como funciona a migração de contabilidade?",
    answer:
      "Nossa equipe cuida da análise documental, regularizações e integração de dados para garantir uma transição segura e sem riscos.",
  },
  {
    question: "Quais são os canais de atendimento?",
    answer:
      "Atendemos via WhatsApp, reuniões online e presenciais agendadas para garantir suporte próximo e estratégico.",
  },
  {
    question: "Vocês auxiliam com planejamento tributário?",
    answer:
      "Sim. Avaliamos o regime mais vantajoso e montamos estratégias legais para reduzir custos e aumentar a margem.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white" id="faq">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            Respostas rápidas para decisões seguras.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-slatePro-100 bg-white px-6 py-5 shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                >
                  <span className="text-base font-semibold text-slatePro-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition ${
                      isOpen ? "rotate-180 text-brand-600" : "text-slatePro-500"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-slatePro-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
