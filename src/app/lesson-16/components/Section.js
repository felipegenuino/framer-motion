"use client";
import { motion } from "framer-motion";

export default function Section({ id, bgClass, textClass, index }) {
  return (
    <section
      id={id}
      className={`${bgClass} h-screen flex flex-col items-center justify-center text-center`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        {id.toUpperCase()}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-lg"
      >
        Esta é a seção {index + 1}.
      </motion.p>
    </section>
  );
}
