import "./globals.css";import Link from "next/link";import {JetBrains_Mono,Inter} from "next/font/google";import {me} from "@/lib/data";import Nav from "./Nav";
const m=JetBrains_Mono({subsets:["latin"],variable:"--m"});const inter=Inter({subsets:["latin"],variable:"--b"});
export const metadata={title:"José Antonio | ASIR y desarrollo web",description:"Portafolio de José Antonio: administración de sistemas, redes y webs a medida."};
export default function L({children}:{children:React.ReactNode}){return <html lang="es" className={`${m.variable} ${inter.variable}`}><body>
<header><div className="wrap bar"><Link href="/" className="logo">josedev<b>.sys</b><span className="cur">_</span></Link><Nav/></div></header><main>{children}</main>
<footer><div className="wrap" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}><span>© {new Date().getFullYear()} {me.nombre} · Hecho con Next.js</span><span><a href={me.github} target="_blank" rel="noopener noreferrer">GitHub</a> · <a href={me.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span></div></footer></body></html>}
