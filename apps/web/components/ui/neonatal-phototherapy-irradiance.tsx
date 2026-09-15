import React from "react";

export interface NeonatalPhototherapyIrradianceProps {
  irradianceMicroW: number;
  serumBilirubinMgDl: number;
  distanceCm: number;
  eyeShieldSecure: string;
  className?: string;
}

export const NeonatalPhototherapyIrradiance: React.FC<NeonatalPhototherapyIrradianceProps> = ({
  irradianceMicroW,
  serumBilirubinMgDl,
  distanceCm,
  eyeShieldSecure,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Phototherapy Irradiance</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Phototherapy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Blue Spectrum Irradiance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${irradianceMicroW} µW/cm²/nm`}</strong></div>
        <div className="flex justify-between"><span>Total Serum Bilirubin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumBilirubinMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Lamp Distance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${distanceCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Eye Protection Shield:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{eyeShieldSecure}</strong></div>
      </div>
    </div>
  );
};
