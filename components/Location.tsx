"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Location() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="localizacao" className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Localização
          </p>
          <h2 className="text-3xl font-semibold text-slatePro-950 sm:text-4xl">
            Atendemos presencialmente e online com agilidade.
          </h2>
          <p className="text-base text-slatePro-600">
            Estamos em Valparaíso de Goiás, com cobertura estratégica para Brasília
            e atendimento 100% digital para todo o Brasil.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-slatePro-600">
              <MapPin className="h-5 w-5 text-brand-600" />
              <span>Valparaíso de Goiás • Brasília • Online</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slatePro-600">
              <Phone className="h-5 w-5 text-brand-600" />
              <span>(61) 3333-0000</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slatePro-600">
              <MessageCircle className="h-5 w-5 text-brand-600" />
              <span>Atendimento de segunda a sexta, 8h às 18h</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="whatsapp"
              href="https://wa.me/5561999999999"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </Button>
            <Button variant="outline" href="#faq">
              Quero diagnóstico
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
          className="overflow-hidden rounded-3xl border border-slatePro-100 bg-white shadow-sm"
        >
          <iframe
            title="Mapa Vital & Marques"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61483.64146864063!2d-47.9913273758082!3d-16.063376967445657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599669c82bb6b1%3A0x8ab2e4efb5192ad2!2sValpara%C3%ADso%20de%20Goi%C3%A1s%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            className="min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </section>
  );
}
