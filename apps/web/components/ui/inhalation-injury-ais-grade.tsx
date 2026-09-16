import React from "react";

export interface InhalationInjuryAisGradeProps {
  bronchoscopyAisGrade: string;
  carbonaceousSputumPresent: string;
  subglotticEdemaVisualized: string;
  earlyIntubationMandated: string;
  className?: string;
}

export const InhalationInjuryAisGrade: React.FC<InhalationInjuryAisGradeProps> = ({
  bronchoscopyAisGrade,
  carbonaceousSputumPresent,
  subglotticEdemaVisualized,
  earlyIntubationMandated,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Smoke Inhalation Injury (Bronchoscopy)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Inhalation Trauma
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Inhalation Injury Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`Grade ${bronchoscopyAisGrade}`}</strong></div>
        <div className="flex justify-between"><span>Carbonaceous Debris:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{carbonaceousSputumPresent}</strong></div>
        <div className="flex justify-between"><span>Airway Edema / Blistering:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{subglotticEdemaVisualized}</strong></div>
        <div className="flex justify-between"><span>Definitive Endotracheal Tube:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{earlyIntubationMandated}</strong></div>
      </div>
    </div>
  );
};
