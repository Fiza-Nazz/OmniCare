import React from "react";

export interface SjogrenSyndromeEularScoreProps {
  antiSsaRoPositive: string;
  salivaryBiopsyFocusScore: number;
  schirmerTestOcularMm: number;
  extraglandularSystemicScore: string;
  className?: string;
}

export const SjogrenSyndromeEularScore: React.FC<SjogrenSyndromeEularScoreProps> = ({
  antiSsaRoPositive,
  salivaryBiopsyFocusScore,
  schirmerTestOcularMm,
  extraglandularSystemicScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Primary Sjögren Syndrome (ACR/EULAR)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Autoimmune Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Anti-SSA/Ro Antibody:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{antiSsaRoPositive}</strong></div>
        <div className="flex justify-between"><span>Minor Salivary Focus Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${salivaryBiopsyFocusScore} foci/4mm2`}</strong></div>
        <div className="flex justify-between"><span>Schirmer Test (5 min):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${schirmerTestOcularMm} mm`}</strong></div>
        <div className="flex justify-between"><span>ESSDAI Systemic Involvement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{extraglandularSystemicScore}</strong></div>
      </div>
    </div>
  );
};
