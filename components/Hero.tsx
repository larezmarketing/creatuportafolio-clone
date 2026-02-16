"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Video/Image Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="https://video.wixstatic.com/video/09336c_0f04041bac3a4265b99f68f14678a717/1080p/mp4/file.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-bg from-black/80 via-black/50 to-black/80" />
            </div>

            <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
                        Para Inversionistas que generan + USD$10,000 al mes
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Construye tu patrimonio inmobiliario de <span className="text-primary">+USD 250,000</span> de forma segura
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl"
                >
                    Sin descapitalizarte, sin lidiar con inquilinos, ni depender de mercados volátiles.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="https://wa.me/50762282079?text=Hola,%20quisiera%20más%20información%20sobre%20cómo%20construir%20mi%20patrimonio%20inmobiliario."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-all hover:scale-105"
                    >
                        QUIERO CONSTRUIR MI PATRIMONIO AHORA
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
