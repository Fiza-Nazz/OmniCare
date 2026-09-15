import React from "react";

export interface FhirBundleResourceValidatorProps {
  fhirResourceType: string;
  usCoreProfileVersion: string;
  validationErrorsCount: number;
  conformanceStatus: string;
  className?: string;
}

export const FhirBundleResourceValidator: React.FC<FhirBundleResourceValidatorProps> = ({
  fhirResourceType,
  usCoreProfileVersion,
  validationErrorsCount,
  conformanceStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">FHIR R4 US Core Validator</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          FHIR Interoperability
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>FHIR R4 Resource Type:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fhirResourceType}</strong></div>
        <div className="flex justify-between"><span>Target Implementation Guide:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{usCoreProfileVersion}</strong></div>
        <div className="flex justify-between"><span>Schema Validation Errors:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${validationErrorsCount} Errors`}</strong></div>
        <div className="flex justify-between"><span>Profile Conformance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{conformanceStatus}</strong></div>
      </div>
    </div>
  );
};
