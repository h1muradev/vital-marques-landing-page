"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "./ui/Card";
import { Container } from "./ui/Container";

const audiences = [
  {
    title: "MEIs & Autônomos",
    description:
      "Regularização, DAS em dia e orientação prática para manter o CNPJ saudável.",
  },
  {
    title: "Comércio & Serviços",
    description:
      "Acompanhamento mensal, apurações fiscais e planejamento para escalar com segurança.",
  },
  {
    title: "Profissionais & Clínicas",
    description:
      "Estrutura societária e tributária ideal para consultórios, clínicas e prestadores premium.",
  },
];

export function Audience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="publico" className="py-20 bg-white">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Para quem é
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            Especialistas em negócios que precisam de organização e estratégia.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
            >
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-slatePro-900">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm text-slatePro-600">
                  {audience.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
