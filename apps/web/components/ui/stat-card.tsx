import React from "react";

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    trend: "up" | "down" | "neutral";
  };
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  description,
  className = "",
}) => {
  const trendColors = {
    up: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/50",
    down: "text-rose-600 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/50",
    neutral: "text-slate-600 bg-slate-100 dark:text-slate-400 dark:bg-slate-800",
  };

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span>
        {icon && <div className="text-slate-400 dark:text-slate-500">{icon}</div>}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</span>
        {change && (
          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${trendColors[change.trend]}`}>
            {change.trend === "up" ? "+" : ""}{change.value}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
};
