import React from "react";

export interface Igg4RelatedDiseaseIndexProps {
  serumIgg4ConcentrationMgDl: number;
  igg4PlasmaCellRatioOnBiopsyPercent: number;
  retroperitonealFibrosisPresent: string;
  glucocorticoidRituximabResponse: string;
  className?: string;
}

export const Igg4RelatedDiseaseIndex: React.FC<Igg4RelatedDiseaseIndexProps> = ({
  serumIgg4ConcentrationMgDl,
  igg4PlasmaCellRatioOnBiopsyPercent,
  retroperitonealFibrosisPresent,
  glucocorticoidRituximabResponse,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">IgG4-Related Systemic Disease (IgG4-RD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Multisystem Autoimmune
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum IgG4 Level:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumIgg4ConcentrationMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>IgG4+ / IgG+ Plasma Cells:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${igg4PlasmaCellRatioOnBiopsyPercent}% (>40%)`}</strong></div>
        <div className="flex justify-between"><span>Fibrosclerosing Mass:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{retroperitonealFibrosisPresent}</strong></div>
        <div className="flex justify-between"><span>Steroid / Rituximab Response:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{glucocorticoidRituximabResponse}</strong></div>
      </div>
    </div>
  );
};
