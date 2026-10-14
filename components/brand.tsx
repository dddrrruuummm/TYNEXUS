import Image from "next/image";
export function Brand({light=false}:{light?:boolean}){return <span className={`brand-lockup${light?" brand-light":""}`}><Image src="/logo.svg" alt="" width={40} height={40}/><span><strong>TY NEXUS</strong><span>COMMERCE</span></span></span>;}
