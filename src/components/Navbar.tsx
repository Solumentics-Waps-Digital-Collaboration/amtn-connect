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
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo and Brand Section */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              src="/logo.png"
              alt="AMTN SARL Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-[#0B6099]">
            AMTN <span className="text-[#48D1B2]">SARL</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-[#0B6099] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-slate-200" />

          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 text-xs font-bold border border-slate-200 rounded-md px-2.5 py-1.5 text-slate-700 hover:bg-slate-50 transition-all active:scale-95"
          >
            <span className={lang === "fr" ? "text-[#0B6099]" : "text-slate-400"}>FR</span>
            <span className="text-slate-300">|</span>
            <span className={lang === "en" ? "text-[#0B6099]" : "text-slate-400"}>EN</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg" 
          onClick={() => setOpen(!open)}
        >
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
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B6099] rounded-xl transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-slate-50">
                <button
                  onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
                  className="w-full mt-2 py-3 border border-slate-100 rounded-xl text-xs font-bold text-[#0B6099] bg-slate-50"
                >
                  {lang === "fr" ? "SWITCH TO ENGLISH" : "PASSER EN FRANÇAIS"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;