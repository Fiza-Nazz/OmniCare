import React from "react";

export interface SepsisScreeningCardProps {
  alteredMentalStatus: boolean;
  respiratoryRateHigh: boolean;
  systolicBpHypotension: boolean;
  lactateLevel?: number;
  className?: string;
}

export const SepsisScreeningCard: React.FC<SepsisScreeningCardProps> = ({
  alteredMentalStatus,
  respiratoryRateHigh,
  systolicBpHypotension,
  lactateLevel,
  className = "",
}) => {
  const qsofaScore = (alteredMentalStatus ? 1 : 0) + (respiratoryRateHigh ? 1 : 0) + (systolicBpHypotension ? 1 : 0);
  const isHighRisk = qsofaScore >= 2;

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${isHighRisk ? "border-rose-400 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="text-sm font-bold">qSOFA Sepsis Screening</h4>
        <span className={`rounded-full px-2 py-0.5 text-xs font-black ${isHighRisk ? "bg-rose-600 text-white" : "bg-slate-100 text-slate-700"}`}>
          Score: {qsofaScore}/3 {isHighRisk ? "(HIGH SEPSIS RISK)" : "(Negative)"}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-xs">
        <p>• Altered Mental Status: {alteredMentalStatus ? "Present (+1)" : "Normal"}</p>
        <p>• Respiratory Rate ≥ 22/min: {respiratoryRateHigh ? "Tachypnea (+1)" : "Normal"}</p>
        <p>• Systolic BP ≤ 100 mmHg: {systolicBpHypotension ? "Hypotensive (+1)" : "Normal"}</p>
        {lactateLevel !== undefined && <p className="font-bold mt-1">Serum Lactate: {lactateLevel} mmol/L</p>}
      </div>
    </div>
  );
};
