import React from "react";

export interface SmartOnFhirLaunchContextProps {
  launchTypeContext: string;
  authorizedScopes: string;
  tokenLifespanRemainingSeconds: number;
  tlsHandshakeCipher: string;
  className?: string;
}

export const SmartOnFhirLaunchContext: React.FC<SmartOnFhirLaunchContextProps> = ({
  launchTypeContext,
  authorizedScopes,
  tokenLifespanRemainingSeconds,
  tlsHandshakeCipher,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">SMART on FHIR Launch Context</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          SMART Apps
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SMART Launch Modality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{launchTypeContext}</strong></div>
        <div className="flex justify-between"><span>OAuth2 Granted Scopes:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{authorizedScopes}</strong></div>
        <div className="flex justify-between"><span>Access Token Expiry:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tokenLifespanRemainingSeconds}s Remaining`}</strong></div>
        <div className="flex justify-between"><span>Encrypted FHIR Transport:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tlsHandshakeCipher}</strong></div>
      </div>
    </div>
  );
};
