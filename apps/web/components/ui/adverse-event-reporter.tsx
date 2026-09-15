import React, { useState } from "react";

export interface AdverseEventReporterProps {
  suspectedDrug?: string;
  onSubmitReport: (report: { reaction: string; severity: string }) => void;
  className?: string;
}

export const AdverseEventReporter: React.FC<AdverseEventReporterProps> = ({
  suspectedDrug = "",
  onSubmitReport,
  className = "",
}) => {
  const [reaction, setReaction] = useState("");
  const [severity, setSeverity] = useState("Moderate");

  return (
    <div className={`rounded-xl border border-rose-200 bg-white p-4 shadow-sm dark:border-rose-900 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-rose-700 dark:text-rose-400">Adverse Drug Event (ADE) Report</h4>
      <div className="mt-3 space-y-3 text-xs">
        <div>
          <label className="font-semibold text-slate-700 dark:text-slate-300">Suspected Agent</label>
          <input
            type="text"
            defaultValue={suspectedDrug}
            className="mt-1 w-full rounded border border-slate-300 p-1.5 dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
        <div>
          <label className="font-semibold text-slate-700 dark:text-slate-300">Observed Reaction</label>
          <textarea
            rows={2}
            value={reaction}
            onChange={(e) => setReaction(e.target.value)}
            className="mt-1 w-full rounded border border-slate-300 p-1.5 dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
        <button
          type="button"
          onClick={() => onSubmitReport({ reaction, severity })}
          className="w-full rounded bg-rose-600 py-2 font-bold text-white hover:bg-rose-700"
        >
          Submit MedWatch Incident
        </button>
      </div>
    </div>
  );
};
