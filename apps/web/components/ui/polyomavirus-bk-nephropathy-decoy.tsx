import React from "react";

export interface PolyomavirusBkNephropathyDecoyProps {
  plasmaBkViralLoadCopiesMl: number;
  urineDecoyCellsPresent: string;
  sv40IhcStainingPositive: string;
  immunosuppressionReductionProtocol: string;
  className?: string;
}

export const PolyomavirusBkNephropathyDecoy: React.FC<PolyomavirusBkNephropathyDecoyProps> = ({
  plasmaBkViralLoadCopiesMl,
  urineDecoyCellsPresent,
  sv40IhcStainingPositive,
  immunosuppressionReductionProtocol,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">BK Polyomavirus Nephropathy (BKVN)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          BKVN Nephrology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Plasma Quantitative BK PCR:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plasmaBkViralLoadCopiesMl} copies/mL (&gt;10k)`}</strong></div>
        <div className="flex justify-between"><span>Urine Cytology Inclusion Decoy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{urineDecoyCellsPresent}</strong></div>
        <div className="flex justify-between"><span>Renal Tubular SV40 Staining:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sv40IhcStainingPositive}</strong></div>
        <div className="flex justify-between"><span>Stepwise Immunosuppression Cut:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{immunosuppressionReductionProtocol}</strong></div>
      </div>
    </div>
  );
};
