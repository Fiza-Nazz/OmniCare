import React from "react";

export interface PolymyalgiaRheumaticaResponseProps {
  bilateralShoulderAchingSevere: string;
  morningStiffnessDurationMin: number;
  prednisoneResponseWithin72Hours: string;
  taperingScheduleMonths: number;
  className?: string;
}

export const PolymyalgiaRheumaticaResponse: React.FC<PolymyalgiaRheumaticaResponseProps> = ({
  bilateralShoulderAchingSevere,
  morningStiffnessDurationMin,
  prednisoneResponseWithin72Hours,
  taperingScheduleMonths,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Polymyalgia Rheumatica (PMR Response)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Geriatric Rheumatology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bilateral Girdle Pain:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bilateralShoulderAchingSevere}</strong></div>
        <div className="flex justify-between"><span>Morning Stiffness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${morningStiffnessDurationMin} min`}</strong></div>
        <div className="flex justify-between"><span>Prednisone 15mg Rapid Relief:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prednisoneResponseWithin72Hours}</strong></div>
        <div className="flex justify-between"><span>Planned Glucocorticoid Taper:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${taperingScheduleMonths} months`}</strong></div>
      </div>
    </div>
  );
};
