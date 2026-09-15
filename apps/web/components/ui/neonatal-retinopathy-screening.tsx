import React from "react";

export interface NeonatalRetinopathyScreeningProps {
  gestationalAgeWeeks: number;
  ropZone: string;
  ropStage: string;
  plusDiseaseStatus: string;
  className?: string;
}

export const NeonatalRetinopathyScreening: React.FC<NeonatalRetinopathyScreeningProps> = ({
  gestationalAgeWeeks,
  ropZone,
  ropStage,
  plusDiseaseStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ROP Retinopathy Screening</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ophthalmology ROP
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Gestational Age at Birth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${gestationalAgeWeeks} Weeks`}</strong></div>
        <div className="flex justify-between"><span>Retina Zone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ropZone}</strong></div>
        <div className="flex justify-between"><span>Disease Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ropStage}</strong></div>
        <div className="flex justify-between"><span>Plus Disease (Vascular):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{plusDiseaseStatus}</strong></div>
      </div>
    </div>
  );
};
