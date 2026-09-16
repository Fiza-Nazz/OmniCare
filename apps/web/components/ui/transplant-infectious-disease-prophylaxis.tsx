import React from "react";

export interface TransplantInfectiousDiseaseProphylaxisProps {
  pjpProphylaxisRegimen: string;
  fungalCoverageAgent: string;
  cmvProphylaxisDurationMonths: number;
  prophylaxisAdherenceConfirmed: string;
  className?: string;
}

export const TransplantInfectiousDiseaseProphylaxis: React.FC<TransplantInfectiousDiseaseProphylaxisProps> = ({
  pjpProphylaxisRegimen,
  fungalCoverageAgent,
  cmvProphylaxisDurationMonths,
  prophylaxisAdherenceConfirmed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Transplant Antimicrobial Prophylaxis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Transplant ID
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>PJP / PCP Prevention:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pjpProphylaxisRegimen}</strong></div>
        <div className="flex justify-between"><span>Antifungal Mucosal Barrier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fungalCoverageAgent}</strong></div>
        <div className="flex justify-between"><span>Oral Valganciclovir Plan:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cmvProphylaxisDurationMonths} Months Duration`}</strong></div>
        <div className="flex justify-between"><span>Outpatient Prescription Refills:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prophylaxisAdherenceConfirmed}</strong></div>
      </div>
    </div>
  );
};
