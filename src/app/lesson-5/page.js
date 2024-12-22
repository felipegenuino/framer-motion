"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollTrigger() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger quando 20% do elemento está visível
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="h-[200vh] bg-gray-900 text-white flex flex-col items-center justify-center">
      <p className="mb-20">Role para ver o efeito!</p>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-blue-500 h-24 w-24 rounded-lg"
      ></motion.div>
    </section>
  );
}
