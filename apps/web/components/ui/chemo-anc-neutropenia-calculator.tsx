import React from "react";

export interface ChemoAncNeutropeniaCalculatorProps {
  totalWbcMm3: number;
  segmentedPolysPercent: number;
  bandsPercent: number;
  calculatedAnc: number;
  className?: string;
}

export const ChemoAncNeutropeniaCalculator: React.FC<ChemoAncNeutropeniaCalculatorProps> = ({
  totalWbcMm3,
  segmentedPolysPercent,
  bandsPercent,
  calculatedAnc,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Absolute Neutrophil Count (ANC)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Oncology ANC
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total White Blood Count:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalWbcMm3} /mm³`}</strong></div>
        <div className="flex justify-between"><span>Segmented Neutrophils:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${segmentedPolysPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Band Forms:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bandsPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Absolute Neutrophil Count:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedAnc} /mm³`}</strong></div>
      </div>
    </div>
  );
};
