import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import teamField from "@/assets/team-field.jpg";
import officeStrategy from "@/assets/office-strategy.jpg";
import technicalEquipment from "@/assets/technical-equipment.jpg";

const images = [
  {
    src: teamField,
    alt_fr: "Opération terrain",
    alt_en: "Field operation",
    title_fr: "Supervision de Chantier",
    title_en: "Site Supervision",
    desc_fr: "Nos ingénieurs assurent une présence terrain constante pour garantir la qualité et la sécurité des opérations.",
    desc_en: "Our engineers ensure a constant on-site presence to guarantee the quality and safety of operations.",
  },
  {
    src: officeStrategy,
    alt_fr: "Session stratégique",
    alt_en: "Strategy session",
    title_fr: "Planification Stratégique",
    title_en: "Strategic Planning",
    desc_fr: "Des sessions de travail collaboratives pour définir les meilleures stratégies de gestion de projet.",
    desc_en: "Collaborative work sessions to define the best project management strategies.",
  },
  {
    src: technicalEquipment,
    alt_fr: "Équipement technique",
    alt_en: "Technical equipment",
    title_fr: "Expertise Technique",
    title_en: "Technical Expertise",
    desc_fr: "Utilisation d'équipements de pointe pour des relevés précis et un contrôle qualité rigoureux.",
    desc_en: "Use of state-of-the-art equipment for precise measurements and rigorous quality control.",
  },
];

const PortfolioGallery = () => {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Réalisations", "Portfolio")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Nos équipes en action", "Our Teams in Action")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Découvrez nos équipes sur le terrain, illustrant notre engagement envers la sécurité, le professionnalisme et l'excellence opérationnelle au quotidien.",
              "Discover our teams on the field, illustrating our commitment to safety, professionalism, and operational excellence every day."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-card border border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={t(img.alt_fr, img.alt_en)}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">
                  {t(img.title_fr, img.title_en)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(img.desc_fr, img.desc_en)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
