import { motion } from "framer-motion";
import { ClipboardList, Search, Settings, Rocket } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLang();

  const steps = [
    {
      icon: Search,
      num: "01",
      title: t("Diagnostic & Analyse", "Diagnostic & Analysis"),
      desc: t(
        "Nous analysons en profondeur votre situation actuelle, identifions les besoins spécifiques de votre projet et évaluons les risques et opportunités.",
        "We deeply analyze your current situation, identify your project's specific needs, and evaluate risks and opportunities."
      ),
    },
    {
      icon: ClipboardList,
      num: "02",
      title: t("Planification Stratégique", "Strategic Planning"),
      desc: t(
        "Élaboration d'un plan d'action détaillé avec des objectifs SMART, un calendrier précis et une allocation optimale des ressources.",
        "Development of a detailed action plan with SMART objectives, precise timeline, and optimal resource allocation."
      ),
    },
    {
      icon: Settings,
      num: "03",
      title: t("Mise en Œuvre & Suivi", "Implementation & Monitoring"),
      desc: t(
        "Exécution rigoureuse du plan avec un suivi en temps réel, des rapports d'avancement réguliers et des ajustements proactifs.",
        "Rigorous plan execution with real-time monitoring, regular progress reports, and proactive adjustments."
      ),
    },
    {
      icon: Rocket,
      num: "04",
      title: t("Livraison & Accompagnement", "Delivery & Support"),
      desc: t(
        "Livraison conforme aux spécifications avec un transfert de compétences complet et un accompagnement post-projet personnalisé.",
        "Delivery in line with specifications, complete knowledge transfer, and personalized post-project support."
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Notre Méthodologie", "Our Methodology")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Comment nous travaillons", "How We Work")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Une approche structurée en 4 étapes pour garantir la réussite de chaque projet que nous accompagnons.",
              "A structured 4-step approach to guarantee the success of every project we support."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line (hidden on last and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-40px] h-px bg-border" />
              )}

              <div className="flex flex-col items-center text-center p-6">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
