import React from "react";

export interface HyperkalemiaCalciumGluconateShiftProps {
  serumPotassiumMeqL: number;
  peakedTWavesPresent: string;
  calciumGluconateGiven: string;
  insulinDextroseShiftTime: string;
  className?: string;
}

export const HyperkalemiaCalciumGluconateShift: React.FC<HyperkalemiaCalciumGluconateShiftProps> = ({
  serumPotassiumMeqL,
  peakedTWavesPresent,
  calciumGluconateGiven,
  insulinDextroseShiftTime,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Emergent Hyperkalemia Cocktail</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Potassium Crisis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Confirmed Serum Potassium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumPotassiumMeqL} mEq/L`}</strong></div>
        <div className="flex justify-between"><span>ECG Peaked T Waves / Sine Wave:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{peakedTWavesPresent}</strong></div>
        <div className="flex justify-between"><span>10% Calcium Gluconate (1-2g IV):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{calciumGluconateGiven}</strong></div>
        <div className="flex justify-between"><span>10U Regular Insulin + 50mL D50W:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{insulinDextroseShiftTime}</strong></div>
      </div>
    </div>
  );
};
