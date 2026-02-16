"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Modal } from "./Modal";
import { ContactForm } from "./ContactForm";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Image Overlay for Texture */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-black/80 to-black z-10 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[url('https://static.wixstatic.com/media/09336c_0f42a2bbdc5445d7acb7a3947825ee38~mv2.jpg/v1/fill/w_2000,h_417,fp_0.50_0.76,q_85,enc_avif,quality_auto/VDC-MDR-Car%20Lobby%20Baja%20(1).jpg')] bg-cover bg-center opacity-20 blur-sm" />

            <div className="container relative z-20 px-4 text-center max-w-5xl mx-auto flex flex-col items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-bold tracking-widest text-sm md:text-base mb-6 uppercase">
                        Para Inversionistas que generan + USD$10,000 al mes
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Construye tu patrimonio inmobiliario de <span className="text-primary">+USD 250,000</span> de forma segura
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Sin descapitalizarte, sin lidiar con inquilinos, ni depender de mercados volátiles.
                    </p>
                </motion.div>

                {/* Video Player */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group"
                >
                    <video
                        ref={videoRef}
                        controls
                        className="w-full h-full object-cover"
                        poster="https://static.wixstatic.com/media/09336c_0f42a2bbdc5445d7acb7a3947825ee38~mv2.jpg/v1/fill/w_2000,h_417,fp_0.50_0.76,q_85,enc_avif,quality_auto/VDC-MDR-Car%20Lobby%20Baja%20(1).jpg"
                    >
                        <source src="https://video.wixstatic.com/video/09336c_0f04041bac3a4265b99f68f14678a717/1080p/mp4/file.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-all hover:scale-105"
                    >
                        QUIERO CONSTRUIR MI PATRIMONIO AHORA
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm />
            </Modal>
        </section>
    );
}
