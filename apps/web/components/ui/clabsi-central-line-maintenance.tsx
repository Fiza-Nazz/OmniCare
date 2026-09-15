import React from "react";

export interface ClabsiCentralLineMaintenanceProps {
  lineNecessityConfirmed: string;
  chgSpongeDressingIntact: string;
  scrubTheHub15SecAdherence: string;
  capChangeIntervalDays: number;
  className?: string;
}

export const ClabsiCentralLineMaintenance: React.FC<ClabsiCentralLineMaintenanceProps> = ({
  lineNecessityConfirmed,
  chgSpongeDressingIntact,
  scrubTheHub15SecAdherence,
  capChangeIntervalDays,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CLABSI Prevention Bundle Check</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CLABSI Bundle
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Central Line Daily Need Justified:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lineNecessityConfirmed}</strong></div>
        <div className="flex justify-between"><span>CHG Antimicrobial Dressing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{chgSpongeDressingIntact}</strong></div>
        <div className="flex justify-between"><span>15-Second Hub Scrub Compliance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{scrubTheHub15SecAdherence}</strong></div>
        <div className="flex justify-between"><span>Needleless Cap Change Cycle:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${capChangeIntervalDays} Days`}</strong></div>
      </div>
    </div>
  );
};
