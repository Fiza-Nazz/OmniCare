import React from "react";

export interface NeonatalTpnOsmolarityProps {
  aminoAcidPercent: number;
  dextrosePercent: number;
  totalOsmolarityMOsmPerL: number;
  infusionRoutePermitted: string;
  className?: string;
}

export const NeonatalTpnOsmolarity: React.FC<NeonatalTpnOsmolarityProps> = ({
  aminoAcidPercent,
  dextrosePercent,
  totalOsmolarityMOsmPerL,
  infusionRoutePermitted,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neonatal TPN Osmolarity & Calcium/Phos</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Nutrition
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Amino Acid Content:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${aminoAcidPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Dextrose Content:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dextrosePercent}%`}</strong></div>
        <div className="flex justify-between"><span>Total Osmolarity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalOsmolarityMOsmPerL} mOsm/L`}</strong></div>
        <div className="flex justify-between"><span>Permitted Line:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{infusionRoutePermitted}</strong></div>
      </div>
    </div>
  );
};
