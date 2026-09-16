import React from "react";

export interface EyeballOpticNerveSheathOnidProps {
  rightEyeOnsdMm: number;
  leftEyeOnsdMm: number;
  opticDiscElevationPapilledema: string;
  intracranialHypertensionAlert: string;
  className?: string;
}

export const EyeballOpticNerveSheathOnid: React.FC<EyeballOpticNerveSheathOnidProps> = ({
  rightEyeOnsdMm,
  leftEyeOnsdMm,
  opticDiscElevationPapilledema,
  intracranialHypertensionAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Optic Nerve Sheath Diameter (ONSD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ocular POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Right Eye ONSD (3mm back):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rightEyeOnsdMm} mm (&gt;5.0 elevated)`}</strong></div>
        <div className="flex justify-between"><span>Left Eye ONSD (3mm back):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${leftEyeOnsdMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Optic Disc Papilledema Bulge:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{opticDiscElevationPapilledema}</strong></div>
        <div className="flex justify-between"><span>Intracranial Pressure Warning:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intracranialHypertensionAlert}</strong></div>
      </div>
    </div>
  );
};
