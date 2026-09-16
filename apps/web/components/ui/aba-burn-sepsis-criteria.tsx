import React from "react";

export interface AbaBurnSepsisCriteriaProps {
  bodyTemperatureCelsius: number;
  plateletDropPercent: number;
  insulinResistanceInfusionRequired: string;
  abaSepsisCriteriaMetCount: number;
  className?: string;
}

export const AbaBurnSepsisCriteria: React.FC<AbaBurnSepsisCriteriaProps> = ({
  bodyTemperatureCelsius,
  plateletDropPercent,
  insulinResistanceInfusionRequired,
  abaSepsisCriteriaMetCount,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Burn Sepsis (ABA Consensus Criteria)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Burn ICU Infection
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Body Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bodyTemperatureCelsius} °C`}</strong></div>
        <div className="flex justify-between"><span>Platelet Reduction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plateletDropPercent}% from baseline`}</strong></div>
        <div className="flex justify-between"><span>Acute Insulin Resistance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{insulinResistanceInfusionRequired}</strong></div>
        <div className="flex justify-between"><span>ABA Criteria Met:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${abaSepsisCriteriaMetCount} / 6`}</strong></div>
      </div>
    </div>
  );
};
