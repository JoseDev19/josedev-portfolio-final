"use client";import {useEffect,useRef,useState} from "react";import {projects,skills} from "@/lib/data";
const C:Record<string,string>={help:"Comandos: help, projects, skills, neofetch, ping, clear",projects:projects.map(p=>"▸ "+p.n).join("\n"),skills:skills.map(s=>`▸ ${s.n} ${s.p}%`).join("\n"),
 neofetch:"josedev@asir\n──────────\nOS: Debian / Windows Server\nShell: bash\nStack: Next.js + TypeScript\nStatus: disponible para prácticas",ping:"PING josedev.sys: 64 bytes, time=0.1 ms ✓"};
export default function Terminal(){
 const [lines,setLines]=useState<string[]>(["Bienvenido a josedev.sys — escribe 'help' y pulsa Enter."]);
 const [v,setV]=useState("");const [h,setH]=useState<string[]>([]);const [i,setI]=useState(-1);
 const inp=useRef<HTMLInputElement>(null);const out=useRef<HTMLDivElement>(null);
 useEffect(()=>{const o=out.current;if(o)o.scrollTop=o.scrollHeight},[lines]);
 function run(){const c=v.trim().toLowerCase();setV("");setI(-1);if(!c)return;setH([c,...h]);if(c==="clear"){setLines([]);return}
  setLines(l=>[...l,"$ "+c,C[c]||`comando no encontrado: ${c} (prueba 'help')`])}
 function key(e:React.KeyboardEvent<HTMLInputElement>){
  if(e.key==="Enter"){e.preventDefault();run()}
  else if(e.key==="ArrowUp"){e.preventDefault();const n=Math.min(i+1,h.length-1);if(h[n]!==undefined){setI(n);setV(h[n])}}
  else if(e.key==="ArrowDown"){e.preventDefault();const n=i-1;if(n<0){setI(-1);setV("")}else{setI(n);setV(h[n])}}}
 return <div className="term" onClick={()=>inp.current?.focus()}><div className="top"><i/><i/><i/><span style={{marginLeft:8}}>josedev@asir:~</span></div>
 <div className="out" ref={out}>{lines.map((l,k)=><div key={k} className={l.startsWith("$ ")?"cmd":""}>{l}</div>)}</div>
 <div className="row"><span>$</span><input ref={inp} type="text" value={v} onChange={e=>setV(e.target.value)} onKeyDown={key} autoComplete="off" autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder="escribe un comando..." aria-label="terminal"/></div></div>}
