import React from "react";

export interface GoutFlareSeverityScoreProps {
  serumUricAcidMgDl: number;
  monosodiumUrateNeedleCrystalsBirefringent: string;
  acutePainVisualAnalogueScore: number;
  colchicineAllopurinolProtocol: string;
  className?: string;
}

export const GoutFlareSeverityScore: React.FC<GoutFlareSeverityScoreProps> = ({
  serumUricAcidMgDl,
  monosodiumUrateNeedleCrystalsBirefringent,
  acutePainVisualAnalogueScore,
  colchicineAllopurinolProtocol,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute Gout Flare & Urate Target</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Crystal Arthropathy
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Uric Acid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumUricAcidMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>Needle Crystals (Negative Birefringence):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{monosodiumUrateNeedleCrystalsBirefringent}</strong></div>
        <div className="flex justify-between"><span>Pain Intensity (0-10):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${acutePainVisualAnalogueScore} / 10`}</strong></div>
        <div className="flex justify-between"><span>Urate Lowering Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{colchicineAllopurinolProtocol}</strong></div>
      </div>
    </div>
  );
};
