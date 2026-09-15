import React from "react";

export interface PacuSedationScoreProps {
  rassScore: number;
  assessedAt: string;
  targetGoalScore?: number;
  className?: string;
}

export const PacuSedationScore: React.FC<PacuSedationScoreProps> = ({
  rassScore,
  assessedAt,
  targetGoalScore = -1,
  className = "",
}) => {
  const getRassLabel = (s: number) => {
    if (s === 0) return "Alert and Calm";
    if (s === -1) return "Drowsy";
    if (s === -2) return "Light Sedation";
    if (s === -3) return "Moderate Sedation";
    if (s === -4) return "Deep Sedation";
    if (s === -5) return "Unarousable";
    if (s === 1) return "Restless";
    if (s === 2) return "Agitated";
    if (s === 3) return "Very Agitated";
    return "Combative";
  };

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">RASS Sedation Assessment</h4>
        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800">
          Score: {rassScore > 0 ? `+${rassScore}` : rassScore} ({getRassLabel(rassScore)})
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
        <span>Target Goal: RASS {targetGoalScore}</span>
        <time>{assessedAt}</time>
      </div>
    </div>
  );
};
