import React from "react";

export interface SurfactantTherapyProtocolProps {
  birthWeightGrams: number;
  surfactantAgent: string;
  doseVolumeMl: number;
  lisaMethodUsed: string;
  className?: string;
}

export const SurfactantTherapyProtocol: React.FC<SurfactantTherapyProtocolProps> = ({
  birthWeightGrams,
  surfactantAgent,
  doseVolumeMl,
  lisaMethodUsed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Surfactant Replacement Protocol (RDS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neonatal Respiratory
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Birth Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${birthWeightGrams} g`}</strong></div>
        <div className="flex justify-between"><span>Surfactant Formulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{surfactantAgent}</strong></div>
        <div className="flex justify-between"><span>Dose Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${doseVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Less Invasive (LISA/MIST):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lisaMethodUsed}</strong></div>
      </div>
    </div>
  );
};
