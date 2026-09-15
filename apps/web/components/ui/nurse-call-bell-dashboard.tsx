import React from "react";

export interface CallBellRequest {
  roomNumber: string;
  callType: "Pain Medication" | "Bathroom Assist" | "Emergency Cord" | "Staff Assist";
  elapsedMinutes: number;
  priority: "routine" | "urgent" | "emergency";
}

export interface NurseCallBellDashboardProps {
  calls: CallBellRequest[];
  className?: string;
}

const callTheme = {
  routine: "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
  urgent: "border-amber-300 bg-amber-50 dark:border-amber-800",
  emergency: "border-rose-400 bg-rose-50 dark:border-rose-800 animate-pulse",
};

export const NurseCallBellDashboard: React.FC<NurseCallBellDashboardProps> = ({ calls, className = "" }) => {
  return (
    <div className={`space-y-2 text-xs ${className}`}>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">Ward Nurse Call System</h4>
      {calls.map((c, idx) => (
        <div key={idx} className={`flex items-center justify-between p-3 rounded-xl border shadow-sm ${callTheme[c.priority]}`}>
          <div>
            <span className="font-bold text-slate-900 dark:text-white">Room {c.roomNumber}: {c.callType}</span>
            <p className="text-slate-400 mt-0.5">Waiting: {c.elapsedMinutes} mins</p>
          </div>
          <button type="button" className="rounded bg-blue-600 px-3 py-1 font-bold text-white hover:bg-blue-700">
            Acknowledge
          </button>
        </div>
      ))}
    </div>
  );
};
