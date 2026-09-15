import React from "react";

export interface ClinicalQualityEcqmCmsMetricProps {
  ecqmMeasureId: string;
  initialPatientPopulation: number;
  numeratorPassCount: number;
  performanceRatePercent: number;
  className?: string;
}

export const ClinicalQualityEcqmCmsMetric: React.FC<ClinicalQualityEcqmCmsMetricProps> = ({
  ecqmMeasureId,
  initialPatientPopulation,
  numeratorPassCount,
  performanceRatePercent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CMS eCQM Quality Performance</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Quality Metrics
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CMS eCQM Identifier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ecqmMeasureId}</strong></div>
        <div className="flex justify-between"><span>Initial Patient Population:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${initialPatientPopulation} Denominator`}</strong></div>
        <div className="flex justify-between"><span>Criteria Numerator Met:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${numeratorPassCount} Patients`}</strong></div>
        <div className="flex justify-between"><span>Calculated Performance Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${performanceRatePercent}% Quality`}</strong></div>
      </div>
    </div>
  );
};
