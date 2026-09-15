import React from "react";

export interface CoarctationAortaUpperLowerGradientProps {
  rightArmSystolicBp: number;
  rightLegSystolicBp: number;
  armLegGradientMmHg: number;
  radiofemoralPulseDelay: string;
  className?: string;
}

export const CoarctationAortaUpperLowerGradient: React.FC<CoarctationAortaUpperLowerGradientProps> = ({
  rightArmSystolicBp,
  rightLegSystolicBp,
  armLegGradientMmHg,
  radiofemoralPulseDelay,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Aortic Coarctation Four-Limb Gradient</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Coarctation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Right Arm Systolic Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rightArmSystolicBp} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Right Leg Systolic Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rightLegSystolicBp} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Upper/Lower Peak Gradient:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${armLegGradientMmHg} mmHg (&gt;20 alert)`}</strong></div>
        <div className="flex justify-between"><span>Radiofemoral Palpable Delay:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{radiofemoralPulseDelay}</strong></div>
      </div>
    </div>
  );
};
