import React from "react";

export interface NihssSerialNeurologicAssessmentProps {
  totalNihssScore: number;
  baselineDeltaChange: number;
  dominantHemisphereDeficit: string;
  thrombolysisReassessmentDue: string;
  className?: string;
}

export const NihssSerialNeurologicAssessment: React.FC<NihssSerialNeurologicAssessmentProps> = ({
  totalNihssScore,
  baselineDeltaChange,
  dominantHemisphereDeficit,
  thrombolysisReassessmentDue,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">NIH Stroke Scale (NIHSS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Stroke Scale
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Composite NIHSS Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalNihssScore} / 42`}</strong></div>
        <div className="flex justify-between"><span>Delta Change from Baseline:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${baselineDeltaChange > 0 ? '+' : ''}${baselineDeltaChange} Points`}</strong></div>
        <div className="flex justify-between"><span>Dominant Cortical Deficit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dominantHemisphereDeficit}</strong></div>
        <div className="flex justify-between"><span>Post-tPA Re-evaluation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{thrombolysisReassessmentDue}</strong></div>
      </div>
    </div>
  );
};
