import React from "react";

export interface OrthopedicCompartmentSyndromeCardProps {
  limbLocation: string;
  compartmentMmHg: number;
  deltaPressureMmHg: number;
  passiveStretchPain: string;
  className?: string;
}

export const OrthopedicCompartmentSyndromeCard: React.FC<OrthopedicCompartmentSyndromeCardProps> = ({
  limbLocation,
  compartmentMmHg,
  deltaPressureMmHg,
  passiveStretchPain,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Compartment Syndrome 6 Ps</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Limb Perfusion
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Limb Compartment:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{limbLocation}</strong></div>
        <div className="flex justify-between"><span>Measured Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${compartmentMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Delta Pressure (ΔP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${deltaPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Passive Stretch Pain:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{passiveStretchPain}</strong></div>
      </div>
    </div>
  );
};
