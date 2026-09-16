import React from "react";

export interface BurnCurreriCaloricExpenditureProps {
  curreriCalculatedKcalPerDay: number;
  proteinRequirementGramsKgDay: number;
  enteralFeedingInitiatedWithin12Hours: string;
  oxandroloneAnabolicAdjunct: string;
  className?: string;
}

export const BurnCurreriCaloricExpenditure: React.FC<BurnCurreriCaloricExpenditureProps> = ({
  curreriCalculatedKcalPerDay,
  proteinRequirementGramsKgDay,
  enteralFeedingInitiatedWithin12Hours,
  oxandroloneAnabolicAdjunct,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hypermetabolic Nutrition (Curreri Formula)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Critical Care Nutrition
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Target Energy Expenditure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${curreriCalculatedKcalPerDay} kcal/day`}</strong></div>
        <div className="flex justify-between"><span>Target Protein Intake:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${proteinRequirementGramsKgDay} g/kg/day`}</strong></div>
        <div className="flex justify-between"><span>Early Post-Pyloric Feeding:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{enteralFeedingInitiatedWithin12Hours}</strong></div>
        <div className="flex justify-between"><span>Oxandrolone Anabolic Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{oxandroloneAnabolicAdjunct}</strong></div>
      </div>
    </div>
  );
};
