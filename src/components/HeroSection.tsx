import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Infrastructure project" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-secondary/20 text-accent mb-6 backdrop-blur-sm border border-secondary/30"
          >
            ASSISTANCE MANAGÉRIALE DE TRAVAUX NOUVEAUX
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {t(
              "Expertise Managériale pour vos Projets d'Infrastructure",
              "Managerial Expertise for Your Infrastructure Projects"
            )}
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            {t(
              "AMTN SARL : Votre partenaire stratégique à Yaoundé pour la gestion administrative, technique et fiscale de vos nouveaux chantiers.",
              "AMTN SARL: Your strategic partner in Yaoundé for the administrative, technical, and fiscal management of your new projects."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-110 transition-all shadow-elevated"
            >
              {t("Consulter nos Services", "View Services")}
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              <MessageCircle size={18} />
              {t("Contactez-nous", "Contact Us")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
