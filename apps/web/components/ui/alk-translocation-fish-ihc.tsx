import React from "react";

export interface AlkTranslocationFishIhcProps {
  positiveRearrangedCellsPercent: number;
  ihcD5f3Status: string;
  fusionPartnerGene: string;
  targetedTkiSelection: string;
  className?: string;
}

export const AlkTranslocationFishIhc: React.FC<AlkTranslocationFishIhcProps> = ({
  positiveRearrangedCellsPercent,
  ihcD5f3Status,
  fusionPartnerGene,
  targetedTkiSelection,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ALK Gene Rearrangement (FISH)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          ALK Translocation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>FISH Break-Apart Split Nuclei:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${positiveRearrangedCellsPercent}% (&gt;15% diagnostic)`}</strong></div>
        <div className="flex justify-between"><span>Ventana D5F3 IHC Confirmation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ihcD5f3Status}</strong></div>
        <div className="flex justify-between"><span>Canonical Fusion Partner:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fusionPartnerGene}</strong></div>
        <div className="flex justify-between"><span>Second-Generation ALK TKI:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetedTkiSelection}</strong></div>
      </div>
    </div>
  );
};
