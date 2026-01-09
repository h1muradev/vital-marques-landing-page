"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="rounded-[32px] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-10 text-white shadow-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Pronto para uma contabilidade que protege e impulsiona seu negócio?
              </h2>
              <p className="mt-3 text-base text-brand-100">
                Agende sua consultoria estratégica e receba um diagnóstico completo.
              </p>
            </div>
            <Button
              variant="whatsapp"
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noreferrer"
              className="justify-center"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
