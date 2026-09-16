import React from "react";

export interface PdaShuntEchocardiographyProps {
  ductalDiameterMm: number;
  laAoRatio: number;
  retrogradeDiastolicAorticFlow: string;
  ibuprofenAcetaminophenTreatment: string;
  className?: string;
}

export const PdaShuntEchocardiography: React.FC<PdaShuntEchocardiographyProps> = ({
  ductalDiameterMm,
  laAoRatio,
  retrogradeDiastolicAorticFlow,
  ibuprofenAcetaminophenTreatment,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hemodynamically Significant PDA (hsPDA)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Cardiology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Ductal Diameter:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ductalDiameterMm} mm`}</strong></div>
        <div className="flex justify-between"><span>LA / Ao Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{laAoRatio}</strong></div>
        <div className="flex justify-between"><span>Retrograde Diastolic Flow:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{retrogradeDiastolicAorticFlow}</strong></div>
        <div className="flex justify-between"><span>Pharmacologic Closure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ibuprofenAcetaminophenTreatment}</strong></div>
      </div>
    </div>
  );
};
