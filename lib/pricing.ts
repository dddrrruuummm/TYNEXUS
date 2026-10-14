import {gpuServers, runpodSource} from "./gpu-servers";
// Public benchmarks, not TY Nexus offers. Recheck sources before changing the date.
export const pricingChecked = "October 14, 2026";
export const gpuSource = {name: "Lambda", url: "https://lambda.ai/instances"};
export const serverSource = {name: "OVHcloud US", url: "https://us.ovhcloud.com/deals/"};

export const gpuBenchmarks = [
  {id: "a6000", name: "NVIDIA A6000", memory: "48 GB", rate: 1.09, source:gpuSource},
  {id: "a100", name: "NVIDIA A100 PCIe", memory: "40 GB", rate: 1.99, source:gpuSource},
  {id: "h100", name: "NVIDIA H100 PCIe", memory: "80 GB", rate: 3.29, source:gpuSource},
  ...gpuServers.map(({id,name,memory,rate})=>({id,name,memory,rate,source:runpodSource})),
];

export const serverBenchmarks = [
  {id: "sys1", name: "SYS-1", cpu: "Intel Xeon E-2136", cores: "6 cores / 12 threads", rate: 30},
  {id: "advance1", name: "ADVANCE-1", cpu: "AMD EPYC 4244P", cores: "6 cores / 12 threads", rate: 147},
  {id: "rise5", name: "RISE-5", cpu: "AMD EPYC 7413", cores: "24 cores / 48 threads", rate: 199},
];

export const usd = (value: number) => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2,
}).format(value);
