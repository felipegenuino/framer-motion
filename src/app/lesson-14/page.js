/*
Lesson 14: Desenhar SVGs Dinamicamente no Scroll

Aqui, um SVG path será desenhado gradualmente conforme o usuário rola.

O que este exemplo faz?
	1.	Desenho progressivo do SVG:
	•	O atributo pathLength controla o traçado do path.
	2.	Scroll Controlado:
	•	Usa useScroll para sincronizar o progresso do traçado com o movimento do scroll.

*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DrawSVG() {
  const { scrollYProgress } = useScroll();

  // Define o progresso do stroke
  const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <div className="h-[200vh] bg-gray-900 flex items-center justify-center text-white">
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M50 200 C150 100, 250 300, 350 200"
          stroke="#00FF00"
          strokeWidth="4"
          strokeLinecap="round"
          style={{
            pathLength,
          }}
        />
      </motion.svg>
      <p className="absolute bottom-10 text-lg text-center">
        Role para desenhar o SVG!
      </p>
    </div>
  );
}
