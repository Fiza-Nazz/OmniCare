import React from "react";

export interface HyperkalemiaCocktailCardProps {
  potassiumMeqL: number;
  ecgChangesPresent: boolean;
  className?: string;
}

export const HyperkalemiaCocktailCard: React.FC<HyperkalemiaCocktailCardProps> = ({
  potassiumMeqL,
  ecgChangesPresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-sm dark:border-rose-900 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm">Hyperkalemia Protocol (K+: {potassiumMeqL} mEq/L)</h4>
        <span className="rounded bg-rose-600 px-2 py-0.5 font-bold text-white">
          {ecgChangesPresent ? "Peaked T-Waves / QRS Widening" : "No ECG Changes"}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-rose-950 dark:text-rose-300">
        <p>1. <strong>Membrane Stabilization:</strong> Calcium Gluconate 1g IV over 2-3 min</p>
        <p>2. <strong>Intracellular Shift:</strong> Regular Insulin 10 units IV + D50W 50mL (25g)</p>
        <p>3. <strong>Excretion:</strong> Furosemide or Sodium Zirconium Cyclosilicate (Lokelma)</p>
      </div>
    </div>
  );
};
