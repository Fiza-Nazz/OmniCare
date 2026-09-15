import React from "react";

export type LabFlag = "normal" | "low" | "high" | "panic";

export interface LabResultRowProps {
  testName: string;
  value: string | number;
  unit: string;
  referenceRange: string;
  flag?: LabFlag;
  collectedAt?: string;
  className?: string;
}

const flagStyles: Record<LabFlag, { badge: string; text: string }> = {
  normal: { badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300", text: "text-slate-900 dark:text-white" },
  low: { badge: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300", text: "text-sky-600 dark:text-sky-400" },
  high: { badge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300", text: "text-amber-600 dark:text-amber-400" },
  panic: { badge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300", text: "text-rose-600 font-bold dark:text-rose-400" },
};

export const LabResultRow: React.FC<LabResultRowProps> = ({
  testName,
  value,
  unit,
  referenceRange,
  flag = "normal",
  collectedAt,
  className = "",
}) => {
  const style = flagStyles[flag];

  return (
    <div className={`flex items-center justify-between py-3 px-4 border-b border-slate-100 dark:border-slate-800 ${className}`}>
      <div>
        <h5 className="text-sm font-semibold text-slate-900 dark:text-white">{testName}</h5>
        {collectedAt && <span className="text-xs text-slate-400">{collectedAt}</span>}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className={`text-base font-bold ${style.text}`}>{value}</span>
          <span className="ml-1 text-xs text-slate-500">{unit}</span>
          <p className="text-[11px] text-slate-400">Ref: {referenceRange}</p>
        </div>
        {flag !== "normal" && (
          <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.badge}`}>
            {flag}
          </span>
        )}
      </div>
    </div>
  );
};
