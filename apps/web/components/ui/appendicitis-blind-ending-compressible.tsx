import React from "react";

export interface AppendicitisBlindEndingCompressibleProps {
  blindEndingTubularStructure: string;
  maximalOuterDiameterMm: number;
  nonCompressibleStructure: string;
  appendicolithShadowingPresent: string;
  className?: string;
}

export const AppendicitisBlindEndingCompressible: React.FC<AppendicitisBlindEndingCompressibleProps> = ({
  blindEndingTubularStructure,
  maximalOuterDiameterMm,
  nonCompressibleStructure,
  appendicolithShadowingPresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute Appendicitis POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          GI POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Blind-Ending Tubular Morphology:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{blindEndingTubularStructure}</strong></div>
        <div className="flex justify-between"><span>Maximal Outer Diameter:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${maximalOuterDiameterMm} mm (&gt;6mm abnormal)`}</strong></div>
        <div className="flex justify-between"><span>Graded Compression Resistance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nonCompressibleStructure}</strong></div>
        <div className="flex justify-between"><span>Fecalith / Appendicolith Stone:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{appendicolithShadowingPresent}</strong></div>
      </div>
    </div>
  );
};
