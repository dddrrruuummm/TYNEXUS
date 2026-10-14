"use client";
import {useState} from "react";
import {gpuBenchmarks, usd} from "@/lib/pricing";

export function ComputeEstimator() {
  const [gpu, setGpu] = useState(gpuBenchmarks[0].id);
  const [hours, setHours] = useState("100");
  const plan = gpuBenchmarks.find(item => item.id === gpu) ?? gpuBenchmarks[0];
  const count = Number(hours);
  const valid = hours.trim() !== "" && Number.isInteger(count) && count >= 1 && count <= 744;
  return <section className="shell compute-estimator" aria-labelledby="estimate-heading">
    <div><h2 id="estimate-heading">Compute budget</h2><p>Estimate one GPU using the reference rates above. Storage, additional services and taxes are not included.</p></div>
    <div className="estimate-controls"><div className="estimate-field"><label htmlFor="reference-gpu">Reference GPU</label><select id="reference-gpu" value={gpu} onChange={event=>setGpu(event.target.value)}>{gpuBenchmarks.map(item=><option key={item.id} value={item.id}>{item.name} · {item.memory}</option>)}</select></div><div className="estimate-field"><label htmlFor="gpu-hours">GPU hours</label><input id="gpu-hours" type="number" inputMode="numeric" min={1} max={744} step={1} value={hours} aria-describedby="hours-help" aria-invalid={!valid} onChange={event=>setHours(event.target.value)}/></div><p id="hours-help" className="fine-print">Enter 1–744 whole hours for one GPU.</p><div className="estimate-result" aria-live="polite" aria-atomic="true"><span>Reference compute estimate</span><strong>{valid ? usd(plan.rate * count) : "—"}</strong><p>{valid ? `${count} hours × ${usd(plan.rate)} / GPU hour` : "Enter a whole number between 1 and 744."}</p></div></div>
  </section>;
}
