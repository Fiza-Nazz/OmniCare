import React from "react";

export interface AnesthesiaDifficultAirwayCartProps {
  videoLaryngoscopeBlade: string;
  frovaBougieSealed: string;
  lmaSupraglotticReady: string;
  cricothyrotomyTray: string;
  className?: string;
}

export const AnesthesiaDifficultAirwayCart: React.FC<AnesthesiaDifficultAirwayCartProps> = ({
  videoLaryngoscopeBlade,
  frovaBougieSealed,
  lmaSupraglotticReady,
  cricothyrotomyTray,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Difficult Airway Cart Inventory</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Airway Readiness
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Video Laryngoscopy Blade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{videoLaryngoscopeBlade}</strong></div>
        <div className="flex justify-between"><span>Endotracheal Bougie:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{frovaBougieSealed}</strong></div>
        <div className="flex justify-between"><span>Supraglottic Airway (LMA):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lmaSupraglotticReady}</strong></div>
        <div className="flex justify-between"><span>Surgical Cricothyrotomy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cricothyrotomyTray}</strong></div>
      </div>
    </div>
  );
};
