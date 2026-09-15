import React from "react";

export interface PediatricDilatedCardiomyopathyZscoreProps {
  lveddDimensionMm: number;
  lveddZScoreValue: number;
  heartFailureSerumBnp: number;
  unosTransplantListingStatus: string;
  className?: string;
}

export const PediatricDilatedCardiomyopathyZscore: React.FC<PediatricDilatedCardiomyopathyZscoreProps> = ({
  lveddDimensionMm,
  lveddZScoreValue,
  heartFailureSerumBnp,
  unosTransplantListingStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric Dilated Cardiomyopathy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Heart Failure
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Left Ventricular Dimension:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lveddDimensionMm} mm`}</strong></div>
        <div className="flex justify-between"><span>BSA Adjusted LVEDD Z-Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lveddZScoreValue} (&gt;+2.0 dilated)`}</strong></div>
        <div className="flex justify-between"><span>Circulating NT-proBNP Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${heartFailureSerumBnp} pg/mL`}</strong></div>
        <div className="flex justify-between"><span>UNOS Pediatric Status 1A/1B:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{unosTransplantListingStatus}</strong></div>
      </div>
    </div>
  );
};
