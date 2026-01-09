"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

const overlayCards = [
  {
    title: "Segurança fiscal",
    subtitle: "Processos e conformidade",
  },
  {
    title: "Gestão inteligente",
    subtitle: "Relatórios e orientação",
  },
  {
    title: "4,7 no Google",
    subtitle: "Baseado em avaliações",
  },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const transition = { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" };

  return (
    <section id="inicio" className="pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="space-y-6"
        >
          <Badge>Assessoria Premium</Badge>
          <h1 className="text-4xl font-semibold leading-tight text-slatePro-950 sm:text-5xl">
            Contabilidade estratégica para crescer com segurança e confiança.
          </h1>
          <p className="text-lg text-slatePro-600">
            A Vital & Marques Assessoria Contábil combina tecnologia, atendimento
            consultivo e total conformidade fiscal para proteger seu negócio e
            impulsionar resultados.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="whatsapp"
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noreferrer"
            >
              Agendar consultoria
            </Button>
            <Button variant="outline" href="#servicos">
              Ver serviços
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {overlayCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slatePro-100 bg-white/80 p-4 text-sm shadow-sm"
              >
                <span className="block text-base font-semibold text-slatePro-900">
                  {card.title}
                </span>
                <span className="block text-slatePro-500">{card.subtitle}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-slatePro-100 bg-white shadow-card">
            <Image
              src="/assets/img/hero.webp"
              alt="Equipe de contabilidade moderna"
              width={640}
              height={720}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="absolute -bottom-10 -left-6 hidden w-60 rounded-3xl border border-slatePro-100 bg-white p-4 shadow-lg lg:block">
            <p className="text-sm font-semibold text-slatePro-900">
              Atendimento consultivo e próximo
            </p>
            <p className="text-xs text-slatePro-500">
              Estratégias personalizadas para reduzir custos fiscais.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
