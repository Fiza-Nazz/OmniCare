import React from "react";

export interface RenalHydronephrosisTwinklingArtifactProps {
  hydronephrosisGrade: string;
  twinklingArtifactColorDoppler: string;
  ureteralJetsSymmetric: string;
  perinephricUrinomaFluid: string;
  className?: string;
}

export const RenalHydronephrosisTwinklingArtifact: React.FC<RenalHydronephrosisTwinklingArtifactProps> = ({
  hydronephrosisGrade,
  twinklingArtifactColorDoppler,
  ureteralJetsSymmetric,
  perinephricUrinomaFluid,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Renal Hydronephrosis POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Renal POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Hydronephrosis Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hydronephrosisGrade}</strong></div>
        <div className="flex justify-between"><span>Calculus Twinkling Artifact:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{twinklingArtifactColorDoppler}</strong></div>
        <div className="flex justify-between"><span>Bladder Ureteral Influx Jets:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ureteralJetsSymmetric}</strong></div>
        <div className="flex justify-between"><span>Forniceal Rupture Urinoma:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{perinephricUrinomaFluid}</strong></div>
      </div>
    </div>
  );
};
