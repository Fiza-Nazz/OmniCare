import React from "react";

export interface BrafV600eTargetedInhibitorProps {
  brafCodonVariant: string;
  tumorAnatomicSite: string;
  dualBrafMekRegimen: string;
  pyrexiaMonitoringProtocol: string;
  className?: string;
}

export const BrafV600eTargetedInhibitor: React.FC<BrafV600eTargetedInhibitorProps> = ({
  brafCodonVariant,
  tumorAnatomicSite,
  dualBrafMekRegimen,
  pyrexiaMonitoringProtocol,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">BRAF V600E Mutation Panel</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Targeted Kinase
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Codon 600 Hotspot Mutation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{brafCodonVariant}</strong></div>
        <div className="flex justify-between"><span>Malignancy Primary Site:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tumorAnatomicSite}</strong></div>
        <div className="flex justify-between"><span>Targeted BRAF + MEK Inhibitor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dualBrafMekRegimen}</strong></div>
        <div className="flex justify-between"><span>Drug-Induced Pyrexia Protocol:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pyrexiaMonitoringProtocol}</strong></div>
      </div>
    </div>
  );
};
