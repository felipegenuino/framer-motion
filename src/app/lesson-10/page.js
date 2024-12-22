/*
Lesson 10: Fixed Header com Progresso do Scroll

Criar um cabeçalho fixo que muda de cor gradualmente enquanto o usuário rola a página.

*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FixedHeaderScroll() {
  const { scrollYProgress } = useScroll();

  // Mudança de cor e opacidade com base no progresso do scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#3b82f6", "#10b981", "#ef4444"]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section className="h-[200vh] bg-gray-900">
      <motion.div
        style={{ backgroundColor, opacity }}
        className="fixed top-0 left-0 w-full h-16 flex items-center justify-center text-white text-xl font-bold"
      >
        Header Dinâmico
      </motion.div>
      <div className="pt-20 text-center text-white">
        <h1 className="text-4xl mt-10">Role a página!</h1>
        <p className="mt-4">Observe o cabeçalho mudando de cor.</p>
      </div>
    </section>
  );
}
