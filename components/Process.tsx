"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./ui/Container";

const steps = [
  {
    title: "Diagnóstico inicial",
    description:
      "Mapeamos suas rotinas fiscais, obrigações e oportunidades de melhoria.",
  },
  {
    title: "Plano de ação",
    description:
      "Estruturamos processos, calendário e indicadores para total controle.",
  },
  {
    title: "Gestão contínua",
    description:
      "Acompanhamento mensal com relatórios e consultoria estratégica.",
  },
];

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="processo" className="py-20">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Como funciona
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            Um método claro e eficiente para gerar previsibilidade.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="rounded-3xl border border-slatePro-100 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-brand-600">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slatePro-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slatePro-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
