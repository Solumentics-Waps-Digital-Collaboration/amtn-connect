import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: t("Accueil", "Home") },
    { href: "#about", label: t("À Propos", "About") },
    { href: "#vision", label: t("Objectifs", "Goals") },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: t("Réalisations", "Portfolio") },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#hero" className="font-heading text-xl font-bold text-primary">
          AMTN <span className="text-secondary">SARL</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-bold border border-border rounded-full px-3 py-1 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
                className="text-xs font-bold border border-border rounded-full px-3 py-1 w-fit text-primary"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
