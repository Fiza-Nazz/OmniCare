import React from "react";

export interface BetaBlockerGlucagonRescueProps {
  glucagonBolusMg: number;
  heartRateBpm: number;
  nauseaProphylaxisGiven: string;
  continuousInfusionMgHr: number;
  className?: string;
}

export const BetaBlockerGlucagonRescue: React.FC<BetaBlockerGlucagonRescueProps> = ({
  glucagonBolusMg,
  heartRateBpm,
  nauseaProphylaxisGiven,
  continuousInfusionMgHr,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Beta-Blocker Toxicity Glucagon Rescue</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiotoxic Rescue
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Initial Glucagon Bolus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${glucagonBolusMg} mg IV`}</strong></div>
        <div className="flex justify-between"><span>Refractory Bradycardia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${heartRateBpm} bpm`}</strong></div>
        <div className="flex justify-between"><span>Ondansetron Premedication:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nauseaProphylaxisGiven}</strong></div>
        <div className="flex justify-between"><span>Maintenance Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${continuousInfusionMgHr} mg/hr`}</strong></div>
      </div>
    </div>
  );
};
