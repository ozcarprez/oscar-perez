"use client";

import { useEffect, useRef, useState } from "react";

export default function Transformacion() {
  const section = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!section.current) return;
      const rect = section.current.getBoundingClientRect();
      const distance = section.current.offsetHeight - window.innerHeight;
      setProgress(Math.max(0, Math.min(1, -rect.top / Math.max(distance, 1))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const modern = progress > .48;
  return (
    <section className="transformation" ref={section} id="metodo">
      <div className="transformation-stage" style={{ "--progress": progress } as React.CSSProperties}>
        <div className="transformation-copy">
          <p className="kicker">01 / DE OPERACIÓN A SISTEMA</p>
          <h2>{modern ? "Lo que ya sabes, ahora trabajando mejor." : "Un proceso perfectamente optimizado."}</h2>
          <p className="transformation-line">
            {modern
              ? "Organizamos el conocimiento del negocio y lo convertimos en una herramienta que todos pueden usar."
              : "Solo necesita tres llamadas, cinco archivos de Excel y encontrar a la única persona que sabe cómo funciona."}
          </p>
          <div className="phase"><span className={!modern ? "active" : ""}>ANTES</span><i/><span className={modern ? "active" : ""}>DESPUÉS</span></div>
        </div>

        <div className={`operation ${modern ? "is-modern" : ""}`} aria-label={modern ? "Operación organizada digitalmente" : "Operación manual y dispersa"}>
          <div className="desk-lines" aria-hidden />
          <div className="person person-a"><b>Ventas</b><small>“Yo tengo la última versión”</small></div>
          <div className="person person-b"><b>Operación</b><small>Archivo_FINAL_ahora_si.xlsx</small></div>
          <div className="person person-c"><b>Cliente</b><small>¿Con quién debía hablar?</small></div>
          <div className="person person-d"><b>Administración</b><small>Reenviado 7 veces</small></div>
          <div className="system-core"><span>{modern ? "SISTEMA" : "EXCEL"}</span><b>{modern ? "Todo en su lugar" : "v27"}</b></div>
          <div className="signal s1"/><div className="signal s2"/><div className="signal s3"/><div className="signal s4"/>
          <p className="system-caption">{modern ? "Una fuente clara · un proceso compartido · menos trabajo repetido" : "La tradición de trabajar el doble para confirmar lo mismo"}</p>
        </div>
      </div>
    </section>
  );
}
