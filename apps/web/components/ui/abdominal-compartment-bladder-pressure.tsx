import React from "react";

export interface AbdominalCompartmentBladderPressureProps {
  intraAbdominalPressureMmHg: number;
  abdominalPerfusionPressureMmHg: number;
  iahGrade: string;
  decompressiveLaparotomyMandated: string;
  className?: string;
}

export const AbdominalCompartmentBladderPressure: React.FC<AbdominalCompartmentBladderPressureProps> = ({
  intraAbdominalPressureMmHg,
  abdominalPerfusionPressureMmHg,
  iahGrade,
  decompressiveLaparotomyMandated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Abdominal Compartment (Intravesical Pressure)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Surgical Critical Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Bladder IAP:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${intraAbdominalPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Abdominal Perfusion (APP):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${abdominalPerfusionPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>IAH Severity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Grade ${iahGrade}`}</strong></div>
        <div className="flex justify-between"><span>Decompressive Laparotomy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{decompressiveLaparotomyMandated}</strong></div>
      </div>
    </div>
  );
};
