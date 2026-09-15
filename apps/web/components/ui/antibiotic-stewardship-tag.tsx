import React from "react";

export interface AntibioticStewardshipTagProps {
  drugName: string;
  indication: string;
  hoursOnTherapy: number;
  timeoutReviewed: boolean;
  className?: string;
}

export const AntibioticStewardshipTag: React.FC<AntibioticStewardshipTagProps> = ({
  drugName,
  indication,
  hoursOnTherapy,
  timeoutReviewed,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-3 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs text-indigo-900 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-200 ${className}`}>
      <div>
        <span className="font-bold">💊 {drugName}</span>
        <span className="opacity-75 ml-1">({indication})</span>
      </div>
      <span className="font-mono">{hoursOnTherapy}h on therapy</span>
      <span className={`rounded px-1.5 py-0.2 text-[10px] font-bold uppercase ${timeoutReviewed ? "bg-emerald-200 text-emerald-800" : "bg-amber-200 text-amber-900"}`}>
        {timeoutReviewed ? "Timeout Done" : "48h Review Due"}
      </span>
    </div>
  );
};
