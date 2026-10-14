import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {site} from "@/lib/site";
import {Brand} from "./brand";
export function Footer(){return <footer className="footer"><div className="shell"><div className="footer-top"><Link href="/" aria-label="TY Nexus Commerce home"><Brand/></Link><p>Servers. Compute. Infrastructure.<br/>Salt Lake City, Utah.</p><div className="footer-contact"><a className="footer-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={18}/></a>{site.phone?<a className="footer-phone" href={`tel:${site.phone.replace(/[^+\d]/g,"")}`}>{site.phone}</a>:<p className="footer-phone">{site.previewPhone}</p>}</div></div><div className="footer-meta"><p>&copy; {new Date().getFullYear()} {site.legalName}</p><a href={site.maps} target="_blank" rel="noopener noreferrer">{site.address}</a><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div></footer>;}
