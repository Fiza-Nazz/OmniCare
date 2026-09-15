import React from "react";

export interface KrasG12cMutationInhibitorProps {
  krasAlleleStatus: string;
  primaryOrganSite: string;
  switchPocketInhibitor: string;
  hepaticSafetyMonitoring: string;
  className?: string;
}

export const KrasG12cMutationInhibitor: React.FC<KrasG12cMutationInhibitorProps> = ({
  krasAlleleStatus,
  primaryOrganSite,
  switchPocketInhibitor,
  hepaticSafetyMonitoring,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">KRAS G12C Mutation Targeted Card</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          RAS Targeted
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Exon 2 Codon 12 Allele:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{krasAlleleStatus}</strong></div>
        <div className="flex justify-between"><span>Cancer Primary Organ:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{primaryOrganSite}</strong></div>
        <div className="flex justify-between"><span>Prescribed Switch-II Inhibitor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{switchPocketInhibitor}</strong></div>
        <div className="flex justify-between"><span>ALT/AST Transaminitis Liver Panel:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hepaticSafetyMonitoring}</strong></div>
      </div>
    </div>
  );
};
