import React from "react";

export type FetalCategory = "Category I (Normal)" | "Category II (Indeterminate)" | "Category III (Abnormal)";

export interface FetalHeartRateMonitorProps {
  baselineFhr: number;
  category: FetalCategory;
  variability: "Absent" | "Minimal" | "Moderate" | "Marked";
  uterineContractionFrequencyMin: number;
  className?: string;
}

export const FetalHeartRateMonitor: React.FC<FetalHeartRateMonitorProps> = ({
  baselineFhr,
  category,
  variability,
  uterineContractionFrequencyMin,
  className = "",
}) => {
  const isCategory3 = category.includes("III");

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${isCategory3 ? "border-rose-400 bg-rose-50 dark:border-rose-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="text-sm font-bold">Obstetrical EFM Telemetry</h4>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${isCategory3 ? "bg-rose-600 text-white" : "bg-emerald-100 text-emerald-800"}`}>
          {category}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs">
        <span>Baseline FHR: <strong className="font-bold">{baselineFhr} bpm</strong></span>
        <span>Variability: <strong>{variability}</strong></span>
        <span>Contractions: <strong>q{uterineContractionFrequencyMin}m</strong></span>
      </div>
    </div>
  );
};
