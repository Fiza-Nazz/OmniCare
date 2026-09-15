import React from "react";

export interface TemporaryPacemakerBoxProps {
  pacingRatePpm: number;
  outputMilliamps: number;
  sensitivityMillivolts: number;
  pacingCaptured: boolean;
  className?: string;
}

export const TemporaryPacemakerBox: React.FC<TemporaryPacemakerBoxProps> = ({
  pacingRatePpm,
  outputMilliamps,
  sensitivityMillivolts,
  pacingCaptured,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 text-white font-mono shadow-md text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-emerald-400 text-sm">External Transvenous Pacemaker</span>
        <span className={`rounded px-1.5 py-0.2 font-bold text-[10px] ${pacingCaptured ? "bg-emerald-500 text-slate-950" : "bg-rose-500 text-white"}`}>
          {pacingCaptured ? "Capture 100% ✓" : "Loss of Capture ✗"}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-900 p-2">
          <span className="text-slate-400">Rate</span>
          <p className="font-bold text-base text-slate-200">{pacingRatePpm} ppm</p>
        </div>
        <div className="rounded bg-slate-900 p-2">
          <span className="text-slate-400">Output</span>
          <p className="font-bold text-base text-blue-400">{outputMilliamps} mA</p>
        </div>
        <div className="rounded bg-slate-900 p-2">
          <span className="text-slate-400">Sense</span>
          <p className="font-bold text-base text-amber-400">{sensitivityMillivolts} mV</p>
        </div>
      </div>
    </div>
  );
};
