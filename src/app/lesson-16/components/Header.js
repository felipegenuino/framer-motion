"use client";
import { motion } from "framer-motion";

export default function Header({ headerColor, brandColor, toggleMenu }) {
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 z-50 ${headerColor}`}
    >
      <motion.div className={`font-bold text-xl ${brandColor}`}>
        MyBrand
      </motion.div>
      <button className="text-black" onClick={toggleMenu}>
        Menu
      </button>
    </motion.header>
  );
}
