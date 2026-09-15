import React from "react";

export interface AnaphylaxisRefractoryCardProps {
  patientOnBetaBlockers: boolean;
  epinephrineDosesGiven: number;
  className?: string;
}

export const AnaphylaxisRefractoryCard: React.FC<AnaphylaxisRefractoryCardProps> = ({
  patientOnBetaBlockers,
  epinephrineDosesGiven,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-sm dark:border-rose-900 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-bold text-rose-900 dark:text-rose-200 text-sm">Refractory Anaphylaxis Management</h4>
        <span className="font-mono font-bold text-rose-700">Epi given: {epinephrineDosesGiven}x</span>
      </div>
      <div className="mt-2 space-y-1 text-rose-950 dark:text-rose-300">
        <p>• First-line: Epinephrine 0.3-0.5 mg IM (1:1,000) into anterolateral thigh q5-15min</p>
        {patientOnBetaBlockers && (
          <p className="font-bold text-blue-700 dark:text-blue-300">
            ⚠️ Patient on Beta-Blockers: Administer Glucagon 1 - 5 mg IV push over 5 mins!
          </p>
        )}
        <p>• Large Volume Fluid: 1-2 Liters Normal Saline bolus for refractory vasodilation</p>
      </div>
    </div>
  );
};
