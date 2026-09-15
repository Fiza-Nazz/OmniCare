import React from "react";

export interface LaborPartogramCardProps {
  cervicalDilationCm: number;
  effacementPercent: number;
  fetalStation: string;
  membraneStatus: "Intact" | "SROM" | "AROM";
  examinedAt: string;
  className?: string;
}

export const LaborPartogramCard: React.FC<LaborPartogramCardProps> = ({
  cervicalDilationCm,
  effacementPercent,
  fetalStation,
  membraneStatus,
  examinedAt,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Obstetrical Labor Partogram</h4>
        <span className="font-mono text-slate-400">{examinedAt}</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Dilation</span>
          <p className="text-lg font-bold text-blue-600">{cervicalDilationCm} cm</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Effacement</span>
          <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{effacementPercent}%</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Station</span>
          <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{fetalStation}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Membranes</span>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">{membraneStatus}</p>
        </div>
      </div>
    </div>
  );
};
