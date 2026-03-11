import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SUPPORTED_LANGS } from "../i18n";
import SectionHeading from "../components/ui/SectionHeading";
import DishCard from "../components/ui/DishCard";
import { menuItems, categories } from "../data/menuData";
import { generateMenuSchema } from "../utils/menuSchema";
import ikatPattern from "../assets/patterns/ikat-pattern.svg";

const SITE_URL = "https://caravan-restaurant.vercel.app";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useTranslation();
  const { lang } = useParams();

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const menuSchema = useMemo(() => generateMenuSchema(t), [t]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{t("meta.menuTitle")}</title>
        <meta name="description" content={t("meta.menuDescription")} />
        <link rel="canonical" href={`${SITE_URL}/${lang}/menu`} />
        {SUPPORTED_LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            hrefLang={code}
            href={`${SITE_URL}/${code}/menu`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_URL}/en/menu`}
        />
        <script type="application/ld+json">{JSON.stringify(menuSchema)}</script>
      </Helmet>

      {/* Hero banner */}
      <section className="relative h-[20vh] sm:h-[45vh] min-h-[140px] sm:min-h-[340px] flex items-end sm:items-center justify-center pb-6 sm:pb-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/menu/polo-pilaf.webp')" }}
        />
        <div className="absolute inset-0 bg-caravan-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-caravan-dark/30 via-transparent to-caravan-dark" />
        <div
          className="absolute inset-0 ikat-shimmer"
          style={{
            backgroundImage: `url(${ikatPattern})`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-28 start-8 sm:start-12 w-12 h-12 border-s border-t border-caravan-gold/15 z-10" />
        <div className="absolute bottom-12 end-8 sm:end-12 w-12 h-12 border-e border-b border-caravan-gold/15 z-10" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="h-px w-10 bg-caravan-gold/40 mx-auto mb-6 hidden sm:block"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-xs tracking-[0.4em] text-caravan-gold/60 uppercase mb-4 hidden sm:block"
          >
            {t("menu.heroOverline")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl sm:text-6xl lg:text-7xl font-light text-caravan-cream text-glow-gold tracking-wide"
          >
            {t("menu.heroTitle")}
          </motion.h1>
        </div>
      </section>

      {/* Menu content */}
      <section className="py-8 sm:py-24 bg-caravan-dark relative">
        <div className="absolute inset-0 spotlight pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Category tabs */}
          <div className="sticky top-[calc(5rem+env(safe-area-inset-top))] lg:top-[calc(6rem+env(safe-area-inset-top))] z-30 bg-caravan-dark pb-4 sm:pb-8 pt-3 sm:pt-4 -mt-4">
            <div
              className="flex overflow-x-auto gap-2 sm:gap-3 sm:flex-wrap sm:justify-center no-scrollbar"
              role="tablist"
              aria-label={t("menu.categoryLabel")}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative shrink-0 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caravan-gold ${
                    activeCategory === cat
                      ? "text-caravan-dark bg-caravan-gold"
                      : "text-caravan-cream/40 border border-caravan-gold/10 hover:border-caravan-gold/30 hover:text-caravan-cream/70"
                  }`}
                >
                  {t(`categories.${cat}`, { defaultValue: cat })}
                </button>
              ))}
            </div>
          </div>

          {/* Active category heading */}
          {activeCategory !== "All" && (
            <SectionHeading
              title={t(`categories.${activeCategory}`, {
                defaultValue: activeCategory,
              })}
            />
          )}

          {/* Grid */}
          <motion.div
            layout
            role="tabpanel"
            aria-label={t("menu.panelLabel", {
              category: t(`categories.${activeCategory}`, {
                defaultValue: activeCategory,
              }),
            })}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((dish, index) => (
                <DishCard key={dish.id} dish={dish} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
