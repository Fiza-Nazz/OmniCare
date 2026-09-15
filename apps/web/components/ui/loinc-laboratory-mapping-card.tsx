import React from "react";

export interface LoincLaboratoryMappingCardProps {
  loincNumCode: string;
  longCommonName: string;
  systemSpecimen: string;
  scaleType: string;
  className?: string;
}

export const LoincLaboratoryMappingCard: React.FC<LoincLaboratoryMappingCardProps> = ({
  loincNumCode,
  longCommonName,
  systemSpecimen,
  scaleType,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">LOINC Laboratory Code Mapping</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          LOINC Standard
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Universal LOINC Code:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{loincNumCode}</strong></div>
        <div className="flex justify-between"><span>Standardized Common Name:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{longCommonName}</strong></div>
        <div className="flex justify-between"><span>System Specimen Matrix:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{systemSpecimen}</strong></div>
        <div className="flex justify-between"><span>Measurement Scale (Qn/Ord):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{scaleType}</strong></div>
      </div>
    </div>
  );
};
