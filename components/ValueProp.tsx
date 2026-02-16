"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "MADERO",
        location: "Costa del Este",
        image: "https://static.wixstatic.com/media/09336c_0f42a2bbdc5445d7acb7a3947825ee38~mv2.jpg/v1/fill/w_2000,h_417,fp_0.50_0.76,q_85,enc_avif,quality_auto/VDC-MDR-Car%20Lobby%20Baja%20(1).jpg"
    },
    {
        title: "BIOMA",
        location: "Costa del Este",
        image: "https://static.wixstatic.com/media/09336c_54bc77048001490ebbc830e7bcda9ba1~mv2.jpg/v1/fill/w_3000,h_625,al_c,q_85,enc_avif,quality_auto/160123_BIOMA_PEATONAL%20FRONTAL%20(2)%20(1).jpg"
    },
    {
        title: "NOGAL",
        location: "Costa del Este",
        image: "https://static.wixstatic.com/media/09336c_d2b76e6585bf47b7a845f7c7a940d397~mv2.jpg/v1/fill/w_3024,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Portacochera_01%20(1).jpg"
    }
];

export function ValueProp() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div style={{ x }} className="flex">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center p-4 md:p-20 group"
                        >
                            {/* Background Image Full Screen */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>

                            <div className="relative z-10 text-center p-8 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl transition-all hover:bg-black/60">
                                <h3 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-widest">{project.title}</h3>
                                <p className="text-2xl text-primary font-light uppercase tracking-wide mb-8">{project.location}</p>

                                <a
                                    href="https://wa.me/50762282079"
                                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors"
                                >
                                    Ver Información <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
