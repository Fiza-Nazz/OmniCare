import React from "react";

export interface IntracerebralHemorrhageExpansionSpotProps {
  calculatedHematomaVolumeMl: number;
  ctaExtravasationSpotSign: string;
  systolicBpTargetMmHg: number;
  intensiveBpLoweringActive: string;
  className?: string;
}

export const IntracerebralHemorrhageExpansionSpot: React.FC<IntracerebralHemorrhageExpansionSpotProps> = ({
  calculatedHematomaVolumeMl,
  ctaExtravasationSpotSign,
  systolicBpTargetMmHg,
  intensiveBpLoweringActive,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ICH Hematoma Expansion (Spot Sign)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          ICH Acute Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>ABC/2 Hematoma Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedHematomaVolumeMl} mL`}</strong></div>
        <div className="flex justify-between"><span>CTA Contrast 'Spot Sign':</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ctaExtravasationSpotSign}</strong></div>
        <div className="flex justify-between"><span>Target Systolic Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${systolicBpTargetMmHg} mmHg (&lt;140 target)`}</strong></div>
        <div className="flex justify-between"><span>Continuous Nicardipine Drip:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intensiveBpLoweringActive}</strong></div>
      </div>
    </div>
  );
};
