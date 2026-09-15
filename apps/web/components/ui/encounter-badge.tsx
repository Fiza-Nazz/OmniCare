import React from "react";

export type EncounterType = "inpatient" | "outpatient" | "emergency" | "telehealth" | "home-health";

export interface EncounterBadgeProps {
  type: EncounterType;
  label?: string;
  className?: string;
}

const typeStyles: Record<EncounterType, { bg: string; text: string; border: string; defaultLabel: string }> = {
  inpatient: { bg: "bg-indigo-50 dark:bg-indigo-950/40", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200", defaultLabel: "Inpatient" },
  outpatient: { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200", defaultLabel: "Outpatient" },
  emergency: { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200", defaultLabel: "Emergency" },
  telehealth: { bg: "bg-teal-50 dark:bg-teal-950/40", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200", defaultLabel: "Telehealth" },
  "home-health": { bg: "bg-purple-50 dark:bg-purple-950/40", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200", defaultLabel: "Home Health" },
};

export const EncounterBadge: React.FC<EncounterBadgeProps> = ({
  type,
  label,
  className = "",
}) => {
  const config = typeStyles[type];

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold ${config.bg} ${config.text} ${config.border} ${className}`}
    >
      {label || config.defaultLabel}
    </span>
  );
};
