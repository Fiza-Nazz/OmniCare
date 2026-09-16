import React from "react";

export interface IntrauterinePregnancyYolkSacPocusProps {
  gestationalSacIdentified: string;
  yolkSacVisualized: string;
  embryonicCardiacActivityFhr: number;
  adnexalMassFreeFluid: string;
  className?: string;
}

export const IntrauterinePregnancyYolkSacPocus: React.FC<IntrauterinePregnancyYolkSacPocusProps> = ({
  gestationalSacIdentified,
  yolkSacVisualized,
  embryonicCardiacActivityFhr,
  adnexalMassFreeFluid,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Intrauterine Pregnancy (IUP) POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Obstetric POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Intrauterine Gestational Sac:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gestationalSacIdentified}</strong></div>
        <div className="flex justify-between"><span>True Yolk Sac (Excludes Pseudogestational):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{yolkSacVisualized}</strong></div>
        <div className="flex justify-between"><span>Embryonic Heart Rate (FHR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${embryonicCardiacActivityFhr} bpm`}</strong></div>
        <div className="flex justify-between"><span>Adnexal Tubal Ring / Free Fluid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{adnexalMassFreeFluid}</strong></div>
      </div>
    </div>
  );
};
