import React from "react";

export interface RadiationDermatitisRtogGradeProps {
  rtogGrade: string;
  desquamationType: string;
  treatmentField: string;
  topicalBarrierPrescribed: string;
  className?: string;
}

export const RadiationDermatitisRtogGrade: React.FC<RadiationDermatitisRtogGradeProps> = ({
  rtogGrade,
  desquamationType,
  treatmentField,
  topicalBarrierPrescribed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Radiation Dermatitis (RTOG)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Radiation Therapy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>RTOG Toxicity Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{rtogGrade}</strong></div>
        <div className="flex justify-between"><span>Desquamation Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{desquamationType}</strong></div>
        <div className="flex justify-between"><span>Target Radiation Field:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{treatmentField}</strong></div>
        <div className="flex justify-between"><span>Topical Hydrogel Dressing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{topicalBarrierPrescribed}</strong></div>
      </div>
    </div>
  );
};
