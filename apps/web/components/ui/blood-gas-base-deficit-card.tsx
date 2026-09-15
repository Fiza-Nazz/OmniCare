import React from "react";

export interface BloodGasBaseDeficitCardProps {
  baseDeficitMeqL: number;
  className?: string;
}

export const BloodGasBaseDeficitCard: React.FC<BloodGasBaseDeficitCardProps> = ({
  baseDeficitMeqL,
  className = "",
}) => {
  const shockClass =
    baseDeficitMeqL >= -2 ? "No Shock" : baseDeficitMeqL >= -6 ? "Mild Shock" : baseDeficitMeqL >= -14 ? "Moderate Shock" : "Severe Shock / High Mortality";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Base Deficit Resuscitation Guide</h4>
        <span className="font-mono font-bold text-base text-rose-600">{baseDeficitMeqL} mEq/L</span>
      </div>
      <p className="mt-2 text-slate-700 dark:text-slate-300">Classification: <strong className="text-slate-900 dark:text-white">{shockClass}</strong></p>
    </div>
  );
};
