import React from "react";

export interface ToxicAlcoholOsmolGapCardProps {
  measuredOsmolality: number;
  calculatedOsmolality: number;
  osmolGap: number;
  anionGapMetabolicAcidosis: string;
  className?: string;
}

export const ToxicAlcoholOsmolGapCard: React.FC<ToxicAlcoholOsmolGapCardProps> = ({
  measuredOsmolality,
  calculatedOsmolality,
  osmolGap,
  anionGapMetabolicAcidosis,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Osmolar Gap & Toxic Alcohols</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Toxic Alcohols
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Freezing-Point Osmolality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${measuredOsmolality} mOsm/kg`}</strong></div>
        <div className="flex justify-between"><span>Calculated Osmolality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedOsmolality} mOsm/kg`}</strong></div>
        <div className="flex justify-between"><span>Osmolar Gap Difference:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${osmolGap} mOsm/kg (&gt;10 alert)`}</strong></div>
        <div className="flex justify-between"><span>Anion Gap Acidosis (HAGMA):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anionGapMetabolicAcidosis}</strong></div>
      </div>
    </div>
  );
};
