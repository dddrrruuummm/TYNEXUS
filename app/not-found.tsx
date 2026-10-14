import Link from "next/link";
import {ArrowLeft} from "lucide-react";
export default function NotFound(){return <section className="shell page-intro not-found"><h1>Page not found.</h1><p>The page may have moved. <Link className="text-link" href="/"><ArrowLeft size={18}/> Return to TY Nexus</Link></p></section>;}
