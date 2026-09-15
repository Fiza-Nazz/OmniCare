import React from "react";

export interface CautiCatheterIndicationAuditProps {
  houdiniCriteriaMet: string;
  foleyDaysElapsed: number;
  dailyNurseRemovalPrompt: string;
  alternativeUrinaryDevice: string;
  className?: string;
}

export const CautiCatheterIndicationAudit: React.FC<CautiCatheterIndicationAuditProps> = ({
  houdiniCriteriaMet,
  foleyDaysElapsed,
  dailyNurseRemovalPrompt,
  alternativeUrinaryDevice,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CAUTI HOUDINI Protocol Audit</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CAUTI Prevention
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Valid HOUDINI Indication:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{houdiniCriteriaMet}</strong></div>
        <div className="flex justify-between"><span>Indwelling Catheter Days:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${foleyDaysElapsed} Days`}</strong></div>
        <div className="flex justify-between"><span>Nurse-Driven Removal Protocol:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dailyNurseRemovalPrompt}</strong></div>
        <div className="flex justify-between"><span>External Male/Female Alternative:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{alternativeUrinaryDevice}</strong></div>
      </div>
    </div>
  );
};
