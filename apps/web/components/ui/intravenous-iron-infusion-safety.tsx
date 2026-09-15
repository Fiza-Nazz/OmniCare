import React from "react";

export interface IntravenousIronInfusionSafetyProps {
  ironFormulation: string;
  elementalIronMg: number;
  infusionDurationMin: number;
  hypersensitivityReaction: string;
  className?: string;
}

export const IntravenousIronInfusionSafety: React.FC<IntravenousIronInfusionSafetyProps> = ({
  ironFormulation,
  elementalIronMg,
  infusionDurationMin,
  hypersensitivityReaction,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">IV Iron Infusion Protocol</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Iron Replacement
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Iron Formulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ironFormulation}</strong></div>
        <div className="flex justify-between"><span>Elemental Iron Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${elementalIronMg} mg`}</strong></div>
        <div className="flex justify-between"><span>Infusion Elapsed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${infusionDurationMin} min`}</strong></div>
        <div className="flex justify-between"><span>Adverse Systemic Symptoms:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypersensitivityReaction}</strong></div>
      </div>
    </div>
  );
};
