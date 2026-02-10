import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-8 bg-foreground text-background/70">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading font-bold text-background text-lg mb-2">
          AMTN <span className="text-secondary">SARL</span>
        </p>
        <p className="text-sm">
          © 2026 AMTN SARL. {t(
            "Enregistré sous le numéro RC/YAO/2024/B/1980.",
            "Registered under number RC/YAO/2024/B/1980."
          )}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
