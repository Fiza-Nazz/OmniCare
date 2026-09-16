import React from "react";

export interface RetinopathyPrematurityStagingProps {
  retinalZone: string;
  ropStage: number;
  plusDiseasePresent: string;
  bevacizumabLaserIndicated: string;
  className?: string;
}

export const RetinopathyPrematurityStaging: React.FC<RetinopathyPrematurityStagingProps> = ({
  retinalZone,
  ropStage,
  plusDiseasePresent,
  bevacizumabLaserIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Retinopathy of Prematurity (ICROP-3)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Ophthalmology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Retinal Zone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Zone ${retinalZone}`}</strong></div>
        <div className="flex justify-between"><span>ROP Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Stage ${ropStage}`}</strong></div>
        <div className="flex justify-between"><span>Plus Disease (+):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{plusDiseasePresent}</strong></div>
        <div className="flex justify-between"><span>Treatment Indicated:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bevacizumabLaserIndicated}</strong></div>
      </div>
    </div>
  );
};
