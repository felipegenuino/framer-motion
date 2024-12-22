"use client";

/*
Lesson 5: Animação em cascata com múltiplos elementos

Vamos adicionar vários elementos que animam de forma sequencial quando entram na viewport.

*/
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ScrollCascade() {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger quando 10% de cada item está visível
    triggerOnce: true, // Dispara apenas uma vez
  });

  return (
    <section className="h-[200vh] bg-gray-900 text-white">
      <p className="text-center pt-10 mb-10">Role para revelar os itens!</p>
      <div ref={ref} className="flex flex-col items-center space-y-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            key={item}
            className="bg-green-500 h-16 w-16 rounded-lg"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: item * 0.2, // Incrementa o delay para cada item
            }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
}
