import React from "react";

export type AuditAction = "CREATE" | "READ" | "UPDATE" | "DELETE" | "EXPORT";

export interface AuditLogItemProps {
  action: AuditAction;
  resource: string;
  actorId: string;
  timestamp: string;
  ipAddress?: string;
  className?: string;
}

const actionColors: Record<AuditAction, string> = {
  CREATE: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  READ: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  UPDATE: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  DELETE: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
  EXPORT: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
};

export const AuditLogItem: React.FC<AuditLogItemProps> = ({
  action,
  resource,
  actorId,
  timestamp,
  ipAddress,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between py-2.5 px-4 text-xs border-b border-slate-100 dark:border-slate-800 ${className}`}>
      <div className="flex items-center gap-3">
        <span className={`rounded px-2 py-0.5 font-bold uppercase ${actionColors[action]}`}>
          {action}
        </span>
        <span className="font-mono text-slate-800 dark:text-slate-200">{resource}</span>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <span>User: <strong className="text-slate-700 dark:text-slate-300">{actorId}</strong></span>
        {ipAddress && <span>IP: {ipAddress}</span>}
        <time className="text-slate-400">{timestamp}</time>
      </div>
    </div>
  );
};
