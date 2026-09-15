import React from "react";

export interface AtrialFibrillationChadsVascProps {
  chadsVascScore: number;
  annualStrokeRiskPercent: number;
  anticoagulationIndicated: string;
  recommendedNoac: string;
  className?: string;
}

export const AtrialFibrillationChadsVasc: React.FC<AtrialFibrillationChadsVascProps> = ({
  chadsVascScore,
  annualStrokeRiskPercent,
  anticoagulationIndicated,
  recommendedNoac,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CHA2DS2-VASc Stroke Risk</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Stroke Prevention
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Composite CHA2DS2-VASc:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${chadsVascScore} Points`}</strong></div>
        <div className="flex justify-between"><span>Annual Stroke Risk Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${annualStrokeRiskPercent}% / Year`}</strong></div>
        <div className="flex justify-between"><span>Oral Anticoagulation (OAC):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anticoagulationIndicated}</strong></div>
        <div className="flex justify-between"><span>First-Line NOAC Agent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{recommendedNoac}</strong></div>
      </div>
    </div>
  );
};
