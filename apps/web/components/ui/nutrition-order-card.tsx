import React from "react";

export interface NutritionOrderCardProps {
  dietType: string;
  textureModification?: string;
  liquidConsistency?: string;
  allergiesOrRestrictions: string[];
  className?: string;
}

export const NutritionOrderCard: React.FC<NutritionOrderCardProps> = ({
  dietType,
  textureModification = "Regular",
  liquidConsistency = "Thin Liquids",
  allergiesOrRestrictions = [],
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Dietary Nutrition Order</h4>
        <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
          {dietType}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
        <p>Texture: <strong className="text-slate-800 dark:text-slate-200">{textureModification}</strong></p>
        <p>Liquid Thickness: <strong className="text-slate-800 dark:text-slate-200">{liquidConsistency}</strong></p>
        {allergiesOrRestrictions.length > 0 && (
          <p className="text-rose-600 font-semibold">Exclusions: {allergiesOrRestrictions.join(", ")}</p>
        )}
      </div>
    </div>
  );
};
