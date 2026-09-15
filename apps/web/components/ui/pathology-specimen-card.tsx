import React from "react";

export interface PathologySpecimenCardProps {
  specimenId: string;
  anatomicalSite: string;
  frozenSectionRequested: boolean;
  fixative: string;
  surgeonName: string;
  className?: string;
}

export const PathologySpecimenCard: React.FC<PathologySpecimenCardProps> = ({
  specimenId,
  anatomicalSite,
  frozenSectionRequested,
  fixative = "10% Neutral Buffered Formalin",
  surgeonName,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Surgical Pathology: {specimenId}</h4>
        {frozenSectionRequested && (
          <span className="rounded bg-rose-600 px-2 py-0.5 text-xs font-bold text-white">
            STAT Frozen Section
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1 text-xs">
        <p className="font-semibold text-slate-800 dark:text-slate-200">Site: {anatomicalSite}</p>
        <p className="text-slate-500">Fixative: {fixative} • Surgeon: {surgeonName}</p>
      </div>
    </div>
  );
};
