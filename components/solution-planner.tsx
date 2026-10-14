"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowUpRight,Check,Cpu,Server,CalendarDays} from "lucide-react";
import {gpuServers} from "@/lib/gpu-servers";
import {modes,contactHref} from "@/lib/site";
import {Button} from "./ui/button";

const arrangementIcons=[Server,Cpu,CalendarDays];
export function SolutionPlanner(){
 const [active,setActive]=useState(1);
 const [gpu,setGpu]=useState(gpuServers[0].id);
 const [quantity,setQuantity]=useState("1");
 const mode=modes[active];
 const model=gpuServers.find(item=>item.id===gpu)??gpuServers[0];
 const count=Number(quantity);
 const valid=quantity.trim()!==""&&Number.isInteger(count)&&count>=1&&count<=64;
 const href=contactHref(`${model.name} server · ${count} GPU${count===1?"":"s"}`,mode.interest);
 return <section className="shell solution-planner" id="project-scope" aria-labelledby="scope-heading">
  <div className="planner-heading"><h2 id="scope-heading">Start with your scope.</h2><p>Choose a commercial arrangement and a GPU direction. The complete system and any available capacity are confirmed in your quote.</p></div>
  <div className="planner-grid"><div className="arrangement-list" role="group" aria-label="Project arrangement">{modes.map((item,index)=>{const Icon=arrangementIcons[index];return <button type="button" key={item.id} aria-pressed={active===index} onClick={()=>setActive(index)}><Icon size={24} aria-hidden="true"/><span><strong>{item.label}</strong><small>{index===0?"Hardware ownership":index===1?"Compute access for your workload":"Physical hardware on an agreed term"}</small></span><ArrowUpRight size={19} aria-hidden="true"/></button>;})}</div>
  <div className="planner-detail"><h3>{mode.title}</h3><p>{mode.description}</p><div className="planner-fields"><div><label htmlFor="scope-gpu">GPU direction</label><select id="scope-gpu" value={gpu} onChange={event=>setGpu(event.target.value)}>{gpuServers.map(item=><option key={item.id} value={item.id}>{item.shortName} · {item.memory}</option>)}</select></div><div><label htmlFor="scope-count">Requested GPU count</label><input id="scope-count" type="number" inputMode="numeric" min={1} max={64} step={1} value={quantity} aria-invalid={!valid} aria-describedby="scope-count-note" onChange={event=>setQuantity(event.target.value)}/></div></div><p id="scope-count-note" className="fine-print">{valid?"GPU count per requested system or allocation. Platform limits and multi-node requirements are confirmed separately.":"Enter a whole number from 1 to 64."}</p><ul>{mode.brief.map(item=><li key={item}><Check size={16} aria-hidden="true"/>{item}</li>)}</ul>{valid?<Button asChild><Link href={href}>Request this scope <ArrowUpRight size={18}/></Link></Button>:<Button disabled>Request this scope <ArrowUpRight size={18}/></Button>}<Link className="text-link planner-price-link" href="/pricing/">View compute benchmarks</Link></div></div>
 </section>;
}
