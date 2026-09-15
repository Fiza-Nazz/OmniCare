import React from "react";

export interface ImmuneCheckpointColitisCardProps {
  dailyStoolIncrease: number;
  nciCtcaeGrade: string;
  immunotherapyAgent: string;
  systemicCorticosteroid: string;
  className?: string;
}

export const ImmuneCheckpointColitisCard: React.FC<ImmuneCheckpointColitisCardProps> = ({
  dailyStoolIncrease,
  nciCtcaeGrade,
  immunotherapyAgent,
  systemicCorticosteroid,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Immune-Mediated Colitis (irAE)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          irAE Management
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Stools Over Baseline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dailyStoolIncrease} / Day`}</strong></div>
        <div className="flex justify-between"><span>CTCAE Toxicity Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nciCtcaeGrade}</strong></div>
        <div className="flex justify-between"><span>Checkpoint Inhibitor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{immunotherapyAgent}</strong></div>
        <div className="flex justify-between"><span>High-Dose Steroid Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{systemicCorticosteroid}</strong></div>
      </div>
    </div>
  );
};
