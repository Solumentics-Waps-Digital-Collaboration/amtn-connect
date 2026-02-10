import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, TrendingUp, Users } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLang();

  const highlights = [
    { icon: Shield, label: t("Conformité Garantie", "Guaranteed Compliance") },
    { icon: TrendingUp, label: t("Solutions Évolutives", "Scalable Solutions") },
    { icon: Users, label: t("Équipe Expérimentée", "Experienced Team") },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Infrastructure project" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-accent mb-6 backdrop-blur-sm border border-secondary/30"
            >
              ASSISTANCE MANAGÉRIALE DE TRAVAUX NOUVEAUX
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              {t(
                "Expertise Managériale pour vos Projets d'Infrastructure",
                "Managerial Expertise for Your Infrastructure Projects"
              )}
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              {t(
                "AMTN SARL : Votre partenaire stratégique à Yaoundé pour la gestion administrative, technique et fiscale de vos nouveaux chantiers. Nous transformons vos ambitions en réalisations concrètes.",
                "AMTN SARL: Your strategic partner in Yaoundé for the administrative, technical, and fiscal management of your new projects. We transform your ambitions into concrete achievements."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-elevated group"
              >
                {t("Consulter nos Services", "View Services")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                {t("Contactez-nous", "Contact Us")}
              </a>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
                >
                  <h.icon size={16} className="text-secondary" />
                  <span className="text-sm text-primary-foreground/90 font-medium">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 hidden lg:flex flex-col gap-5"
          >
            {[
              { value: "RC/YAO/2024/B/1980", label: "RCCM", sub: t("Registre du Commerce", "Trade Register") },
              { value: "M102417149671L", label: "NIU", sub: t("Numéro d'Identification Unique", "Unique ID Number") },
              { value: "CDI 5", label: t("Centre des Impôts", "Tax Center"), sub: "Biyem-Assi Lycée" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15"
              >
                <span className="text-xs uppercase tracking-widest text-secondary font-semibold">{stat.label}</span>
                <p className="text-primary-foreground font-mono text-sm mt-1 font-bold">{stat.value}</p>
                <p className="text-primary-foreground/60 text-xs mt-0.5">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
