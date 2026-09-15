import React from "react";

export interface LocalAnestheticLipidRescueProps {
  suspectedAnestheticAgent: string;
  lipidEmulsionBolusMl: number;
  lipidMaintenanceRateMlMin: number;
  seizureCardiovascularCollapse: string;
  className?: string;
}

export const LocalAnestheticLipidRescue: React.FC<LocalAnestheticLipidRescueProps> = ({
  suspectedAnestheticAgent,
  lipidEmulsionBolusMl,
  lipidMaintenanceRateMlMin,
  seizureCardiovascularCollapse,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Local Anesthetic Systemic Toxicity (LAST)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          LAST Lipid Rescue
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Injected Local Anesthetic:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{suspectedAnestheticAgent}</strong></div>
        <div className="flex justify-between"><span>20% Lipid Emulsion Bolus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lipidEmulsionBolusMl} mL IV`}</strong></div>
        <div className="flex justify-between"><span>Continuous Infusion Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lipidMaintenanceRateMlMin} mL/min`}</strong></div>
        <div className="flex justify-between"><span>Cardiac Arrest / Seizures:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{seizureCardiovascularCollapse}</strong></div>
      </div>
    </div>
  );
};
