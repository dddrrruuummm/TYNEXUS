import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {gpuServers, runpodSource} from "@/lib/gpu-servers";
import {pricingChecked, usd} from "@/lib/pricing";
import {contactHref} from "@/lib/site";
import {Button} from "./ui/button";

export function GpuServers() {
  return <section className="shell gpu-systems" id="gpu-servers" aria-labelledby="gpu-systems-heading">
    <div className="pricing-heading"><h2 id="gpu-systems-heading">Rent compute.<br/>Own the server.</h2><p>Explore these GPU-based server configurations for rental or purchase. Exact builds, availability and commercial terms are confirmed by quote.</p></div>
    <div className="gpu-system-grid">{gpuServers.map(server=><article className="gpu-system" key={server.id}>
      <div className="gpu-system-image"><Image src={`/images/${server.image}.webp`} alt={server.alt} width={1200} height={900} sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"/></div>
      <h3>{server.shortName}</h3><p className="gpu-edition">{server.edition}</p>
      <p className="gpu-memory">{server.memory} {server.memoryType}<span>Memory per GPU</span></p>
      <p className="gpu-description">{server.description}</p>
      <div className="gpu-commercial"><p><span>Rental market reference</span><strong>{usd(server.rate)}<small>/ GPU hour</small></strong></p><p><span>Server purchase</span><strong className="purchase-quote">Quote to configuration</strong></p></div>
      <div className="gpu-actions"><Button variant="light" asChild><Link href={contactHref(`${server.name} server`,"Compute rental")} aria-label={`Rent ${server.shortName} compute`}>Rent compute <ArrowUpRight size={15}/></Link></Button><Button variant="plain" asChild><Link href={contactHref(`${server.name} server`,"Server purchase")} aria-label={`Buy ${server.shortName} server`}>Buy server <ArrowUpRight size={15}/></Link></Button></div>
    </article>)}</div>
    <div className="pricing-source"><p>{runpodSource.name} single-GPU references · {pricingChecked}. Not whole-server rental rates or TY Nexus offers. Chassis and complete-system specifications vary by quote; images do not establish stock or a certified design.</p><a href={runpodSource.url} target="_blank" rel="noopener noreferrer">Price source <ArrowUpRight size={15}/></a></div>
  </section>;
}
