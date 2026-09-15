import React from "react";

export interface ObstetricPostpartumHemorrhageStageProps {
  pphStage: string;
  cumulativeQblMl: number;
  oxytocinStatus: string;
  secondLineUterotonic: string;
  className?: string;
}

export const ObstetricPostpartumHemorrhageStage: React.FC<ObstetricPostpartumHemorrhageStageProps> = ({
  pphStage,
  cumulativeQblMl,
  oxytocinStatus,
  secondLineUterotonic,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Obstetric PPH Stage Protocol</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Maternal Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>PPH Protocol Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pphStage}</strong></div>
        <div className="flex justify-between"><span>Quantitative Blood Loss:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cumulativeQblMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Oxytocin Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{oxytocinStatus}</strong></div>
        <div className="flex justify-between"><span>2nd-Line Uterotonics:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{secondLineUterotonic}</strong></div>
      </div>
    </div>
  );
};
