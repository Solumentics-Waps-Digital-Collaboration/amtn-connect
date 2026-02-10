import { motion } from "framer-motion";
import { Building2, FileCheck, Cpu, HardHat } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Building2,
    title_fr: "Assistance Maîtrise d'Ouvrage (AMO)",
    title_en: "Project Owner Assistance",
    desc_fr: "Pilotage complet de vos projets de construction et de rénovation.",
    desc_en: "Complete management of your construction and renovation projects.",
  },
  {
    icon: FileCheck,
    title_fr: "Conformité Fiscale & Administrative",
    title_en: "Tax & Administrative Compliance",
    desc_fr: "Gestion rigoureuse avec le CDI 5 pour vos attestations de conformité fiscale.",
    desc_en: "Rigorous management with CDI 5 for your tax compliance certificates.",
  },
  {
    icon: Cpu,
    title_fr: "Transformation Digitale",
    title_en: "Digital Transformation",
    desc_fr: "Optimisation de vos flux de travail grâce aux outils numériques modernes.",
    desc_en: "Workflow optimization using modern digital tools.",
  },
  {
    icon: HardHat,
    title_fr: "Gestion de Chantiers",
    title_en: "Site Management",
    desc_fr: "Coordination technique et administrative sur site pour garantir les délais.",
    desc_en: "On-site technical and administrative coordination to meet deadlines.",
  },
];

const ServicesGrid = () => {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Nos Services", "Our Services")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            {t("Ce que nous offrons", "What We Offer")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {t(s.title_fr, s.title_en)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(s.desc_fr, s.desc_en)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
