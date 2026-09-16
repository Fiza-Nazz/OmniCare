import React from "react";

export interface MycophenolateMofetilAncGiToxicityProps {
  currentDailyMmfDoseGrams: number;
  absoluteNeutrophilCount: number;
  gastrointestinalToxicitySeverity: string;
  temporaryDoseHoldRequired: string;
  className?: string;
}

export const MycophenolateMofetilAncGiToxicity: React.FC<MycophenolateMofetilAncGiToxicityProps> = ({
  currentDailyMmfDoseGrams,
  absoluteNeutrophilCount,
  gastrointestinalToxicitySeverity,
  temporaryDoseHoldRequired,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mycophenolate (CellCept) Safety</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          MMF Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Daily MMF Dosage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentDailyMmfDoseGrams} g/day`}</strong></div>
        <div className="flex justify-between"><span>Circulating Absolute Neutrophils:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${absoluteNeutrophilCount} /mm³ (&lt;1500 cut)`}</strong></div>
        <div className="flex justify-between"><span>Intractable Enteropathy Diarrhea:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gastrointestinalToxicitySeverity}</strong></div>
        <div className="flex justify-between"><span>Antimetabolite Pause Action:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{temporaryDoseHoldRequired}</strong></div>
      </div>
    </div>
  );
};
