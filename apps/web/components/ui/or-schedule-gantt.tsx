import React from "react";

export interface OrCase {
  roomNumber: string;
  procedure: string;
  surgeon: string;
  startTime: string;
  endTime: string;
  status: "in_progress" | "scheduled" | "turnover" | "completed";
}

export interface OrScheduleGanttProps {
  cases: OrCase[];
  className?: string;
}

const statusColors = {
  in_progress: "bg-emerald-100 text-emerald-800 border-emerald-300",
  scheduled: "bg-blue-100 text-blue-800 border-blue-300",
  turnover: "bg-amber-100 text-amber-800 border-amber-300",
  completed: "bg-slate-100 text-slate-700 border-slate-300",
};

export const OrScheduleGantt: React.FC<OrScheduleGanttProps> = ({ cases, className = "" }) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Operating Room Daily Schedule</h4>
      <div className="space-y-2">
        {cases.map((c, idx) => (
          <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white">OR {c.roomNumber}: {c.procedure}</span>
              <p className="text-slate-400">Surgeon: {c.surgeon}</p>
            </div>
            <div className="text-right">
              <span className={`rounded px-2 py-0.5 font-bold uppercase text-[10px] ${statusColors[c.status]}`}>
                {c.status.replace("_", " ")}
              </span>
              <p className="text-slate-400 mt-0.5">{c.startTime} - {c.endTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
