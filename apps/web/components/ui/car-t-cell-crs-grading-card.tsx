import React from "react";

export interface CarTCellCrsGradingCardProps {
  temperatureC: number;
  hypotensionVasopressor: string;
  oxygenDeviceRequired: string;
  astctCrsGrade: string;
  className?: string;
}

export const CarTCellCrsGradingCard: React.FC<CarTCellCrsGradingCardProps> = ({
  temperatureC,
  hypotensionVasopressor,
  oxygenDeviceRequired,
  astctCrsGrade,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CAR-T Cytokine Release (CRS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cellular Therapy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Peak Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${temperatureC} °C`}</strong></div>
        <div className="flex justify-between"><span>Hypotension Response:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypotensionVasopressor}</strong></div>
        <div className="flex justify-between"><span>Supplemental Oxygen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{oxygenDeviceRequired}</strong></div>
        <div className="flex justify-between"><span>Consensus ASTCT Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{astctCrsGrade}</strong></div>
      </div>
    </div>
  );
};
