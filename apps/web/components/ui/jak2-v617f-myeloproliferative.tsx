import React from "react";

export interface Jak2V617fMyeloproliferativeProps {
  jak2AlleleBurdenPercent: number;
  hematocritTargetMet: string;
  thrombosisProphylaxisAspirin: string;
  cytoreductiveHydroxyurea: string;
  className?: string;
}

export const Jak2V617fMyeloproliferative: React.FC<Jak2V617fMyeloproliferativeProps> = ({
  jak2AlleleBurdenPercent,
  hematocritTargetMet,
  thrombosisProphylaxisAspirin,
  cytoreductiveHydroxyurea,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">JAK2 V617F Myeloproliferative Card</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          MPN Workup
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>JAK2 V617F Quantitative Load:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${jak2AlleleBurdenPercent}% Burden`}</strong></div>
        <div className="flex justify-between"><span>Hematocrit Target &lt;45%:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hematocritTargetMet}</strong></div>
        <div className="flex justify-between"><span>Low-Dose Aspirin Prophylaxis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{thrombosisProphylaxisAspirin}</strong></div>
        <div className="flex justify-between"><span>Cytoreductive Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cytoreductiveHydroxyurea}</strong></div>
      </div>
    </div>
  );
};
