"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Marco({children}:{children:React.ReactNode}){
 const home=usePathname()==="/";
 return <div className={home?"site":"site reading"}><header><Link className="brand" href="/"><b>OP</b><span>ideas / digital</span></Link><nav>{home&&<><a href="#proyectos">Proyectos</a><a href="#servicios">Servicios</a><a href="#ideas">Ideas</a></>} {!home&&<Link href="/escritos">Escritos</Link>}<a href="https://github.com/ozcarprez" target="_blank" rel="noreferrer">Contacto ↗</a></nav></header><main>{children}</main><footer><div className="brand"><b>OP</b><span>ideas / digital</span></div><p>Oscar Pérez — Tijuana, Baja California</p><p>© {new Date().getFullYear()}</p></footer></div>
}
