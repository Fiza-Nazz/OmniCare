import React from "react";

export interface SuperiorVenaCavaSyndromeCardProps {
  facialPlethoraEdema: string;
  collateralVenousDistension: string;
  airwayCompromiseStridor: string;
  recommendedUrgentIntervention: string;
  className?: string;
}

export const SuperiorVenaCavaSyndromeCard: React.FC<SuperiorVenaCavaSyndromeCardProps> = ({
  facialPlethoraEdema,
  collateralVenousDistension,
  airwayCompromiseStridor,
  recommendedUrgentIntervention,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Superior Vena Cava (SVC) Syndrome</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Onco Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Facial Plethora / Cyanosis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{facialPlethoraEdema}</strong></div>
        <div className="flex justify-between"><span>Thoracic Collateral Veins:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{collateralVenousDistension}</strong></div>
        <div className="flex justify-between"><span>Orthopnea / Stridor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{airwayCompromiseStridor}</strong></div>
        <div className="flex justify-between"><span>Emergency Plan:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{recommendedUrgentIntervention}</strong></div>
      </div>
    </div>
  );
};
