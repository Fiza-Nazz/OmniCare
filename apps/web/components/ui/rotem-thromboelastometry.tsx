import React from "react";

export interface RotemThromboelastometryProps {
  exTemCtSeconds: number;
  fibTemMcfMm: number;
  hyperfibrinolysisDetected: boolean;
  className?: string;
}

export const RotemThromboelastometry: React.FC<RotemThromboelastometryProps> = ({
  exTemCtSeconds,
  fibTemMcfMm,
  hyperfibrinolysisDetected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ROTEM Viscoelastic Coagulation</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${hyperfibrinolysisDetected ? "bg-rose-600 text-white" : "bg-emerald-100 text-emerald-800"}`}>
          {hyperfibrinolysisDetected ? "TXA INDICATED (Lysis)" : "Clot Lysis Normal"}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">EXTEM CT</span>
          <p className="font-bold text-base text-slate-800 dark:text-slate-200">{exTemCtSeconds} s</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">FIBTEM MCF</span>
          <p className="font-bold text-base text-blue-600">{fibTemMcfMm} mm</p>
        </div>
      </div>
    </div>
  );
};
