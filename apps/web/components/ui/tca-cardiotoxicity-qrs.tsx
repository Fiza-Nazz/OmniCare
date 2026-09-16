import React from "react";

export interface TcaCardiotoxicityQrsProps {
  qrsDurationMs: number;
  leadAVRTerminalRWaveMm: number;
  hypertonicBicarbonateBolusesGiven: number;
  serumSodiumMeqPerL: number;
  className?: string;
}

export const TcaCardiotoxicityQrs: React.FC<TcaCardiotoxicityQrsProps> = ({
  qrsDurationMs,
  leadAVRTerminalRWaveMm,
  hypertonicBicarbonateBolusesGiven,
  serumSodiumMeqPerL,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">TCA Cardiotoxicity (Sodium Bicarb)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Emergency Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>QRS Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${qrsDurationMs} ms`}</strong></div>
        <div className="flex justify-between"><span>Lead aVR Terminal R:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${leadAVRTerminalRWaveMm} mm`}</strong></div>
        <div className="flex justify-between"><span>NaHCO3 Boluses (8.4%):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hypertonicBicarbonateBolusesGiven}</strong></div>
        <div className="flex justify-between"><span>Serum Sodium:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumSodiumMeqPerL} mEq/L`}</strong></div>
      </div>
    </div>
  );
};
