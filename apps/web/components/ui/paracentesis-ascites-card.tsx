import React from "react";

export interface ParacentesisAscitesCardProps {
  fluidDrainedLiters: number;
  albuminGramsRequired: number;
  saagRatio: number;
  className?: string;
}

export const ParacentesisAscitesCard: React.FC<ParacentesisAscitesCardProps> = ({
  fluidDrainedLiters,
  albuminGramsRequired,
  saagRatio,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Large-Volume Paracentesis</h4>
        <span className="text-slate-400">SAAG: {saagRatio} g/dL</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span>Ascitic Fluid: <strong className="font-mono text-base">{fluidDrainedLiters} L</strong></span>
        <span>Albumin (25%): <strong className="font-mono text-blue-600">{albuminGramsRequired}g IV</strong></span>
      </div>
    </div>
  );
};
