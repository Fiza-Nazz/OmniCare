import React from "react";

export interface BloodCultureBottleTrackerProps {
  setNumber: number;
  collectionSite: string;
  collectedAt: string;
  incubationHours: number;
  growthDetected: boolean;
  className?: string;
}

export const BloodCultureBottleTracker: React.FC<BloodCultureBottleTrackerProps> = ({
  setNumber,
  collectionSite,
  collectedAt,
  incubationHours,
  growthDetected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${growthDetected ? "border-rose-400 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Blood Culture Set #{setNumber}</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${growthDetected ? "bg-rose-600 text-white animate-pulse" : "bg-slate-100 text-slate-700"}`}>
          {growthDetected ? "GROWTH DETECTED (ALERT)" : "No Growth to Date"}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between text-slate-500">
        <span>Site: <strong>{collectionSite}</strong></span>
        <span>Incubating: <strong>{incubationHours} hours</strong></span>
      </div>
    </div>
  );
};
