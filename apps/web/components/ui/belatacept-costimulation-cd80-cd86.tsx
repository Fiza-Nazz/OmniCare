import React from "react";

export interface BelataceptCostimulationCd80Cd86Props {
  ebvSeropositiveConfirmed: string;
  estimatedGfrImprovement: number;
  monthlyInfusionScheduleDay: string;
  postTransplantRejectionHistory: string;
  className?: string;
}

export const BelataceptCostimulationCd80Cd86: React.FC<BelataceptCostimulationCd80Cd86Props> = ({
  ebvSeropositiveConfirmed,
  estimatedGfrImprovement,
  monthlyInfusionScheduleDay,
  postTransplantRejectionHistory,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Belatacept (Nulojix) CNI-Free Regimen</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Costimulation Blockade
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pre-Treatment EBV Serology (+):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ebvSeropositiveConfirmed}</strong></div>
        <div className="flex justify-between"><span>eGFR Sparing Benefit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${estimatedGfrImprovement} mL/min/1.73m²`}</strong></div>
        <div className="flex justify-between"><span>Every-4-Week Infusion Cycle:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{monthlyInfusionScheduleDay}</strong></div>
        <div className="flex justify-between"><span>Allograft Rejection Incidence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{postTransplantRejectionHistory}</strong></div>
      </div>
    </div>
  );
};
