import type {Metadata} from "next";
import Link from "next/link";
import {PageIntro,ContactBand} from "@/components/sections";
import {Catalog} from "@/components/catalog";
export const metadata:Metadata={title:"Equipment & Infrastructure",description:"Explore RTX 5090, B300, RTX PRO 6000 and H200 GPU directions, server systems, cabinets, cabling and cooling for purchase or rental inquiries.",alternates:{canonical:"/showcase/"},openGraph:{url:"/showcase/"}};
export default function Showcase(){return <><PageIntro title="The equipment index."><p>Compute, server hardware and the infrastructure around it. Select a direction and bring us the details of your project.</p><p>Exact configurations, models and availability are confirmed by inquiry.</p><Link href="/pricing/#gpu-servers" className="text-link gpu-index-link">RTX 5090, B300, RTX PRO 6000 & H200 servers</Link></PageIntro><Catalog/><ContactBand/></>;}
