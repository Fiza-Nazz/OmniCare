import React from "react";

export interface RightHeartCatheterizationPvrProps {
  meanPapMmHg: number;
  pcwpMmHg: number;
  cardiacOutputLMin: number;
  pvrWoodUnits: number;
  className?: string;
}

export const RightHeartCatheterizationPvr: React.FC<RightHeartCatheterizationPvrProps> = ({
  meanPapMmHg,
  pcwpMmHg,
  cardiacOutputLMin,
  pvrWoodUnits,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Right Heart Cath Hemodynamics</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pulmonary HTN
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Mean Pulmonary Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanPapMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Capillary Wedge (PCWP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pcwpMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Thermodilution Output:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cardiacOutputLMin} L/min`}</strong></div>
        <div className="flex justify-between"><span>Pulmonary Vascular Resistance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pvrWoodUnits} Wood Units`}</strong></div>
      </div>
    </div>
  );
};
