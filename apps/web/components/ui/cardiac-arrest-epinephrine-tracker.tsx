import React from "react";

export interface EpinephrineDose {
  doseNumber: number;
  timeGiven: string;
  route: "IV" | "IO";
}

export interface CardiacArrestEpinephrineTrackerProps {
  doses: EpinephrineDose[];
  secondsSinceLastDose: number;
  className?: string;
}

export const CardiacArrestEpinephrineTracker: React.FC<CardiacArrestEpinephrineTrackerProps> = ({
  doses,
  secondsSinceLastDose,
  className = "",
}) => {
  const isDue = secondsSinceLastDose >= 180; // 3 minutes

  return (
    <div className={`rounded-xl border-2 p-4 shadow-sm text-xs font-mono ${isDue ? "border-rose-500 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40" : "border-slate-800 bg-slate-950 text-white"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-black text-sm">Epinephrine 1mg IV/IO Tracker</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isDue ? "bg-rose-600 text-white animate-pulse" : "bg-blue-600 text-white"}`}>
          {isDue ? "DOSE DUE NOW (≥3 min)" : `Last Dose: ${Math.floor(secondsSinceLastDose / 60)}m ${secondsSinceLastDose % 60}s ago`}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>Cumulative Administered: <strong>{doses.length} mg</strong></p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {doses.map((d) => (
            <span key={d.doseNumber} className="rounded bg-black/10 px-2 py-0.5 text-[11px] dark:bg-white/10">
              Dose #{d.doseNumber} ({d.route}) @ {d.timeGiven}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
