import React from "react";

export interface RadiationInjuryBiodosimetryCardProps {
  absoluteLymphocyteCountNadir: number;
  hoursPostRadiationExposure: number;
  estimatedRadiationDoseGrays: number;
  gcsfFilgrastimIndicated: string;
  className?: string;
}

export const RadiationInjuryBiodosimetryCard: React.FC<RadiationInjuryBiodosimetryCardProps> = ({
  absoluteLymphocyteCountNadir,
  hoursPostRadiationExposure,
  estimatedRadiationDoseGrays,
  gcsfFilgrastimIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute Radiation Syndrome (ARS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Radiation Countermeasure
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>48-Hour Absolute Lymphocyte Count:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${absoluteLymphocyteCountNadir} /mm³`}</strong></div>
        <div className="flex justify-between"><span>Elapsed Post-Exposure Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursPostRadiationExposure} Hours`}</strong></div>
        <div className="flex justify-between"><span>Andrews Nomogram Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${estimatedRadiationDoseGrays} Gy`}</strong></div>
        <div className="flex justify-between"><span>G-CSF Cytokine Countermeasure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gcsfFilgrastimIndicated}</strong></div>
      </div>
    </div>
  );
};
