import React from "react";

export interface AntiphospholipidSyndromeCriteriaProps {
  lupusAnticoagulantPositive: string;
  anticardiolipinTiterGpl: number;
  thromboticEventHistory: string;
  targetInrWarfarinRange: string;
  className?: string;
}

export const AntiphospholipidSyndromeCriteria: React.FC<AntiphospholipidSyndromeCriteriaProps> = ({
  lupusAnticoagulantPositive,
  anticardiolipinTiterGpl,
  thromboticEventHistory,
  targetInrWarfarinRange,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Antiphospholipid Syndrome (Sydney Criteria)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Immunology & Hemostasis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Lupus Anticoagulant:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lupusAnticoagulantPositive}</strong></div>
        <div className="flex justify-between"><span>Anticardiolipin IgG:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${anticardiolipinTiterGpl} GPL`}</strong></div>
        <div className="flex justify-between"><span>Vascular Thrombosis History:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{thromboticEventHistory}</strong></div>
        <div className="flex justify-between"><span>Target INR Range:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetInrWarfarinRange}</strong></div>
      </div>
    </div>
  );
};
