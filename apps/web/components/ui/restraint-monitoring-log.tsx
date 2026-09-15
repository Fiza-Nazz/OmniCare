import React from "react";

export interface RestraintMonitoringLogProps {
  restraintType: string;
  orderExpiryTime: string;
  lastCirculationCheck: string;
  lastRangeOfMotion: string;
  rnSignoff: string;
  className?: string;
}

export const RestraintMonitoringLog: React.FC<RestraintMonitoringLogProps> = ({
  restraintType,
  orderExpiryTime,
  lastCirculationCheck,
  lastRangeOfMotion,
  rnSignoff,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Restraint Monitoring: {restraintType}</h4>
        <span className="text-xs text-rose-600 font-bold">Order Exp: {orderExpiryTime}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-slate-400">15-Min Neurovascular Check</span>
          <p className="font-semibold text-slate-800 dark:text-slate-200">{lastCirculationCheck}</p>
        </div>
        <div>
          <span className="text-slate-400">2-Hour Range of Motion</span>
          <p className="font-semibold text-slate-800 dark:text-slate-200">{lastRangeOfMotion}</p>
        </div>
      </div>
      <div className="mt-2 text-right text-[11px] text-slate-400">Audited by RN: {rnSignoff}</div>
    </div>
  );
};
