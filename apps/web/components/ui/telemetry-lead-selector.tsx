import React from "react";

export type EcgLead = "I" | "II" | "III" | "aVR" | "aVL" | "aVF" | "V1" | "V2" | "V3" | "V4" | "V5" | "V6";

export interface TelemetryLeadSelectorProps {
  selectedLead: EcgLead;
  onSelectLead: (lead: EcgLead) => void;
  className?: string;
}

const leads: EcgLead[] = ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"];

export const TelemetryLeadSelector: React.FC<TelemetryLeadSelectorProps> = ({
  selectedLead,
  onSelectLead,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-1 p-2 rounded-lg bg-slate-900 ${className}`}>
      {leads.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onSelectLead(l)}
          className={`rounded px-2.5 py-1 text-xs font-mono font-bold transition-colors ${
            selectedLead === l ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};
