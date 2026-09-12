import Image from "next/image";
import Link from "next/link";
import { leerEntradas } from "@/lib/entradas";
import Transformacion from "@/components/Transformacion";

const projects = [
  ["01", "Garitas Mex–USA", "Producto de información", "Reportes oficiales de cruces fronterizos convertidos en una experiencia clara para la vida diaria.", "https://garitas-mex-usa.vercel.app"],
  ["02", "Descubre Tijuana", "Medio local", "Una cartelera independiente que organiza eventos, fechas y lugares para descubrir la ciudad.", "https://descubre-tijuana.vercel.app"],
  ["03", "Vida Vaquera del Norte", "Medio especializado", "Un punto de encuentro editorial para una comunidad activa entre Baja California y San Diego.", "https://vida-vaquera-norte.vercel.app"],
];
const services = [
  ["01", "Páginas con criterio", "Sitios que explican qué hace valioso a un negocio y convierten esa diferencia en una experiencia memorable."],
  ["02", "Productos digitales", "Herramientas, directorios y plataformas construidas alrededor de una necesidad real."],
  ["03", "Estrategia y contenido", "Posicionamiento y sistemas editoriales que ayudan a una marca a ganarse la atención antes de vender."],
];

export default function Inicio() {
  const entries = leerEntradas().slice(0, 3);
  return <>
    <section className="hero portal-hero">
      <Image className="hero-painting" src="/hero-observadores-v2.png" alt="Una comunidad de otra época contempla a personas trabajando con tecnología" fill priority sizes="100vw" />
      <svg className="portal-filter-defs" aria-hidden="true"><defs><filter id="portal-refraction" x="-12%" y="-12%" width="124%" height="124%"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.018" numOctaves="2" seed="7" result="ondas"><animate attributeName="baseFrequency" values="0.006 0.018;0.012 0.028;0.006 0.018" dur="9s" repeatCount="indefinite"/></feTurbulence><feDisplacementMap in="SourceGraphic" in2="ondas" scale="24" xChannelSelector="R" yChannelSelector="B"/></filter></defs></svg>
      <div className="time-portal" aria-hidden="true"><div className="portal-world"><div className="portal-track"><Image src="/portal-epoca-digital-v2.png" alt="" width={2172} height={724} priority/><Image src="/portal-epoca-digital-v2.png" alt="" width={2172} height={724}/></div></div><div className="portal-glass"/></div>
      <div className="hero-copy"><h1>Construimos nuevas formas<br/><em>de hacer negocio.</em></h1><p className="intro">Combinamos estrategia, diseño, software e inteligencia artificial para convertir ideas y procesos en páginas, sistemas y productos digitales.</p><div className="actions"><a className="button primary" href="#proyectos">Ver proyectos</a><a className="button" href="#contacto">Construir una idea</a></div></div>
    </section>

    <Transformacion />

    <section className="market-story"><Image src="/hero-baja-v7.png" alt="Comerciantes históricos trabajando con laptops y herramientas digitales" fill sizes="100vw"/><div className="market-story-copy"><p className="kicker">EL OFICIO CAMBIA DE HERRAMIENTAS</p><h2>La tecnología avanza.<br/><em>El negocio sigue siendo humano.</em></h2><p>Diseñamos sistemas que entran en el trabajo real: donde las personas deciden, colaboran, venden y convierten información en movimiento.</p></div></section>

    <section className="projects shell" id="proyectos"><div className="heading"><p className="kicker">02 / PROYECTOS</p><h2>Ideas convertidas en experiencias.</h2><p>Cada proyecto parte de una comunidad, una necesidad o una pregunta concreta.</p></div><div className="project-list">{projects.map(([n,name,type,desc,url])=><a className="project" href={url} target="_blank" rel="noreferrer" key={n}><div><span>{n}</span><span>{type}</span></div><h3>{name}</h3><p>{desc}</p><small>Visitar proyecto ↗</small></a>)}</div></section>

    <section className="services" id="servicios"><div className="portrait"><Image src="/oscar.jpg" alt="" fill sizes="(max-width:800px) 100vw, 45vw"/><span>Experiencia real / ejecución digital</span></div><div className="service-copy"><p className="kicker">03 / CAPACIDADES</p><h2>Construyo la solución que la idea necesita.</h2><div className="service-list">{services.map(([n,title,text])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

    <section className="writing shell" id="ideas"><div className="heading"><p className="kicker">04 / IDEAS</p><h2>El cuaderno de trabajo.</h2><p>Observaciones sobre negocios, confianza, distribución y oportunidades.</p><Link className="text-link" href="/escritos">Todos los escritos →</Link></div><div className="entries">{entries.map(e=><Link href={`/escritos/${e.slug}`} key={e.slug}><span>{String(e.folio).padStart(3,"0")}</span><div><h3>{e.titulo}</h3><p>{e.entrada}</p></div><b>↗</b></Link>)}</div></section>

    <section className="closing" id="contacto"><p className="kicker">05 / SIGUIENTE PROYECTO</p><h2>Si hay una idea dando vueltas,<br/><em>vamos a darle estructura.</em></h2><a className="button primary" href="https://github.com/ozcarprez" target="_blank" rel="noreferrer">Hablemos de tu proyecto</a><p>Tijuana · trabajando en ambos lados de la frontera</p></section>
  </>;
}
