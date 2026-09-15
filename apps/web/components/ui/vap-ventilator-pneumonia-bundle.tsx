import React from "react";

export interface VapVentilatorPneumoniaBundleProps {
  headOfBedAngleDegrees: number;
  subglotticSuctionContinuously: string;
  dailySedationInterruption: string;
  peepOptimization: string;
  className?: string;
}

export const VapVentilatorPneumoniaBundle: React.FC<VapVentilatorPneumoniaBundleProps> = ({
  headOfBedAngleDegrees,
  subglotticSuctionContinuously,
  dailySedationInterruption,
  peepOptimization,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">VAP Prevention Bundle</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          VAP Bundle
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Head of Bed Elevation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${headOfBedAngleDegrees}° (Goal 30-45°)`}</strong></div>
        <div className="flex justify-between"><span>Subglottic Secretion Suction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{subglotticSuctionContinuously}</strong></div>
        <div className="flex justify-between"><span>Daily Spontaneous Breathing Trial:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dailySedationInterruption}</strong></div>
        <div className="flex justify-between"><span>Endotracheal Cuff Seal:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{peepOptimization}</strong></div>
      </div>
    </div>
  );
};
