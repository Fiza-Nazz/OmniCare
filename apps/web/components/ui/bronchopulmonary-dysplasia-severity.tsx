import React from "react";

export interface BronchopulmonaryDysplasiaSeverityProps {
  postmenstrualAgeWeeks: number;
  fractionInspiredOxygen: number;
  positivePressureRequirement: string;
  bpdSeverityGrade: string;
  className?: string;
}

export const BronchopulmonaryDysplasiaSeverity: React.FC<BronchopulmonaryDysplasiaSeverityProps> = ({
  postmenstrualAgeWeeks,
  fractionInspiredOxygen,
  positivePressureRequirement,
  bpdSeverityGrade,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Bronchopulmonary Dysplasia (BPD Grade)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Chronic Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>PMA Assessment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postmenstrualAgeWeeks} weeks`}</strong></div>
        <div className="flex justify-between"><span>FiO2 Requirement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fractionInspiredOxygen}%`}</strong></div>
        <div className="flex justify-between"><span>Positive Airway Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{positivePressureRequirement}</strong></div>
        <div className="flex justify-between"><span>BPD Classification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bpdSeverityGrade}</strong></div>
      </div>
    </div>
  );
};
