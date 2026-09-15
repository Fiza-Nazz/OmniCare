import React from "react";

export interface AnkleBrachialIndexPadCardProps {
  rightAbiValue: number;
  leftAbiValue: number;
  padSeverityRight: string;
  padSeverityLeft: string;
  className?: string;
}

export const AnkleBrachialIndexPadCard: React.FC<AnkleBrachialIndexPadCardProps> = ({
  rightAbiValue,
  leftAbiValue,
  padSeverityRight,
  padSeverityLeft,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Ankle-Brachial Index (ABI)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vascular Lab
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Right Leg ABI Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rightAbiValue}`}</strong></div>
        <div className="flex justify-between"><span>Left Leg ABI Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${leftAbiValue}`}</strong></div>
        <div className="flex justify-between"><span>Right Limb Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{padSeverityRight}</strong></div>
        <div className="flex justify-between"><span>Left Limb Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{padSeverityLeft}</strong></div>
      </div>
    </div>
  );
};
