"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Proyectos <span className="text-primary">Destacados</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Inversiones inmobiliarias estratégicas en las zonas de mayor plusvalía de Panamá.
                </p>
            </div>

            <div className="flex flex-col gap-0">
                {projects.map((project, i) => (
                    <div key={i} className="group relative h-[400px] md:h-[500px] overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-widest">{project.title}</h3>
                            <p className="text-xl text-primary font-light uppercase tracking-wide">{project.location}</p>

                            <a
                                href="https://wa.me/50762282079"
                                className="mt-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold"
                            >
                                Ver Información <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="py-20 text-center bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">¿Listo para diversificar tu portafolio?</h2>
                    <a
                        href="https://wa.me/50762282079?text=Hola,%20quiero%20conocer%20más%20sobre%20las%20oportunidades%20de%20inversión."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-all hover:scale-105"
                    >
                        AGENDA TU ASESORÍA GRATUITA
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
