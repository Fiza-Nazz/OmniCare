import React from "react";

export interface CholinergicToxidromeAtropineProps {
  bronchialSecretionsCleared: string;
  cumulativeAtropineMg: number;
  heartRateTargetBpm: number;
  pralidoxime2PamInfusion: string;
  className?: string;
}

export const CholinergicToxidromeAtropine: React.FC<CholinergicToxidromeAtropineProps> = ({
  bronchialSecretionsCleared,
  cumulativeAtropineMg,
  heartRateTargetBpm,
  pralidoxime2PamInfusion,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Organophosphate Atropinization</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pesticide Antidote
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bronchial Secretions (Dry):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bronchialSecretionsCleared}</strong></div>
        <div className="flex justify-between"><span>Cumulative Atropine Given:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${cumulativeAtropineMg} mg IV`}</strong></div>
        <div className="flex justify-between"><span>Tachycardia Endpoint:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${heartRateTargetBpm} bpm`}</strong></div>
        <div className="flex justify-between"><span>Pralidoxime (2-PAM):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pralidoxime2PamInfusion}</strong></div>
      </div>
    </div>
  );
};
