import React from "react";

export interface ControlledSubstanceLogProps {
  medicationName: string;
  doseAdministered: string;
  doseWasted: string;
  administeringNurse: string;
  witnessingNurse: string;
  newCountBalance: number;
  timestamp: string;
  className?: string;
}

export const ControlledSubstanceLog: React.FC<ControlledSubstanceLogProps> = ({
  medicationName,
  doseAdministered,
  doseWasted,
  administeringNurse,
  witnessingNurse,
  newCountBalance,
  timestamp,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">🔒 DEA Narcotic Waste: {medicationName}</h4>
        <span className="font-mono font-bold text-blue-600">Vault Balance: {newCountBalance}</span>
      </div>
      <div className="mt-3 space-y-1 text-slate-600 dark:text-slate-400">
        <p>Administered: <strong className="text-slate-900 dark:text-white">{doseAdministered}</strong> • Wasted: <strong className="text-rose-600">{doseWasted}</strong></p>
        <p>Primary RN: {administeringNurse} | Dual Witness RN: {witnessingNurse}</p>
        <time className="block text-[11px] text-slate-400">{timestamp}</time>
      </div>
    </div>
  );
};
