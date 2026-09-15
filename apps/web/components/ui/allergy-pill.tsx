import React from "react";

export type AllergySeverity = "mild" | "moderate" | "severe";

export interface AllergyPillProps {
  allergen: string;
  reaction?: string;
  severity?: AllergySeverity;
  onRemove?: () => void;
  className?: string;
}

const severityConfig: Record<AllergySeverity, { bg: string; text: string; border: string; label: string }> = {
  mild: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-800 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", label: "Mild" },
  moderate: { bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-800 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", label: "Moderate" },
  severe: { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-800 dark:text-rose-300", border: "border-rose-300 dark:border-rose-800", label: "Severe" },
};

export const AllergyPill: React.FC<AllergyPillProps> = ({
  allergen,
  reaction,
  severity = "moderate",
  onRemove,
  className = "",
}) => {
  const config = severityConfig[severity];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${config.bg} ${config.border} ${config.text} ${className}`}
    >
      <span className="font-bold">{allergen}</span>
      {reaction && <span className="opacity-80">({reaction})</span>}
      <span className="rounded px-1 text-[10px] font-bold uppercase tracking-wider bg-black/5 dark:bg-white/10">
        {config.label}
      </span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 rounded p-0.5 hover:bg-black/10 focus:outline-none dark:hover:bg-white/20"
          aria-label={`Remove allergy ${allergen}`}
        >
          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
};
