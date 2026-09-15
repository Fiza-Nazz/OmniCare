import React from "react";

export interface PrescriptionCardProps {
  medicationName: string;
  dosage: string;
  frequency: string;
  route?: string;
  prescriber: string;
  prescribedDate: string;
  refillsRemaining: number;
  status?: "active" | "completed" | "discontinued";
  className?: string;
}

export const PrescriptionCard: React.FC<PrescriptionCardProps> = ({
  medicationName,
  dosage,
  frequency,
  route = "Oral",
  prescriber,
  prescribedDate,
  refillsRemaining,
  status = "active",
  className = "",
}) => {
  const statusColors = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300",
    completed: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300",
    discontinued: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300",
  };

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">{medicationName}</h4>
          <p className="text-xs font-semibold text-slate-500 mt-0.5">{dosage} • {route} • {frequency}</p>
        </div>
        <span className={`rounded-full border px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <span>Prescribed by <strong>{prescriber}</strong> on {prescribedDate}</span>
        <span>Refills: <strong className="text-slate-800 dark:text-slate-200">{refillsRemaining}</strong></span>
      </div>
    </div>
  );
};
