import React from "react";

export interface LargeVesselOcclusionVanScoreProps {
  motorArmWeakness: string;
  visionFieldDeficit: string;
  aphasiaLanguageImpairment: string;
  neglectExtinctionPresent: string;
  className?: string;
}

export const LargeVesselOcclusionVanScore: React.FC<LargeVesselOcclusionVanScoreProps> = ({
  motorArmWeakness,
  visionFieldDeficit,
  aphasiaLanguageImpairment,
  neglectExtinctionPresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">VAN Prehospital LVO Screener</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Prehospital LVO
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Unilateral Motor Weakness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{motorArmWeakness}</strong></div>
        <div className="flex justify-between"><span>Visual Field Cut / Gaze:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{visionFieldDeficit}</strong></div>
        <div className="flex justify-between"><span>Receptive / Expressive Aphasia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{aphasiaLanguageImpairment}</strong></div>
        <div className="flex justify-between"><span>Sensory / Spatial Hemineglect:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{neglectExtinctionPresent}</strong></div>
      </div>
    </div>
  );
};
