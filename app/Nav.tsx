"use client";import Link from "next/link";import {usePathname} from "next/navigation";
const n=[["/","Inicio"],["/sobre-mi","Sobre mí"],["/estudios","Estudios"],["/habilidades","Habilidades"],["/proyectos","Proyectos"],["/contacto","Contacto"]];
export default function Nav(){const p=usePathname();return <nav>{n.map(([h,t])=><Link key={h} href={h} className={p===h?"on":""}>{t}</Link>)}</nav>}
