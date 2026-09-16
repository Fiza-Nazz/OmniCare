import React from "react";

export interface HyperosmolarTherapyMannitolHtProps {
  hyperosmolarAgentChosen: string;
  deliveredBolusVolumeMl: number;
  serumSodiumMeqL: number;
  serumOsmolalityMsmKg: number;
  className?: string;
}

export const HyperosmolarTherapyMannitolHt: React.FC<HyperosmolarTherapyMannitolHtProps> = ({
  hyperosmolarAgentChosen,
  deliveredBolusVolumeMl,
  serumSodiumMeqL,
  serumOsmolalityMsmKg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hyperosmolar Brain Edema Rescue</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Herniation Rescue
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Acute Osmotic Agent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hyperosmolarAgentChosen}</strong></div>
        <div className="flex justify-between"><span>Infused Hypertonic Bolus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${deliveredBolusVolumeMl} mL IV`}</strong></div>
        <div className="flex justify-between"><span>Serum Sodium (Target 145-155):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumSodiumMeqL} mEq/L`}</strong></div>
        <div className="flex justify-between"><span>Serum Osmolality Safety:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumOsmolalityMsmKg} mOsm/kg (&lt;320)`}</strong></div>
      </div>
    </div>
  );
};
