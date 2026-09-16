import React from "react";

export interface CcbToxicityVasoplegiaManagementProps {
  calciumChlorideBolusesDelivered: number;
  ionizedCalciumMmolPerL: number;
  intravenousLipidEmulsionInitiated: string;
  methyleneBlueDoseMgKg: number;
  className?: string;
}

export const CcbToxicityVasoplegiaManagement: React.FC<CcbToxicityVasoplegiaManagementProps> = ({
  calciumChlorideBolusesDelivered,
  ionizedCalciumMmolPerL,
  intravenousLipidEmulsionInitiated,
  methyleneBlueDoseMgKg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CCB Overdose & Refractory Vasoplegia</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiovascular Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>IV Calcium Boluses (10%):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{calciumChlorideBolusesDelivered}</strong></div>
        <div className="flex justify-between"><span>Ionized Calcium Target:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ionizedCalciumMmolPerL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Intralipid 20% (ILE):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intravenousLipidEmulsionInitiated}</strong></div>
        <div className="flex justify-between"><span>Methylene Blue Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${methyleneBlueDoseMgKg} mg/kg`}</strong></div>
      </div>
    </div>
  );
};
