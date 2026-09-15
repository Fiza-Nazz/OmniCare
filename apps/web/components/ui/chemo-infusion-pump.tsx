import React from "react";

export interface ChemoInfusionPumpProps {
  channel: string;
  drugName: string;
  rateMlPerHour: number;
  vtbiMl: number;
  volumeInfusedMl: number;
  isSoftLimitExceeded?: boolean;
  className?: string;
}

export const ChemoInfusionPump: React.FC<ChemoInfusionPumpProps> = ({
  channel,
  drugName,
  rateMlPerHour,
  vtbiMl,
  volumeInfusedMl,
  isSoftLimitExceeded = false,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 text-white font-mono shadow-md ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
        <span className="font-bold text-blue-400">CHANNEL {channel} (SMART PUMP)</span>
        {isSoftLimitExceeded && (
          <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-300 border border-amber-500/30">
            Soft Limit Override
          </span>
        )}
      </div>
      <h4 className="mt-2 text-base font-bold text-slate-100">{drugName}</h4>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded bg-slate-900 p-2">
          <span className="text-slate-400">Rate (mL/hr)</span>
          <p className="text-lg font-bold text-emerald-400">{rateMlPerHour}</p>
        </div>
        <div className="rounded bg-slate-900 p-2">
          <span className="text-slate-400">VTBI (mL)</span>
          <p className="text-lg font-bold text-blue-400">{vtbiMl}</p>
        </div>
        <div className="rounded bg-slate-900 p-2">
          <span className="text-slate-400">Infused</span>
          <p className="text-lg font-bold text-slate-300">{volumeInfusedMl} mL</p>
        </div>
      </div>
    </div>
  );
};
