import React from "react";

export interface PalliativeCareGoalsProps {
  surrogateName: string;
  surrogatePhone: string;
  relationship: string;
  primaryGoal: string;
  livingWillOnFile: boolean;
  className?: string;
}

export const PalliativeCareGoals: React.FC<PalliativeCareGoalsProps> = ({
  surrogateName,
  surrogatePhone,
  relationship,
  primaryGoal,
  livingWillOnFile,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Advance Care Directives</h4>
      <div className="mt-3 space-y-2 text-xs">
        <div>
          <span className="text-slate-400">Healthcare Proxy (Surrogate)</span>
          <p className="font-semibold text-slate-800 dark:text-slate-200">{surrogateName} ({relationship}) • {surrogatePhone}</p>
        </div>
        <div>
          <span className="text-slate-400">Primary Goal of Care</span>
          <p className="font-medium text-slate-700 dark:text-slate-300">{primaryGoal}</p>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className={`h-2 w-2 rounded-full ${livingWillOnFile ? "bg-emerald-500" : "bg-slate-400"}`} />
          <span className="text-[11px] text-slate-500">{livingWillOnFile ? "Living Will Verified on File" : "No Documented Living Will"}</span>
        </div>
      </div>
    </div>
  );
};
