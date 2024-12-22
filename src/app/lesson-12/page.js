/*
Lesson 12: Scroll Progress Indicator em Texto

Criar um indicador que muda dinamicamente o texto com base no progresso do scroll.

*/
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressText() {
  const { scrollYProgress } = useScroll();

  // Atualiza o texto com base no progresso
  const text = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["Início", "Metade", "Quase Lá", "Fim!"]
  );

  return (
    <section className="h-[200vh] bg-gray-900 flex items-center justify-center text-white">
      <motion.div className="text-center">
        <motion.h1
          style={{ opacity: scrollYProgress }}
          className="text-4xl font-bold"
        >
          {text}
        </motion.h1>
        <p className="mt-4 text-lg">Role para ver o texto mudar!</p>
      </motion.div>
    </section>
  );
}
