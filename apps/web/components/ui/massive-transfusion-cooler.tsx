import React from "react";

export interface MassiveTransfusionCoolerProps {
  coolerNumber: number;
  prbcUnitsDispensed: number;
  ffpUnitsDispensed: number;
  plateletPacksDispensed: number;
  activatedAt: string;
  className?: string;
}

export const MassiveTransfusionCooler: React.FC<MassiveTransfusionCoolerProps> = ({
  coolerNumber,
  prbcUnitsDispensed,
  ffpUnitsDispensed,
  plateletPacksDispensed,
  activatedAt,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border-2 border-rose-500 bg-rose-50 p-4 shadow-sm dark:border-rose-800 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-sm text-rose-900 dark:text-rose-200">🩸 MTP Cooler #{coolerNumber} (1:1:1 Ratio)</h4>
        <span className="font-mono text-rose-800">{activatedAt}</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center font-bold">
        <div className="rounded bg-white p-2 dark:bg-slate-900 shadow-xs">
          <span className="text-slate-400 text-[10px]">PRBC</span>
          <p className="text-base text-rose-600">{prbcUnitsDispensed} Units</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-900 shadow-xs">
          <span className="text-slate-400 text-[10px]">FFP</span>
          <p className="text-base text-amber-600">{ffpUnitsDispensed} Units</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-900 shadow-xs">
          <span className="text-slate-400 text-[10px]">Platelets</span>
          <p className="text-base text-blue-600">{plateletPacksDispensed} Pack</p>
        </div>
      </div>
    </div>
  );
};
