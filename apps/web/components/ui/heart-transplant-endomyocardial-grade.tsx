import React from "react";

export interface HeartTransplantEndomyocardialGradeProps {
  ishltCellularRejectionGrade: string;
  quiltyEffectLesionPresent: string;
  antibodyMediatedRejectionAmr: string;
  pulseSteroidRescueDue: string;
  className?: string;
}

export const HeartTransplantEndomyocardialGrade: React.FC<HeartTransplantEndomyocardialGradeProps> = ({
  ishltCellularRejectionGrade,
  quiltyEffectLesionPresent,
  antibodyMediatedRejectionAmr,
  pulseSteroidRescueDue,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Endomyocardial Biopsy (ISHLT)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Heart Transplant
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ISHLT Cellular Rejection:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ishltCellularRejectionGrade}</strong></div>
        <div className="flex justify-between"><span>Quilty Subendocardial Infiltrate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{quiltyEffectLesionPresent}</strong></div>
        <div className="flex justify-between"><span>Humoral AMR Immunofluorescence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{antibodyMediatedRejectionAmr}</strong></div>
        <div className="flex justify-between"><span>High-Dose Methylprednisolone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pulseSteroidRescueDue}</strong></div>
      </div>
    </div>
  );
};
