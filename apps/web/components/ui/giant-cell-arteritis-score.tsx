import React from "react";

export interface GiantCellArteritisScoreProps {
  temporalArteryHaloSignMri: string;
  erythrocyteSedimentationRate: number;
  visualDisturbanceReported: string;
  tocilizumabAdjunctTherapy: string;
  className?: string;
}

export const GiantCellArteritisScore: React.FC<GiantCellArteritisScoreProps> = ({
  temporalArteryHaloSignMri,
  erythrocyteSedimentationRate,
  visualDisturbanceReported,
  tocilizumabAdjunctTherapy,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Giant Cell Arteritis (GCA Halo Sign)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vascular Rheumatology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Ultrasound Halo Sign:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{temporalArteryHaloSignMri}</strong></div>
        <div className="flex justify-between"><span>Westergren ESR:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${erythrocyteSedimentationRate} mm/hr`}</strong></div>
        <div className="flex justify-between"><span>Amaurosis Fugax / Vision Loss:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{visualDisturbanceReported}</strong></div>
        <div className="flex justify-between"><span>IL-6 Receptor Antagonist (TCZ):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tocilizumabAdjunctTherapy}</strong></div>
      </div>
    </div>
  );
};
