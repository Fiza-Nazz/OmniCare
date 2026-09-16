import React from "react";

export interface IntracranialAneurysmHuntHessProps {
  huntHessGrade: string;
  cranialNervePalsy: string;
  severeNuchalRigidity: string;
  earlyClippingCoilingReadiness: string;
  className?: string;
}

export const IntracranialAneurysmHuntHess: React.FC<IntracranialAneurysmHuntHessProps> = ({
  huntHessGrade,
  cranialNervePalsy,
  severeNuchalRigidity,
  earlyClippingCoilingReadiness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hunt & Hess SAH Clinical Grade</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Aneurysm SAH
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Clinical Hunt & Hess Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{huntHessGrade}</strong></div>
        <div className="flex justify-between"><span>Oculomotor (CN III) Compression:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cranialNervePalsy}</strong></div>
        <div className="flex justify-between"><span>Nuchal Rigidity / Meningismus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{severeNuchalRigidity}</strong></div>
        <div className="flex justify-between"><span>Endovascular Coiling Timetable:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{earlyClippingCoilingReadiness}</strong></div>
      </div>
    </div>
  );
};
