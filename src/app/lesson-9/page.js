/*
 Scroll Snap Animation

Explicação do Código:
	1.	useScroll:
	•	Captura a posição do scroll da página como uma progressão de 0 a 1.
	2.	useTransform:
	•	Transforma o valor do scroll em propriedades de animação, como scale e opacity, para cada slide.
	3.	Efeitos Dinâmicos:
	•	Os slides escalam de 1.2 para 1 à medida que aparecem.
	•	A opacidade alterna de 1 para 0 ao sair de cena.
	4.	Altura da seção:
	•	Ajustamos a altura para h-[300vh] para que os três slides sejam rolados de forma natural.



  Como Funciona
	•	Cada slide é animado dinamicamente com base na posição do scroll, em vez de depender de delays fixos.
	•	A transição entre os slides é suave e sincronizada com o movimento do scroll.

*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSnapWithScroll() {
  const { scrollYProgress } = useScroll();

  // Transformações para cada slide
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scale2 = useTransform(scrollYProgress, [0.3, 0.6], [1.2, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  const scale3 = useTransform(scrollYProgress, [0.6, 1], [1.2, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

  return (
    <section className="h-[300vh] bg-gray-900 text-white overflow-hidden">
      {/* Primeiro Slide */}
      <motion.div
        style={{ scale: scale1, opacity: opacity1 }}
        className="h-screen bg-[url('https://images.unsplash.com/photo-1668363282096-6660f6029421')] bg-cover bg-center flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Slide 1
        </h1>
      </motion.div>

      {/* Segundo Slide */}
      <motion.div
        style={{ scale: scale2, opacity: opacity2 }}
        className="h-screen bg-[url('https://images.unsplash.com/photo-1579902036292-36688e94752a')] bg-cover bg-center flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Slide 2
        </h1>
      </motion.div>

      {/* Terceiro Slide */}
      <motion.div
        style={{ scale: scale3, opacity: opacity3 }}
        className="h-screen bg-[url('https://images.unsplash.com/photo-1599492968050-f0eb8a2b3caa')] bg-cover bg-center flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Slide 3
        </h1>
      </motion.div>
    </section>
  );
}
