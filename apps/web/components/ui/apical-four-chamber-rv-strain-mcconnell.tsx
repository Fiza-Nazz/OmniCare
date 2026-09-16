import React from "react";

export interface ApicalFourChamberRvStrainMcconnellProps {
  rvToLvBasalDiameterRatio: number;
  mcconnellSignApicalSparing: string;
  tapseSystolicExcursionMm: number;
  pulmonaryEmbolismThrombolytic: string;
  className?: string;
}

export const ApicalFourChamberRvStrainMcconnell: React.FC<ApicalFourChamberRvStrainMcconnellProps> = ({
  rvToLvBasalDiameterRatio,
  mcconnellSignApicalSparing,
  tapseSystolicExcursionMm,
  pulmonaryEmbolismThrombolytic,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Apical 4-Chamber RV Strain & McConnell</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cor Pulmonale POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>RV / LV End-Diastolic Basal Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rvToLvBasalDiameterRatio} (&gt;1.0 severe strain)`}</strong></div>
        <div className="flex justify-between"><span>McConnell Wall-Motion Sparing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{mcconnellSignApicalSparing}</strong></div>
        <div className="flex justify-between"><span>Tricuspid Annular Excursion (TAPSE):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tapseSystolicExcursionMm} mm (&lt;16 abnormal)`}</strong></div>
        <div className="flex justify-between"><span>Systemic Thrombolytic / Clot Triage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pulmonaryEmbolismThrombolytic}</strong></div>
      </div>
    </div>
  );
};
