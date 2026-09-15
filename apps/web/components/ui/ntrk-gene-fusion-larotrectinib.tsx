import React from "react";

export interface NtrkGeneFusionLarotrectinibProps {
  ntrkFusionIsoform: string;
  detectionMethodology: string;
  tumorTissueOrigin: string;
  panTrkInhibitorEligible: string;
  className?: string;
}

export const NtrkGeneFusionLarotrectinib: React.FC<NtrkGeneFusionLarotrectinibProps> = ({
  ntrkFusionIsoform,
  detectionMethodology,
  tumorTissueOrigin,
  panTrkInhibitorEligible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">NTRK Gene Fusion Biomarker</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Tumor Agnostic
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Identified Fusion Transcript:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ntrkFusionIsoform}</strong></div>
        <div className="flex justify-between"><span>Diagnostic Assay Platform:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{detectionMethodology}</strong></div>
        <div className="flex justify-between"><span>Malignancy Histotype:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tumorTissueOrigin}</strong></div>
        <div className="flex justify-between"><span>Pan-TRK Inhibitor Response:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{panTrkInhibitorEligible}</strong></div>
      </div>
    </div>
  );
};
