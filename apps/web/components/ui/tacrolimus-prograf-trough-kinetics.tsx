import React from "react";

export interface TacrolimusPrografTroughKineticsProps {
  measuredTroughLevelNgMl: number;
  targetTroughRange: string;
  monthsPostTransplant: number;
  recommendedDoseAdjustmentMg: number;
  className?: string;
}

export const TacrolimusPrografTroughKinetics: React.FC<TacrolimusPrografTroughKineticsProps> = ({
  measuredTroughLevelNgMl,
  targetTroughRange,
  monthsPostTransplant,
  recommendedDoseAdjustmentMg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tacrolimus (Prograf) Trough Kinetics</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Immunosuppression
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Whole Blood Trough (C0):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${measuredTroughLevelNgMl} ng/mL`}</strong></div>
        <div className="flex justify-between"><span>Phase Protocol Target:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetTroughRange}</strong></div>
        <div className="flex justify-between"><span>Post-Engraftment Longevity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${monthsPostTransplant} Months`}</strong></div>
        <div className="flex justify-between"><span>Recommended 12h Oral Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${recommendedDoseAdjustmentMg} mg BID`}</strong></div>
      </div>
    </div>
  );
};
