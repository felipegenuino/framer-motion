/*
Lesson 8: Scroll progress bar (Indicador de progresso do scroll)

	1.	Aumentar a altura da barra de progresso.
	2.	Adicionar um gradiente de cor para torná-la mais destacada.
	3.	Adicionar um texto mostrando a porcentagem do progresso do scroll.

*/
/*
Criamos um efeito em que diferentes camadas de elementos se movem em velocidades distintas durante o scroll, simulando profundidade.


*/

"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxAnimation() {
  const { scrollY } = useScroll();

  // Transformações para as camadas
  const translateY1 = useTransform(scrollY, [0, 500], [0, 100]);
  const translateY2 = useTransform(scrollY, [0, 500], [0, 200]);
  const translateY3 = useTransform(scrollY, [0, 500], [0, 300]);

  return (
    <section className="h-[200vh] relative bg-gray-900">
      {/* Camada mais distante */}
      <motion.div
        style={{ y: translateY3 }}
        className=" 
        absolute top-0 left-0 w-full h-full bg-red-500"
      ></motion.div>

      {/* Camada intermediária */}
      <motion.div
        style={{ y: translateY2 }}
        className=" 
        absolute top-0 left-0 w-full h-[150vh] bg-green-500 opacity-80"
      ></motion.div>

      {/* Camada mais próxima */}
      <motion.div
        style={{ y: translateY1 }}
        className="
           bg-[url('https://images.unsplash.com/photo-1668363282096-6660f6029421')] bg-cover  bg-center
        absolute top-0 left-0 w-full h-[100vh] bg-purple-500 opacity-60"
      ></motion.div>

      {/* Texto de guia */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold">Parallax Animation</h1>
        <p className="mt-4 text-lg">Role para ver o efeito de profundidade!</p>
      </div>
    </section>
  );
}
