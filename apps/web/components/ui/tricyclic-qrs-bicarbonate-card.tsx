import React from "react";

export interface TricyclicQrsBicarbonateCardProps {
  qrsDurationMs: number;
  terminalRWaveAvrMm: number;
  hypertonicBicarbonateBolusMeq: number;
  serumAlkalinizationTargetPh: number;
  className?: string;
}

export const TricyclicQrsBicarbonateCard: React.FC<TricyclicQrsBicarbonateCardProps> = ({
  qrsDurationMs,
  terminalRWaveAvrMm,
  hypertonicBicarbonateBolusMeq,
  serumAlkalinizationTargetPh,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">TCA Overdose (Sodium Bicarbonate)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          TCA Cardiotoxicity
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Ventricular QRS Width:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${qrsDurationMs} ms (&gt;100ms)`}</strong></div>
        <div className="flex justify-between"><span>Lead aVR Terminal R Wave:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${terminalRWaveAvrMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Sodium Bicarb Hypertonic Push:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hypertonicBicarbonateBolusMeq} mEq IV`}</strong></div>
        <div className="flex justify-between"><span>Arterial Serum pH Goal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumAlkalinizationTargetPh} (7.50-7.55)`}</strong></div>
      </div>
    </div>
  );
};
