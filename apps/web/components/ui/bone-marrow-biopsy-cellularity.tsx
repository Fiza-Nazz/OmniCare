import React from "react";

export interface BoneMarrowBiopsyCellularityProps {
  coreCellularityPercent: number;
  myeloblastPercent: number;
  megakaryocyteAbundance: string;
  prussianBlueIron: string;
  className?: string;
}

export const BoneMarrowBiopsyCellularity: React.FC<BoneMarrowBiopsyCellularityProps> = ({
  coreCellularityPercent,
  myeloblastPercent,
  megakaryocyteAbundance,
  prussianBlueIron,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Bone Marrow Core Cellularity</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Hematopathology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Biopsy Cellularity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${coreCellularityPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Myeloblasts Aspirate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${myeloblastPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Megakaryocyte Morphology:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{megakaryocyteAbundance}</strong></div>
        <div className="flex justify-between"><span>Iron Stores (Prussian Blue):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prussianBlueIron}</strong></div>
      </div>
    </div>
  );
};
