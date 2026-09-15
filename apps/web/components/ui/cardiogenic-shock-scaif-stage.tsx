import React from "react";

export interface CardiogenicShockScaifStageProps {
  scaiStage: string;
  cardiacIndexLMinM2: number;
  lactateMmolL: number;
  mechanicalSupport: string;
  className?: string;
}

export const CardiogenicShockScaifStage: React.FC<CardiogenicShockScaifStageProps> = ({
  scaiStage,
  cardiacIndexLMinM2,
  lactateMmolL,
  mechanicalSupport,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">SCAI Shock Staging System</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiogenic Shock
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SCAI Stage Designation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{scaiStage}</strong></div>
        <div className="flex justify-between"><span>Cardiac Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cardiacIndexLMinM2} L/min/m²`}</strong></div>
        <div className="flex justify-between"><span>Arterial Lactate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lactateMmolL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>MCS Device (Impella/IABP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mechanicalSupport}</strong></div>
      </div>
    </div>
  );
};
