"use client";

/*

Explicação do código:
	1.	variants: Agrupa animações com nomes (hidden, visible).
	2.	initial e animate: Controlam o estado inicial e final da animação.
	3.	Reutilização: O variants pode ser reutilizado em vários elementos.
*/

import { motion } from "framer-motion";

const boxVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

export default function keyframes() {
  return (
    <section className="overflow-hidden flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-red-500 h-24 w-24 rounded"
      ></motion.div>
      <p className="mt-4">Variants tornam a reutilização mais simples</p>
    </section>
  );
}
