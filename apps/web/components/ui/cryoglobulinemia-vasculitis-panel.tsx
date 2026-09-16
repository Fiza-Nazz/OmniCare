import React from "react";

export interface CryoglobulinemiaVasculitisPanelProps {
  cryocritPercent: number;
  complementC4MgDl: number;
  rheumatoidFactorIuMl: number;
  hepatitisCViralLoadDetected: string;
  className?: string;
}

export const CryoglobulinemiaVasculitisPanel: React.FC<CryoglobulinemiaVasculitisPanelProps> = ({
  cryocritPercent,
  complementC4MgDl,
  rheumatoidFactorIuMl,
  hepatitisCViralLoadDetected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cryoglobulinemic Vasculitis Panel</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Immunopathology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Cryocrit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cryocritPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Serum C4 Complement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${complementC4MgDl} mg/dL (Low)`}</strong></div>
        <div className="flex justify-between"><span>Rheumatoid Factor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rheumatoidFactorIuMl} IU/mL`}</strong></div>
        <div className="flex justify-between"><span>HCV RNA Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hepatitisCViralLoadDetected}</strong></div>
      </div>
    </div>
  );
};
