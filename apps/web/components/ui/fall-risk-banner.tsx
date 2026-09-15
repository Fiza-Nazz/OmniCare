import React from "react";

export interface FallRiskBannerProps {
  score: number;
  scaleName?: string;
  precautions?: string[];
  className?: string;
}

export const FallRiskBanner: React.FC<FallRiskBannerProps> = ({
  score,
  scaleName = "Morse Fall Scale",
  precautions = ["Bed Alarm Active", "Non-Skid Footwear", "Transfer Assist x2", "Call Light in Reach"],
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/40 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200">
            HIGH FALL RISK ({scaleName}: {score})
          </h4>
        </div>
        <span className="rounded bg-amber-200 px-2 py-0.5 text-xs font-bold text-amber-900 dark:bg-amber-900 dark:text-amber-100">
          PRECAUTIONS ON
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {precautions.map((p, idx) => (
          <span key={idx} className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-amber-800 border border-amber-200 dark:bg-slate-900 dark:border-amber-800 dark:text-amber-300">
            ✓ {p}
          </span>
        ))}
      </div>
    </div>
  );
};
