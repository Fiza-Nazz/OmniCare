import React from "react";

export interface AcetaminophenRumackMatthewProps {
  hoursPostIngestion: number;
  serumApapMcgMl: number;
  treatmentLineThreshold: number;
  nacProtocolInitiated: string;
  className?: string;
}

export const AcetaminophenRumackMatthew: React.FC<AcetaminophenRumackMatthewProps> = ({
  hoursPostIngestion,
  serumApapMcgMl,
  treatmentLineThreshold,
  nacProtocolInitiated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Rumack-Matthew APAP Nomogram</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Toxicology APAP
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Time Post-Ingestion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursPostIngestion} Hours`}</strong></div>
        <div className="flex justify-between"><span>Serum APAP Concentration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumApapMcgMl} µg/mL`}</strong></div>
        <div className="flex justify-between"><span>Nomogram Toxicity Line:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${treatmentLineThreshold} µg/mL`}</strong></div>
        <div className="flex justify-between"><span>N-Acetylcysteine (NAC):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{nacProtocolInitiated}</strong></div>
      </div>
    </div>
  );
};
