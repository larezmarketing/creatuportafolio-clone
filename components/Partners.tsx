"use client";
import Image from "next/image";

const partners = [
    "https://static.wixstatic.com/media/09336c_08ae9401ee5845b4aa6cefe0f1135eea~mv2.png/v1/fill/w_300,h_156,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/marjalizo-03.png",
    "https://static.wixstatic.com/media/09336c_282ca21fb0314d418194e22c1ecdbf3f~mv2.png/v1/fill/w_300,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(11).png",
    "https://static.wixstatic.com/media/09336c_62c733b954a54e19ac48b092674e1efe~mv2.png/v1/fill/w_300,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/the-velopers-logo.png",
    // "https://static.wixstatic.com/media/09336c_c3d9eeecd62a4b87b155a4cde0a6743a~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0b7f767-41e6-48f4-96a3-6c2ef31e1624_medium.jpg", // This is a JPG, might have white bg, better check
    "https://static.wixstatic.com/media/09336c_80bb4dcdfbe34bc0b3955cb48dfc9e62~mv2.png/v1/fill/w_300,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/panama-pacifico.png",
    "https://static.wixstatic.com/media/09336c_f6a014953c3a431486af5f4ad1c97716~mv2.png/v1/fill/w_298,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Captura-de-Pantalla-2024-09-30-a-las-11_13_30.png"
];

export function Partners() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h3 className="text-gray-500 text-center uppercase tracking-widest text-sm mb-10">
                    Nuestros Partners y Desarrolladores
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((src, i) => (
                        <div key={i} className="relative h-16 w-32 md:w-40">
                            <Image
                                src={src}
                                alt={`Partner ${i}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
