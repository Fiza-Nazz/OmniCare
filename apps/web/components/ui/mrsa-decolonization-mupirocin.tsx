import React from "react";

export interface MrsaDecolonizationMupirocinProps {
  nasalMupirocinDay: string;
  chlorhexidineBathCompleted: string;
  preopScreenResult: string;
  adherenceConfirmed: string;
  className?: string;
}

export const MrsaDecolonizationMupirocin: React.FC<MrsaDecolonizationMupirocinProps> = ({
  nasalMupirocinDay,
  chlorhexidineBathCompleted,
  preopScreenResult,
  adherenceConfirmed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">MRSA Decolonization Bundle</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pre-Op Decolonization
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Nasal Mupirocin 2% Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nasalMupirocinDay}</strong></div>
        <div className="flex justify-between"><span>2% CHG Daily Washcloth Bath:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{chlorhexidineBathCompleted}</strong></div>
        <div className="flex justify-between"><span>Nares PCR Screen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{preopScreenResult}</strong></div>
        <div className="flex justify-between"><span>Patient Protocol Adherence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{adherenceConfirmed}</strong></div>
      </div>
    </div>
  );
};
