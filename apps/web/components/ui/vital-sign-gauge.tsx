import React from "react";

export type VitalStatus = "normal" | "warning" | "critical";

export interface VitalSignGaugeProps {
  label: string;
  value: string | number;
  unit: string;
  status?: VitalStatus;
  normalRange?: string;
  icon?: React.ReactNode;
  className?: string;
}

const statusTheme: Record<VitalStatus, { border: string; bg: string; text: string; badge: string }> = {
  normal: {
    border: "border-emerald-200 dark:border-emerald-800",
    bg: "bg-emerald-50/50 dark:bg-emerald-950/30",
    text: "text-emerald-700 dark:text-emerald-300",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  },
  warning: {
    border: "border-amber-200 dark:border-amber-800",
    bg: "bg-amber-50/50 dark:bg-amber-950/30",
    text: "text-amber-700 dark:text-amber-300",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  },
  critical: {
    border: "border-rose-200 dark:border-rose-800",
    bg: "bg-rose-50/50 dark:bg-rose-950/30",
    text: "text-rose-700 dark:text-rose-300",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  },
};

export const VitalSignGauge: React.FC<VitalSignGaugeProps> = ({
  label,
  value,
  unit,
  status = "normal",
  normalRange,
  icon,
  className = "",
}) => {
  const theme = statusTheme[status];

  return (
    <div
      className={`rounded-xl border p-4 transition-all shadow-sm ${theme.border} ${theme.bg} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </span>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
          {value}
        </span>
        <span className="text-xs font-medium text-slate-500">{unit}</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${theme.badge}`}>
          {status}
        </span>
        {normalRange && (
          <span className="text-slate-400 text-[11px]">Ref: {normalRange}</span>
        )}
      </div>
    </div>
  );
};
