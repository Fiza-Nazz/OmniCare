import React from "react";

export interface ToxicAlcoholOsmolGapProps {
  measuredOsmolality: number;
  calculatedOsmolality: number;
  osmolGap: number;
  fomepizoleIndicated: string;
  className?: string;
}

export const ToxicAlcoholOsmolGap: React.FC<ToxicAlcoholOsmolGapProps> = ({
  measuredOsmolality,
  calculatedOsmolality,
  osmolGap,
  fomepizoleIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Toxic Alcohol Osmol Gap (Fomepizole)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Medical Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Measured Serum Osmolality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${measuredOsmolality} mOsm/kg`}</strong></div>
        <div className="flex justify-between"><span>Calculated Osmolality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedOsmolality} mOsm/kg`}</strong></div>
        <div className="flex justify-between"><span>Osmol Gap:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${osmolGap} mOsm/kg`}</strong></div>
        <div className="flex justify-between"><span>Fomepizole Antidote:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fomepizoleIndicated}</strong></div>
      </div>
    </div>
  );
};
