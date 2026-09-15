import React from "react";

export interface CyanideHydroxocobalaminKitProps {
  lacticAcidMmolL: number;
  sootAirwayExposure: string;
  hydroxocobalaminDoseGrams: number;
  chromaturiaAlert: string;
  className?: string;
}

export const CyanideHydroxocobalaminKit: React.FC<CyanideHydroxocobalaminKitProps> = ({
  lacticAcidMmolL,
  sootAirwayExposure,
  hydroxocobalaminDoseGrams,
  chromaturiaAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cyanide Poisoning (Cyanokit)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cyanide Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Profound Serum Lactate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${lacticAcidMmolL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Structure Fire Inhalation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sootAirwayExposure}</strong></div>
        <div className="flex justify-between"><span>Cyanokit Hydroxocobalamin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hydroxocobalaminDoseGrams} g IV`}</strong></div>
        <div className="flex justify-between"><span>Red Skin / Chromaturia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{chromaturiaAlert}</strong></div>
      </div>
    </div>
  );
};
