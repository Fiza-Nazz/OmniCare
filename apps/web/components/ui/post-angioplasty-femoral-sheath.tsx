import React from "react";

export interface PostAngioplastyFemoralSheathProps {
  sheathFrench: number;
  actSeconds: number;
  hemostasisDevice: string;
  bedrestMinutes: number;
  className?: string;
}

export const PostAngioplastyFemoralSheath: React.FC<PostAngioplastyFemoralSheathProps> = ({
  sheathFrench,
  actSeconds,
  hemostasisDevice,
  bedrestMinutes,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Femoral Sheath Removal</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Post-PCI Recovery
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Sheath Caliber:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${sheathFrench} Fr`}</strong></div>
        <div className="flex justify-between"><span>Current ACT:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${actSeconds}s`}</strong></div>
        <div className="flex justify-between"><span>Closure Device:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hemostasisDevice}</strong></div>
        <div className="flex justify-between"><span>Required Bedrest:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bedrestMinutes} min`}</strong></div>
      </div>
    </div>
  );
};
