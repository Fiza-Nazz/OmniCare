import React from "react";

export interface AntimicrobialTimeOut48hAuditProps {
  broadSpectrumAgent: string;
  hoursSinceInitiation: number;
  microbiologyCultureFinal: string;
  deescalationRecommendation: string;
  className?: string;
}

export const AntimicrobialTimeOut48hAudit: React.FC<AntimicrobialTimeOut48hAuditProps> = ({
  broadSpectrumAgent,
  hoursSinceInitiation,
  microbiologyCultureFinal,
  deescalationRecommendation,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">48-Hour Antimicrobial Time-Out</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Antibiotic Stewardship
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Empiric Antibiotic Regimen:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{broadSpectrumAgent}</strong></div>
        <div className="flex justify-between"><span>Therapy Duration Elapsed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hoursSinceInitiation} Hours`}</strong></div>
        <div className="flex justify-between"><span>Culture & Susceptibility Final:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{microbiologyCultureFinal}</strong></div>
        <div className="flex justify-between"><span>Stewardship Recommendation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{deescalationRecommendation}</strong></div>
      </div>
    </div>
  );
};
