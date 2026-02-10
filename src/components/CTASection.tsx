import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const { t } = useLang();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            {t(
              "Prêt à transformer votre projet ?",
              "Ready to transform your project?"
            )}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            {t(
              "Contactez-nous dès aujourd'hui pour une consultation gratuite. Notre équipe d'experts est prête à étudier votre projet et vous proposer des solutions sur mesure adaptées à vos besoins spécifiques.",
              "Contact us today for a free consultation. Our team of experts is ready to study your project and offer you tailor-made solutions adapted to your specific needs."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-110 transition-all shadow-elevated group text-lg"
            >
              {t("Demander un Devis", "Request a Quote")}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/237682529834?text=${encodeURIComponent("Bonjour AMTN SARL, j'aimerais en savoir plus sur vos services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-bold hover:bg-primary-foreground/10 transition-all text-lg backdrop-blur-sm"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
