import React from "react";

export interface ExtubationReadinessChecklistProps {
  rsbiScore: number;
  cuffLeakPresent: boolean;
  coughGagReflexIntact: boolean;
  hemodynamicallyStable: boolean;
  className?: string;
}

export const ExtubationReadinessChecklist: React.FC<ExtubationReadinessChecklistProps> = ({
  rsbiScore,
  cuffLeakPresent,
  coughGagReflexIntact,
  hemodynamicallyStable,
  className = "",
}) => {
  const isExtubationReady = rsbiScore < 105 && cuffLeakPresent && coughGagReflexIntact && hemodynamicallyStable;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isExtubationReady ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Ventilator Extubation Readiness</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isExtubationReady ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700"}`}>
          {isExtubationReady ? "Extubation Recommended ✓" : "Not Ready for Extubation"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• RSBI (f/Vt): <strong className="font-mono">{rsbiScore}</strong> (Target < 105)</p>
        <p>• Cuff Leak Test: {cuffLeakPresent ? "Audible Leak Present (No Laryngeal Edema) ✓" : "Absent Leak ✗"}</p>
        <p>• Airway Protection: {coughGagReflexIntact ? "Strong Cough & Secretion Control ✓" : "Weak Reflex ✗"}</p>
      </div>
    </div>
  );
};
