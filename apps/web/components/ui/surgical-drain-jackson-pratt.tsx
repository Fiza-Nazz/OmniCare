import React from "react";

export interface SurgicalDrainJacksonPrattProps {
  drainLocation: string;
  outputShiftMl: number;
  fluidCharacter: string;
  bulbSuctionCharged: string;
  className?: string;
}

export const SurgicalDrainJacksonPratt: React.FC<SurgicalDrainJacksonPrattProps> = ({
  drainLocation,
  outputShiftMl,
  fluidCharacter,
  bulbSuctionCharged,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Jackson-Pratt (JP) Closed Drain</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Surgical Drain
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Anatomical Bed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{drainLocation}</strong></div>
        <div className="flex justify-between"><span>Shift Output Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${outputShiftMl} mL`}</strong></div>
        <div className="flex justify-between"><span>Exudate Character:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fluidCharacter}</strong></div>
        <div className="flex justify-between"><span>Negative Vacuum Charge:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bulbSuctionCharged}</strong></div>
      </div>
    </div>
  );
};
