import {gpuServers} from "./gpu-servers";
export const site={
 name:"TY Nexus Commerce",legalName:"TY Nexus Commerce Inc",
 url:(process.env.NEXT_PUBLIC_SITE_URL||"https://tynexus.com").replace(/\/$/,""),
 email:process.env.NEXT_PUBLIC_CONTACT_EMAIL||"contact@tynexus.com",
 phone:process.env.NEXT_PUBLIC_CONTACT_PHONE||"",previewPhone:"+1 (801) 555-0168",
 address:"1072 Blair St, Salt Lake City, UT 84111",
 maps:"https://www.google.com/maps/search/?api=1&hl=en&query=1072+Blair+St+Salt+Lake+City+UT+84111",
};
export const navigation=[{name:"Company",href:"/about"},{name:"Solutions",href:"/services"},{name:"Equipment",href:"/showcase"},{name:"Pricing",href:"/pricing"}];
export const modes=[
 {id:"purchase",label:"Buy servers",title:"Make the hardware yours.",description:"Purchase compute servers for a workload and deployment environment you define. Start with the configuration, not a generic box.",brief:["Workload and accelerator requirements","CPU, memory, storage and network","Quantity and destination","Rack, power and cooling compatibility"],interest:"Server purchase"},
 {id:"compute",label:"Rent compute",title:"Capacity for your next workload.",description:"Discuss compute capacity for a defined workload and term. Align the resources, access requirements and commercial scope before you commit.",brief:["Workload and required compute resources","Expected utilization and rental term","Access, software and data requirements","Location and start date"],interest:"Compute rental"},
 {id:"lease",label:"Lease a server",title:"A server for a defined term.",description:"Lease physical server hardware with a configuration and duration agreed for your project. Deployment and responsibilities are part of the conversation.",brief:["Server configuration and quantity","Lease term and deployment location","Maintenance and support responsibilities","Delivery, return and commercial terms"],interest:"Server leasing"},
];
export type Category="GPU systems"|"Servers"|"Compute & leasing"|"Infrastructure";
export type Equipment={id:string,name:string,category:Category,image:string,alt:string,description:string,requirements:string[],gpuModel?:string};
export const equipment:Equipment[]=[
 ...gpuServers.map(server=>({id:`gpu-${server.id}`,name:server.shortName,category:"GPU systems" as const,image:`${server.id}-accelerator`,alt:`Illustrative ${server.shortName}-class accelerator hardware; exact supplied design varies`,description:server.description,gpuModel:server.name,requirements:[`${server.memory} ${server.memoryType} per GPU`,server.edition,"GPU-based server build confirmed by quote"]})),
 {id:"compute-server",name:"Compute servers",category:"Servers",image:"compute-server",alt:"Unbranded rackmount compute server with ventilated front panel and drive bays",description:"Compute-oriented server systems scoped around your applications and resource requirements.",requirements:["Workload and accelerators","Memory and storage","Rack and power envelope"]},
 {id:"rackmount",name:"Rackmount systems",category:"Servers",image:"rackmount",alt:"Rack-mounted server hardware with visible front panels and drive bays",description:"Rack-based server hardware for defined installation and deployment requirements.",requirements:["Form factor and rack depth","CPU and memory configuration","Network interfaces"]},
 {id:"compute-rental",name:"Compute capacity",category:"Compute & leasing",image:"cabinets",alt:"Blade server modules installed in compute infrastructure",description:"Rental discussions for compute resources, workload duration and access requirements.",requirements:["Resource requirements","Rental duration","Software and access"]},
 {id:"server-leasing",name:"Dedicated server leasing",category:"Compute & leasing",image:"server-leasing",alt:"Server cabinets and equipment in a dedicated server environment",description:"Physical servers on an agreed lease term, with deployment responsibilities defined in writing.",requirements:["Configuration and quantity","Term and location","Support and return scope"]},
 {id:"cabinets",name:"Server cabinets",category:"Infrastructure",image:"compute-rental",alt:"Full-height server cabinets in an equipment room",description:"Cabinets and rack enclosures matched to equipment dimensions and site requirements.",requirements:["Rack height and depth","Load and access requirements","Airflow and installation"]},
 {id:"cables",name:"Network cabling",category:"Infrastructure",image:"cables",alt:"Network cables connected to rack-mounted equipment",description:"Cabling requirements for connections between servers, switches and supporting equipment.",requirements:["Connector and cable type","Length and quantity","Bandwidth and routing"]},
 {id:"network",name:"Rack connectivity",category:"Infrastructure",image:"network",alt:"Ethernet patch cables plugged into a network switch",description:"Rack-side networking accessories scoped to the ports, topology and equipment in your brief.",requirements:["Port and interface types","Equipment compatibility","Installation layout"]},
 {id:"cooling",name:"Cooling systems",category:"Infrastructure",image:"cooling",alt:"Industrial in-row cooling cabinet with ventilation grille and metal side panels",description:"Cooling equipment and supporting components discussed against the intended heat load and site.",requirements:["Heat load and airflow","Site and power requirements","Equipment compatibility"]},
];
export const contactHref=(interest:string,arrangement?:string)=>`/contact?interest=${encodeURIComponent(interest)}${arrangement?`&arrangement=${encodeURIComponent(arrangement)}`:""}`;
