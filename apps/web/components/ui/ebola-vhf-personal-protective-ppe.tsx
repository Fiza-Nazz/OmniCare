import React from "react";

export interface EbolaVhfPersonalProtectivePpeProps {
  paprAirflowVerified: string;
  fluidImpermeableCoverall: string;
  trainedObserverMonitored: string;
  doffingHandHygieneCycle: string;
  className?: string;
}

export const EbolaVhfPersonalProtectivePpe: React.FC<EbolaVhfPersonalProtectivePpeProps> = ({
  paprAirflowVerified,
  fluidImpermeableCoverall,
  trainedObserverMonitored,
  doffingHandHygieneCycle,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Viral Hemorrhagic Fever (VHF) PPE</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Special Pathogens
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>PAPR Positive Airflow Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{paprAirflowVerified}</strong></div>
        <div className="flex justify-between"><span>Fluid-Impermeable Suit & Hood:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fluidImpermeableCoverall}</strong></div>
        <div className="flex justify-between"><span>Trained Observer Checklist:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{trainedObserverMonitored}</strong></div>
        <div className="flex justify-between"><span>Alcohol Doffing Step-by-Step:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{doffingHandHygieneCycle}</strong></div>
      </div>
    </div>
  );
};
