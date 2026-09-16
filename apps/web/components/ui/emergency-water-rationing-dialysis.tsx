import React from "react";

export interface EmergencyWaterRationingDialysisProps {
  municipalWaterSupplyActive: string;
  roWaterStorageHoursRemaining: number;
  emergencyTankerTruckDispatched: string;
  shortRunHemodialysisEnforced: string;
  className?: string;
}

export const EmergencyWaterRationingDialysis: React.FC<EmergencyWaterRationingDialysisProps> = ({
  municipalWaterSupplyActive,
  roWaterStorageHoursRemaining,
  emergencyTankerTruckDispatched,
  shortRunHemodialysisEnforced,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Emergency Water Rationing & Dialysis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Utility Resiliency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Municipal Utility Water Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{municipalWaterSupplyActive}</strong></div>
        <div className="flex justify-between"><span>On-Site Reserve Tank Buffer:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${roWaterStorageHoursRemaining} Hours Remaining`}</strong></div>
        <div className="flex justify-between"><span>Emergency Water Tanker Tender:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergencyTankerTruckDispatched}</strong></div>
        <div className="flex justify-between"><span>2-Hour Crisis Dialysis Protocol:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{shortRunHemodialysisEnforced}</strong></div>
      </div>
    </div>
  );
};
