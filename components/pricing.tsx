import Link from "next/link";
import {ArrowUpRight, ExternalLink} from "lucide-react";
import {gpuBenchmarks, gpuSource, serverBenchmarks, serverSource, pricingChecked, usd} from "@/lib/pricing";
import {contactHref} from "@/lib/site";
import {runpodSource} from "@/lib/gpu-servers";

export function PricingPreview() {
  return <section className="pricing-preview"><div className="shell">
    <div className="pricing-heading"><h2>Plan the spend.</h2><div><p>GPU hours or a dedicated server: start with a public market benchmark, then request a project-specific quote.</p><Link className="text-link" href="/pricing">Explore pricing <ArrowUpRight size={18}/></Link></div></div>
    <div className="price-highlights">
      <div><h3>A6000 compute</h3><p className="price-value">{usd(gpuBenchmarks[0].rate)}<span>/ GPU hour</span></p><p>48 GB GPU memory · Lambda reference</p></div>
      <div><h3>H100 PCIe compute</h3><p className="price-value">{usd(gpuBenchmarks[2].rate)}<span>/ GPU hour</span></p><p>80 GB GPU memory · Lambda reference</p></div>
      <div><h3>Dedicated server</h3><p className="price-value"><small>From</small>{usd(serverBenchmarks[0].rate)}<span>/ month</span></p><p>SYS-1 · OVHcloud US reference</p></div>
    </div>
    <p className="fine-print pricing-disclosure">USD market references checked {pricingChecked}, not confirmed TY Nexus prices. Availability, taxes, setup and extras vary.</p>
  </div></section>;
}

export function PricingTables() {
  return <>
    <section className="shell pricing-section" aria-labelledby="gpu-pricing">
      <div className="pricing-heading"><h2 id="gpu-pricing">Compare GPU rates</h2><p>USD per GPU hour, not per multi-GPU server. Rental and purchase inquiries are available for every GPU-based configuration below.</p></div>
      <table className="price-table"><caption className="sr-only">Single-GPU hourly market benchmarks in US dollars</caption><thead><tr><th scope="col">GPU</th><th scope="col">GPU memory</th><th scope="col">Reference rate</th><th scope="col">Rent or buy</th></tr></thead><tbody>{gpuBenchmarks.map(plan=><tr key={plan.id}><th scope="row">{plan.name}</th><td data-label="GPU memory">{plan.memory}</td><td data-label="USD / GPU hour" className="table-rate">{usd(plan.rate)}<span>/ GPU hour</span><a className="rate-provider" href={plan.source.url} target="_blank" rel="noopener noreferrer" aria-label={`${plan.source.name} price source for ${plan.name}`}>{plan.source.name}</a></td><td><div className="rate-actions"><Link className="text-link" href={contactHref(`${plan.name} server`,"Compute rental")}>Rent compute <ArrowUpRight size={16}/></Link><Link className="text-link" href={contactHref(`${plan.name} server`,"Server purchase")}>Buy server <ArrowUpRight size={16}/></Link></div></td></tr>)}</tbody></table>
      <div className="pricing-source"><p>{gpuSource.name} single-GPU instances and {runpodSource.name} Pods · checked {pricingChecked}. Extra storage, services, taxes and provider terms may change the total. Purchase prices are quoted separately.</p></div>
    </section>
    <section className="server-pricing" aria-labelledby="server-pricing"><div className="shell pricing-section">
      <div className="pricing-heading"><h2 id="server-pricing">Dedicated servers</h2><p>Monthly hosted bare-metal rental benchmarks from OVHcloud US. These are not GPU servers or shipped-equipment lease prices.</p></div>
      <table className="price-table"><caption className="sr-only">Hosted dedicated-server monthly starting-price benchmarks in US dollars</caption><thead><tr><th scope="col">Reference model</th><th scope="col">Processor</th><th scope="col">Starting rate</th><th scope="col">Inquiry</th></tr></thead><tbody>{serverBenchmarks.map(plan=><tr key={plan.id}><th scope="row">{plan.name}</th><td data-label="Processor">{plan.cpu}<span className="processor-detail">{plan.cores}</span></td><td data-label="From USD / month" className="table-rate">{usd(plan.rate)}<span>/ month</span></td><td><Link className="text-link" href={contactHref("Server leasing")}>Discuss leasing <ArrowUpRight size={16}/></Link></td></tr>)}</tbody></table>
      <div className="pricing-source"><p>Reference: {serverSource.name} · checked {pricingChecked}. Base advertised offers; configurations, locations, setup fees, tax and terms may differ.</p><a href={serverSource.url} target="_blank" rel="noopener noreferrer">View source <ExternalLink size={15}/></a></div>
    </div></section>
  </>;
}
