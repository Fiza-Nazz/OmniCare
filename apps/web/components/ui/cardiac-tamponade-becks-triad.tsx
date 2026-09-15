import React from "react";

export interface CardiacTamponadeBecksTriadProps {
  hypotensionPresent: string;
  jugularVenousDistension: string;
  muffledHeartSounds: string;
  pulsusParadoxusMmHg: number;
  className?: string;
}

export const CardiacTamponadeBecksTriad: React.FC<CardiacTamponadeBecksTriadProps> = ({
  hypotensionPresent,
  jugularVenousDistension,
  muffledHeartSounds,
  pulsusParadoxusMmHg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Cardiac Tamponade Evaluation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Acute Tamponade
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Systemic Hypotension:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypotensionPresent}</strong></div>
        <div className="flex justify-between"><span>Jugular Distension (JVD):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{jugularVenousDistension}</strong></div>
        <div className="flex justify-between"><span>Distant Heart Sounds:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{muffledHeartSounds}</strong></div>
        <div className="flex justify-between"><span>Pulsus Paradoxus Drop:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pulsusParadoxusMmHg} mmHg`}</strong></div>
      </div>
    </div>
  );
};
