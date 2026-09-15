import React from "react";

export interface FontanCirculationFenestrationCardProps {
  fontanPathwayPressureMmHg: number;
  fenestrationDiameterMm: number;
  systemicOxygenSaturation: number;
  pleuralEffusionDrainageMlDay: number;
  className?: string;
}

export const FontanCirculationFenestrationCard: React.FC<FontanCirculationFenestrationCardProps> = ({
  fontanPathwayPressureMmHg,
  fenestrationDiameterMm,
  systemicOxygenSaturation,
  pleuralEffusionDrainageMlDay,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Extracardiac Fontan Circuit</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Fontan Physiology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Direct Fontan Circuit Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fontanPathwayPressureMmHg} mmHg (&lt;15 goal)`}</strong></div>
        <div className="flex justify-between"><span>Baffle Fenestration Pop-Off:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${fenestrationDiameterMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Balanced Systemic SpO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${systemicOxygenSaturation}% (85-92% target)`}</strong></div>
        <div className="flex justify-between"><span>Post-Op Chylothorax Drainage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pleuralEffusionDrainageMlDay} mL/day`}</strong></div>
      </div>
    </div>
  );
};
