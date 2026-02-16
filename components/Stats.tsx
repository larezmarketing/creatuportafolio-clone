"use client";
import { motion } from "framer-motion";

const stats = [
    {
        label: "En transacciones Inmobiliarias",
        number: "+$120MM",
        description: "Hemos gestionado más de 120 millones de dólares en transacciones exitosas."
    },
    {
        label: "Inversionistas con Cartera",
        number: "+500",
        description: "Inversionistas activos que han confiado en nosotros."
    },
    {
        label: "Propiedades Vendidas",
        number: "+1000",
        description: "Superamos las mil propiedades vendidas con enfoque estratégico."
    },
    {
        label: "Años de experiencia",
        number: "+30",
        description: "Más de tres décadas de experiencia combinada en la industria."
    }
];

export function Stats() {
    return (
        <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Nuestra Historia en Números
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.number}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
                            <p className="text-gray-400 text-sm">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
