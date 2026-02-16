"use client";
import { useState } from "react";

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-primary mb-4">¡Gracias por tu interés!</h3>
                <p className="text-gray-300">Hemos recibido tus datos correctamente. Un asesor se pondrá en contacto contigo pronto.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Déjanos tus datos</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Nombre *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary outline-hidden transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Apellido *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary outline-hidden transition-colors" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">Email *</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary outline-hidden transition-colors" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">Teléfono *</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary outline-hidden transition-colors" />
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">¿Cuál es el motivo principal de su interés?</label>
                <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary outline-hidden transition-colors">
                    <option value="Uso personal">Uso personal</option>
                    <option value="Inversión">Inversión</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">¿Ha realizado inversiones anteriormente en Panamá?</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="invested" value="yes" className="accent-primary" />
                        <span className="text-white">Sí</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="invested" value="no" className="accent-primary" />
                        <span className="text-white">No</span>
                    </label>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-gray-400">Monto estimado mensual para invertir</label>
                <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-primary outline-hidden transition-colors">
                    <option>Entre USD $1,001 y $5,000</option>
                    <option>Entre USD $5,001 y $10,000</option>
                    <option>Más de USD $10,000</option>
                </select>
            </div>

            <button type="submit" className="w-full bg-primary text-black font-bold py-4 rounded hover:bg-yellow-500 transition-colors mt-4">
                ENVIAR
            </button>

        </form>
    );
}
