import React from "react";

export interface SurgeCapacityBedExpansibilityProps {
  surgeCapacityTier: string;
  operationalBedsCensus: number;
  crisisConvertedBedsCount: number;
  staffToPatientRatioModified: string;
  className?: string;
}

export const SurgeCapacityBedExpansibility: React.FC<SurgeCapacityBedExpansibilityProps> = ({
  surgeCapacityTier,
  operationalBedsCensus,
  crisisConvertedBedsCount,
  staffToPatientRatioModified,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hospital Surge Bed Expansibility</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Surge Capacity
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Hospital Surge Tier Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{surgeCapacityTier}</strong></div>
        <div className="flex justify-between"><span>Baseline Licensed Capacity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${operationalBedsCensus} Beds Occupied`}</strong></div>
        <div className="flex justify-between"><span>Converted Surge Beds (PACU/OR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${crisisConvertedBedsCount} Surge Beds`}</strong></div>
        <div className="flex justify-between"><span>Emergency Staffing Ratios:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{staffToPatientRatioModified}</strong></div>
      </div>
    </div>
  );
};
