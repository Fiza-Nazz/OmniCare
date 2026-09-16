import React from "react";

export interface FacialBurnAirwayEdemaMonitorProps {
  facialThirdsInvolvedCount: number;
  vocalCordEdemaGrade: string;
  endotrachealCuffLeakPresent: string;
  fiberopticIntubationReady: string;
  className?: string;
}

export const FacialBurnAirwayEdemaMonitor: React.FC<FacialBurnAirwayEdemaMonitorProps> = ({
  facialThirdsInvolvedCount,
  vocalCordEdemaGrade,
  endotrachealCuffLeakPresent,
  fiberopticIntubationReady,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Facial Burn Airway Swelling & Extubation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Airway Management
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Facial Zones Burned:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${facialThirdsInvolvedCount} / 3`}</strong></div>
        <div className="flex justify-between"><span>Laryngeal Edema:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vocalCordEdemaGrade}</strong></div>
        <div className="flex justify-between"><span>Cuff Leak on Deflation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{endotrachealCuffLeakPresent}</strong></div>
        <div className="flex justify-between"><span>Difficult Airway Cart Ready:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fiberopticIntubationReady}</strong></div>
      </div>
    </div>
  );
};
