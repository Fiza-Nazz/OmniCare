import React from "react";

export interface SwanGanzCatheterCardProps {
  papSystolic: number;
  papDiastolic: number;
  pcwpMmHg: number;
  pvrDynes: number;
  className?: string;
}

export const SwanGanzCatheterCard: React.FC<SwanGanzCatheterCardProps> = ({
  papSystolic,
  papDiastolic,
  pcwpMmHg,
  pvrDynes,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Swan-Ganz Pulmonary Pressures</h4>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">PAP (mmHg)</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{papSystolic}/{papDiastolic}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Wedge (PCWP)</span>
          <p className="font-bold text-blue-600">{pcwpMmHg} mmHg</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">PVR</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{pvrDynes} dynes</p>
        </div>
      </div>
    </div>
  );
};
