import {studies} from "@/lib/data";
export default function P(){return <section><div className="wrap"><p className="kick">// formación</p><h2>Lo que estudio</h2>{studies.map(s=><div className="tl" key={s.t}><p className="kick">{s.y}</p><h3>{s.t}</h3><p className="mut">{s.c}</p><p style={{marginTop:6}}>{s.d}</p></div>)}</div></section>}
