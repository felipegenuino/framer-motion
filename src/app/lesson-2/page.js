"use client";

/*
  Explicação do código:
	1.	whileHover: Escala o componente quando o mouse passa sobre ele.
	2.	whileTap: Reduz a escala quando clicado.
	3.	drag: Permite arrastar o elemento.
	4.	dragConstraints: Restringe o movimento dentro de uma área definida.
*/

import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <section className="overflow-hidden flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: -45,
        }}
        whileTap={{
          scale: 0.9,
          rotate: 45,
        }}
        drag
        dragConstraints={{
          top: -100,
          bottom: 100,
          left: -100,
          right: 100,
        }}
        className="bg-blue-500 h-24 w-24 rounded-lg"
      ></motion.div>
      <p className="mt-4">Arraste, clique ou passe o mouse sobre o quadrado</p>
    </section>
  );
}
