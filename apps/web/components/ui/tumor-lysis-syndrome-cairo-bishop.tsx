import React from "react";

export interface TumorLysisSyndromeCairoBishopProps {
  uricAcidMgDl: number;
  potassiumMeqL: number;
  phosphorusMgDl: number;
  calciumMgDl: number;
  className?: string;
}

export const TumorLysisSyndromeCairoBishop: React.FC<TumorLysisSyndromeCairoBishopProps> = ({
  uricAcidMgDl,
  potassiumMeqL,
  phosphorusMgDl,
  calciumMgDl,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cairo-Bishop Tumor Lysis (TLS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Onco Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Uric Acid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${uricAcidMgDl} mg/dL (&gt;8.0)`}</strong></div>
        <div className="flex justify-between"><span>Potassium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${potassiumMeqL} mEq/L (&gt;6.0)`}</strong></div>
        <div className="flex justify-between"><span>Phosphorus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${phosphorusMgDl} mg/dL (&gt;4.5)`}</strong></div>
        <div className="flex justify-between"><span>Corrected Calcium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calciumMgDl} mg/dL (&lt;7.0)`}</strong></div>
      </div>
    </div>
  );
};
