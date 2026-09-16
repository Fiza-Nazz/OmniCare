import React from "react";

export interface TakayasuArteritisIshikawaCriteriaProps {
  interArmSystolicBpDifferenceMmHg: number;
  subclavianArteryStenosisMra: string;
  aorticArchBruitAuscultated: string;
  surgicalBypassStentingReadiness: string;
  className?: string;
}

export const TakayasuArteritisIshikawaCriteria: React.FC<TakayasuArteritisIshikawaCriteriaProps> = ({
  interArmSystolicBpDifferenceMmHg,
  subclavianArteryStenosisMra,
  aorticArchBruitAuscultated,
  surgicalBypassStentingReadiness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Takayasu Arteritis (Pulseless Disease)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Large Vessel Vasculitis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Inter-Arm BP Discrepancy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${interArmSystolicBpDifferenceMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>MRA Subclavian Stenosis:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{subclavianArteryStenosisMra}</strong></div>
        <div className="flex justify-between"><span>Carotid / Aortic Bruit:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{aorticArchBruitAuscultated}</strong></div>
        <div className="flex justify-between"><span>Revascularization Consult:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{surgicalBypassStentingReadiness}</strong></div>
      </div>
    </div>
  );
};
