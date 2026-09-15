import React from "react";

export interface PronePositioningChecklistProps {
  hoursInProne: number;
  targetHours: number;
  ettDepthCheck: string;
  swimmerArmPosition: string;
  className?: string;
}

export const PronePositioningChecklist: React.FC<PronePositioningChecklistProps> = ({
  hoursInProne,
  targetHours,
  ettDepthCheck,
  swimmerArmPosition,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ARDS Prone Ventilation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Proning Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Prone Elapsed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursInProne} / ${targetHours} Hours`}</strong></div>
        <div className="flex justify-between"><span>ETT Depth Verified:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ettDepthCheck}</strong></div>
        <div className="flex justify-between"><span>Swimmer Position:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{swimmerArmPosition}</strong></div>
        <div className="flex justify-between"><span>Eye Lubrication:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{'Applied Q4H'}</strong></div>
      </div>
    </div>
  );
};
