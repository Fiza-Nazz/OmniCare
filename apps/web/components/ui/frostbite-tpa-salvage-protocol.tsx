import React from "react";

export interface FrostbiteTpaSalvageProtocolProps {
  postRewarmingHoursElapsed: number;
  ischemicDigitCount: number;
  intraArterialTpaInfused: string;
  prostacyclinIloprostAdjunct: string;
  className?: string;
}

export const FrostbiteTpaSalvageProtocol: React.FC<FrostbiteTpaSalvageProtocolProps> = ({
  postRewarmingHoursElapsed,
  ischemicDigitCount,
  intraArterialTpaInfused,
  prostacyclinIloprostAdjunct,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Severe Frostbite (Thrombolytic Salvage)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Environmental Medicine
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Time Since Rewarming:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postRewarmingHoursElapsed} hrs (<24h window)`}</strong></div>
        <div className="flex justify-between"><span>Severely Ischemic Digits:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ischemicDigitCount}</strong></div>
        <div className="flex justify-between"><span>Catheter-Directed tPA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intraArterialTpaInfused}</strong></div>
        <div className="flex justify-between"><span>IV Iloprost / Prostacyclin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{prostacyclinIloprostAdjunct}</strong></div>
      </div>
    </div>
  );
};
