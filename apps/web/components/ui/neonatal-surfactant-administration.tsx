import React from "react";

export interface NeonatalSurfactantAdministrationProps {
  doseNumber: number;
  drugBrand: string;
  deliveryMethod: string;
  postFiO2Percent: number;
  className?: string;
}

export const NeonatalSurfactantAdministration: React.FC<NeonatalSurfactantAdministrationProps> = ({
  doseNumber,
  drugBrand,
  deliveryMethod,
  postFiO2Percent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neonatal Surfactant Therapy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Respiratory
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Dose Sequence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`#${doseNumber}`}</strong></div>
        <div className="flex justify-between"><span>Formulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{drugBrand}</strong></div>
        <div className="flex justify-between"><span>Delivery Method:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{deliveryMethod}</strong></div>
        <div className="flex justify-between"><span>Post-FiO2 Response:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postFiO2Percent}%`}</strong></div>
      </div>
    </div>
  );
};
