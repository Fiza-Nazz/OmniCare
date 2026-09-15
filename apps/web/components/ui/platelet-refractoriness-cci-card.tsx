import React from "react";

export interface PlateletRefractorinessCciCardProps {
  prePlateletCount: number;
  postPlateletCount1h: number;
  bsaM2: number;
  calculatedCci: number;
  className?: string;
}

export const PlateletRefractorinessCciCard: React.FC<PlateletRefractorinessCciCardProps> = ({
  prePlateletCount,
  postPlateletCount1h,
  bsaM2,
  calculatedCci,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Platelet Refractoriness (CCI)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Transfusion Lab
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pre-Transfusion Platelets:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${prePlateletCount}k /µL`}</strong></div>
        <div className="flex justify-between"><span>1-Hour Post-Transfusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postPlateletCount1h}k /µL`}</strong></div>
        <div className="flex justify-between"><span>Recipient BSA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bsaM2} m²`}</strong></div>
        <div className="flex justify-between"><span>Corrected Increment (CCI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedCci} (&lt;5000 refractoriness)`}</strong></div>
      </div>
    </div>
  );
};
