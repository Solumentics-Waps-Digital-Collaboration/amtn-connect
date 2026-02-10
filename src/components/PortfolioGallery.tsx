import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import teamField from "@/assets/team-field.jpg";
import officeStrategy from "@/assets/office-strategy.jpg";
import technicalEquipment from "@/assets/technical-equipment.jpg";

const images = [
  { src: teamField, alt_fr: "Opération terrain", alt_en: "Field operation" },
  { src: officeStrategy, alt_fr: "Session stratégique", alt_en: "Strategy session" },
  { src: technicalEquipment, alt_fr: "Équipement technique", alt_en: "Technical equipment" },
];

const PortfolioGallery = () => {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Réalisations", "Portfolio")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Nos équipes en action", "Our Teams in Action")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t(
              "Nos équipes en action sur le terrain, illustrant notre engagement envers la sécurité et le professionnalisme.",
              "Our teams in action on the field, illustrating our commitment to safety and professionalism."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-card group"
            >
              <img
                src={img.src}
                alt={t(img.alt_fr, img.alt_en)}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
