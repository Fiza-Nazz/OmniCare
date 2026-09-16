import React from "react";

export interface LungTransplantPrimaryGraftDysfunctionProps {
  pao2Fio2Ratio: number;
  diffuseAllograftInfiltrates: string;
  ishltPgdGrade: string;
  postopHoursElapsed: number;
  className?: string;
}

export const LungTransplantPrimaryGraftDysfunction: React.FC<LungTransplantPrimaryGraftDysfunctionProps> = ({
  pao2Fio2Ratio,
  diffuseAllograftInfiltrates,
  ishltPgdGrade,
  postopHoursElapsed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Primary Graft Dysfunction (PGD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Lung Transplant
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Arterial PaO2 / FiO2 Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pao2Fio2Ratio} (&lt;200 severe)`}</strong></div>
        <div className="flex justify-between"><span>Radiographic Alveolar Opacities:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{diffuseAllograftInfiltrates}</strong></div>
        <div className="flex justify-between"><span>ISHLT PGD Severity Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ishltPgdGrade}</strong></div>
        <div className="flex justify-between"><span>Post-Transplant Assessment Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postopHoursElapsed} Hours`}</strong></div>
      </div>
    </div>
  );
};
