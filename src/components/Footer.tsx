import { useLang } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, MessageCircleHeart } from "lucide-react";

const Footer = () => {
  const { t } = useLang();

  const links = [
    { href: "#hero", label: t("Accueil", "Home") },
    { href: "#about", label: t("À Propos", "About") },
    { href: "#vision", label: t("Objectifs", "Goals") },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: t("Réalisations", "Portfolio") },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    t("Assistance Maîtrise d'Ouvrage", "Project Owner Assistance"),
    t("Conformité Fiscale", "Tax Compliance"),
    t("Transformation Digitale", "Digital Transformation"),
    t("Gestion de Chantiers", "Site Management"),
  ];

  return (
    <footer className="bg-foreground text-background/70 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-background text-xl mb-4">
              AMTN <span className="text-secondary">SARL</span>
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-background/60">
              {t(
                "Assistance Managériale de Travaux Nouveaux — Votre partenaire stratégique pour la gestion et la conformité de vos projets d'infrastructure au Cameroun.",
                "Assistance Managériale de Travaux Nouveaux — Your strategic partner for the management and compliance of your infrastructure projects in Cameroon."
              )}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full border border-background/20 text-background/50">RCCM: RC/YAO/2024/B/1980</span>
              <span className="px-3 py-1 rounded-full border border-background/20 text-background/50">NIU: M102417149671L</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-background text-sm uppercase tracking-wider mb-4">
              {t("Navigation", "Navigation")}
            </h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-background/60 hover:text-secondary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-background text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-sm text-background/60 hover:text-secondary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-background text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-secondary shrink-0" />
                <a href="tel:+237674194894" className="text-sm text-background/60 hover:text-secondary transition-colors">
                  +237 674 194 894
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-secondary shrink-0" />
                <a href="tel:+237651501972" className="text-sm text-background/60 hover:text-secondary transition-colors">
                  +237 651 501 972
                </a>
              </li>
              {/* Updated WhatsApp Link */}
              <li className="flex items-center gap-3">
                <MessageCircleHeart size={14} className="text-secondary shrink-0" />
                <a 
                  href="https://wa.me/237675456766" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-background/60 hover:text-secondary transition-colors"
                >
                  +237 675 456 766
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-secondary shrink-0" />
                <a href="mailto:assistancemtn.direction@assistancemtn.com" className="text-sm text-background/60 hover:text-secondary transition-colors">
                  assistancemtn.direction@assistancemtn.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-background/60">
                  Mendong/Entrée Simbock, Yaoundé, Cameroun
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>
            © 2026 AMTN SARL. {t(
              "Tous droits réservés. Enregistré sous le numéro RC/YAO/2024/B/1980.",
              "All rights reserved. Registered under number RC/YAO/2024/B/1980."
            )}
          </p>
          <p>
            {t("Centre des Impôts : CDI 5 — Biyem-Assi Lycée, Yaoundé", "Tax Center: CDI 5 — Biyem-Assi Lycée, Yaoundé")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
