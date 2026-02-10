import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useState } from "react";

const TestimonialSlider = () => {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      quote_fr: "Un partenaire fiable et rigoureux pour la gestion de nos formalités administratives. AMTN SARL a su transformer notre approche de la conformité fiscale avec un professionnalisme exemplaire.",
      quote_en: "A reliable and rigorous partner for managing our administrative formalities. AMTN SARL has transformed our approach to tax compliance with exemplary professionalism.",
      author: t("Client Institutionnel", "Institutional Client"),
      role: t("Directeur Administratif", "Administrative Director"),
      rating: 5,
    },
    {
      quote_fr: "Grâce à l'accompagnement d'AMTN SARL, notre projet de construction a été livré dans les délais et dans le budget. Leur expertise en gestion de chantier est remarquable.",
      quote_en: "Thanks to AMTN SARL's support, our construction project was delivered on time and on budget. Their site management expertise is remarkable.",
      author: t("Entrepreneur BTP", "Construction Contractor"),
      role: t("Gérant de Société", "Company Manager"),
      rating: 5,
    },
    {
      quote_fr: "La transformation digitale opérée par AMTN a révolutionné nos processus internes. Nous avons gagné en efficacité et en transparence. Je recommande vivement.",
      quote_en: "The digital transformation carried out by AMTN has revolutionized our internal processes. We have gained in efficiency and transparency. Highly recommended.",
      author: t("PME Yaoundé", "SME Yaoundé"),
      role: t("Responsable des Opérations", "Operations Manager"),
      rating: 5,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
            {t("Témoignages", "Testimonials")}
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Ce que disent nos clients", "What Our Clients Say")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-10 md:p-14 rounded-3xl bg-card shadow-elevated border border-border/50">
            <Quote className="text-secondary/20 absolute top-6 left-6" size={60} />

            {/* Stars */}
            <div className="flex gap-1 mb-6 relative z-10">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} size={18} className="text-secondary fill-secondary" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl font-heading text-foreground mb-8 leading-relaxed relative z-10 italic">
              "{testimonials[active].quote_fr}"
            </blockquote>

            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="font-bold text-foreground">{testimonials[active].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
