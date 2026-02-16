import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="https://static.wixstatic.com/media/09336c_c3f5f02cb2bc477db30f04f4cbb1c941~mv2.png/v1/fill/w_380,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/12.png"
                        alt="VERAL"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                </Link>
                {/* Placeholder for potential menu items, but original landing page is minimal */}
            </div>
        </nav>
    );
}
