"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/app/lesson-16/components/Header";
import Hero from "@/app/lesson-16/components/Hero";
import Section from "@/app/lesson-16/components/Section";
import Footer from "@/app/lesson-16/components/Footer";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const [headerColor, setHeaderColor] = useState("bg-red-50");
  const [brandColor, setBrandColor] = useState("text-red-500");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPercentRaw = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [scrollPercent, setScrollPercent] = useState(0);

  const sections = useMemo(
    () => [
      { id: "brand", bgClass: "bg-green-50", textClass: "text-green-500" },
      { id: "galleries", bgClass: "bg-blue-50", textClass: "text-blue-500" },
      { id: "footer", bgClass: "bg-indigo-50", textClass: "text-indigo-500" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section.id);
        return element ? element.offsetTop : 0;
      });

      const scrollTop = window.scrollY;
      let activeIndex = sections.length - 1;

      for (let i = 0; i < sectionOffsets.length; i++) {
        if (scrollTop < sectionOffsets[i]) {
          activeIndex = i - 1;
          break;
        }
      }

      const activeSection = sections[Math.max(activeIndex, 0)];
      setHeaderColor(activeSection.bgClass);
      setBrandColor(activeSection.textClass);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    const unsubscribe = scrollPercentRaw.onChange((value) => {
      setScrollPercent(Math.round(value));
    });
    return () => unsubscribe();
  }, [scrollPercentRaw]);

  return (
    <div>
      {/* Header */}
      <Header
        headerColor={headerColor}
        brandColor={brandColor}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Scroll Percentage */}
      <motion.div
        className="fixed bottom-4 right-4 text-lg font-bold"
        style={{ color: headerColor }}
      >
        <motion.span>{scrollPercent}</motion.span>%
      </motion.div>

      {/* Hero */}
      <Hero />

      {/* Menu Lateral (Drawer) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 shadow-lg"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Fechar
          </button>
        </div>
        <ul className="mt-4 space-y-4 px-4">
          <li>
            <a href="#hero" className="text-gray-300 hover:text-white">
              Hero
            </a>
          </li>
          <li>
            <a href="#brand" className="text-gray-300 hover:text-white">
              Brand
            </a>
          </li>
          <li>
            <a href="#galleries" className="text-gray-300 hover:text-white">
              Galleries
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          bgClass={section.bgClass}
          textClass={section.textClass}
          index={index}
        />
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
}
