import React from "react";

export interface PediatricGlasgowComaScaleProps {
  eyeScore: number;
  verbalScore: number;
  motorScore: number;
  totalScore: number;
  className?: string;
}

export const PediatricGlasgowComaScale: React.FC<PediatricGlasgowComaScaleProps> = ({
  eyeScore,
  verbalScore,
  motorScore,
  totalScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric GCS (Preverbal)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuro Score
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Eye Opening (E):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${eyeScore} / 4`}</strong></div>
        <div className="flex justify-between"><span>Verbal / Cry (V):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${verbalScore} / 5`}</strong></div>
        <div className="flex justify-between"><span>Motor Response (M):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${motorScore} / 6`}</strong></div>
        <div className="flex justify-between"><span>Composite Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalScore} / 15`}</strong></div>
      </div>
    </div>
  );
};
