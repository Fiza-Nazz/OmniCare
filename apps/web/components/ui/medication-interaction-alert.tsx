import React from "react";

export type InteractionSeverity = "contraindicated" | "major" | "moderate";

export interface MedicationInteractionAlertProps {
  drugA: string;
  drugB: string;
  severity: InteractionSeverity;
  monograph: string;
  className?: string;
}

const severityConfig: Record<InteractionSeverity, { title: string; badge: string; border: string }> = {
  contraindicated: { title: "CONTRAINDICATED COMBINATION", badge: "bg-rose-600 text-white", border: "border-rose-300 bg-rose-50 dark:bg-rose-950/40" },
  major: { title: "MAJOR DRUG INTERACTION", badge: "bg-orange-600 text-white", border: "border-orange-300 bg-orange-50 dark:bg-orange-950/40" },
  moderate: { title: "MODERATE INTERACTION", badge: "bg-amber-600 text-white", border: "border-amber-300 bg-amber-50 dark:bg-amber-950/40" },
};

export const MedicationInteractionAlert: React.FC<MedicationInteractionAlertProps> = ({
  drugA,
  drugB,
  severity,
  monograph,
  className = "",
}) => {
  const config = severityConfig[severity];

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${config.border} ${className}`}>
      <div className="flex items-center justify-between">
        <span className={`rounded px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${config.badge}`}>
          {config.title}
        </span>
        <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
          {drugA} + {drugB}
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        {monograph}
      </p>
    </div>
  );
};
