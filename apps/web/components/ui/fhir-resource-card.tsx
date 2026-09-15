import React from "react";

export interface FhirResourceCardProps {
  resourceType: string;
  id: string;
  lastUpdated: string;
  summaryText: string;
  onViewJson?: () => void;
  className?: string;
}

export const FhirResourceCard: React.FC<FhirResourceCardProps> = ({
  resourceType,
  id,
  lastUpdated,
  summaryText,
  onViewJson,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-mono text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          FHIR::{resourceType}
        </span>
        <span className="font-mono text-xs text-slate-400">ID: {id}</span>
      </div>
      <p className="mt-2 text-xs text-slate-700 dark:text-slate-300">{summaryText}</p>
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-xs text-slate-400 dark:border-slate-800">
        <span>Updated: {lastUpdated}</span>
        {onViewJson && (
          <button type="button" onClick={onViewJson} className="font-semibold text-blue-600 hover:underline">
            View Raw JSON
          </button>
        )}
      </div>
    </div>
  );
};
