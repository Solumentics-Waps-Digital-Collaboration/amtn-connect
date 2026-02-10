import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText, Clock, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Required").max(200),
  message: z.string().trim().min(1, "Required").max(2000),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (_data: FormData) => {
    toast({
      title: t("Message envoyé avec succès !", "Message sent successfully!"),
      description: t("Notre équipe vous répondra dans les 24 heures.", "Our team will respond within 24 hours."),
    });
    reset();
  };

  const contactInfo = [
    { icon: Phone, label: t("Téléphone", "Phone"), value: "+237 682 529 834", href: "tel:+237682529834" },
    { icon: Mail, label: "Email", value: "contact@amtn-sarl.com", href: "mailto:contact@amtn-sarl.com" },
    { icon: MapPin, label: t("Adresse", "Address"), value: "Mendong/Entrée Simbock, Yaoundé, Cameroun" },
    { icon: Clock, label: t("Horaires", "Hours"), value: t("Lun – Ven : 08h00 – 17h00", "Mon – Fri: 8:00 AM – 5:00 PM") },
    { icon: Globe, label: t("Zone d'intervention", "Area"), value: t("Cameroun & Afrique Centrale", "Cameroon & Central Africa") },
    { icon: FileText, label: "NIU", value: "M102417149671L" },
  ];

  const inputClass = "w-full px-4 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-4">
            {t("Parlons de votre projet", "Let's Talk About Your Project")}
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              "Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réussite de vos projets.",
              "We are at your disposal to answer all your questions and support you in the success of your projects."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-2"
          >
            <h3 className="font-heading font-bold text-foreground text-xl mb-6">
              {t("Nos Coordonnées", "Our Contact Details")}
            </h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="block text-foreground hover:text-primary transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                title="AMTN SARL Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.48%2C3.84%2C11.54%2C3.88&layer=mapnik&marker=3.86%2C11.51"
                width="100%"
                height="200"
                className="border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-2xl bg-card shadow-elevated border border-border/50">
              <h3 className="font-heading font-bold text-foreground text-xl mb-2">
                {t("Envoyez-nous un message", "Send Us a Message")}
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                {t("Tous les champs marqués (*) sont obligatoires.", "All fields marked (*) are required.")}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("Nom complet", "Full name")} *
                    </label>
                    <input {...register("name")} placeholder={t("Ex: Jean Dupont", "Ex: John Doe")} className={inputClass} />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <input {...register("email")} type="email" placeholder="email@exemple.com" className={inputClass} />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("Téléphone", "Phone")}
                    </label>
                    <input {...register("phone")} placeholder="+237 6XX XXX XXX" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {t("Objet", "Subject")} *
                    </label>
                    <input {...register("subject")} placeholder={t("Ex: Demande de devis AMO", "Ex: AMO quote request")} className={inputClass} />
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder={t("Décrivez votre projet ou votre demande...", "Describe your project or request...")}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-card"
                >
                  {t("Envoyer le Message", "Send Message")}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
