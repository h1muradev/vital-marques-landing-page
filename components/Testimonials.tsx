"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "./ui/Card";
import { Container } from "./ui/Container";

const testimonials = [
  {
    name: "Marina R.",
    company: "Clínica Integratta",
    text: "Equipe extremamente organizada. Migramos toda a contabilidade e hoje temos relatórios claros e suporte rápido.",
  },
  {
    name: "Lucas P.",
    company: "LP Serviços",
    text: "A consultoria tributária reduziu nossos custos e trouxe segurança para o crescimento.",
  },
  {
    name: "Fernanda G.",
    company: "F&G Comércio",
    text: "Pontualidade, transparência e atendimento premium. Recomendamos sem dúvidas.",
  },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="avaliacoes" className="py-20">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Avaliações
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            4,7 no Google e clientes que confiam na nossa entrega.
          </h2>
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-3xl border border-slatePro-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 text-brand-600"
                fill="currentColor"
              />
            ))}
          </div>
          <div>
            <p className="text-lg font-semibold text-slatePro-900">4,7 de 5</p>
            <p className="text-sm text-slatePro-500">
              Baseado em avaliações reais.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
            >
              <Card className="h-full">
                <p className="text-sm text-slatePro-600">“{testimonial.text}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slatePro-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slatePro-500">
                    {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
