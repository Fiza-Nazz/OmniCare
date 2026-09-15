import React from "react";

export interface SurgicalSpecimenChainOfCustodyProps {
  specimenId: string;
  tissueDescription: string;
  fixativeSolution: string;
  courierHandover: string;
  className?: string;
}

export const SurgicalSpecimenChainOfCustody: React.FC<SurgicalSpecimenChainOfCustodyProps> = ({
  specimenId,
  tissueDescription,
  fixativeSolution,
  courierHandover,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Surgical Specimen Custody</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Specimen Tracking
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Accession ID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{specimenId}</strong></div>
        <div className="flex justify-between"><span>Organ / Tissue Source:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tissueDescription}</strong></div>
        <div className="flex justify-between"><span>Preservative Agent:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fixativeSolution}</strong></div>
        <div className="flex justify-between"><span>Pathology Custody Transfer:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{courierHandover}</strong></div>
      </div>
    </div>
  );
};
