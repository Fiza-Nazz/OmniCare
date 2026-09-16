import React from "react";

export interface ChemicalBurnDecontaminationPhProps {
  chemicalAgentTypeAcidOrAlkali: string;
  irrigationFluidVolumeLiters: number;
  ocularSurfaceMeasuredPh: number;
  limbalIschemiaClockHours: number;
  className?: string;
}

export const ChemicalBurnDecontaminationPh: React.FC<ChemicalBurnDecontaminationPhProps> = ({
  chemicalAgentTypeAcidOrAlkali,
  irrigationFluidVolumeLiters,
  ocularSurfaceMeasuredPh,
  limbalIschemiaClockHours,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Chemical Burn Decontamination & Litmus pH</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ocular & Dermal Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Corrosive Category:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{chemicalAgentTypeAcidOrAlkali}</strong></div>
        <div className="flex justify-between"><span>Irrigation Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${irrigationFluidVolumeLiters} L`}</strong></div>
        <div className="flex justify-between"><span>Conjunctival pH:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ocularSurfaceMeasuredPh}</strong></div>
        <div className="flex justify-between"><span>Limbal Ischemia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${limbalIschemiaClockHours} clock hours`}</strong></div>
      </div>
    </div>
  );
};
