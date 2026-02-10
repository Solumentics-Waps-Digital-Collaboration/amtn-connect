import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const TestimonialSlider = () => {
  const { t } = useLang();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <Quote className="mx-auto text-secondary mb-6" size={40} />
          <blockquote className="text-xl md:text-2xl font-heading italic text-foreground mb-6 leading-relaxed">
            {t(
              "Un partenaire fiable et rigoureux pour la gestion de nos formalités administratives.",
              "A reliable and rigorous partner for managing our administrative formalities."
            )}
          </blockquote>
          <cite className="text-muted-foreground font-medium not-italic">
            — {t("Client Institutionnel", "Institutional Client")}
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
