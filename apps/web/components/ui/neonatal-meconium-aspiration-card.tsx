import React from "react";

export interface NeonatalMeconiumAspirationCardProps {
  amnioticFluidType: string;
  vigorousAtBirth: string;
  trachealSuctionRequired: string;
  cpapSupport: string;
  className?: string;
}

export const NeonatalMeconiumAspirationCard: React.FC<NeonatalMeconiumAspirationCardProps> = ({
  amnioticFluidType,
  vigorousAtBirth,
  trachealSuctionRequired,
  cpapSupport,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Meconium Aspiration Protocol</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Delivery Room
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Fluid Consistency:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{amnioticFluidType}</strong></div>
        <div className="flex justify-between"><span>Vigorous Neonate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vigorousAtBirth}</strong></div>
        <div className="flex justify-between"><span>Direct Tracheal Suction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{trachealSuctionRequired}</strong></div>
        <div className="flex justify-between"><span>Non-Invasive CPAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cpapSupport}</strong></div>
      </div>
    </div>
  );
};
