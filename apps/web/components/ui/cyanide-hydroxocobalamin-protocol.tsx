import React from "react";

export interface CyanideHydroxocobalaminProtocolProps {
  plasmaLactateMmolPerL: number;
  cyanokitDoseGrams: number;
  infusionDurationMinutes: number;
  hemodynamicResponseObserved: string;
  className?: string;
}

export const CyanideHydroxocobalaminProtocol: React.FC<CyanideHydroxocobalaminProtocolProps> = ({
  plasmaLactateMmolPerL,
  cyanokitDoseGrams,
  infusionDurationMinutes,
  hemodynamicResponseObserved,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cyanide Poisoning (Hydroxocobalamin)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Emergency Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Lactate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plasmaLactateMmolPerL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Hydroxocobalamin Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cyanokitDoseGrams} g IV`}</strong></div>
        <div className="flex justify-between"><span>Infusion Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${infusionDurationMinutes} min`}</strong></div>
        <div className="flex justify-between"><span>MAP Restoration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hemodynamicResponseObserved}</strong></div>
      </div>
    </div>
  );
};
