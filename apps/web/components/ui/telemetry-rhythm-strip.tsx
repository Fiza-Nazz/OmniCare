import React from "react";

export interface TelemetryRhythmStripProps {
  rhythmInterpretation: string;
  heartRateBpm: number;
  prIntervalMs?: number;
  qrsDurationMs?: number;
  qtcMs?: number;
  lead?: string;
  className?: string;
}

export const TelemetryRhythmStrip: React.FC<TelemetryRhythmStripProps> = ({
  rhythmInterpretation,
  heartRateBpm,
  prIntervalMs = 160,
  qrsDurationMs = 88,
  qtcMs = 420,
  lead = "Lead II",
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 text-emerald-400 font-mono shadow-md ${className}`}>
      <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
        <span className="font-bold uppercase tracking-wider">{lead}: {rhythmInterpretation}</span>
        <span className="text-base font-black">{heartRateBpm} BPM</span>
      </div>
      <div className="my-3 h-12 flex items-center justify-center border-y border-dashed border-slate-900 bg-slate-900/40">
        <span className="text-xs text-emerald-500/80">/\_/\__/\_/\__ ECG Rhythm Sample Traced __/\_/\__/\_/\</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>PR: {prIntervalMs}ms</span>
        <span>QRS: {qrsDurationMs}ms</span>
        <span>QTc: {qtcMs}ms</span>
      </div>
    </div>
  );
};
