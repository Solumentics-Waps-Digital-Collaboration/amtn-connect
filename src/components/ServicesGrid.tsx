import { motion } from "framer-motion";
import { Building2, FileCheck, Cpu, HardHat, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const services = [
  {
    icon: Building2,
    title_fr: "Assistance Maîtrise d'Ouvrage (AMO)",
    title_en: "Project Owner Assistance",
    desc_fr: "Pilotage complet de vos projets de construction et de rénovation, de la phase de conception jusqu'à la réception des travaux.",
    desc_en: "Complete management of your construction and renovation projects, from the design phase to final inspection.",
    features_fr: [
      "Étude de faisabilité et planification",
      "Supervision de l'exécution des travaux",
      "Contrôle qualité et conformité",
      "Gestion des sous-traitants",
      "Reporting et suivi budgétaire",
    ],
    features_en: [
      "Feasibility study and planning",
      "Work execution supervision",
      "Quality and compliance control",
      "Subcontractor management",
      "Reporting and budget tracking",
    ],
  },
  {
    icon: FileCheck,
    title_fr: "Conformité Fiscale & Administrative",
    title_en: "Tax & Administrative Compliance",
    desc_fr: "Gestion rigoureuse de vos obligations fiscales et administratives pour garantir la conformité de votre entreprise.",
    desc_en: "Rigorous management of your tax and administrative obligations to ensure your company's compliance.",
    features_fr: [
      "Obtention d'attestations de conformité fiscale",
      "Gestion des déclarations au CDI 5",
      "Accompagnement RCCM et formalités légales",
      "Veille réglementaire permanente",
      "Assistance aux contrôles fiscaux",
    ],
    features_en: [
      "Tax compliance certificate acquisition",
      "CDI 5 declaration management",
      "RCCM and legal formalities support",
      "Ongoing regulatory monitoring",
      "Tax audit assistance",
    ],
  },
  {
    icon: Cpu,
    title_fr: "Transformation Digitale",
    title_en: "Digital Transformation",
    desc_fr: "Optimisation de vos flux de travail et modernisation de votre infrastructure grâce aux outils numériques les plus performants.",
    desc_en: "Workflow optimization and infrastructure modernization using the most powerful digital tools.",
    features_fr: [
      "Audit digital de votre entreprise",
      "Mise en place d'outils collaboratifs",
      "Digitalisation des processus métier",
      "Formation des équipes aux outils numériques",
      "Intégration de solutions cloud évolutives",
    ],
    features_en: [
      "Digital audit of your company",
      "Collaborative tools implementation",
      "Business process digitalization",
      "Team training on digital tools",
      "Scalable cloud solutions integration",
    ],
  },
  {
    icon: HardHat,
    title_fr: "Gestion de Chantiers",
    title_en: "Site Management",
    desc_fr: "Coordination technique et administrative sur site pour garantir le respect des délais, du budget et des normes de sécurité.",
    desc_en: "On-site technical and administrative coordination to ensure deadlines, budget, and safety standards are met.",
    features_fr: [
      "Planification et ordonnancement des tâches",
      "Coordination des corps de métier",
      "Gestion de la sécurité sur chantier",
      "Suivi de l'avancement en temps réel",
      "Réception et contrôle final des travaux",
    ],
    features_en: [
      "Task planning and scheduling",
      "Trade coordination",
      "On-site safety management",
      "Real-time progress tracking",
      "Final inspection and handover",
    ],
  },
];

const ServicesGrid = () => {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Nos Services", "Our Services")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Des solutions complètes pour vos projets", "Complete solutions for your projects")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Nous proposons une gamme complète de services d'assistance managériale pour accompagner chaque étape de vos projets, de la conception à la livraison.",
              "We offer a complete range of managerial assistance services to support every stage of your projects, from design to delivery."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <s.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {t(s.title_fr, s.title_en)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(s.desc_fr, s.desc_en)}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-5" />

              {/* Features list */}
              <ul className="space-y-3">
                {(t(s.features_fr.join("|||"), s.features_en.join("|||"))).split("|||").map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <ChevronRight size={14} className="text-secondary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
