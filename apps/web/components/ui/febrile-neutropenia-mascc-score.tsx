import React from "react";

export interface FebrileNeutropeniaMasccScoreProps {
  masccScore: number;
  burdenOfIllness: string;
  hypotensionStatus: string;
  outpatientAntibioticEligible: string;
  className?: string;
}

export const FebrileNeutropeniaMasccScore: React.FC<FebrileNeutropeniaMasccScoreProps> = ({
  masccScore,
  burdenOfIllness,
  hypotensionStatus,
  outpatientAntibioticEligible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">MASCC Febrile Neutropenia Risk</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neutropenic Fever
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total MASCC Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${masccScore} Points`}</strong></div>
        <div className="flex justify-between"><span>Burden of Symptom Illness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{burdenOfIllness}</strong></div>
        <div className="flex justify-between"><span>Hemodynamic Stability:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypotensionStatus}</strong></div>
        <div className="flex justify-between"><span>Outpatient Therapy Candidate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{outpatientAntibioticEligible}</strong></div>
      </div>
    </div>
  );
};
