import React from "react";

export interface NeonatalHypoglycemiaGlucoseGelProps {
  bloodGlucoseMgDl: number;
  gelDoseMl: number;
  feedVolumeMl: number;
  repeatCheckMinutes: number;
  className?: string;
}

export const NeonatalHypoglycemiaGlucoseGel: React.FC<NeonatalHypoglycemiaGlucoseGelProps> = ({
  bloodGlucoseMgDl,
  gelDoseMl,
  feedVolumeMl,
  repeatCheckMinutes,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Oral 40% Dextrose Gel</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neonatal Glucose
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Current Blood Sugar:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bloodGlucoseMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Dextrose 40% Gel Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${gelDoseMl} mL buccal`}</strong></div>
        <div className="flex justify-between"><span>Enteral Feed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${feedVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Post-Check Due:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${repeatCheckMinutes} min`}</strong></div>
      </div>
    </div>
  );
};
