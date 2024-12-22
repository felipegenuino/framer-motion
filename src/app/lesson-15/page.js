/*
Lesson 15: Landpage completa

Vamos criar uma landing page completa com as funcionalidades e interações solicitadas. O código a seguir implementa:
	1.	Estrutura da página: Header, Hero, Sections (Brand, Galleries, etc.), Footer.
	2.	Interações do useScroll:
	•	Elementos flutuantes revelados gradualmente em cada seção.
	•	Header muda de cor conforme a seção visível.
	•	Porcentagem do scroll exibida no canto.
	3.	Outras interações complexas:
	•	SVGS dinâmicos animados ao rolar.

*/

/*
  Melhorias do código:
  1. Restrições dinâmicas: O movimento é limitado ao container pai.
  2. Alteração de cor: A cor muda com base na posição do drag.
  3. Elasticidade: Adiciona um efeito suave ao alcançar os limites.
  4. Restrição de eixos: Permite arrastar em um único eixo (opcional).
*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react";

export default function LandingPage() {
  const { scrollY, scrollYProgress } = useScroll();
  const [headerColor, setHeaderColor] = useState("bg-red-50");
  const [brandColor, setBrandColor] = useState("text-red-500");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado do menu

  const [bgColor, setBgColor] = useState("bg-blue-500");
  const containerRef = useRef(null);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const scrollPercentRaw = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [scrollPercent, setScrollPercent] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  const strokeLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Memoize the sections array to prevent re-creation on every render
  const sections = useMemo(
    () => [
      { id: "hero", bgClass: "bg-red-50", textClass: "text-red-500" },
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

  // Atualizar scrollPercent com valores inteiros
  useEffect(() => {
    const unsubscribe = scrollPercentRaw.onChange((value) => {
      setScrollPercent(Math.round(value));
    });
    return () => unsubscribe();
  }, [scrollPercentRaw]);

  return (
    <div>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 z-50 ${headerColor}`}
      >
        <motion.div className={`font-bold text-xl ${brandColor}`}>
          MyBrand
        </motion.div>
        <button
          className="text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </motion.header>

      {/* Scroll Percentage */}
      <motion.div
        className="fixed bottom-4 right-4 text-lg font-bold"
        style={{ color: headerColor }}
      >
        <motion.span>{scrollPercent}</motion.span>%
      </motion.div>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.bgClass} h-screen flex flex-col items-center justify-center text-center`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
          >
            {section.id.toUpperCase()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg"
          >
            Esta é a seção {index + 1}.
          </motion.p>
        </section>
      ))}

      <motion.section
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-40 h-60 bg-blue-500 text-white flex items-center justify-center"
      >
        {isFlipped ? "Back" : "Front"}
      </motion.section>

      <motion.svg
        className="w-40 h-40"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="#00f"
          strokeWidth="2"
          fill="none"
          style={{ pathLength: strokeLength }}
        />
      </motion.svg>

      <section
        ref={containerRef}
        className="overflow-hidden relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white"
      >
        {/* Quadrado Dinâmico */}
        <motion.div
          drag
          dragConstraints={containerRef} // Restrições dinâmicas com base no container pai
          dragElastic={0.2} // Elasticidade ao ultrapassar os limites
          onDrag={(event, info) => {
            // Alterar a cor com base na posição X
            if (info.point.x > 0) {
              setBgColor("bg-green-500");
            } else {
              setBgColor("bg-red-500");
            }
          }}
          onDragEnd={() => setBgColor("bg-blue-500")} // Restaura a cor original ao soltar
          className={`h-24 w-24 rounded-lg ${bgColor}`}
        ></motion.div>

        {/* Informação */}
        <p className="mt-4">Arraste o quadrado para mudar de cor!</p>
      </section>
      <section className="relative h-[200vh]">
        {/* Camada mais distante */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -300]), // Movimento mais lento para profundidade
          }}
          className="absolute top-0 left-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1599492968050-f0eb8a2b3caa')] bg-cover bg-center z-0"
        ></motion.div>

        {/* Camada intermediária */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -150]), // Movimento um pouco mais rápido
          }}
          className="absolute top-0 left-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1678105627738-fa7e5ae584f5')] bg-cover bg-center z-10 opacity-80"
        ></motion.div>

        {/* Conteúdo principal */}
        <div className="relative z-20 h-[200vh] flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Conteúdo com fundo Parallax</h1>
          <p className="mt-4 text-lg">
            Role para ver o efeito Parallax funcionando corretamente!
          </p>
        </div>
      </section>

      {/* Drawer */}
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
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.id.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Footer */}
      <footer className="h-16 bg-indigo-50 flex items-center justify-center">
        <p className="text-gray-800">Feito com 💜 por você!</p>
      </footer>
    </div>
  );
}
