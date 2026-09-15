import React from "react";

export interface CalciumChannelBlockerHieProps {
  insulinInfusionRateUnitsKgHr: number;
  bloodGlucoseMgDl: number;
  dextroseInfusionConcentration: string;
  mapRecoveryMmHg: number;
  className?: string;
}

export const CalciumChannelBlockerHie: React.FC<CalciumChannelBlockerHieProps> = ({
  insulinInfusionRateUnitsKgHr,
  bloodGlucoseMgDl,
  dextroseInfusionConcentration,
  mapRecoveryMmHg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CCB Toxicity High-Dose Insulin (HIET)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          HIET Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>HIET Insulin Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${insulinInfusionRateUnitsKgHr} units/kg/hr`}</strong></div>
        <div className="flex justify-between"><span>Point-of-Care Glucose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bloodGlucoseMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Hypertonic Dextrose Support:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dextroseInfusionConcentration}</strong></div>
        <div className="flex justify-between"><span>Mean Arterial Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${mapRecoveryMmHg} mmHg`}</strong></div>
      </div>
    </div>
  );
};
