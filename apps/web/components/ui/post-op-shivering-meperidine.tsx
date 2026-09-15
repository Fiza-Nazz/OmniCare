import React from "react";

export interface PostOpShiveringMeperidineProps {
  shiveringSeverityGrade: string;
  treatmentDrug: string;
  rescueDoseMg: number;
  responseAt15Min: string;
  className?: string;
}

export const PostOpShiveringMeperidine: React.FC<PostOpShiveringMeperidineProps> = ({
  shiveringSeverityGrade,
  treatmentDrug,
  rescueDoseMg,
  responseAt15Min,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Post-Op Shivering (BSAS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PACU Comfort
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Shivering Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{shiveringSeverityGrade}</strong></div>
        <div className="flex justify-between"><span>Administered Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{treatmentDrug}</strong></div>
        <div className="flex justify-between"><span>Intravenous Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rescueDoseMg} mg`}</strong></div>
        <div className="flex justify-between"><span>15-Min Response:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{responseAt15Min}</strong></div>
      </div>
    </div>
  );
};
