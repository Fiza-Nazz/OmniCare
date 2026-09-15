import React from "react";

export interface BurnInhalationInjuryCardProps {
  facialSingeing: string;
  stridorStatus: string;
  carboxyhemoglobinPercent: number;
  bronchoscopyGrade: string;
  className?: string;
}

export const BurnInhalationInjuryCard: React.FC<BurnInhalationInjuryCardProps> = ({
  facialSingeing,
  stridorStatus,
  carboxyhemoglobinPercent,
  bronchoscopyGrade,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Thermal Inhalation Assessment</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Airway Burns
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Facial / Nares Soot:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{facialSingeing}</strong></div>
        <div className="flex justify-between"><span>Airway Stridor:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{stridorStatus}</strong></div>
        <div className="flex justify-between"><span>Carboxyhemoglobin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${carboxyhemoglobinPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Bronchoscopy Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bronchoscopyGrade}</strong></div>
      </div>
    </div>
  );
};
