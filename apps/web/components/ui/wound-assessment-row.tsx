import React from "react";

export interface WoundAssessmentRowProps {
  location: string;
  stage: string;
  dimensionsCm: string;
  exudate: string;
  dressingType: string;
  assessedAt: string;
  className?: string;
}

export const WoundAssessmentRow: React.FC<WoundAssessmentRowProps> = ({
  location,
  stage,
  dimensionsCm,
  exudate,
  dressingType,
  assessedAt,
  className = "",
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 px-4 border-b border-slate-100 dark:border-slate-800 text-xs ${className}`}>
      <div>
        <h5 className="font-bold text-slate-900 dark:text-white text-sm">{location} ({stage})</h5>
        <p className="text-slate-500 mt-0.5">Size: <strong className="font-mono">{dimensionsCm}</strong> • Exudate: {exudate}</p>
      </div>
      <div className="mt-2 sm:mt-0 text-left sm:text-right">
        <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {dressingType}
        </span>
        <time className="block text-[10px] text-slate-400 mt-1">{assessedAt}</time>
      </div>
    </div>
  );
};
