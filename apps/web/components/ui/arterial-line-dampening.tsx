import React from "react";

export type WaveDampening = "optimal" | "over_damped" | "under_damped";

export interface ArterialLineDampeningProps {
  lineSite: string;
  dampeningState: WaveDampening;
  lastZeroedAt: string;
  className?: string;
}

const dampTheme: Record<WaveDampening, { label: string; text: string }> = {
  optimal: { label: "Optimal Dampening (Accurate BP)", text: "text-emerald-600" },
  over_damped: { label: "Over-damped (Falsely Low SBP / High DBP)", text: "text-amber-600" },
  under_damped: { label: "Under-damped (Resonance Overshoot SBP)", text: "text-rose-600" },
};

export const ArterialLineDampening: React.FC<ArterialLineDampeningProps> = ({
  lineSite,
  dampeningState,
  lastZeroedAt,
  className = "",
}) => {
  const config = dampTheme[dampeningState];

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Arterial Line Waveform: {lineSite}</h4>
        <span className="text-slate-400">Zeroed: {lastZeroedAt}</span>
      </div>
      <p className={`mt-2 font-bold ${config.text}`}>Square Wave Fast Flush: {config.label}</p>
    </div>
  );
};
