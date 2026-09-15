import React from "react";

export interface RegionalNerveBlockUltrasoundProps {
  blockType: string;
  localAnestheticMl: string;
  ultrasoundVisualization: string;
  aspirationNegative: string;
  className?: string;
}

export const RegionalNerveBlockUltrasound: React.FC<RegionalNerveBlockUltrasoundProps> = ({
  blockType,
  localAnestheticMl,
  ultrasoundVisualization,
  aspirationNegative,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Ultrasound Regional Block</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Regional Block
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Nerve Block Anatomic Site:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{blockType}</strong></div>
        <div className="flex justify-between"><span>Local Anesthetic Injected:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{localAnestheticMl}</strong></div>
        <div className="flex justify-between"><span>Sonographic Needle Tip:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ultrasoundVisualization}</strong></div>
        <div className="flex justify-between"><span>Blood Aspiration (LAST):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{aspirationNegative}</strong></div>
      </div>
    </div>
  );
};
