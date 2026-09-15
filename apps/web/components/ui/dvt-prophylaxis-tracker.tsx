import React from "react";

export interface DvtProphylaxisTrackerProps {
  mechanicalActive: boolean; // SCD sleeves on
  pharmacologicActive: boolean; // Enoxaparin / Heparin
  contraindicated: boolean;
  className?: string;
}

export const DvtProphylaxisTracker: React.FC<DvtProphylaxisTrackerProps> = ({
  mechanicalActive,
  pharmacologicActive,
  contraindicated,
  className = "",
}) => {
  const isCompliant = (mechanicalActive || pharmacologicActive) || contraindicated;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isCompliant ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30" : "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">VTE / DVT Prevention Bundle</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isCompliant ? "bg-emerald-200 text-emerald-900" : "bg-rose-200 text-rose-900"}`}>
          {isCompliant ? "Compliant" : "NON-COMPLIANT"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Sequential Compression Devices (SCD): {mechanicalActive ? "Active & Pumping ✓" : "Off Patient ✗"}</p>
        <p>• Pharmacologic Anticoagulation: {pharmacologicActive ? "Active LMWH Order ✓" : (contraindicated ? "Contraindicated (Bleeding Risk)" : "No Order ✗")}</p>
      </div>
    </div>
  );
};
