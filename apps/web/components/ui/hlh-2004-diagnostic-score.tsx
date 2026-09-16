import React from "react";

export interface Hlh2004DiagnosticScoreProps {
  serumFerritinNgMl: number;
  solubleCd25UPerMl: number;
  boneMarrowHemophagocytosis: string;
  hlh2004CriteriaMetCount: number;
  className?: string;
}

export const Hlh2004DiagnosticScore: React.FC<Hlh2004DiagnosticScoreProps> = ({
  serumFerritinNgMl,
  solubleCd25UPerMl,
  boneMarrowHemophagocytosis,
  hlh2004CriteriaMetCount,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hemophagocytic Lymphohistiocytosis (HLH)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Critical Care Immunology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Ferritin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumFerritinNgMl} ng/mL`}</strong></div>
        <div className="flex justify-between"><span>Soluble CD25 (sIL-2R):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${solubleCd25UPerMl} U/mL`}</strong></div>
        <div className="flex justify-between"><span>Hemophagocytosis on Biopsy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{boneMarrowHemophagocytosis}</strong></div>
        <div className="flex justify-between"><span>HLH Criteria Met:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hlh2004CriteriaMetCount} / 8`}</strong></div>
      </div>
    </div>
  );
};
