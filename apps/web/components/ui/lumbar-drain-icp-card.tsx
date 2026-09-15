import React from "react";

export interface LumbarDrainIcpCardProps {
  hourlyOutputMl: number;
  chamberHeightCmH2O: number;
  csfAppearance: "Clear" | "Xanthochromic" | "Sanguineous" | "Cloudy";
  drainClamped: boolean;
  className?: string;
}

export const LumbarDrainIcpCard: React.FC<LumbarDrainIcpCardProps> = ({
  hourlyOutputMl,
  chamberHeightCmH2O,
  csfAppearance,
  drainClamped,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Lumbar CSF Drain</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${drainClamped ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
          {drainClamped ? "DRAIN CLAMPED" : "Draining Open"}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-slate-600 dark:text-slate-400">
        <span>Output: <strong className="font-mono">{hourlyOutputMl} mL/hr</strong></span>
        <span>Pop-off Level: <strong className="font-mono">+{chamberHeightCmH2O} cmH2O</strong></span>
        <span>Clarity: <strong>{csfAppearance}</strong></span>
      </div>
    </div>
  );
};
