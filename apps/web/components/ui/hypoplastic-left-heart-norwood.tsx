import React from "react";

export interface HypoplasticLeftHeartNorwoodProps {
  systemicPerfusionMapMmHg: number;
  mixedVenousSaturationSvo2: number;
  qpQsBalanceRatio: string;
  inotropicMilrinoneRate: string;
  className?: string;
}

export const HypoplasticLeftHeartNorwood: React.FC<HypoplasticLeftHeartNorwoodProps> = ({
  systemicPerfusionMapMmHg,
  mixedVenousSaturationSvo2,
  qpQsBalanceRatio,
  inotropicMilrinoneRate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HLHS Stage 1 Norwood Sano Shunt</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Single Ventricle
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Neoaortic Systemic MAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${systemicPerfusionMapMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Mixed Venous Saturation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${mixedVenousSaturationSvo2}% (Goal 50-60%)`}</strong></div>
        <div className="flex justify-between"><span>Qp:Qs Pulmonary Balance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{qpQsBalanceRatio}</strong></div>
        <div className="flex justify-between"><span>Milrinone Afterload Reduction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{inotropicMilrinoneRate}</strong></div>
      </div>
    </div>
  );
};
