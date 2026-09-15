import React from "react";

export interface PediatricAnaphylaxisEpipenCardProps {
  weightTier: string;
  epinephrineDoseMg: number;
  autoinjectorBrand: string;
  observationHours: number;
  className?: string;
}

export const PediatricAnaphylaxisEpipenCard: React.FC<PediatricAnaphylaxisEpipenCardProps> = ({
  weightTier,
  epinephrineDoseMg,
  autoinjectorBrand,
  observationHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric Anaphylaxis Epinephrine</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Anaphylaxis Rescue
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Weight Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{weightTier}</strong></div>
        <div className="flex justify-between"><span>Intramuscular Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${epinephrineDoseMg} mg IM`}</strong></div>
        <div className="flex justify-between"><span>Device Spec:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{autoinjectorBrand}</strong></div>
        <div className="flex justify-between"><span>Post-Epi Observation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${observationHours} Hours`}</strong></div>
      </div>
    </div>
  );
};
