import React from "react";

export interface SubarachnoidFisherGradeVasospasmProps {
  modifiedFisherGrade: string;
  cisternalBloodThicknessMm: number;
  intraventricularBloodBilateral: string;
  nimodipine60mgQ4hEnforced: string;
  className?: string;
}

export const SubarachnoidFisherGradeVasospasm: React.FC<SubarachnoidFisherGradeVasospasmProps> = ({
  modifiedFisherGrade,
  cisternalBloodThicknessMm,
  intraventricularBloodBilateral,
  nimodipine60mgQ4hEnforced,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Modified Fisher Grade (Vasospasm)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vasospasm Risk
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Modified Fisher CT Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{modifiedFisherGrade}</strong></div>
        <div className="flex justify-between"><span>Subarachnoid Clot Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cisternalBloodThicknessMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Bilateral Ventricular Inundation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intraventricularBloodBilateral}</strong></div>
        <div className="flex justify-between"><span>Enteral Nimodipine 60mg Q4H:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nimodipine60mgQ4hEnforced}</strong></div>
      </div>
    </div>
  );
};
