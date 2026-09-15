import React from "react";

export interface TotalAnomalousPulmonaryTapvrProps {
  tapvrAnatomicType: string;
  venousPathwayObstruction: string;
  confluenceToLaAnastomosis: string;
  pulmonaryVenousMeanGradient: number;
  className?: string;
}

export const TotalAnomalousPulmonaryTapvr: React.FC<TotalAnomalousPulmonaryTapvrProps> = ({
  tapvrAnatomicType,
  venousPathwayObstruction,
  confluenceToLaAnastomosis,
  pulmonaryVenousMeanGradient,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">TAPVR Pulmonary Venous Return</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          TAPVR Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Anatomic Drainage Type:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tapvrAnatomicType}</strong></div>
        <div className="flex justify-between"><span>Venous Channel Obstruction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{venousPathwayObstruction}</strong></div>
        <div className="flex justify-between"><span>Common Pulmonary Confluence Repair:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{confluenceToLaAnastomosis}</strong></div>
        <div className="flex justify-between"><span>Anastomotic Doppler Gradient:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pulmonaryVenousMeanGradient} mmHg`}</strong></div>
      </div>
    </div>
  );
};
