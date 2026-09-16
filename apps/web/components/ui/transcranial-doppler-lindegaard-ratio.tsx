import React from "react";

export interface TranscranialDopplerLindegaardRatioProps {
  mcaMeanFlowVelocityCmS: number;
  extracranialIcaVelocityCmS: number;
  calculatedLindegaardRatio: number;
  angiographicAngioplastyDue: string;
  className?: string;
}

export const TranscranialDopplerLindegaardRatio: React.FC<TranscranialDopplerLindegaardRatioProps> = ({
  mcaMeanFlowVelocityCmS,
  extracranialIcaVelocityCmS,
  calculatedLindegaardRatio,
  angiographicAngioplastyDue,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Transcranial Doppler (TCD) Vasospasm</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          TCD Ultrasound
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>MCA Mean Velocity (Vmca):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${mcaMeanFlowVelocityCmS} cm/s (&gt;200 spasm)`}</strong></div>
        <div className="flex justify-between"><span>Submandibular Extracranial ICA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${extracranialIcaVelocityCmS} cm/s`}</strong></div>
        <div className="flex justify-between"><span>Calculated Lindegaard Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedLindegaardRatio} (&gt;6 severe spasm)`}</strong></div>
        <div className="flex justify-between"><span>Endovascular Verapamil / PTA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{angiographicAngioplastyDue}</strong></div>
      </div>
    </div>
  );
};
