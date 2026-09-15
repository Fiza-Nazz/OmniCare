import React from "react";

export interface DeliriumCamIcuCardProps {
  acuteOnsetFluctuating: boolean;
  inattentionPresent: boolean;
  alteredLevelOfConsciousness: boolean;
  disorganizedThinking: boolean;
  className?: string;
}

export const DeliriumCamIcuCard: React.FC<DeliriumCamIcuCardProps> = ({
  acuteOnsetFluctuating,
  inattentionPresent,
  alteredLevelOfConsciousness,
  disorganizedThinking,
  className = "",
}) => {
  const isDeliriumPositive =
    acuteOnsetFluctuating && inattentionPresent && (alteredLevelOfConsciousness || disorganizedThinking);

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isDeliriumPositive ? "border-amber-400 bg-amber-50 dark:border-amber-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">CAM-ICU Delirium Assessment</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isDeliriumPositive ? "bg-amber-600 text-white" : "bg-emerald-100 text-emerald-800"}`}>
          {isDeliriumPositive ? "CAM-ICU POSITIVE (Delirium)" : "CAM-ICU Negative"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>1. Acute Onset / Fluctuating Course: {acuteOnsetFluctuating ? "Yes" : "No"}</p>
        <p>2. Inattention (SAVEAHAART Letters): {inattentionPresent ? "Positive (>2 errors)" : "Intact"}</p>
        <p>3. Altered Consciousness (RASS ≠ 0): {alteredLevelOfConsciousness ? "Yes" : "No"}</p>
        <p>4. Disorganized Thinking: {disorganizedThinking ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};
