import { motion } from "framer-motion";
import { MapPin, Calendar, Award, BookOpen, CheckCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import directorPortrait from "@/assets/director-portrait.jpg";

const AboutSection = () => {
  const { t } = useLang();

  const stats = [
    { icon: Calendar, label: t("Année de Création", "Year Founded"), value: "2024" },
    { icon: MapPin, label: t("Siège Social", "Headquarters"), value: "Yaoundé" },
    { icon: Award, label: t("Certifié RCCM", "RCCM Certified"), value: "✓" },
    { icon: BookOpen, label: t("Secteurs Couverts", "Sectors Covered"), value: "4+" },
  ];

  const values = [
    { title: t("Rigueur", "Rigor"), desc: t("Chaque projet est géré avec une discipline et une précision sans faille.", "Every project is managed with unwavering discipline and precision.") },
    { title: t("Innovation", "Innovation"), desc: t("Nous intégrons les dernières technologies pour moderniser vos processus.", "We integrate the latest technologies to modernize your processes.") },
    { title: t("Transparence", "Transparency"), desc: t("Communication claire et reporting détaillé à chaque étape.", "Clear communication and detailed reporting at every stage.") },
    { title: t("Excellence", "Excellence"), desc: t("Notre objectif est de dépasser systématiquement vos attentes.", "Our goal is to systematically exceed your expectations.") },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("À Propos de Nous", "About Us")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Qui sommes-nous ?", "Who are we?")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Main content - Director + Text */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={directorPortrait}
                alt={t("Direction AMTN SARL", "AMTN SARL Management")}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
                <p className="text-primary-foreground font-heading font-bold text-lg">
                  {t("Direction Générale", "General Management")}
                </p>
                <p className="text-primary-foreground/70 text-sm">AMTN SARL</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-accent opacity-20 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary opacity-10 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              {t(
                "Une entreprise camerounaise dédiée à l'excellence opérationnelle",
                "A Cameroonian company dedicated to operational excellence"
              )}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t(
                "Fondée en octobre 2024, AMTN SARL (Assistance Managériale de Travaux Nouveaux) est une entreprise de droit camerounais basée à Mendong/Simbock, Yaoundé. Nous sommes spécialisés dans l'accompagnement des entreprises pour la gestion administrative, technique et fiscale de leurs projets de travaux nouveaux.",
                "Founded in October 2024, AMTN SARL (Assistance Managériale de Travaux Nouveaux) is a Cameroonian company based in Mendong/Simbock, Yaoundé. We specialize in supporting businesses with the administrative, technical, and fiscal management of their new construction projects."
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t(
                "Enregistrée au Registre du Commerce et du Crédit Mobilier sous le numéro RC/YAO/2024/B/1980, et immatriculée au Centre Divisionnaire des Impôts (CDI 5) de Biyem-Assi Lycée, AMTN SARL opère en parfaite conformité avec la réglementation camerounaise. Notre Numéro d'Identification Unique (NIU) est le M102417149671L.",
                "Registered at the Trade and Personal Property Credit Register under number RC/YAO/2024/B/1980, and registered at the Divisional Tax Center (CDI 5) of Biyem-Assi Lycée, AMTN SARL operates in full compliance with Cameroonian regulations. Our Unique Identification Number (NIU) is M102417149671L."
              )}
            </p>

            {/* Legal info badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "RCCM", value: "RC/YAO/2024/B/1980" },
                { label: "NIU", value: "M102417149671L" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted border border-border">
                  <CheckCircle size={14} className="text-secondary shrink-0" />
                  <span className="text-xs font-semibold text-muted-foreground">{badge.label}:</span>
                  <span className="text-xs font-mono text-foreground">{badge.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card shadow-card border border-border/50 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="text-primary" size={22} />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">{s.value}</span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            {t("Nos Valeurs Fondamentales", "Our Core Values")}
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {t(
              "Ces principes guident chacune de nos actions et décisions.",
              "These principles guide each of our actions and decisions."
            )}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <span className="font-heading font-bold text-accent-foreground text-lg">{i + 1}</span>
              </div>
              <h4 className="font-heading font-bold text-foreground text-lg mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
