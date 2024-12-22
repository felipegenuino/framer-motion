/*
Lesson 6: Scroll progress bar (Indicador de progresso do scroll)

	1.	Aumentar a altura da barra de progresso.
	2.	Adicionar um gradiente de cor para torná-la mais destacada.
	3.	Adicionar um texto mostrando a porcentagem do progresso do scroll.

*/

"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercentage(Math.floor(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="h-[200vh] bg-gray-900 text-white relative">
      {/* Barra de Progresso */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 h-4 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
      ></motion.div>

      {/* Texto com Percentual */}
      <motion.div
        className="fixed top-0 right-4 text-white font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {scrollPercentage}%
      </motion.div>

      {/* Conteúdo da Página */}
      <div className="text-center pt-10">
        <p className="text-lg">Role para ver o progresso na barra superior!</p>
      </div>
    </section>
  );
}
