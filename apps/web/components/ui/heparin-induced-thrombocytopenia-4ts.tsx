import React from "react";

export interface HeparinInducedThrombocytopenia4tsProps {
  thrombocytopeniaScore: number; // 0-2
  timingScore: number; // 0-2
  thrombosisScore: number; // 0-2
  otherCausesScore: number; // 0-2
  className?: string;
}

export const HeparinInducedThrombocytopenia4ts: React.FC<HeparinInducedThrombocytopenia4tsProps> = ({
  thrombocytopeniaScore,
  timingScore,
  thrombosisScore,
  otherCausesScore,
  className = "",
}) => {
  const totalScore = thrombocytopeniaScore + timingScore + thrombosisScore + otherCausesScore;
  const riskCategory = totalScore <= 3 ? "Low Probability (≤3)" : totalScore <= 5 ? "Intermediate Probability (4-5)" : "High Probability (6-8)";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HIT 4Ts Clinical Scoring System</h4>
        <span className="font-bold text-blue-600 font-mono">Score: {totalScore}/8</span>
      </div>
      <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">{riskCategory}</p>
      <div className="mt-2 grid grid-cols-4 gap-1 text-center text-[11px] text-slate-500">
        <div className="rounded bg-slate-50 p-1 dark:bg-slate-800">Platelets: {thrombocytopeniaScore}</div>
        <div className="rounded bg-slate-50 p-1 dark:bg-slate-800">Timing: {timingScore}</div>
        <div className="rounded bg-slate-50 p-1 dark:bg-slate-800">Thrombus: {thrombosisScore}</div>
        <div className="rounded bg-slate-50 p-1 dark:bg-slate-800">oTher: {otherCausesScore}</div>
      </div>
    </div>
  );
};
