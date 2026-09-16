import React from "react";

export interface AllograftVasculopathyIntravascularUsProps {
  maximalIntimalThicknessMm: number;
  ishltCavGrade: string;
  statineverolimusPrescribed: string;
  reTransplantEvaluationStatus: string;
  className?: string;
}

export const AllograftVasculopathyIntravascularUs: React.FC<AllograftVasculopathyIntravascularUsProps> = ({
  maximalIntimalThicknessMm,
  ishltCavGrade,
  statineverolimusPrescribed,
  reTransplantEvaluationStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cardiac Allograft Vasculopathy (CAV)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CAV Vasculopathy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Coronary IVUS Intimal Thickness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${maximalIntimalThicknessMm} mm (&gt;0.5mm severe)`}</strong></div>
        <div className="flex justify-between"><span>ISHLT Angiographic CAV Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ishltCavGrade}</strong></div>
        <div className="flex justify-between"><span>mTOR Inhibitor (Everolimus) Switch:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{statineverolimusPrescribed}</strong></div>
        <div className="flex justify-between"><span>Retransplantation Consideration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{reTransplantEvaluationStatus}</strong></div>
      </div>
    </div>
  );
};
