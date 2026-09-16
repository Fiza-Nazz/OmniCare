import React from "react";

export interface MacrophageActivationSyndromeScoreProps {
  ferritinLevelNgMl: number;
  plateletCountDropPerUl: number;
  serumTriglyceridesMgDl: number;
  anakinraIl1BlockadeInitiated: string;
  className?: string;
}

export const MacrophageActivationSyndromeScore: React.FC<MacrophageActivationSyndromeScoreProps> = ({
  ferritinLevelNgMl,
  plateletCountDropPerUl,
  serumTriglyceridesMgDl,
  anakinraIl1BlockadeInitiated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Macrophage Activation Syndrome (MAS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Rheumatology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Ferritin Cutoff (>684):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ferritinLevelNgMl} ng/mL`}</strong></div>
        <div className="flex justify-between"><span>Platelet Nadir:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plateletCountDropPerUl} /µL`}</strong></div>
        <div className="flex justify-between"><span>Triglycerides:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumTriglyceridesMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Anakinra IL-1 Inhibition:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anakinraIl1BlockadeInitiated}</strong></div>
      </div>
    </div>
  );
};
