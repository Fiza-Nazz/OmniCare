import React, { useState } from "react";

export interface IncidentReportingFormProps {
  onSubmitIncident: (data: { category: string; description: string }) => void;
  className?: string;
}

export const IncidentReportingForm: React.FC<IncidentReportingFormProps> = ({
  onSubmitIncident,
  className = "",
}) => {
  const [category, setCategory] = useState("Medication Error");
  const [description, setDescription] = useState("");

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Confidential Patient Safety Event Form</h4>
      <div className="space-y-2 text-xs">
        <div>
          <label className="font-semibold text-slate-700 dark:text-slate-300">Event Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full rounded border border-slate-300 p-1.5 dark:border-slate-700 dark:bg-slate-800"
          >
            <option value="Medication Error">Medication Error</option>
            <option value="Patient Fall">Patient Fall</option>
            <option value="Near Miss">Near Miss / Good Catch</option>
            <option value="Equipment Failure">Equipment Failure</option>
            <option value="Specimen Labeling">Specimen Labeling Error</option>
          </select>
        </div>
        <div>
          <label className="font-semibold text-slate-700 dark:text-slate-300">Incident Description</label>
          <textarea
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full rounded border border-slate-300 p-1.5 dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
        <button
          type="button"
          onClick={() => onSubmitIncident({ category, description })}
          className="w-full rounded bg-blue-600 py-1.5 font-bold text-white hover:bg-blue-700"
        >
          Submit Safety Event
        </button>
      </div>
    </div>
  );
};
