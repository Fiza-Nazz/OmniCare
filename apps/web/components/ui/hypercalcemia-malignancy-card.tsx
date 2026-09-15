import React from "react";

export interface HypercalcemiaMalignancyCardProps {
  serumCalciumMgDl: number;
  serumAlbuminGDl: number;
  correctedCalciumMgDl: number;
  zoledronicAcidDose: string;
  className?: string;
}

export const HypercalcemiaMalignancyCard: React.FC<HypercalcemiaMalignancyCardProps> = ({
  serumCalciumMgDl,
  serumAlbuminGDl,
  correctedCalciumMgDl,
  zoledronicAcidDose,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hypercalcemia of Malignancy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Metabolic Crisis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Serum Calcium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumCalciumMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Serum Albumin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumAlbuminGDl} g/dL`}</strong></div>
        <div className="flex justify-between"><span>Corrected Calcium Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${correctedCalciumMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Bisphosphonate Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{zoledronicAcidDose}</strong></div>
      </div>
    </div>
  );
};
