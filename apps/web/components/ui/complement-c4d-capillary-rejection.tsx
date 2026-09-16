import React from "react";

export interface ComplementC4dCapillaryRejectionProps {
  peritubularCapillaryExtent: string;
  microvascularInflammationScore: number;
  allograftGlomerulitisPresent: string;
  banffAmrCategory: string;
  className?: string;
}

export const ComplementC4dCapillaryRejection: React.FC<ComplementC4dCapillaryRejectionProps> = ({
  peritubularCapillaryExtent,
  microvascularInflammationScore,
  allograftGlomerulitisPresent,
  banffAmrCategory,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Complement C4d Staining (AMR)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Transplant Pathology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>C4d Capillary Staining (IF):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{peritubularCapillaryExtent}</strong></div>
        <div className="flex justify-between"><span>Microvascular Inflammation (g+ptc):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${microvascularInflammationScore} / 6`}</strong></div>
        <div className="flex justify-between"><span>Endothelial Swelling / Glomerulitis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{allograftGlomerulitisPresent}</strong></div>
        <div className="flex justify-between"><span>Banff 2019 AMR Diagnostic Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{banffAmrCategory}</strong></div>
      </div>
    </div>
  );
};
