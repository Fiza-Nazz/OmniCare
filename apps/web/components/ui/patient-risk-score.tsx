import React from "react";

export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface PatientRiskScoreProps {
  title: string;
  score: number;
  maxScore?: number;
  level: RiskLevel;
  className?: string;
}

const levelTheme: Record<RiskLevel, { badge: string; text: string }> = {
  low: { badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300", text: "text-emerald-700" },
  medium: { badge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300", text: "text-amber-700" },
  high: { badge: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300", text: "text-orange-700" },
  critical: { badge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300", text: "text-rose-700" },
};

export const PatientRiskScore: React.FC<PatientRiskScoreProps> = ({
  title,
  score,
  maxScore = 100,
  level,
  className = "",
}) => {
  const theme = levelTheme[level];

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500">{title}</span>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${theme.badge}`}>
          {level} Risk
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className={`text-2xl font-black ${theme.text}`}>{score}</span>
        <span className="text-xs text-slate-400">/{maxScore}</span>
      </div>
    </div>
  );
};
