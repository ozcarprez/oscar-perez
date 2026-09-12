import type {Metadata} from "next";
import {Manrope,Newsreader} from "next/font/google";
import Marco from "@/components/Marco";
import "./globals.css";
const sans=Manrope({subsets:["latin"],variable:"--sans"});
const serif=Newsreader({subsets:["latin"],variable:"--serif"});
export const metadata:Metadata={metadataBase:new URL("https://oscar-perez.vercel.app"),title:{default:"Oscar Pérez — Ideas y productos digitales",template:"%s — Oscar Pérez"},description:"Ideas, páginas web y productos digitales construidos desde el conocimiento real de los negocios.",openGraph:{type:"website",locale:"es_MX",siteName:"Oscar Pérez"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es" className={`${sans.variable} ${serif.variable}`}><body><Marco>{children}</Marco></body></html>}
