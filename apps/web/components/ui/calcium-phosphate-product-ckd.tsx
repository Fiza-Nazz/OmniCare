import React from "react";

export interface CalciumPhosphateProductCkdProps {
  serumCalciumMgDl: number;
  serumPhosphorusMgDl: number;
  caxPProductValue: number;
  phosphateBinderPrescribed: string;
  className?: string;
}

export const CalciumPhosphateProductCkd: React.FC<CalciumPhosphateProductCkdProps> = ({
  serumCalciumMgDl,
  serumPhosphorusMgDl,
  caxPProductValue,
  phosphateBinderPrescribed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Calcium-Phosphate Product (Ca x P)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CKD-MBD Mineral
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Total Calcium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumCalciumMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Serum Inorganic Phosphorus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumPhosphorusMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Calcium-Phosphate Product:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${caxPProductValue} mg²/dL² (&lt;55 goal)`}</strong></div>
        <div className="flex justify-between"><span>Non-Calcium Phosphate Binder:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{phosphateBinderPrescribed}</strong></div>
      </div>
    </div>
  );
};
