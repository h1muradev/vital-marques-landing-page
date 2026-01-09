"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Gauge, Handshake, Sparkles } from "lucide-react";
import { Container } from "./ui/Container";

const differentials = [
  {
    title: "Atendimento premium",
    description:
      "Equipe dedicada com respostas rápidas, proximidade e visão de negócio.",
    icon: Handshake,
  },
  {
    title: "Tecnologia aplicada",
    description:
      "Processos digitais, relatórios claros e comunicação simplificada.",
    icon: Sparkles,
  },
  {
    title: "Compliance total",
    description:
      "Rituais de controle para evitar riscos fiscais e manter tudo em dia.",
    icon: ShieldCheck,
  },
  {
    title: "Performance tributária",
    description:
      "Estruturas eficientes para reduzir custos e manter margem saudável.",
    icon: Gauge,
  },
];

export function Differentials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white" id="diferenciais">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Diferenciais
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            Segurança, clareza e estratégia em cada entrega.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="rounded-3xl border border-slatePro-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slatePro-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slatePro-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
