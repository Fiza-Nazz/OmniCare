import React from "react";

export interface LeftVentricularEjectionFractionProps {
  lvefPercentage: number;
  heartFailureCategory: string;
  globalLongitudinalStrain: number;
  apicalWallMotion: string;
  className?: string;
}

export const LeftVentricularEjectionFraction: React.FC<LeftVentricularEjectionFractionProps> = ({
  lvefPercentage,
  heartFailureCategory,
  globalLongitudinalStrain,
  apicalWallMotion,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Left Ventricular EF (Echocardiogram)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Echo Hemodynamics
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Simpson Biplane LVEF:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lvefPercentage}%`}</strong></div>
        <div className="flex justify-between"><span>Heart Failure Subtype:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{heartFailureCategory}</strong></div>
        <div className="flex justify-between"><span>Strain (GLS):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${globalLongitudinalStrain}%`}</strong></div>
        <div className="flex justify-between"><span>Apical Segment Motion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{apicalWallMotion}</strong></div>
      </div>
    </div>
  );
};
