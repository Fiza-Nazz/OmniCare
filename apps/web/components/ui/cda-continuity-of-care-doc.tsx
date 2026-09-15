import React from "react";

export interface CdaContinuityOfCareDocProps {
  documentTemplateOid: string;
  clinicalSectionsPresent: number;
  cdaXmlValidation: string;
  directAddressReceiver: string;
  className?: string;
}

export const CdaContinuityOfCareDoc: React.FC<CdaContinuityOfCareDocProps> = ({
  documentTemplateOid,
  clinicalSectionsPresent,
  cdaXmlValidation,
  directAddressReceiver,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">C-CDA Continuity of Care Document</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CCDA Exchange
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>C-CDA Template OID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{documentTemplateOid}</strong></div>
        <div className="flex justify-between"><span>Populated Clinical Sections:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${clinicalSectionsPresent} Sections`}</strong></div>
        <div className="flex justify-between"><span>Schematron XML Conformance:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cdaXmlValidation}</strong></div>
        <div className="flex justify-between"><span>Encrypted Direct Messaging:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{directAddressReceiver}</strong></div>
      </div>
    </div>
  );
};
