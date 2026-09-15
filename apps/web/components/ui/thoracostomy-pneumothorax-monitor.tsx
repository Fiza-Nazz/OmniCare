import React from "react";

export interface ThoracostomyPneumothoraxMonitorProps {
  suctionCmH2O: number;
  airLeakGrade: string;
  drainage24hMl: number;
  tidalingPresent: string;
  className?: string;
}

export const ThoracostomyPneumothoraxMonitor: React.FC<ThoracostomyPneumothoraxMonitorProps> = ({
  suctionCmH2O,
  airLeakGrade,
  drainage24hMl,
  tidalingPresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Chest Drainage Air Leak Monitor</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Thoracic Drainage
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Applied Suction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`-${suctionCmH2O} cmH2O`}</strong></div>
        <div className="flex justify-between"><span>Water Seal Air Leak:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{airLeakGrade}</strong></div>
        <div className="flex justify-between"><span>24h Drainage Output:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${drainage24hMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Chamber Tidaling:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tidalingPresent}</strong></div>
      </div>
    </div>
  );
};
