import React from "react";

export interface ChestTubeDrainCardProps {
  location: string;
  outputVolumeMl: number;
  airLeakPresent: boolean;
  suctionPressureCmH2O: number;
  className?: string;
}

export const ChestTubeDrainCard: React.FC<ChestTubeDrainCardProps> = ({
  location,
  outputVolumeMl,
  airLeakPresent,
  suctionPressureCmH2O,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pleural Chest Tube ({location})</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${airLeakPresent ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
          {airLeakPresent ? "Air Leak Active" : "No Air Leak"}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span>Output: <strong className="font-mono">{outputVolumeMl} mL</strong></span>
        <span>Suction: <strong className="font-mono">-{suctionPressureCmH2O} cmH2O</strong></span>
      </div>
    </div>
  );
};
