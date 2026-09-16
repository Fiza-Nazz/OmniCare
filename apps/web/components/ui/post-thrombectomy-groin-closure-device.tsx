import React from "react";

export interface PostThrombectomyGroinClosureDeviceProps {
  arteriotomyClosureBrand: string;
  distalDorsalisPedisPulse: string;
  retroperitonealHematomaPain: string;
  flatBedrestDurationHours: number;
  className?: string;
}

export const PostThrombectomyGroinClosureDevice: React.FC<PostThrombectomyGroinClosureDeviceProps> = ({
  arteriotomyClosureBrand,
  distalDorsalisPedisPulse,
  retroperitonealHematomaPain,
  flatBedrestDurationHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Femoral Arteriotomy Closure Check</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuro Endovascular
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Deployed Hemostatic Device:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{arteriotomyClosureBrand}</strong></div>
        <div className="flex justify-between"><span>Distal Pedal Pulse Palpable:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{distalDorsalisPedisPulse}</strong></div>
        <div className="flex justify-between"><span>Flank / Retroperitoneal Pain:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{retroperitonealHematomaPain}</strong></div>
        <div className="flex justify-between"><span>Mandatory Flat Bedrest:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${flatBedrestDurationHours} Hours`}</strong></div>
      </div>
    </div>
  );
};
