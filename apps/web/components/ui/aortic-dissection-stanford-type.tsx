import React from "react";

export interface AorticDissectionStanfordTypeProps {
  stanfordType: string;
  intimalFlapLocation: string;
  targetSystolicBp: string;
  betaBlockadeActive: string;
  className?: string;
}

export const AorticDissectionStanfordType: React.FC<AorticDissectionStanfordTypeProps> = ({
  stanfordType,
  intimalFlapLocation,
  targetSystolicBp,
  betaBlockadeActive,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Aortic Dissection (Stanford)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Aortic Emergency
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Stanford Classification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{stanfordType}</strong></div>
        <div className="flex justify-between"><span>Intimal Tear Epicenter:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intimalFlapLocation}</strong></div>
        <div className="flex justify-between"><span>Emergency BP Target:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{targetSystolicBp}</strong></div>
        <div className="flex justify-between"><span>Esmolol IV Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{betaBlockadeActive}</strong></div>
      </div>
    </div>
  );
};
