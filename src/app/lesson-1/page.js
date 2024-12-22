// pages/index.js

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function introduction() {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <section className=" overflow-hidden flex flex-col items-center justify-center h-dvh bg-gray-900 text-gray-800">
      <motion.div
        animate={{
          x: isEnabled ? 1000 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: "200",
          damping: 15,
        }}
        className="bg-yellow-400 rounded-full h-24 w-24"
      ></motion.div>
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className="border-2 p-2 px-4 mt-16 bg-slate-900 text-white z-10"
      >
        Toggle
      </button>
    </section>
  );
}
