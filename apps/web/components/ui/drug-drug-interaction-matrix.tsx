import React from "react";

export interface DrugDrugInteractionMatrixProps {
  interactingDrugPair: string;
  ddiSeverityClass: string;
  pharmacokineticMechanism: string;
  clinicalRecommendationAction: string;
  className?: string;
}

export const DrugDrugInteractionMatrix: React.FC<DrugDrugInteractionMatrixProps> = ({
  interactingDrugPair,
  ddiSeverityClass,
  pharmacokineticMechanism,
  clinicalRecommendationAction,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Drug-Drug Interaction (DDI) Matrix</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          DDI Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Interacting Drug Pair:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{interactingDrugPair}</strong></div>
        <div className="flex justify-between"><span>Interaction Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ddiSeverityClass}</strong></div>
        <div className="flex justify-between"><span>PK/PD Mechanism:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pharmacokineticMechanism}</strong></div>
        <div className="flex justify-between"><span>Clinical Action:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{clinicalRecommendationAction}</strong></div>
      </div>
    </div>
  );
};
