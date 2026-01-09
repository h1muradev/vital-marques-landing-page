"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FileText,
  Calculator,
  ShieldCheck,
  LineChart,
  Wallet,
  Users,
} from "lucide-react";
import { Card } from "./ui/Card";
import { Container } from "./ui/Container";

const services = [
  {
    title: "Abertura e regularização",
    description:
      "Planejamento tributário completo para abrir ou ajustar sua empresa com segurança.",
    icon: FileText,
  },
  {
    title: "Contabilidade consultiva",
    description:
      "Relatórios claros, orientação estratégica e indicadores para decisões rápidas.",
    icon: LineChart,
  },
  {
    title: "Folha e obrigações",
    description:
      "Gestão de folha, encargos e obrigações acessórias em dia e sem surpresas.",
    icon: Users,
  },
  {
    title: "Planejamento tributário",
    description:
      "Estruturas inteligentes para reduzir impostos dentro da legalidade.",
    icon: Calculator,
  },
  {
    title: "BPO financeiro",
    description:
      "Fluxo de caixa, conciliações e relatórios para uma gestão financeira madura.",
    icon: Wallet,
  },
  {
    title: "Compliance fiscal",
    description:
      "Processos auditáveis e monitoramento contínuo para total conformidade.",
    icon: ShieldCheck,
  },
];

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="servicos" className="py-20">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Serviços
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            Soluções completas para negócios que valorizam precisão.
          </h2>
          <p className="text-base text-slatePro-600">
            Cobertura integral de contabilidade, fiscal, folha e gestão para você
            focar no crescimento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.05 }}
            >
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slatePro-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slatePro-600">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
