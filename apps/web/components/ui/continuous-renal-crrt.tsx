import React from "react";

export interface ContinuousRenalCrrtProps {
  mode: "CVVH" | "CVVHD" | "CVVHDF";
  bloodFlowMlMin: number;
  effluentDoseMlKgHr: number;
  transmembranePressureMmHg: number;
  filterHoursActive: number;
  className?: string;
}

export const ContinuousRenalCrrt: React.FC<ContinuousRenalCrrtProps> = ({
  mode,
  bloodFlowMlMin,
  effluentDoseMlKgHr,
  transmembranePressureMmHg,
  filterHoursActive,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CRRT Circuit: {mode}</h4>
        <span className="font-mono text-slate-500">Filter Life: {filterHoursActive}h</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Blood Flow</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{bloodFlowMlMin} mL/min</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Effluent Dose</span>
          <p className="font-bold text-blue-600">{effluentDoseMlKgHr} mL/kg/h</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">TMP</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{transmembranePressureMmHg} mmHg</p>
        </div>
      </div>
    </div>
  );
};
