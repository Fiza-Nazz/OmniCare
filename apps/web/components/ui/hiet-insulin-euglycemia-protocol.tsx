import React from "react";

export interface HietInsulinEuglycemiaProtocolProps {
  insulinInfusionRateUnitsKgHr: number;
  dextroseInfusionRateGramsHr: number;
  pointOfCareGlucoseMgDl: number;
  serumPotassiumMeqPerL: number;
  className?: string;
}

export const HietInsulinEuglycemiaProtocol: React.FC<HietInsulinEuglycemiaProtocolProps> = ({
  insulinInfusionRateUnitsKgHr,
  dextroseInfusionRateGramsHr,
  pointOfCareGlucoseMgDl,
  serumPotassiumMeqPerL,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">High-Dose Insulin (HIET Protocol)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Critical Care Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Regular Insulin Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${insulinInfusionRateUnitsKgHr} units/kg/hr`}</strong></div>
        <div className="flex justify-between"><span>Dextrose Supplementation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dextroseInfusionRateGramsHr} g/hr`}</strong></div>
        <div className="flex justify-between"><span>Capillary Glucose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pointOfCareGlucoseMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Serum Potassium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumPotassiumMeqPerL} mEq/L`}</strong></div>
      </div>
    </div>
  );
};
