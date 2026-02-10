import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const VisionSection = () => {
  const { t } = useLang();

  return (
    <section id="vision" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6">
            <Target className="text-accent-foreground" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {t("Notre Vision", "Our Vision")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t(
              "Devenir le leader de l'assistance managériale au Cameroun en intégrant des solutions technologiques évolutives (Scalable) pour optimiser chaque étape de vos projets.",
              "To become the leader in managerial assistance in Cameroon by integrating scalable technological solutions to optimize every stage of your projects."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
