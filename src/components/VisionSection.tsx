import { motion } from "framer-motion";
import { Target, Lightbulb, Globe, Zap } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const VisionSection = () => {
  const { t } = useLang();

  const pillars = [
    {
      icon: Target,
      title: t("Mission", "Mission"),
      desc: t(
        "Fournir un accompagnement managérial de premier ordre aux entreprises camerounaises et internationales dans la réalisation de leurs projets de travaux nouveaux, en garantissant conformité, efficacité et qualité.",
        "Provide first-class managerial support to Cameroonian and international companies in completing their new construction projects, ensuring compliance, efficiency, and quality."
      ),
    },
    {
      icon: Lightbulb,
      title: t("Vision", "Vision"),
      desc: t(
        "Devenir le leader de l'assistance managériale au Cameroun en intégrant des solutions technologiques évolutives (Scalable) pour optimiser chaque étape de vos projets, de la conception à la livraison.",
        "To become the leader in managerial assistance in Cameroon by integrating scalable technological solutions to optimize every stage of your projects, from design to delivery."
      ),
    },
    {
      icon: Globe,
      title: t("Ambition", "Ambition"),
      desc: t(
        "Étendre notre expertise au-delà des frontières camerounaises et devenir une référence sous-régionale en Afrique Centrale pour l'assistance managériale et la transformation digitale des entreprises du BTP.",
        "Extend our expertise beyond Cameroon's borders and become a sub-regional reference in Central Africa for managerial assistance and digital transformation of construction companies."
      ),
    },
    {
      icon: Zap,
      title: t("Engagement", "Commitment"),
      desc: t(
        "Nous nous engageons à livrer des résultats mesurables, à respecter les délais et à maintenir les plus hauts standards de professionnalisme dans chaque intervention.",
        "We are committed to delivering measurable results, meeting deadlines, and maintaining the highest standards of professionalism in every intervention."
      ),
    },
  ];

  return (
    <section id="vision" className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 -right-32 w-64 h-64 rounded-full bg-secondary/5" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Notre Cap", "Our Direction")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Mission, Vision & Engagement", "Mission, Vision & Commitment")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Nous croyons en une approche holistique de la gestion de projets, où la technologie rencontre l'expertise humaine pour créer de la valeur durable.",
              "We believe in a holistic approach to project management, where technology meets human expertise to create lasting value."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <p.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
