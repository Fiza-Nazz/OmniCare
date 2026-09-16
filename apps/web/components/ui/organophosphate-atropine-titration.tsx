import React from "react";

export interface OrganophosphateAtropineTitrationProps {
  atropineDoseAccumulatedMg: number;
  bronchialSecretionsCleared: string;
  pralidoximeContinuousInfusionRate: string;
  redBloodCellCholinesterasePercent: number;
  className?: string;
}

export const OrganophosphateAtropineTitration: React.FC<OrganophosphateAtropineTitrationProps> = ({
  atropineDoseAccumulatedMg,
  bronchialSecretionsCleared,
  pralidoximeContinuousInfusionRate,
  redBloodCellCholinesterasePercent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Organophosphate Toxicity (Atropine/2-PAM)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Antidote Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Atropine Delivered:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${atropineDoseAccumulatedMg} mg`}</strong></div>
        <div className="flex justify-between"><span>Bronchorrhea Controlled:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bronchialSecretionsCleared}</strong></div>
        <div className="flex justify-between"><span>Pralidoxime (2-PAM) Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pralidoximeContinuousInfusionRate}</strong></div>
        <div className="flex justify-between"><span>RBC Cholinesterase Activity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${redBloodCellCholinesterasePercent}%`}</strong></div>
      </div>
    </div>
  );
};
