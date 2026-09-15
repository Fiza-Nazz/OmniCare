import React from "react";

export interface PeritonealEquilibrationTestPetProps {
  dialysateToPlasmaCreatinine: number;
  transporterClassification: string;
  recommendedPdModality: string;
  residualRenalClearance: string;
  className?: string;
}

export const PeritonealEquilibrationTestPet: React.FC<PeritonealEquilibrationTestPetProps> = ({
  dialysateToPlasmaCreatinine,
  transporterClassification,
  recommendedPdModality,
  residualRenalClearance,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Peritoneal Equilibration Test (PET)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Peritoneal Membrane
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>4-Hour D/P Creatinine Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dialysateToPlasmaCreatinine}`}</strong></div>
        <div className="flex justify-between"><span>Peritoneal Membrane Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{transporterClassification}</strong></div>
        <div className="flex justify-between"><span>Prescribed Modality (APD vs CAPD):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{recommendedPdModality}</strong></div>
        <div className="flex justify-between"><span>24-Hour Residual Urine GFR:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{residualRenalClearance}</strong></div>
      </div>
    </div>
  );
};
