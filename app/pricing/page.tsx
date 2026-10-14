import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {PageIntro, ContactBand} from "@/components/sections";
import {PricingTables} from "@/components/pricing";
import {ComputeEstimator} from "@/components/compute-estimator";
import {GpuServers} from "@/components/gpu-servers";
import {contactHref} from "@/lib/site";

export const metadata:Metadata={title:"Compute Rental & Server Sales",description:"Explore RTX 5090, B300, RTX PRO 6000 Blackwell and H200 server rental and purchase configurations, with USD compute benchmarks and project quotes.",alternates:{canonical:"/pricing/"},openGraph:{url:"/pricing/"}};

export default function Pricing() {
  return <div className="compute-page"><div className="compute-backdrop" aria-hidden="true"><Image src="/images/compute-datacenter.webp" alt="" fill priority sizes="100vw"/><div/></div><PageIntro title="GPU compute & servers"><p>RTX 5090. B300. RTX PRO 6000. H200.<br/>Rent the compute or purchase a server configured for your workload.</p><p>Public market references are not confirmed TY Nexus offers. Hardware configurations, availability and purchase prices require a written quote.</p><div className="compute-intro-links"><Link className="text-link" href="#gpu-servers">Explore configurations <ArrowUpRight size={18}/></Link><Link className="text-link" href="#gpu-pricing">Compare rental rates</Link></div></PageIntro><GpuServers/><PricingTables/><ComputeEstimator/><section className="purchase-pricing"><div className="shell pricing-heading"><h2>Buying the hardware?</h2><div><p>All featured GPU-based systems can be discussed for purchase as well as rental. Specify GPU count, CPU, RAM, storage and cooling for a complete server quote. Cabinets, cables and cooling equipment are quoted separately.</p><Link href={contactHref("Server purchase")} className="text-link">Request a hardware quote <ArrowUpRight size={18}/></Link></div></div></section><ContactBand/></div>;
}
