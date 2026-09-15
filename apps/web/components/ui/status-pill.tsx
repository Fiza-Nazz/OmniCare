import React from "react";

export type ClinicalSeverity = "resuscitation" | "emergent" | "urgent" | "less-urgent" | "non-urgent";

export interface StatusPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  severity: ClinicalSeverity;
  label?: string;
  pulse?: boolean;
}

const severityConfig: Record<ClinicalSeverity, { bg: string; text: string; dot: string; defaultLabel: string }> = {
  resuscitation: { bg: "bg-rose-100 dark:bg-rose-950", text: "text-rose-800 dark:text-rose-300", dot: "bg-rose-600", defaultLabel: "Resuscitation" },
  emergent: { bg: "bg-orange-100 dark:bg-orange-950", text: "text-orange-800 dark:text-orange-300", dot: "bg-orange-600", defaultLabel: "Emergent" },
  urgent: { bg: "bg-amber-100 dark:bg-amber-950", text: "text-amber-800 dark:text-amber-300", dot: "bg-amber-600", defaultLabel: "Urgent" },
  "less-urgent": { bg: "bg-sky-100 dark:bg-sky-950", text: "text-sky-800 dark:text-sky-300", dot: "bg-sky-600", defaultLabel: "Less Urgent" },
  "non-urgent": { bg: "bg-emerald-100 dark:bg-emerald-950", text: "text-emerald-800 dark:text-emerald-300", dot: "bg-emerald-600", defaultLabel: "Non-Urgent" },
};

export const StatusPill: React.FC<StatusPillProps> = ({
  severity,
  label,
  pulse = false,
  className = "",
  ...props
}) => {
  const config = severityConfig[severity];
  const displayLabel = label || config.defaultLabel;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${config.bg} ${config.text} ${className}`}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${config.dot}`} />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${config.dot}`} />
      </span>
      {displayLabel}
    </span>
  );
};
