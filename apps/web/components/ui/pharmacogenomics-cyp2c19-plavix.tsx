import React from "react";

export interface PharmacogenomicsCyp2c19PlavixProps {
  cyp2c19StarAlleles: string;
  metabolizerClassification: string;
  stentThrombosisResistance: string;
  recommendedSwitchAgent: string;
  className?: string;
}

export const PharmacogenomicsCyp2c19Plavix: React.FC<PharmacogenomicsCyp2c19PlavixProps> = ({
  cyp2c19StarAlleles,
  metabolizerClassification,
  stentThrombosisResistance,
  recommendedSwitchAgent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CYP2C19 Clopidogrel (Plavix) PGx</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiovascular PGx
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CYP2C19 Star Allele Result:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cyp2c19StarAlleles}</strong></div>
        <div className="flex justify-between"><span>Hepatic Bioactivation Capacity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{metabolizerClassification}</strong></div>
        <div className="flex justify-between"><span>Clopidogrel Resistance Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{stentThrombosisResistance}</strong></div>
        <div className="flex justify-between"><span>Preferred Non-Prodrug Switch:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{recommendedSwitchAgent}</strong></div>
      </div>
    </div>
  );
};
