import Image from "next/image";
import { Container } from "./ui/Container";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Para quem", href: "#publico" },
  { label: "Como funciona", href: "#processo" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="bg-slatePro-950 py-16 text-slatePro-100">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Image
              src="/assets/img/logo-vital-marques-horizontal-white.png"
              alt="Vital & Marques Assessoria Contábil"
              width={200}
              height={48}
            />
            <p className="text-sm text-slatePro-300">
              Contabilidade premium para negócios que exigem confiança, estratégia
              e acompanhamento constante.
            </p>
            <div className="space-y-1 text-sm text-slatePro-400">
              <p>Valparaíso de Goiás • Brasília • Online</p>
              <p>(61) 3333-0000</p>
              <p>contato@vitalemarques.com.br</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Navegação</p>
              <div className="flex flex-col gap-2 text-sm text-slatePro-300">
                {footerLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Atendimento</p>
              <div className="flex flex-col gap-2 text-sm text-slatePro-300">
                <span>Seg a Sex • 8h às 18h</span>
                <span>Consultoria estratégica</span>
                <span>Resposta rápida no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slatePro-400">
          © {new Date().getFullYear()} Vital & Marques Assessoria Contábil. Todos
          os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
