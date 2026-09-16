import React from "react";

export interface BiologicalAgentSyndromicSurveillanceProps {
  biothreatSyndromeCluster: string;
  observedVsExpectedStandardDev: number;
  categoryAPathogenFlagged: string;
  publicHealthEpidemiologyAlert: string;
  className?: string;
}

export const BiologicalAgentSyndromicSurveillance: React.FC<BiologicalAgentSyndromicSurveillanceProps> = ({
  biothreatSyndromeCluster,
  observedVsExpectedStandardDev,
  categoryAPathogenFlagged,
  publicHealthEpidemiologyAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Biothreat Syndromic Surveillance</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Biosecurity
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Anomaly Cluster Syndrome:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{biothreatSyndromeCluster}</strong></div>
        <div className="flex justify-between"><span>Statistical Standard Deviation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${observedVsExpectedStandardDev} σ Spike (&gt;3.0 alert)`}</strong></div>
        <div className="flex justify-between"><span>CDC Category A Threat Match:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{categoryAPathogenFlagged}</strong></div>
        <div className="flex justify-between"><span>Department of Health Alert:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{publicHealthEpidemiologyAlert}</strong></div>
      </div>
    </div>
  );
};
