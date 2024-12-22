/*
Lesson 13: Efeitos de Entrada com useScroll

Criar um efeito onde cada seção aparece com Fade In e desliza enquanto entra na tela.


O que este exemplo faz?
	1.	Fade In + Slide In:
	•	Cada seção desliza de baixo para cima enquanto aparece.
	2.	Scroll Progress Dinâmico:
	•	Usa useScroll para determinar a entrada de cada seção com base em sua posição.
	3.	Configuração Automática:
	•	Um map cria múltiplas seções sem código redundante.

*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SectionFadeIn() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-gray-900 text-white">
      {[...Array(4)].map((_, index) => {
        const start = index * 0.25;
        const end = start + 0.25;

        // Efeitos dinâmicos
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        const translateY = useTransform(scrollYProgress, [start, end], [50, 0]);

        return (
          <motion.section
            key={index}
            style={{ opacity, y: translateY }}
            className="h-screen flex items-center justify-center text-center"
          >
            <h1 className="text-4xl font-bold">Seção {index + 1}</h1>
            <p className="mt-4">Texto dinâmico para a seção {index + 1}.</p>
          </motion.section>
        );
      })}
    </div>
  );
}
