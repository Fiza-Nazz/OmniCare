import React from "react";

export interface SurgicalCountSheetProps {
  spongesReconciled: boolean;
  sharpsReconciled: boolean;
  instrumentsReconciled: boolean;
  scrubNurse: string;
  circulatingNurse: string;
  className?: string;
}

export const SurgicalCountSheet: React.FC<SurgicalCountSheetProps> = ({
  spongesReconciled,
  sharpsReconciled,
  instrumentsReconciled,
  scrubNurse,
  circulatingNurse,
  className = "",
}) => {
  const allCorrect = spongesReconciled && sharpsReconciled && instrumentsReconciled;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${allCorrect ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/30" : "border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Surgical Count Sheet</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${allCorrect ? "bg-emerald-200 text-emerald-900" : "bg-rose-200 text-rose-900"}`}>
          {allCorrect ? "Counts Correct ✓" : "COUNT MISMATCH ✗"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>Sponges: {spongesReconciled ? "Reconciled ✓" : "Discrepancy (X-Ray Required) ✗"}</p>
        <p>Sharps / Needles: {sharpsReconciled ? "Reconciled ✓" : "Discrepancy ✗"}</p>
        <p>Instruments: {instrumentsReconciled ? "Reconciled ✓" : "Discrepancy ✗"}</p>
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-slate-500">
        <span>Scrub: {scrubNurse}</span>
        <span>Circulator: {circulatingNurse}</span>
      </div>
    </div>
  );
};
