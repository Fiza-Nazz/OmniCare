import React from "react";

export interface ConsentDirectiveFhirConsentProps {
  consentScopeCategory: string;
  consentProvisionType: string;
  dataClassRestricted: string;
  consentValidThroughDate: string;
  className?: string;
}

export const ConsentDirectiveFhirConsent: React.FC<ConsentDirectiveFhirConsentProps> = ({
  consentScopeCategory,
  consentProvisionType,
  dataClassRestricted,
  consentValidThroughDate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Patient Consent Directive (FHIR)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Privacy Consent
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Consent Directive Scope:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{consentScopeCategory}</strong></div>
        <div className="flex justify-between"><span>Provision State (Opt-In/Out):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{consentProvisionType}</strong></div>
        <div className="flex justify-between"><span>Protected Data Class (42 CFR):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dataClassRestricted}</strong></div>
        <div className="flex justify-between"><span>Directive Expiration Date:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{consentValidThroughDate}</strong></div>
      </div>
    </div>
  );
};
