import React from "react";

export interface NeonatalCsfPleocytosisAnalyzerProps {
  csfWbcCountPerUl: number;
  csfProteinMgDl: number;
  csfBloodGlucoseRatio: number;
  meningitisProbabilityBand: string;
  className?: string;
}

export const NeonatalCsfPleocytosisAnalyzer: React.FC<NeonatalCsfPleocytosisAnalyzerProps> = ({
  csfWbcCountPerUl,
  csfProteinMgDl,
  csfBloodGlucoseRatio,
  meningitisProbabilityBand,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neonatal Lumbar Puncture CSF Analyzer</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Infectious Disease
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CSF WBC Count:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${csfWbcCountPerUl} /µL`}</strong></div>
        <div className="flex justify-between"><span>CSF Protein:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${csfProteinMgDl} mg/dL`}</strong></div>
        <div className="flex justify-between"><span>CSF/Blood Glucose Ratio:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{csfBloodGlucoseRatio}</strong></div>
        <div className="flex justify-between"><span>Bacterial Meningitis Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{meningitisProbabilityBand}</strong></div>
      </div>
    </div>
  );
};
