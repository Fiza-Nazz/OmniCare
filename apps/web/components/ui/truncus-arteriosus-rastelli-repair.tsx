import React from "react";

export interface TruncusArteriosusRastelliRepairProps {
  collettEdwardsClassification: string;
  truncalValveRegurgitationGrade: string;
  rvPaHomograftConduitMm: number;
  postopPulmonaryHypertensiveCrisis: string;
  className?: string;
}

export const TruncusArteriosusRastelliRepair: React.FC<TruncusArteriosusRastelliRepairProps> = ({
  collettEdwardsClassification,
  truncalValveRegurgitationGrade,
  rvPaHomograftConduitMm,
  postopPulmonaryHypertensiveCrisis,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Truncus Arteriosus (Rastelli Repair)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Truncus Arteriosus
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Collett-Edwards Anatomy Type:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{collettEdwardsClassification}</strong></div>
        <div className="flex justify-between"><span>Truncal Root Regurgitation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{truncalValveRegurgitationGrade}</strong></div>
        <div className="flex justify-between"><span>Valved RV-PA Homograft Caliber:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rvPaHomograftConduitMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Inhaled Nitric Oxide (iNO) Standby:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{postopPulmonaryHypertensiveCrisis}</strong></div>
      </div>
    </div>
  );
};
