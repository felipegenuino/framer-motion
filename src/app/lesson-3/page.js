"use client";

/*

  Explicação do código:
	1.	animate com array: Define keyframes para propriedades (rotate, scale e backgroundColor).
	2.	transition.repeat: Faz a animação repetir infinitamente.
	3.	backgroundColor: Alterna cores em sincronia com outros keyframes.

*/

import { motion } from "framer-motion";

export default function keyframes() {
  return (
    <section className="overflow-hidden flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360, 0, 90],
          scale: [1, 1.5, 1, 0.5, 1, 0.25, 1],
          backgroundColor: [
            "#3b82f6", // Azul
            "#10b981", // Verde
            "#facc15", // Amarelo
            "#ef4444", // Vermelho
            "#ef4400", //
            "#ef0044", //
            "#3b82f6", // Volta ao Azul
          ],
          opacity: [1, 0.5, 1, 0.2, 1, 0.8, 1],
          borderRadius: ["8%", "50%", "4%", "30%", "50%", "25%", "8%"],
          // borderWidth: ["2px", "8px", "2px", "12px", "2px", "6px", "2px"],
          borderColor: [
            "#3b82f6",
            "#10b981",
            "#facc15",
            "#ef4444",
            "#ef4400",
            "#ef0044",
            "#3b82f6",
          ],

          width: ["50px", "100px", "75px", "100px", "120px", "75px", "55px"],
          height: ["50px", "100px", "75px", "100px", "120px", "75px", "50px"],

          background: [
            "linear-gradient(45deg, #3b82f6, #10b981)",
            "linear-gradient(90deg, #facc15, #ef4444)",
            "linear-gradient(135deg, #ef4400, #ef0044)",
            "linear-gradient(135deg, #ef0044, #ef4400)",
            "linear-gradient(180deg, #3b82f6, #10b981)",
            "linear-gradient(90deg, #facc15, #ef4444)",
            "linear-gradient(45deg, #3b82f6, #10b981)",
          ],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="bg-blue-400 h-24 w-24"
      ></motion.div>
      <p className="mt-4">Veja o círculo rotacionar com keyframes!</p>
    </section>
  );
}
