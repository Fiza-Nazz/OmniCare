import React from "react";

export interface EpiduralAnalgesiaPumpProps {
  medicationMix: string;
  basalRateMlHr: number;
  bolusDoseMl: number;
  lockoutMinutes: number;
  bromageMotorScore: 0 | 1 | 2 | 3;
  className?: string;
}

export const EpiduralAnalgesiaPump: React.FC<EpiduralAnalgesiaPumpProps> = ({
  medicationMix,
  basalRateMlHr,
  bolusDoseMl,
  lockoutMinutes,
  bromageMotorScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-purple-200 bg-purple-50/50 p-4 shadow-sm dark:border-purple-900 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-purple-100 pb-2 dark:border-purple-900">
        <h4 className="font-bold text-sm text-purple-950 dark:text-purple-200">PCEA Epidural: {medicationMix}</h4>
        <span className="font-mono text-purple-800">Bromage Score: {bromageMotorScore}/3</span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Basal Infusion: <strong className="text-slate-900 dark:text-white">{basalRateMlHr} mL/hr</strong></p>
        <p>• Patient Demand Bolus: {bolusDoseMl} mL (Lockout: {lockoutMinutes} min)</p>
      </div>
    </div>
  );
};
