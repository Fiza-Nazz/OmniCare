import React from "react";

export type ESILevel = 1 | 2 | 3 | 4 | 5;

export interface TriageScoreCardProps {
  level: ESILevel;
  acuityDescription: string;
  recommendedWaitTime: string;
  resourceCount?: string;
  className?: string;
}

const esiConfig: Record<ESILevel, { color: string; label: string; bg: string }> = {
  1: { color: "text-rose-700 dark:text-rose-300", label: "Level 1: Resuscitation", bg: "bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-900" },
  2: { color: "text-orange-700 dark:text-orange-300", label: "Level 2: Emergent", bg: "bg-orange-50 border-orange-200 dark:bg-orange-950/40 dark:border-orange-900" },
  3: { color: "text-amber-700 dark:text-amber-300", label: "Level 3: Urgent", bg: "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-900" },
  4: { color: "text-blue-700 dark:text-blue-300", label: "Level 4: Less Urgent", bg: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-900" },
  5: { color: "text-emerald-700 dark:text-emerald-300", label: "Level 5: Non-Urgent", bg: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-900" },
};

export const TriageScoreCard: React.FC<TriageScoreCardProps> = ({
  level,
  acuityDescription,
  recommendedWaitTime,
  resourceCount,
  className = "",
}) => {
  const config = esiConfig[level];

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${config.bg} ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className={`text-base font-bold ${config.color}`}>{config.label}</h4>
        <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs font-mono font-bold dark:bg-white/10">
          ESI-{level}
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">{acuityDescription}</p>
      <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2 text-xs dark:border-white/10">
        <span>Target Bed Placement: <strong>{recommendedWaitTime}</strong></span>
        {resourceCount && <span>Resources: <strong>{resourceCount}</strong></span>}
      </div>
    </div>
  );
};
