import React from "react";

export type BariatricStage = "Stage 1: Clear Liquids" | "Stage 2: Full Liquids / Protein Shakes" | "Stage 3: Pureed Foods" | "Stage 4: Soft Solids";

export interface BariatricNutritionStageProps {
  currentStage: BariatricStage;
  dailyProteinGoalGrams: number;
  dailyFluidGoalOz: number;
  className?: string;
}

export const BariatricNutritionStage: React.FC<BariatricNutritionStageProps> = ({
  currentStage,
  dailyProteinGoalGrams = 60,
  dailyFluidGoalOz = 64,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Bariatric Dietary Phase</h4>
        <span className="rounded bg-indigo-100 px-2 py-0.5 font-bold text-indigo-800">
          {currentStage}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-slate-600 dark:text-slate-400">
        <span>Protein Goal: <strong className="text-slate-900 dark:text-white">{dailyProteinGoalGrams}g / day</strong></span>
        <span>Fluid Goal: <strong className="text-slate-900 dark:text-white">{dailyFluidGoalOz} oz (No Straws)</strong></span>
      </div>
    </div>
  );
};
