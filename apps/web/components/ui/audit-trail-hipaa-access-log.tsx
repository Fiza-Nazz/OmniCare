import React from "react";

export interface AuditTrailHipaaAccessLogProps {
  auditEventTimestamp: string;
  authenticatedUserId: string;
  actionType: string;
  patientRecordId: string;
  className?: string;
}

export const AuditTrailHipaaAccessLog: React.FC<AuditTrailHipaaAccessLogProps> = ({
  auditEventTimestamp,
  authenticatedUserId,
  actionType,
  patientRecordId,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HIPAA Security Access Audit Log</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          HIPAA Compliance
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Access Log Timestamp:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{auditEventTimestamp}</strong></div>
        <div className="flex justify-between"><span>Authenticated Clinician ID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{authenticatedUserId}</strong></div>
        <div className="flex justify-between"><span>Action Event (Read/Update):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{actionType}</strong></div>
        <div className="flex justify-between"><span>Disclosed Patient Chart:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{patientRecordId}</strong></div>
      </div>
    </div>
  );
};
