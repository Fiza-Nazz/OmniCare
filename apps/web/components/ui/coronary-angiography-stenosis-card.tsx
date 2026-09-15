import React from "react";

export interface CoronaryAngiographyStenosisCardProps {
  culpritVessel: string;
  stenosisPercentage: number;
  timiFlowGrade: string;
  stentDeployed: string;
  className?: string;
}

export const CoronaryAngiographyStenosisCard: React.FC<CoronaryAngiographyStenosisCardProps> = ({
  culpritVessel,
  stenosisPercentage,
  timiFlowGrade,
  stentDeployed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Coronary Angiography Findings</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cath Lab Findings
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Involved Vessel:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{culpritVessel}</strong></div>
        <div className="flex justify-between"><span>Lumen Stenosis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${stenosisPercentage}%`}</strong></div>
        <div className="flex justify-between"><span>TIMI Flow Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{timiFlowGrade}</strong></div>
        <div className="flex justify-between"><span>Drug-Eluting Stent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{stentDeployed}</strong></div>
      </div>
    </div>
  );
};
