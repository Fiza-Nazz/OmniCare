import React from "react";

export interface CrrtTransmembranePressureTmpProps {
  transmembranePressureMmHg: number;
  filterPressureDropMmHg: number;
  accessPressureMmHg: number;
  clottingRiskCategory: string;
  className?: string;
}

export const CrrtTransmembranePressureTmp: React.FC<CrrtTransmembranePressureTmpProps> = ({
  transmembranePressureMmHg,
  filterPressureDropMmHg,
  accessPressureMmHg,
  clottingRiskCategory,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CRRT Transmembrane Pressure (TMP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hemofiltration
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Circuit Transmembrane Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${transmembranePressureMmHg} mmHg (&lt;250 goal)`}</strong></div>
        <div className="flex justify-between"><span>Hollow Fiber Drop (ΔP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${filterPressureDropMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Vascular Access Arterial Pull:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${accessPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Circuit Lifespan Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clottingRiskCategory}</strong></div>
      </div>
    </div>
  );
};
