import React from "react";

export interface PatientHandoverIpassSummaryProps {
  illnessSeverity: "Stable" | "Watcher" | "Unstable";
  patientSummary: string;
  actionList: string[];
  situationalAwareness: string;
  synthesisConfirmed: boolean;
  className?: string;
}

export const PatientHandoverIpassSummary: React.FC<PatientHandoverIpassSummaryProps> = ({
  illnessSeverity,
  patientSummary,
  actionList,
  situationalAwareness,
  synthesisConfirmed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">I-PASS Clinical Handover</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${illnessSeverity === "Unstable" ? "bg-rose-100 text-rose-800" : illnessSeverity === "Watcher" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
          {illnessSeverity}
        </span>
      </div>
      <div className="mt-2 space-y-1.5 text-slate-600 dark:text-slate-400">
        <p>• <strong>Patient Summary:</strong> {patientSummary}</p>
        <div>
          <strong>Action List:</strong>
          <ul className="list-disc list-inside ml-2 space-y-0.5 mt-0.5">
            {actionList.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </div>
        <p>• <strong>If/When (Contingency):</strong> {situationalAwareness}</p>
        <p className="pt-1 text-[11px]">Receiver Readback Synthesis: {synthesisConfirmed ? "Confirmed ✓" : "Pending"}</p>
      </div>
    </div>
  );
};
