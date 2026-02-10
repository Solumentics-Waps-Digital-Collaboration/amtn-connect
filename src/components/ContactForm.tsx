import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLang } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Required").max(1000),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    toast({ title: t("Message envoyé !", "Message sent!"), description: t("Nous vous répondrons sous peu.", "We'll get back to you shortly.") });
    reset();
  };

  const info = [
    { icon: Phone, label: "682 529 834" },
    { icon: Mail, label: "contact@amtn-sarl.com" },
    { icon: MapPin, label: "Mendong/Entrée Simbock, Yaoundé" },
    { icon: FileText, label: "NIU: M102417149671L" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
            {t("Parlons de votre projet", "Let's Talk About Your Project")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {info.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <span className="text-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <input
                {...register("name")}
                placeholder={t("Votre nom", "Your name")}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              {t("Envoyer", "Send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
