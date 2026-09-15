import React from "react";

export interface NeuroCranialNerveExamCardProps {
  opticCn2: string;
  oculomotorCn346: string;
  facialCn7: string;
  bulbarCn910: string;
  className?: string;
}

export const NeuroCranialNerveExamCard: React.FC<NeuroCranialNerveExamCardProps> = ({
  opticCn2,
  oculomotorCn346,
  facialCn7,
  bulbarCn910,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cranial Nerve Bedside Screen</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cranial Exam
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Optic (CN II):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{opticCn2}</strong></div>
        <div className="flex justify-between"><span>Oculomotor (CN III, IV, VI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{oculomotorCn346}</strong></div>
        <div className="flex justify-between"><span>Facial (CN VII):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{facialCn7}</strong></div>
        <div className="flex justify-between"><span>Bulbar (CN IX, X):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bulbarCn910}</strong></div>
      </div>
    </div>
  );
};
