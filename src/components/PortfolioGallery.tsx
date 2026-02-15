import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const images = [
  {
    src: "/image-2.jpg", // The team interacting in the market
    alt_fr: "Équipe AMTN en déploiement terrain",
    alt_en: "AMTN team on field deployment",
    title_fr: "Déploiement Opérationnel",
    title_en: "Operational Deployment",
    desc_fr: "Présence active sur le terrain pour coordonner les projets et assurer une visibilité maximale de vos opérations.",
    desc_en: "Active field presence to coordinate projects and ensure maximum visibility for your operations.",
  },
  {
    src: "/image-1.jpg", // The technician with the monitor
    alt_fr: "Expertise technique et maintenance",
    alt_en: "Technical expertise and maintenance",
    title_fr: "Suivi & Maintenance",
    title_en: "Monitoring & Maintenance",
    desc_fr: "Utilisation d'équipements de pointe pour le suivi technique et la maintenance préventive de vos infrastructures.",
    desc_en: "Use of advanced equipment for technical monitoring and preventive maintenance of your infrastructure.",
  },
  {
    src: "/image-3.jpg", // The woman at the office desk
    alt_fr: "Coordination et gestion de bureau",
    alt_en: "Coordination and office management",
    title_fr: "Gestion Administrative",
    title_en: "Administrative Management",
    desc_fr: "Un pilotage rigoureux en bureau pour garantir la conformité des dossiers et un suivi administratif d'excellence.",
    desc_en: "Rigorous office steering to guarantee file compliance and excellent administrative follow-up.",
  },
];

const PortfolioGallery = () => {
  const { t } = useLang();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#48D1B2] font-semibold text-sm uppercase tracking-widest">
            {t("Réalisations", "Portfolio")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1E293B] mt-3 mb-4">
            {t("Nos équipes en action", "Our Teams in Action")}
          </h2>
          <div className="w-16 h-1 bg-[#0B6099] mx-auto rounded-full mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t(
              "Découvrez AMTN SARL sur le terrain : un engagement constant envers le professionnalisme et l'excellence opérationnelle.",
              "Discover AMTN SARL on the field: a constant commitment to professionalism and operational excellence."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-slate-100"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={img.src}
                  alt={t(img.alt_fr, img.alt_en)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0B6099]/0 group-hover:bg-[#0B6099]/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-[#1E293B] text-xl mb-2">
                  {t(img.title_fr, img.title_en)}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
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