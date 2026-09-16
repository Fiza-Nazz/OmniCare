import React from "react";

export interface NeonatalBiliPhototherapyNomogramProps {
  postnatalAgeHours: number;
  totalSerumBilirubinMgDl: number;
  riskTierAAP: string;
  exchangeTransfusionThresholdMgDl: number;
  className?: string;
}

export const NeonatalBiliPhototherapyNomogram: React.FC<NeonatalBiliPhototherapyNomogramProps> = ({
  postnatalAgeHours,
  totalSerumBilirubinMgDl,
  riskTierAAP,
  exchangeTransfusionThresholdMgDl,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">AAP Phototherapy Nomogram (Bhutani)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neonatal Hyperbili
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Postnatal Age:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postnatalAgeHours} hours`}</strong></div>
        <div className="flex justify-between"><span>Total Bilirubin (TSB):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalSerumBilirubinMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Risk Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{riskTierAAP}</strong></div>
        <div className="flex justify-between"><span>Exchange Transfusion Cutoff:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${exchangeTransfusionThresholdMgDl} mg/dL`}</strong></div>
      </div>
    </div>
  );
};
