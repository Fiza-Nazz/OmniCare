import React from "react";

export interface AntibiogramHospitalAntibiogramProps {
  pathogenName: string;
  firstLineAntimicrobial: string;
  institutionalPercentSusceptible: number;
  alternativeCoverageAgent: string;
  className?: string;
}

export const AntibiogramHospitalAntibiogram: React.FC<AntibiogramHospitalAntibiogramProps> = ({
  pathogenName,
  firstLineAntimicrobial,
  institutionalPercentSusceptible,
  alternativeCoverageAgent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Institutional Antibiogram Guide</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Antibiogram Data
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Target Organism:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pathogenName}</strong></div>
        <div className="flex justify-between"><span>First-Line Formulary Choice:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{firstLineAntimicrobial}</strong></div>
        <div className="flex justify-between"><span>Hospital Susceptibility Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${institutionalPercentSusceptible}% Susceptible`}</strong></div>
        <div className="flex justify-between"><span>Second-Line Alternative:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{alternativeCoverageAgent}</strong></div>
      </div>
    </div>
  );
};
