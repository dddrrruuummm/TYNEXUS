"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,Search} from "lucide-react";
import {equipment,contactHref,type Category} from "@/lib/site";
export function Catalog(){
 const [category,setCategory]=useState<Category|"All">("All");const [query,setQuery]=useState("");
 const filtered=equipment.filter(item=>(category==="All"||item.category===category)&&`${item.name} ${item.category} ${item.description}`.toLowerCase().includes(query.trim().toLowerCase()));
 return <section className="shell catalog">
  <div className="catalog-tools"><div className="catalog-filters" role="group" aria-label="Equipment categories">{(["All","GPU systems","Servers","Compute & leasing","Infrastructure"] as const).map(item=><button type="button" key={item} onClick={()=>setCategory(item)} aria-pressed={category===item}>{item}</button>)}</div><label className="catalog-search"><Search size={18} aria-hidden="true"/><span className="sr-only">Search equipment</span><input type="search" placeholder="Search equipment" value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
  <p className="catalog-count" aria-live="polite">{filtered.length} equipment and service directions</p>
  <div className="equipment-grid">{filtered.map(item=>{
   const interest=item.gpuModel?`${item.gpuModel} server`:item.name;
   const inquiry=contactHref(interest,item.gpuModel?"Compute rental":undefined);
   return <article className="equipment" key={item.id}><Link className="equipment-photo" href={inquiry} aria-label={`Inquire about ${item.name}`}><Image src={`/images/${item.image}.webp`} alt={item.alt} fill sizes="(min-width: 1050px) 33vw, (min-width: 640px) 50vw, 100vw" className={item.id==="cooling"||item.gpuModel?"fit-contain":""}/><span className="photo-action"><ArrowUpRight size={20}/></span></Link><p className="equipment-category">{item.category}</p><h2><Link href={inquiry}>{item.name}</Link></h2><p>{item.description}</p><ul className="equipment-specs">{item.requirements.map(req=><li key={req}>{req}</li>)}</ul>{item.gpuModel?<div className="catalog-gpu-actions"><Link className="text-link" href={contactHref(interest,"Compute rental")} aria-label={`Rent ${item.name} from equipment`}>Rent compute <ArrowUpRight size={17}/></Link><Link className="text-link" href={contactHref(interest,"Server purchase")} aria-label={`Buy ${item.name} from equipment`}>Buy server <ArrowUpRight size={17}/></Link></div>:<Link className="text-link" href={inquiry}>Discuss requirements <ArrowUpRight size={17}/></Link>}</article>;
  })}</div>{!filtered.length&&<div className="empty-state"><h2>No matching equipment.</h2><p>Try a different term or clear the filters.</p><button type="button" className="button button-dark" onClick={()=>{setQuery("");setCategory("All");}}>Clear filters</button></div>}
 </section>;
}
