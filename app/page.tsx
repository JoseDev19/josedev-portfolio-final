import Link from "next/link";import Terminal from "./Terminal";import Typed from "./Typed";import {skillsTags} from "@/lib/data";
export default function Home(){const t=[...skillsTags,...skillsTags];return <section className="hero"><div className="wrap">
<div className="badge"><i/>STATUS: ONLINE · disponible para prácticas</div>
<p className="kick">// <Typed words={["sistemas & redes","servidores & cloud","webs a medida"]}/></p>
<div className="glyph">&gt;<span className="cur">_</span></div>
<h1 className="grad">Sistemas, redes y webs que se mantienen en pie.</h1>
<Link href="/proyectos" className="btn">Explorar proyectos ↗</Link><Link href="/contacto" className="btn o">Contacto</Link>
<div className="mqw"><div className="mq">{t.map((x,i)=><span className="tag" key={i}>{x}</span>)}</div></div><Terminal/></div></section>}
