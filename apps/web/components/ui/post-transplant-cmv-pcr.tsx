import React from "react";

export interface PostTransplantCmvPcrProps {
  viralLoadCopiesMl: number;
  log10Copies: number;
  viremiaDetected: boolean;
  prophylaxisRegimen: string;
  className?: string;
}

export const PostTransplantCmvPcr: React.FC<PostTransplantCmvPcrProps> = ({
  viralLoadCopiesMl,
  log10Copies,
  viremiaDetected,
  prophylaxisRegimen,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CMV Quantitative PCR Surveillance</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${viremiaDetected ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"}`}>
          {viremiaDetected ? "CMV VIREMIA DETECTED" : "Undetectable (<100 copies)"}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>Viral Load: <strong className="font-mono text-slate-900 dark:text-white">{viralLoadCopiesMl} copies/mL</strong> ({log10Copies} log10)</p>
        <p>Prophylaxis: {prophylaxisRegimen}</p>
      </div>
    </div>
  );
};
