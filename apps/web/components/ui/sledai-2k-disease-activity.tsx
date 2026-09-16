import React from "react";

export interface Sledai2kDiseaseActivityProps {
  sledaiTotalScore: number;
  renalProteinuriaStatus: string;
  antiDsdnaTiterElevated: string;
  belimumabMycophenolatePrescribed: string;
  className?: string;
}

export const Sledai2kDiseaseActivity: React.FC<Sledai2kDiseaseActivityProps> = ({
  sledaiTotalScore,
  renalProteinuriaStatus,
  antiDsdnaTiterElevated,
  belimumabMycophenolatePrescribed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Systemic Lupus Flare (SLEDAI-2K)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Rheumatology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SLEDAI-2K Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sledaiTotalScore}</strong></div>
        <div className="flex justify-between"><span>Lupus Nephritis Activity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{renalProteinuriaStatus}</strong></div>
        <div className="flex justify-between"><span>Anti-dsDNA Elevation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{antiDsdnaTiterElevated}</strong></div>
        <div className="flex justify-between"><span>Immunosuppressive Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{belimumabMycophenolatePrescribed}</strong></div>
      </div>
    </div>
  );
};
