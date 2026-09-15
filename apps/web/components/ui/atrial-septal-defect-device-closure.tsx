import React from "react";

export interface AtrialSeptalDefectDeviceClosureProps {
  stretchedBalloonDiameterMm: number;
  amplatzerDeviceSizeMm: number;
  aorticRimAdequacyMm: number;
  residualShuntColorDoppler: string;
  className?: string;
}

export const AtrialSeptalDefectDeviceClosure: React.FC<AtrialSeptalDefectDeviceClosureProps> = ({
  stretchedBalloonDiameterMm,
  amplatzerDeviceSizeMm,
  aorticRimAdequacyMm,
  residualShuntColorDoppler,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Secundum ASD Transcatheter Occluder</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Structural ASD
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Stretched Stop-Flow Diameter:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${stretchedBalloonDiameterMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Selected Occluder Size:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${amplatzerDeviceSizeMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Deficient Aortic Rim Margin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${aorticRimAdequacyMm} mm (&ge;5mm safe)`}</strong></div>
        <div className="flex justify-between"><span>Post-Release Shunt Residual:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{residualShuntColorDoppler}</strong></div>
      </div>
    </div>
  );
};
