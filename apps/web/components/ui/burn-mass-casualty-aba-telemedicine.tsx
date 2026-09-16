import React from "react";

export interface BurnMassCasualtyAbaTelemedicineProps {
  burnTbsaTotalPercent: number;
  inhalationInjuryConfirmed: string;
  regionalBurnCenterBedAssigned: string;
  teleBurnSurgeonReviewed: string;
  className?: string;
}

export const BurnMassCasualtyAbaTelemedicine: React.FC<BurnMassCasualtyAbaTelemedicineProps> = ({
  burnTbsaTotalPercent,
  inhalationInjuryConfirmed,
  regionalBurnCenterBedAssigned,
  teleBurnSurgeonReviewed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Burn Disaster Telemedicine Triage</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Burn Disaster
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Total Body Surface Area (TBSA):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${burnTbsaTotalPercent}% Burn`}</strong></div>
        <div className="flex justify-between"><span>Concomitant Inhalation Injury:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{inhalationInjuryConfirmed}</strong></div>
        <div className="flex justify-between"><span>ABA Regional Burn Center Match:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{regionalBurnCenterBedAssigned}</strong></div>
        <div className="flex justify-between"><span>Emergency Tele-Burn Specialty Review:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{teleBurnSurgeonReviewed}</strong></div>
      </div>
    </div>
  );
};
