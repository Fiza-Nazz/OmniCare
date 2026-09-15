import React from "react";

export interface SurgicalHypothermiaWarmingUnitProps {
  temperatureSetting: string;
  patientTempCoreC: number;
  blanketPlacementVerified: string;
  hoseDisconnectionSafety: string;
  className?: string;
}

export const SurgicalHypothermiaWarmingUnit: React.FC<SurgicalHypothermiaWarmingUnitProps> = ({
  temperatureSetting,
  patientTempCoreC,
  blanketPlacementVerified,
  hoseDisconnectionSafety,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Forced-Air Patient Warmer</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Patient Warming
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Warmer Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{temperatureSetting}</strong></div>
        <div className="flex justify-between"><span>Core Patient Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${patientTempCoreC} °C`}</strong></div>
        <div className="flex justify-between"><span>Blanket Secure Placement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{blanketPlacementVerified}</strong></div>
        <div className="flex justify-between"><span>Hose Direct Skin Safety:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hoseDisconnectionSafety}</strong></div>
      </div>
    </div>
  );
};
