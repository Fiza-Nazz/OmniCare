import React from "react";

export interface SurgPreopChecklistProps {
  procedureName: string;
  siteMarked: boolean;
  consentSigned: boolean;
  anesthesiaSafetyDone: boolean;
  antibioticAdministered: boolean;
  className?: string;
}

export const SurgPreopChecklist: React.FC<SurgPreopChecklistProps> = ({
  procedureName,
  siteMarked,
  consentSigned,
  anesthesiaSafetyDone,
  antibioticAdministered,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">WHO Pre-Op Surgical Checklist: {procedureName}</h4>
      <div className="space-y-1.5 text-xs">
        <div className="flex items-center gap-2">
          <span>{siteMarked ? "✅" : "❌"}</span>
          <span>Surgical Site Marked by Surgeon</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{consentSigned ? "✅" : "❌"}</span>
          <span>Informed Consent Verified on Chart</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{anesthesiaSafetyDone ? "✅" : "❌"}</span>
          <span>Anesthesia Safety Machine & Med Check</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{antibioticAdministered ? "✅" : "❌"}</span>
          <span>Prophylactic Antibiotics Administered (Within 60 min)</span>
        </div>
      </div>
    </div>
  );
};
