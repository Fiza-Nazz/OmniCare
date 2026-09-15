import React from "react";

export interface TotalParenteralNutritionTpnProps {
  dextroseGrams: number;
  aminoAcidsGrams: number;
  lipidsGrams: number;
  totalCaloriesKcal: number;
  infusionRateMlHr: number;
  className?: string;
}

export const TotalParenteralNutritionTpn: React.FC<TotalParenteralNutritionTpnProps> = ({
  dextroseGrams,
  aminoAcidsGrams,
  lipidsGrams,
  totalCaloriesKcal,
  infusionRateMlHr,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">TPN Parenteral Nutrition Formulation</h4>
        <span className="font-mono font-bold text-blue-600">{infusionRateMlHr} mL/hr</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">
          <span className="text-slate-400">Total Kcal</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{totalCaloriesKcal}</p>
        </div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">
          <span className="text-slate-400">Dextrose</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{dextroseGrams}g</p>
        </div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">
          <span className="text-slate-400">Amino Acids</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{aminoAcidsGrams}g</p>
        </div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">
          <span className="text-slate-400">Lipids</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{lipidsGrams}g</p>
        </div>
      </div>
    </div>
  );
};
