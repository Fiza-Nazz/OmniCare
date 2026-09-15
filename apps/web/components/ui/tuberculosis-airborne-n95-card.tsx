import React from "react";

export interface TuberculosisAirborneN95CardProps {
  pressureDifferentialPascals: number;
  airChangesPerHour: number;
  n95RespiratorEnforced: string;
  sputumAfbSmearStatus: string;
  className?: string;
}

export const TuberculosisAirborneN95Card: React.FC<TuberculosisAirborneN95CardProps> = ({
  pressureDifferentialPascals,
  airChangesPerHour,
  n95RespiratorEnforced,
  sputumAfbSmearStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Airborne Infection Isolation (AIIR)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Airborne TB
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Room Negative Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pressureDifferentialPascals} Pa`}</strong></div>
        <div className="flex justify-between"><span>Ventilation Exchanges (ACH):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${airChangesPerHour} ACH (Goal &gt;=12)`}</strong></div>
        <div className="flex justify-between"><span>Fit-Tested N95 / PAPR Enforced:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{n95RespiratorEnforced}</strong></div>
        <div className="flex justify-between"><span>Serial Sputum AFB Smears:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sputumAfbSmearStatus}</strong></div>
      </div>
    </div>
  );
};
