import React from "react";

export interface Her2AmplificationFishRatioProps {
  her2Cep17Ratio: number;
  averageHer2SignalsPerCell: number;
  ihcScoreEquivocal: string;
  antiHer2TherapyIndicated: string;
  className?: string;
}

export const Her2AmplificationFishRatio: React.FC<Her2AmplificationFishRatioProps> = ({
  her2Cep17Ratio,
  averageHer2SignalsPerCell,
  ihcScoreEquivocal,
  antiHer2TherapyIndicated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HER2 Neu Amplification (FISH)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Molecular Oncology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>HER2/CEP17 Dual FISH Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${her2Cep17Ratio} (&ge;2.0 positive)`}</strong></div>
        <div className="flex justify-between"><span>Average HER2 Gene Copies:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${averageHer2SignalsPerCell} / Nucleus`}</strong></div>
        <div className="flex justify-between"><span>Reflex IHC 2+ Confirmation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ihcScoreEquivocal}</strong></div>
        <div className="flex justify-between"><span>Targeted Trastuzumab Eligibility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{antiHer2TherapyIndicated}</strong></div>
      </div>
    </div>
  );
};
