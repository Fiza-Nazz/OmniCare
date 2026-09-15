import React from "react";

export interface InsulinCarbRatioCardProps {
  carbGrams: number;
  icrGramsPerUnit: number;
  currentBgMgDl: number;
  targetBgMgDl?: number;
  isfMgDlPerUnit?: number;
  className?: string;
}

export const InsulinCarbRatioCard: React.FC<InsulinCarbRatioCardProps> = ({
  carbGrams,
  icrGramsPerUnit,
  currentBgMgDl,
  targetBgMgDl = 100,
  isfMgDlPerUnit = 40,
  className = "",
}) => {
  const carbDose = carbGrams / icrGramsPerUnit;
  const correctionDose = Math.max(0, (currentBgMgDl - targetBgMgDl) / isfMgDlPerUnit);
  const totalDose = carbDose + correctionDose;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mealtime Insulin Bolus</h4>
        <span className="font-mono font-bold text-blue-600 text-base">{totalDose.toFixed(1)} units</span>
      </div>
      <div className="mt-3 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Carbohydrate Dose: {carbDose.toFixed(1)}u ({carbGrams}g @ 1u/{icrGramsPerUnit}g)</p>
        <p>• Correction Dose: {correctionDose.toFixed(1)}u (BG: {currentBgMgDl} ➔ Target: {targetBgMgDl})</p>
      </div>
    </div>
  );
};
