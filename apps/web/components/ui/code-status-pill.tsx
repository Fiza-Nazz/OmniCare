import React from "react";

export type CodeStatus = "full_code" | "dnr" | "dni" | "comfort_measures";

export interface CodeStatusPillProps {
  status: CodeStatus;
  verifiedBy?: string;
  className?: string;
}

const statusTheme: Record<CodeStatus, { label: string; bg: string; text: string }> = {
  full_code: { label: "FULL CODE", bg: "bg-blue-600", text: "text-white" },
  dnr: { label: "DNR (Do Not Resuscitate)", bg: "bg-purple-700", text: "text-white" },
  dni: { label: "DNI (Do Not Intubate)", bg: "bg-purple-600", text: "text-white" },
  comfort_measures: { label: "Comfort Measures Only", bg: "bg-amber-600", text: "text-white" },
};

export const CodeStatusPill: React.FC<CodeStatusPillProps> = ({ status, verifiedBy, className = "" }) => {
  const config = statusTheme[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider ${config.bg} ${config.text} ${className}`}
      title={verifiedBy ? `Verified by ${verifiedBy}` : undefined}
    >
      <span>🛑</span>
      <span>{config.label}</span>
    </span>
  );
};
