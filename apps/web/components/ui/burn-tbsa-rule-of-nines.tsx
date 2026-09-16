import React from "react";

export interface BurnTbsaRuleOfNinesProps {
  headNeckTbsaPercent: number;
  anteriorTrunkTbsaPercent: number;
  posteriorTrunkTbsaPercent: number;
  totalSecondThirdDegreeTbsa: number;
  className?: string;
}

export const BurnTbsaRuleOfNines: React.FC<BurnTbsaRuleOfNinesProps> = ({
  headNeckTbsaPercent,
  anteriorTrunkTbsaPercent,
  posteriorTrunkTbsaPercent,
  totalSecondThirdDegreeTbsa,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Burn Surface Area (Rule of Nines)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Burn Triage
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Head & Neck:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${headNeckTbsaPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Anterior Torso:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${anteriorTrunkTbsaPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Posterior Torso:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${posteriorTrunkTbsaPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Total Resuscitative TBSA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalSecondThirdDegreeTbsa}%`}</strong></div>
      </div>
    </div>
  );
};
