import React from "react";

export interface CardiacArrestTimerProps {
  totalElapsedSeconds: number;
  cprCycleSecondsRemaining: number;
  shocksDelivered: number;
  epinephrineDosesGiven: number;
  className?: string;
}

export const CardiacArrestTimer: React.FC<CardiacArrestTimerProps> = ({
  totalElapsedSeconds,
  cprCycleSecondsRemaining,
  shocksDelivered,
  epinephrineDosesGiven,
  className = "",
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`rounded-xl border-2 border-rose-500 bg-slate-950 p-4 text-white shadow-xl ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h4 className="text-sm font-black text-rose-500 uppercase tracking-wider">🚨 Code Blue Resuscitation</h4>
        <span className="font-mono text-base font-bold text-slate-200">{formatTime(totalElapsedSeconds)}</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center text-xs">
        <div className="rounded bg-slate-900 p-2 border border-slate-800">
          <span className="text-slate-400">Rhythm Check In</span>
          <p className="font-mono text-xl font-black text-amber-400">{formatTime(cprCycleSecondsRemaining)}</p>
        </div>
        <div className="rounded bg-slate-900 p-2 border border-slate-800">
          <span className="text-slate-400">Shocks</span>
          <p className="font-mono text-xl font-black text-rose-400">{shocksDelivered}</p>
        </div>
        <div className="rounded bg-slate-900 p-2 border border-slate-800">
          <span className="text-slate-400">Epi (1mg)</span>
          <p className="font-mono text-xl font-black text-blue-400">{epinephrineDosesGiven}x</p>
        </div>
      </div>
    </div>
  );
};
