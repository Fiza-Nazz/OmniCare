import React from "react";

export interface AcetaminophenAcuteNomogramProps {
  hoursPostIngestion: number;
  apapConcentrationUgMl: number;
  nomogramTreatmentLineCrossed: string;
  ivAcetylcysteineInitiated: string;
  className?: string;
}

export const AcetaminophenAcuteNomogram: React.FC<AcetaminophenAcuteNomogramProps> = ({
  hoursPostIngestion,
  apapConcentrationUgMl,
  nomogramTreatmentLineCrossed,
  ivAcetylcysteineInitiated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acetaminophen (Rumack-Matthew Nomogram)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hepatology Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Hours Post Ingestion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursPostIngestion} hrs`}</strong></div>
        <div className="flex justify-between"><span>Serum APAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${apapConcentrationUgMl} µg/mL`}</strong></div>
        <div className="flex justify-between"><span>Above 150-Line:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nomogramTreatmentLineCrossed}</strong></div>
        <div className="flex justify-between"><span>IV Acetylcysteine (NAC):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ivAcetylcysteineInitiated}</strong></div>
      </div>
    </div>
  );
};
