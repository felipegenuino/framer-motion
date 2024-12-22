/*
Lesson 11:  Scroll Reveal
	1.	Revelação progressiva:
	•	Cada elemento aparece com um efeito suave de fade in e deslize de baixo para cima.
	•	A opacidade e posição Y são controladas dinamicamente pelo useScroll.
	2.	Estrutura responsiva:
	•	O layout usa h-[200vh] para simular um espaço longo para scroll.
	•	Os textos estão centralizados e espaçados uniformemente.
	3.	Transformações dinâmicas:
	•	opacity e y são transformados com base nos valores de scroll em intervalos distintos.

*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollReveal() {
  const { scrollY } = useScroll();

  // Transforma a opacidade e a posição vertical com base no scroll
  const opacity1 = useTransform(scrollY, [0, 300], [0, 1]);
  const translateY1 = useTransform(scrollY, [0, 300], [50, 0]);

  const opacity2 = useTransform(scrollY, [300, 600], [0, 1]);
  const translateY2 = useTransform(scrollY, [300, 600], [50, 0]);

  const opacity3 = useTransform(scrollY, [600, 900], [0, 1]);
  const translateY3 = useTransform(scrollY, [600, 900], [50, 0]);

  return (
    <section className="h-[200vh] bg-gray-900 text-white p-8">
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Scroll para Revelar</h1>
      </div>

      {/* Primeiro Elemento */}
      <motion.div
        style={{ opacity: opacity1, y: translateY1 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-semibold">Primeiro Elemento</h2>
        <p className="mt-4 text-lg">
          Este conteúdo aparece quando você começa a rolar.
        </p>
      </motion.div>

      {/* Segundo Elemento */}
      <motion.div
        style={{ opacity: opacity2, y: translateY2 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-semibold">Segundo Elemento</h2>
        <p className="mt-4 text-lg">
          Este conteúdo aparece mais à frente no scroll.
        </p>
      </motion.div>

      {/* Terceiro Elemento */}
      <motion.div
        style={{ opacity: opacity3, y: translateY3 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-semibold">Terceiro Elemento</h2>
        <p className="mt-4 text-lg">
          O último elemento se revela conforme você chega ao fim.
        </p>
      </motion.div>
    </section>
  );
}
