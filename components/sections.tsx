import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {Button} from "./ui/button";
import {site} from "@/lib/site";
export function PageIntro({title,children}:{title:string,children:React.ReactNode}){return <section className="shell page-intro"><h1>{title}</h1><div>{children}</div></section>;}
export function ContactBand(){return <section className="contact-band"><div className="shell contact-band-inner"><h2>Bring the workload.<br/>Define the system.</h2><div><p>Configuration, term, site requirements.<br/>Start with what your project needs.</p><Button variant="light" asChild><Link href="/contact">Discuss your project <ArrowUpRight size={19}/></Link></Button></div></div></section>;}
export function CompanyFacts(){return <dl className="company-facts"><div><dt>Company</dt><dd>{site.legalName}</dd></div><div><dt>Based in</dt><dd>Utah, United States</dd></div><div><dt>Principal office</dt><dd>{site.address}</dd></div></dl>;}
