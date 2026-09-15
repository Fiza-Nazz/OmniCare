import React from "react";

export interface VentilatorSettingsCardProps {
  mode: string; // e.g. "PRVC", "SIMV", "Pressure Support"
  tidalVolumeMl: number;
  peepCmH2O: number;
  fio2Percent: number;
  respiratoryRateSet: number;
  pipCmH2O: number;
  className?: string;
}

export const VentilatorSettingsCard: React.FC<VentilatorSettingsCardProps> = ({
  mode,
  tidalVolumeMl,
  peepCmH2O,
  fio2Percent,
  respiratoryRateSet,
  pipCmH2O,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-teal-200 bg-teal-50/50 p-4 shadow-sm dark:border-teal-900 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-teal-100 pb-2 dark:border-teal-900">
        <h4 className="text-sm font-bold text-teal-950 dark:text-teal-200">ICU Ventilator: {mode}</h4>
        <span className="rounded bg-teal-200 px-2 py-0.5 text-[10px] font-black uppercase text-teal-900 dark:bg-teal-900 dark:text-teal-200">
          Invasive Mode
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-xs">
        <div className="rounded bg-white p-2 dark:bg-slate-800 shadow-xs">
          <span className="text-slate-400 text-[10px]">Vt (mL)</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{tidalVolumeMl}</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800 shadow-xs">
          <span className="text-slate-400 text-[10px]">PEEP</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{peepCmH2O}</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800 shadow-xs">
          <span className="text-slate-400 text-[10px]">FiO2 (%)</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{fio2Percent}%</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800 shadow-xs">
          <span className="text-slate-400 text-[10px]">Set RR</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{respiratoryRateSet}</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800 shadow-xs">
          <span className="text-slate-400 text-[10px]">PIP (cmH2O)</span>
          <p className="font-bold text-teal-700 dark:text-teal-300">{pipCmH2O}</p>
        </div>
      </div>
    </div>
  );
};
