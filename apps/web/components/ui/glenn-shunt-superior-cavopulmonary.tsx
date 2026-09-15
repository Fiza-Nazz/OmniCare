import React from "react";

export interface GlennShuntSuperiorCavopulmonaryProps {
  superiorVenaCavaPressureMmHg: number;
  meanPulmonaryArteryPressure: number;
  transpulmonaryGradientMmHg: number;
  oxygenSaturationTarget: number;
  className?: string;
}

export const GlennShuntSuperiorCavopulmonary: React.FC<GlennShuntSuperiorCavopulmonaryProps> = ({
  superiorVenaCavaPressureMmHg,
  meanPulmonaryArteryPressure,
  transpulmonaryGradientMmHg,
  oxygenSaturationTarget,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Bidirectional Glenn (BDG) Shunt</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Glenn Stage 2
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SVC Glenn Connection Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${superiorVenaCavaPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Mean PA Artery Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanPulmonaryArteryPressure} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Transpulmonary Gradient (TPG):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${transpulmonaryGradientMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Stage 2 SpO2 Expected:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${oxygenSaturationTarget}% (75-85%)`}</strong></div>
      </div>
    </div>
  );
};
