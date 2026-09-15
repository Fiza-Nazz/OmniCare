import React from "react";

export interface IntracranialPressureGaugeProps {
  icpMmHg: number;
  mapMmHg: number;
  className?: string;
}

export const IntracranialPressureGauge: React.FC<IntracranialPressureGaugeProps> = ({
  icpMmHg,
  mapMmHg,
  className = "",
}) => {
  const cpp = mapMmHg - icpMmHg;
  const isHighIcp = icpMmHg > 20;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Neuro ICU: ICP & CPP Monitor</h4>
        <span className={`rounded px-2 py-0.5 text-xs font-bold ${isHighIcp ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"}`}>
          {isHighIcp ? "INTRACRANIAL HYPERTENSION" : "ICP Normal"}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4 text-center text-xs">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">ICP (mmHg)</span>
          <p className="text-xl font-black text-rose-600">{icpMmHg}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">CPP (MAP - ICP)</span>
          <p className="text-xl font-black text-blue-600">{cpp} mmHg</p>
        </div>
      </div>
    </div>
  );
};
