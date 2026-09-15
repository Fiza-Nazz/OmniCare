import React from "react";

export interface PediatricMyocarditisTroponinEchoProps {
  highSensitivityTroponinNgL: number;
  biventricularFractionalShortening: number;
  ventricularArrhythmiaEcg: string;
  ecmoBridgeReadiness: string;
  className?: string;
}

export const PediatricMyocarditisTroponinEcho: React.FC<PediatricMyocarditisTroponinEchoProps> = ({
  highSensitivityTroponinNgL,
  biventricularFractionalShortening,
  ventricularArrhythmiaEcg,
  ecmoBridgeReadiness,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric Acute Myocarditis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Acute Myocarditis
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>hs-Troponin I Peak:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${highSensitivityTroponinNgL} ng/L`}</strong></div>
        <div className="flex justify-between"><span>Echo Fractional Shortening:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${biventricularFractionalShortening}% (&lt;28% depressed)`}</strong></div>
        <div className="flex justify-between"><span>Frequent PVCs / VT Beats:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ventricularArrhythmiaEcg}</strong></div>
        <div className="flex justify-between"><span>VA-ECMO Cannulation Standby:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ecmoBridgeReadiness}</strong></div>
      </div>
    </div>
  );
};
