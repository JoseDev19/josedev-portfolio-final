import {NextResponse} from "next/server";import nodemailer from "nodemailer";
export async function POST(r:Request){const b=await r.json();const x:any=Object.fromEntries(Object.entries(b).map(([k,v])=>[k,String(v||"").slice(0,2000)]));
 if(!x.nombre||!/^\S+@\S+\.\S+$/.test(x.email)||!x.mensaje)return NextResponse.json({error:"Revisa los campos"},{status:400});
 try{const t=nodemailer.createTransport({service:"gmail",auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD}});
  await t.sendMail({from:process.env.GMAIL_USER,to:process.env.OWNER_EMAIL,replyTo:x.email,subject:`[Portfolio] Mensaje de ${x.nombre}`,text:`Nombre: ${x.nombre}\nEmail: ${x.email}\n\n${x.mensaje}`})}
 catch{return NextResponse.json({error:"No se pudo enviar"},{status:500})}
 return NextResponse.json({ok:true})}
