import React from "react";

export interface KidneyPancreasSimultaneousCPeptideProps {
  fastingCpeptideNgMl: number;
  exogenousInsulinRequirementUnits: number;
  allograftSerumAmylase: number;
  euglycemicStatus: string;
  className?: string;
}

export const KidneyPancreasSimultaneousCPeptide: React.FC<KidneyPancreasSimultaneousCPeptideProps> = ({
  fastingCpeptideNgMl,
  exogenousInsulinRequirementUnits,
  allograftSerumAmylase,
  euglycemicStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Simultaneous Pancreas-Kidney (SPK)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          SPK Transplant
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Stimulated C-Peptide Secretion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fastingCpeptideNgMl} ng/mL (&gt;1.0)`}</strong></div>
        <div className="flex justify-between"><span>Daily Exogenous Insulin Needed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${exogenousInsulinRequirementUnits} Units (0=independence)`}</strong></div>
        <div className="flex justify-between"><span>Allograft Serum Amylase:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${allograftSerumAmylase} U/L`}</strong></div>
        <div className="flex justify-between"><span>Endocrine Graft Function:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{euglycemicStatus}</strong></div>
      </div>
    </div>
  );
};
