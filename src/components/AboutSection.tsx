import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLang();

  const stats = [
    { icon: Calendar, label: t("Établi", "Established"), value: "2024" },
    { icon: MapPin, label: t("Localisation", "Location"), value: "Yaoundé" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("À Propos", "About Us")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
            {t("Qui sommes-nous ?", "Who are we?")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t(
              "Fondée en octobre 2024, AMTN SARL est une entreprise camerounaise dédiée à l'excellence opérationnelle. Basée à Mendong/Simbock, nous accompagnons les entreprises dans leur transformation digitale et la mise en conformité de leurs projets de travaux nouveaux.",
              "Founded in October 2024, AMTN SARL is a Cameroonian company dedicated to operational excellence. Based in Mendong/Simbock, we support businesses in their digital transformation and the compliance management of their new construction projects."
            )}
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 md:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card shadow-card"
            >
              <s.icon className="text-secondary" size={28} />
              <span className="text-3xl font-heading font-bold text-foreground">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
