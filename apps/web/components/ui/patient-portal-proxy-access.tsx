import React from "react";

export interface PatientPortalProxyAccessProps {
  proxyRelationship: string;
  accessTierLevel: string;
  adolescentPrivacyRestrictions: string;
  legalDocumentationOnRecord: string;
  className?: string;
}

export const PatientPortalProxyAccess: React.FC<PatientPortalProxyAccessProps> = ({
  proxyRelationship,
  accessTierLevel,
  adolescentPrivacyRestrictions,
  legalDocumentationOnRecord,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Patient Portal Proxy Delegation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Patient Portal
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Delegated Relationship:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{proxyRelationship}</strong></div>
        <div className="flex justify-between"><span>Authorized Portal Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{accessTierLevel}</strong></div>
        <div className="flex justify-between"><span>Adolescent Sensitive Masking:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{adolescentPrivacyRestrictions}</strong></div>
        <div className="flex justify-between"><span>Legal POA Document:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{legalDocumentationOnRecord}</strong></div>
      </div>
    </div>
  );
};
