import React from "react";

export interface BcrAblIsTranscriptPcrProps {
  bcrAblPercentIs: number;
  logReductionFromBaseline: number;
  majorMolecularResponseAchieved: string;
  treatmentFreeRemissionEligible: string;
  className?: string;
}

export const BcrAblIsTranscriptPcr: React.FC<BcrAblIsTranscriptPcrProps> = ({
  bcrAblPercentIs,
  logReductionFromBaseline,
  majorMolecularResponseAchieved,
  treatmentFreeRemissionEligible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">BCR-ABL1 International Scale (IS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CML Molecular
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>BCR-ABL1 Transcript Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bcrAblPercentIs}% (IS)`}</strong></div>
        <div className="flex justify-between"><span>Log Reduction from Standard:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${logReductionFromBaseline}-Log Drop`}</strong></div>
        <div className="flex justify-between"><span>MMR Milestone (IS &le;0.1%):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{majorMolecularResponseAchieved}</strong></div>
        <div className="flex justify-between"><span>Treatment-Free Remission (TFR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{treatmentFreeRemissionEligible}</strong></div>
      </div>
    </div>
  );
};
