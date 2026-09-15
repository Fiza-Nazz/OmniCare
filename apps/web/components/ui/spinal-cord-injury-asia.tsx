import React from "react";

export type AsiaGrade = "A (Complete)" | "B (Sensory Incomplete)" | "C (Motor Incomplete < 3)" | "D (Motor Incomplete ≥ 3)" | "E (Normal)";

export interface SpinalCordInjuryAsiaProps {
  asiaGrade: AsiaGrade;
  neurologicalLevelOfInjury: string;
  sacralSparingConfirmed: boolean;
  className?: string;
}

export const SpinalCordInjuryAsia: React.FC<SpinalCordInjuryAsiaProps> = ({
  asiaGrade,
  neurologicalLevelOfInjury,
  sacralSparingConfirmed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ASIA Impairment Scale (ISNCSCI)</h4>
        <span className="rounded bg-purple-100 px-2 py-0.5 font-bold text-purple-800">
          Grade {asiaGrade}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Neurological Level of Injury (NLI): <strong>{neurologicalLevelOfInjury}</strong></p>
        <p>• Sacral Sparing (S4-S5 Deep Anal Pressure): {sacralSparingConfirmed ? "Intact ✓" : "Absent ✗"}</p>
      </div>
    </div>
  );
};
