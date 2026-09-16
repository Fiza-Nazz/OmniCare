import React from "react";

export interface BluntTraumaSplenorenalFreeFluidProps {
  splenorenalInterfaceFluid: string;
  splenicParenchymalLaceration: string;
  leftHemothoraxVisualized: string;
  abdominalComputedTomographyStatus: string;
  className?: string;
}

export const BluntTraumaSplenorenalFreeFluid: React.FC<BluntTraumaSplenorenalFreeFluidProps> = ({
  splenorenalInterfaceFluid,
  splenicParenchymalLaceration,
  leftHemothoraxVisualized,
  abdominalComputedTomographyStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">FAST Splenorenal Recess (LUQ)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Trauma LUQ
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Splenorenal Space Anechoic Stripe:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{splenorenalInterfaceFluid}</strong></div>
        <div className="flex justify-between"><span>Subcapsular Splenic Hematoma:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{splenicParenchymalLaceration}</strong></div>
        <div className="flex justify-between"><span>Supradiaphragmatic Hemothorax:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{leftHemothoraxVisualized}</strong></div>
        <div className="flex justify-between"><span>Hemodynamically Stable CT Plan:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{abdominalComputedTomographyStatus}</strong></div>
      </div>
    </div>
  );
};
