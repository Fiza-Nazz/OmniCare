import React from "react";

export interface IntraAbdominalHypertensionCardProps {
  bladderPressureMmHg: number;
  appMmHg: number;
  hypertensionGrade: string;
  decompressionStatus: string;
  className?: string;
}

export const IntraAbdominalHypertensionCard: React.FC<IntraAbdominalHypertensionCardProps> = ({
  bladderPressureMmHg,
  appMmHg,
  hypertensionGrade,
  decompressionStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Intra-Abdominal Pressure (IAP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Bladder Transduction
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bladder Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bladderPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Abdominal Perfusion (APP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${appMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>IAP Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypertensionGrade}</strong></div>
        <div className="flex justify-between"><span>Intervention:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{decompressionStatus}</strong></div>
      </div>
    </div>
  );
};
