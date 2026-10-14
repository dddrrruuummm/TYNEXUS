import type {MetadataRoute} from "next";
import {site} from "@/lib/site";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["","about/","services/","showcase/","pricing/","contact/","privacy-policy/","terms/"].map(path=>({url:`${site.url}/${path}`,changeFrequency:path?"monthly":"weekly",priority:path?0.7:1}));}
