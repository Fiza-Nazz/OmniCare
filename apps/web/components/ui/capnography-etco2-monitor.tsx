import React from "react";

export interface CapnographyEtco2MonitorProps {
  etco2MmHg: number;
  respiratoryRate: number;
  waveformShape: "Normal Square Wave" | "Bronchospasm Shark-Fin" | "Hypoventilation" | "Esophageal Intubation";
  className?: string;
}

export const CapnographyEtco2Monitor: React.FC<CapnographyEtco2MonitorProps> = ({
  etco2MmHg,
  respiratoryRate,
  waveformShape,
  className = "",
}) => {
  const isNormal = etco2MmHg >= 35 && etco2MmHg <= 45;

  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 text-emerald-400 font-mono shadow-md text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-sm">EtCO2 Capnography</span>
        <span className="text-white font-bold">{respiratoryRate} /min RR</span>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <span className="text-2xl font-black text-emerald-300">{etco2MmHg}</span>
          <span className="ml-1 text-slate-400">mmHg</span>
        </div>
        <span className={`text-xs ${isNormal ? "text-emerald-400" : "text-amber-400"}`}>
          {waveformShape}
        </span>
      </div>
    </div>
  );
};
