import React from "react";

export interface ModifiedBrookeBurnProtocolProps {
  hourlyUrineOutputTargetMlKgHr: string;
  calculatedBrookeVolumeMl: number;
  crystalloidVolumeInfusedSoFarMl: number;
  fluidCreepWarningThresholdAlert: string;
  className?: string;
}

export const ModifiedBrookeBurnProtocol: React.FC<ModifiedBrookeBurnProtocolProps> = ({
  hourlyUrineOutputTargetMlKgHr,
  calculatedBrookeVolumeMl,
  crystalloidVolumeInfusedSoFarMl,
  fluidCreepWarningThresholdAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Modified Brooke Formula (2mL/kg/%TBSA)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Burn Fluid Titration
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Target Urine Output:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hourlyUrineOutputTargetMlKgHr}</strong></div>
        <div className="flex justify-between"><span>Brooke Target Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedBrookeVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Accumulated Crystalloid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${crystalloidVolumeInfusedSoFarMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Fluid Creep Vigilance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fluidCreepWarningThresholdAlert}</strong></div>
      </div>
    </div>
  );
};
