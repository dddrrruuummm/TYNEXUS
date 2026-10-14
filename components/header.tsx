"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
import {Menu,X,ArrowUpRight} from "lucide-react";
import {Brand} from "./brand";
import {Button} from "./ui/button";
import {navigation} from "@/lib/site";
export function Header(){
 const [open,setOpen]=useState(false);const pathname=usePathname();
 useEffect(()=>{if(!open)return;const escape=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false);};window.addEventListener("keydown",escape);return()=>window.removeEventListener("keydown",escape);},[open]);
 return <header className="header"><div className="shell header-row"><Link href="/" aria-label="TY Nexus Commerce home" onClick={()=>setOpen(false)}><Brand/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item=><Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href)?"page":undefined}>{item.name}</Link>)}</nav><Button asChild className="header-contact"><Link href="/contact">Talk to TY Nexus <ArrowUpRight size={17}/></Link></Button><Button className="menu-button" variant="plain" size="icon" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="mobile-nav" title={open?"Close navigation":"Open navigation"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</Button></div>{open&&<nav className="mobile-nav shell" id="mobile-nav" aria-label="Mobile navigation">{[...navigation,{name:"Contact",href:"/contact"}].map(item=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.name}<ArrowUpRight size={20}/></Link>)}</nav>}</header>;
}
