import React from "react";

export interface AutologousBloodRecoveryCellSaverProps {
  aspiratedVolumeMl: number;
  reinfusedPrbcMl: number;
  productHematocrit: number;
  anticoagulantUsed: string;
  className?: string;
}

export const AutologousBloodRecoveryCellSaver: React.FC<AutologousBloodRecoveryCellSaverProps> = ({
  aspiratedVolumeMl,
  reinfusedPrbcMl,
  productHematocrit,
  anticoagulantUsed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Intraoperative Cell Saver Salvage</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cell Salvage
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Field Suction Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${aspiratedVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Reinfused Washed PRBC:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${reinfusedPrbcMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Washed Hematocrit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${productHematocrit}%`}</strong></div>
        <div className="flex justify-between"><span>Anticoagulant Protocol:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anticoagulantUsed}</strong></div>
      </div>
    </div>
  );
};
