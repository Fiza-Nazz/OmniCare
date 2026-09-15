import React from "react";

export interface CodeRole {
  role: "Team Leader" | "Airway" | "Compressor" | "Defibrillator" | "Medication RN" | "Scribe";
  assignedPerson: string;
}

export interface CodeTeamRosterProps {
  roles: CodeRole[];
  className?: string;
}

export const CodeTeamRoster: React.FC<CodeTeamRosterProps> = ({ roles, className = "" }) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Code Blue Team Role Assignments</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {roles.map((r, idx) => (
          <div key={idx} className="rounded-lg bg-slate-50 p-2 text-xs dark:bg-slate-800">
            <span className="font-bold text-blue-600 dark:text-blue-400 block">{r.role}</span>
            <span className="text-slate-700 dark:text-slate-300">{r.assignedPerson}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
