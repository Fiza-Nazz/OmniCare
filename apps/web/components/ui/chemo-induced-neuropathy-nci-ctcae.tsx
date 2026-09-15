import React from "react";

export interface ChemoInducedNeuropathyNciCtcaeProps {
  offendingAgent: string;
  ctcaeSensoryGrade: string;
  fineMotorImpairment: string;
  doseReductionRecommended: string;
  className?: string;
}

export const ChemoInducedNeuropathyNciCtcae: React.FC<ChemoInducedNeuropathyNciCtcaeProps> = ({
  offendingAgent,
  ctcaeSensoryGrade,
  fineMotorImpairment,
  doseReductionRecommended,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Chemotherapy Neuropathy (CIPN)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Oncology Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Neurotoxic Chemo Drug:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{offendingAgent}</strong></div>
        <div className="flex justify-between"><span>Sensory Neuropathy Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ctcaeSensoryGrade}</strong></div>
        <div className="flex justify-between"><span>ADL Dexterity (Buttons):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fineMotorImpairment}</strong></div>
        <div className="flex justify-between"><span>Protocol Dose Adjustment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{doseReductionRecommended}</strong></div>
      </div>
    </div>
  );
};
