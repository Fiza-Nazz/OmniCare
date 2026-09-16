import React from "react";

export interface FastUltrasoundMorisonPouchProps {
  anechoicFreeFluidPresent: string;
  fluidStripeThicknessMm: number;
  subdiaphragmaticSpaceClear: string;
  statLaparotomyIndicated: string;
  className?: string;
}

export const FastUltrasoundMorisonPouch: React.FC<FastUltrasoundMorisonPouchProps> = ({
  anechoicFreeFluidPresent,
  fluidStripeThicknessMm,
  subdiaphragmaticSpaceClear,
  statLaparotomyIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">FAST Exam Morison Pouch (RUQ)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Trauma POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Hepatorenal Free Fluid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anechoicFreeFluidPresent}</strong></div>
        <div className="flex justify-between"><span>Fluid Stripe Width:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fluidStripeThicknessMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Right Hemidiaphragm Base:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{subdiaphragmaticSpaceClear}</strong></div>
        <div className="flex justify-between"><span>Hemoperitoneum Operative Triage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{statLaparotomyIndicated}</strong></div>
      </div>
    </div>
  );
};
