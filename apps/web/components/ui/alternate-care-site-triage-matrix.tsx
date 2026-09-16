import React from "react";

export interface AlternateCareSiteTriageMatrixProps {
  acsFacilityLocation: string;
  oxygenDemandLitersMin: number;
  mobilityIndependenceScore: string;
  emergencyTransferProtocol: string;
  className?: string;
}

export const AlternateCareSiteTriageMatrix: React.FC<AlternateCareSiteTriageMatrixProps> = ({
  acsFacilityLocation,
  oxygenDemandLitersMin,
  mobilityIndependenceScore,
  emergencyTransferProtocol,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Alternate Care Site (ACS) Triage</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Field Hospital
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Field Care Facility Site:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{acsFacilityLocation}</strong></div>
        <div className="flex justify-between"><span>Low-Flow O2 Requirement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${oxygenDemandLitersMin} L/min (&lt;4L eligible)`}</strong></div>
        <div className="flex justify-between"><span>Functional Ambulation Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mobilityIndependenceScore}</strong></div>
        <div className="flex justify-between"><span>Acute Decompensation EVS Pathway:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergencyTransferProtocol}</strong></div>
      </div>
    </div>
  );
};
