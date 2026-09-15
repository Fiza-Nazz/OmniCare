import React from "react";

export interface StatusEpilepticusSteppedProtocolProps {
  seizureMinutesElapsed: number;
  className?: string;
}

export const StatusEpilepticusSteppedProtocol: React.FC<StatusEpilepticusSteppedProtocolProps> = ({
  seizureMinutesElapsed,
  className = "",
}) => {
  const currentPhase =
    seizureMinutesElapsed < 5 ? "Initial Assessment (0-5m)" : seizureMinutesElapsed < 20 ? "Phase 1: Benzodiazepine (5-20m)" : seizureMinutesElapsed < 40 ? "Phase 2: IV Antiepileptic (20-40m)" : "Phase 3: Refractory ICU Coma (>40m)";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Status Epilepticus Pathway</h4>
        <span className="font-mono font-bold text-rose-600">{seizureMinutesElapsed} min elapsed</span>
      </div>
      <p className="mt-2 font-bold text-blue-600 dark:text-blue-400">Current Guideline Phase: {currentPhase}</p>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Phase 1: Lorazepam 4mg IV OR Midazolam 10mg IM</p>
        <p>• Phase 2: Levetiracetam 60mg/kg (max 4500mg) OR Fosphenytoin 20mg PE/kg</p>
        <p>• Phase 3: Intubate & continuous Midazolam or Propofol infusion with continuous EEG</p>
      </div>
    </div>
  );
};
