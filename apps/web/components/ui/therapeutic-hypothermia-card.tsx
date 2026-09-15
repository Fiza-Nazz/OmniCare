import React from "react";

export type TtmPhase = "Induction (Cooling)" | "Maintenance (33°C)" | "Rewarming (0.25°C/hr)" | "Normothermia";

export interface TherapeuticHypothermiaCardProps {
  phase: TtmPhase;
  currentCoreTempC: number;
  targetTempC: number;
  shiveringDetected: boolean;
  className?: string;
}

export const TherapeuticHypothermiaCard: React.FC<TherapeuticHypothermiaCardProps> = ({
  phase,
  currentCoreTempC,
  targetTempC,
  shiveringDetected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-sky-300 bg-sky-50/50 p-4 shadow-sm dark:border-sky-900 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-sky-200 pb-2 dark:border-sky-900">
        <h4 className="font-bold text-sm text-sky-950 dark:text-sky-200">❄️ TTM Protocol: {phase}</h4>
        <span className="font-mono font-bold text-sky-700 dark:text-sky-300">Core: {currentCoreTempC}°C</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-slate-600 dark:text-slate-400">
        <span>Target: <strong>{targetTempC}°C</strong></span>
        <span className={`font-bold ${shiveringDetected ? "text-rose-600" : "text-emerald-600"}`}>
          {shiveringDetected ? "Shivering Active (Sedation/Paralytic)" : "BSAS Shivering Score 0 ✓"}
        </span>
      </div>
    </div>
  );
};
