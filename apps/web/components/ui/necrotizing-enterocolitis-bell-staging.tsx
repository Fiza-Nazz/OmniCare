import React from "react";

export interface NecrotizingEnterocolitisBellStagingProps {
  bellStage: string;
  pneumatosisIntestinalis: string;
  portalVenousGas: string;
  surgicalConsultStatus: string;
  className?: string;
}

export const NecrotizingEnterocolitisBellStaging: React.FC<NecrotizingEnterocolitisBellStagingProps> = ({
  bellStage,
  pneumatosisIntestinalis,
  portalVenousGas,
  surgicalConsultStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Necrotizing Enterocolitis (Bell Staging)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Critical
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bell Clinical Stage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Stage ${bellStage}`}</strong></div>
        <div className="flex justify-between"><span>Pneumatosis Intestinalis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pneumatosisIntestinalis}</strong></div>
        <div className="flex justify-between"><span>Portal Venous Gas:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{portalVenousGas}</strong></div>
        <div className="flex justify-between"><span>Surgical Intervention:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{surgicalConsultStatus}</strong></div>
      </div>
    </div>
  );
};
