import React from "react";

export interface DualAntiplateletDaptScoreProps {
  daptScore: number;
  p2y12Inhibitor: string;
  bleedingRiskTier: string;
  recommendedDurationMonths: number;
  className?: string;
}

export const DualAntiplateletDaptScore: React.FC<DualAntiplateletDaptScoreProps> = ({
  daptScore,
  p2y12Inhibitor,
  bleedingRiskTier,
  recommendedDurationMonths,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">DAPT Post-PCI Risk Score</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Antiplatelet Plan
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>DAPT Composite Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${daptScore}`}</strong></div>
        <div className="flex justify-between"><span>Prescribed P2Y12 Agent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{p2y12Inhibitor}</strong></div>
        <div className="flex justify-between"><span>ARC-HBR Bleeding Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bleedingRiskTier}</strong></div>
        <div className="flex justify-between"><span>Target Therapy Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${recommendedDurationMonths} Months`}</strong></div>
      </div>
    </div>
  );
};
