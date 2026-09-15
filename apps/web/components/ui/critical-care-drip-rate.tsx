import React from "react";

export interface CriticalCareDripRateProps {
  agentName: string;
  doseMcgKgMin: number;
  infusionRateMlPerHour: number;
  maxDoseLimit: number;
  className?: string;
}

export const CriticalCareDripRate: React.FC<CriticalCareDripRateProps> = ({
  agentName,
  doseMcgKgMin,
  infusionRateMlPerHour,
  maxDoseLimit,
  className = "",
}) => {
  const isHighDose = doseMcgKgMin >= maxDoseLimit * 0.8;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs font-mono ${isHighDose ? "border-amber-300 bg-amber-50 dark:border-amber-800" : "border-slate-800 bg-slate-950 text-white"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">{agentName} Infusion</h4>
        <span className="font-bold text-blue-400">{infusionRateMlPerHour} mL/hr</span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span>Current Dose: <strong className="text-base font-black">{doseMcgKgMin} mcg/kg/min</strong></span>
        {isHighDose && <span className="rounded bg-amber-200 px-1.5 py-0.5 text-[10px] text-amber-900 font-bold">Near Max Limit</span>}
      </div>
    </div>
  );
};
