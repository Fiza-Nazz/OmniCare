import React from "react";

export interface PharmacogenomicsDput5fuCardProps {
  dpydGenotypeVariant: string;
  dpdActivityScore: number;
  fluorouracilDoseReductionPercent: number;
  uridineTriacetateEmergencyAntidote: string;
  className?: string;
}

export const PharmacogenomicsDput5fuCard: React.FC<PharmacogenomicsDput5fuCardProps> = ({
  dpydGenotypeVariant,
  dpdActivityScore,
  fluorouracilDoseReductionPercent,
  uridineTriacetateEmergencyAntidote,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">DPYD Fluoropyrimidine Toxicity Alert</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Oncology Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>DPYD Sequence Polymorphism:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dpydGenotypeVariant}</strong></div>
        <div className="flex justify-between"><span>Calculated DPD Activity Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dpdActivityScore} (0-2 scale)`}</strong></div>
        <div className="flex justify-between"><span>Recommended Dose Modification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fluorouracilDoseReductionPercent}% Dose Cut`}</strong></div>
        <div className="flex justify-between"><span>Emergency Uridine Triacetate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{uridineTriacetateEmergencyAntidote}</strong></div>
      </div>
    </div>
  );
};
