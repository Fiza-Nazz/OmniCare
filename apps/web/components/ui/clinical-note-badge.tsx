import React from "react";

export type NoteStatus = "draft" | "preliminary" | "signed" | "addendum";

export interface ClinicalNoteBadgeProps {
  status: NoteStatus;
  className?: string;
}

const statusTheme: Record<NoteStatus, { bg: string; text: string; label: string; icon: string }> = {
  draft: { bg: "bg-amber-50 border-amber-200 dark:bg-amber-950", text: "text-amber-800 dark:text-amber-300", label: "Draft", icon: "✏️" },
  preliminary: { bg: "bg-sky-50 border-sky-200 dark:bg-sky-950", text: "text-sky-800 dark:text-sky-300", label: "Preliminary", icon: "⏳" },
  signed: { bg: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950", text: "text-emerald-800 dark:text-emerald-300", label: "Signed & Locked", icon: "🔒" },
  addendum: { bg: "bg-purple-50 border-purple-200 dark:bg-purple-950", text: "text-purple-800 dark:text-purple-300", label: "Addendum", icon: "📎" },
};

export const ClinicalNoteBadge: React.FC<ClinicalNoteBadgeProps> = ({ status, className = "" }) => {
  const config = statusTheme[status];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-xs font-bold ${config.bg} ${config.text} ${className}`}>
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
};
