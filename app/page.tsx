import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight,ArrowDownRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {OwnershipSelector} from "@/components/ownership-selector";
import {ContactBand} from "@/components/sections";
import {PricingPreview} from "@/components/pricing";
export default function Home(){return <>
 <section className="hero"><Image src="/images/hero.webp" alt="Server cabinets and networking equipment in a data-center aisle" fill priority sizes="100vw"/><div className="hero-shade"/><div className="shell hero-content"><h1>TY NEXUS<br/>COMMERCE</h1><div className="hero-bottom"><p>Server sales. Compute rental.<br/>The infrastructure that connects it all.</p><Button variant="light" asChild><Link href="/showcase">Explore equipment <ArrowUpRight size={20}/></Link></Button></div></div></section>
 <div className="service-strip"><div className="shell"><span>Own the hardware.</span><span>Rent the compute.</span><span>Connect the infrastructure.</span><ArrowDownRight size={25} aria-hidden="true"/></div></div>
 <OwnershipSelector/>
 <PricingPreview/>
 <section className="infrastructure"><div className="shell infrastructure-heading"><h2>Servers.<br/>Fully connected.</h2><div><p>A compute project is more than a server. Bring the cabinet dimensions, connections and thermal requirements into the same conversation.</p><Link href="/showcase" className="text-link">View the equipment index <ArrowUpRight size={18}/></Link></div></div><div className="infrastructure-photos"><figure><Image src="/images/home-detail.webp" alt="Aisle between rows of physical server cabinets" width={1100} height={700} sizes="50vw"/><figcaption><span>Server systems</span><Link href="/services">Purchase, rental & leasing <ArrowUpRight size={17}/></Link></figcaption></figure><figure><Image src="/images/hardware-detail.webp" alt="Metal heatsink and physical components on a circuit board" width={1100} height={700} sizes="50vw"/><figcaption><span>Supporting infrastructure</span><Link href="/showcase">Cabinets, cabling & cooling <ArrowUpRight size={17}/></Link></figcaption></figure></div></section>
 <section className="shell approach"><h2>A brief before a box.</h2><div><p>Start with the workload. Align the hardware and the term. Define the site requirements and responsibilities. Then confirm a commercial scope that both sides understand.</p><Link className="text-link" href="/services">How we work <ArrowUpRight size={18}/></Link></div></section>
 <ContactBand/>
 </>;}
