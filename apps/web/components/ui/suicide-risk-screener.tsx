import React from "react";

export type SuicideRiskTier = "low" | "moderate" | "high";

export interface SuicideRiskScreenerProps {
  riskTier: SuicideRiskTier;
  observationRequired: boolean;
  screenedBy: string;
  screenedAt: string;
  className?: string;
}

const tierConfig: Record<SuicideRiskTier, { bg: string; text: string; label: string }> = {
  low: { bg: "bg-emerald-50 border-emerald-300 text-emerald-800", label: "Low Risk Protocol" },
  moderate: { bg: "bg-amber-50 border-amber-300 text-amber-800", label: "Moderate Risk Precautions" },
  high: { bg: "bg-rose-100 border-rose-400 text-rose-900", label: "HIGH RISK - 1:1 CONSTANT SITTER" },
};

export const SuicideRiskScreener: React.FC<SuicideRiskScreenerProps> = ({
  riskTier,
  observationRequired,
  screenedBy,
  screenedAt,
  className = "",
}) => {
  const config = tierConfig[riskTier];

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${config.bg} ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className={`text-sm font-black uppercase tracking-wider ${config.text}`}>
          C-SSRS: {config.label}
        </h4>
        {observationRequired && (
          <span className="rounded bg-rose-600 px-2 py-0.5 text-xs font-bold text-white">
            1:1 Sitter Assigned
          </span>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs opacity-80">
        <span>Evaluated by: {screenedBy}</span>
        <time>{screenedAt}</time>
      </div>
    </div>
  );
};
