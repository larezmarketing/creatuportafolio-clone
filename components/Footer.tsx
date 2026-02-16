import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050505] text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">VERAL <span className="text-primary text-sm font-normal">REAL ESTATE</span></h2>
                    <p className="text-gray-400 text-sm">
                        Te ayudamos a conseguir la propiedad ideal para ti. Inversiones inteligentes en Panamá.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-primary">Contacto</h3>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-primary shrink-0" />
                            <a href="mailto:veralrealestate@gmail.com" className="hover:text-white transition-colors">
                                veralrealestate@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-primary shrink-0" />
                            <a href="https://wa.me/50762282079" className="hover:text-white transition-colors">
                                +507 6228-2079
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary shrink-0" />
                            <span>Calle 50 P.H Plaza Banco General, Piso 14, oficina 14-D Ciudad de Panamá - Panamá</span>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-primary">Síguenos</h3>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com/veralrealestatepa/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://www.facebook.com/veralrealestate" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                            <Facebook size={20} />
                        </Link>
                        <Link href="https://www.youtube.com/@veralrealestate" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                            <Youtube size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/company/veralrealestate/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-black transition-all">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                    <div className="mt-8 text-xs text-gray-600">
                        © {new Date().getFullYear()} VERAL Real Estate. Todos los derechos reservados.
                        <br />
                        Developed by Growth Estate™
                    </div>
                </div>

            </div>
        </footer>
    );
}
