import React from "react";

export interface MeconiumAspirationSeverityProps {
  oxygenationIndex: number;
  inhaledNitricOxidePpm: number;
  chestRadiographPattern: string;
  ecmoCandidateStatus: string;
  className?: string;
}

export const MeconiumAspirationSeverity: React.FC<MeconiumAspirationSeverityProps> = ({
  oxygenationIndex,
  inhaledNitricOxidePpm,
  chestRadiographPattern,
  ecmoCandidateStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Meconium Aspiration Syndrome (MAS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Oxygenation Index (OI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{oxygenationIndex}</strong></div>
        <div className="flex justify-between"><span>iNO Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${inhaledNitricOxidePpm} ppm`}</strong></div>
        <div className="flex justify-between"><span>CXR Findings:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{chestRadiographPattern}</strong></div>
        <div className="flex justify-between"><span>ECMO Readiness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ecmoCandidateStatus}</strong></div>
      </div>
    </div>
  );
};
