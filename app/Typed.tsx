"use client";import {useEffect,useState} from "react";
export default function Typed({words}:{words:string[]}){const [w,setW]=useState(0);const [n,setN]=useState(0);const [del,setDel]=useState(false);
 useEffect(()=>{const cur=words[w];const full=n===cur.length&&!del;
  const t=setTimeout(()=>{if(!del){n<cur.length?setN(n+1):setDel(true)}else{if(n>0)setN(n-1);else{setDel(false);setW((w+1)%words.length)}}},full?1400:del?40:90);return()=>clearTimeout(t)},[n,del,w,words]);
 return <span>{words[w].slice(0,n)}<span className="cur">_</span></span>}
