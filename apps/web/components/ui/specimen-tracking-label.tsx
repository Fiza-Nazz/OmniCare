import React from "react";

export interface SpecimenTrackingLabelProps {
  specimenId: string;
  tubeType: "Lavender (EDTA)" | "Gold (SST)" | "Light Blue (Sodium Citrate)" | "Green (Heparin)";
  collectedAt: string;
  collectorName: string;
  className?: string;
}

export const SpecimenTrackingLabel: React.FC<SpecimenTrackingLabelProps> = ({
  specimenId,
  tubeType,
  collectedAt,
  collectorName,
  className = "",
}) => {
  return (
    <div className={`rounded-lg border-2 border-slate-800 bg-white p-3 font-mono text-xs shadow-sm dark:bg-slate-950 dark:border-slate-600 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-1 dark:border-slate-800">
        <span className="font-bold text-slate-900 dark:text-white">LAB SPECIMEN</span>
        <span className="font-bold text-blue-600">{specimenId}</span>
      </div>
      <div className="mt-2 space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
        <p>Container: <strong className="text-slate-800 dark:text-slate-200">{tubeType}</strong></p>
        <p>Collected: {collectedAt}</p>
        <p>Collector: {collectorName}</p>
      </div>
    </div>
  );
};
