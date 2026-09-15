import React from "react";

export interface ReferralStatusCardProps {
  specialty: string;
  referredTo: string;
  authNumber?: string;
  status: "pending_auth" | "authorized" | "scheduled" | "completed";
  expiryDate?: string;
  className?: string;
}

const statusTheme = {
  pending_auth: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300",
  authorized: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300",
  scheduled: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300",
  completed: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300",
};

export const ReferralStatusCard: React.FC<ReferralStatusCardProps> = ({
  specialty,
  referredTo,
  authNumber,
  status,
  expiryDate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{specialty} Referral</h4>
        <span className={`rounded-full border px-2 py-0.5 text-xs font-bold capitalize ${statusTheme[status]}`}>
          {status.replace("_", " ")}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500">Specialist: <strong className="text-slate-700 dark:text-slate-300">{referredTo}</strong></p>
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-xs text-slate-400 dark:border-slate-800">
        {authNumber && <span>Auth #: <strong className="font-mono text-slate-600 dark:text-slate-400">{authNumber}</strong></span>}
        {expiryDate && <span>Expires: {expiryDate}</span>}
      </div>
    </div>
  );
};
