import {about} from "@/lib/data";
export default function P(){return <section><div className="wrap"><p className="kick">// sobre mí</p><h2>Más que estudiar, me gusta hacer.</h2><p className="mut" style={{maxWidth:680,margin:"18px 0"}}>{about.p}</p>
<div className="grid">{about.facts.map(([a,b])=><div className="card" key={a}><p className="kick">{a}</p><b>{b}</b></div>)}</div>
<div className="grid">{about.stats.map(([a,b])=><div key={b}><div className="stat">{a}</div><p className="mut">{b}</p></div>)}</div></div></section>}
