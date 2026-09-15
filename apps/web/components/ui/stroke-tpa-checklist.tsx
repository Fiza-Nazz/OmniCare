import React from "react";

export interface StrokeTpaChecklistProps {
  headCtHemorrhageExcluded: boolean;
  bpControlledUnder185: boolean;
  plateletsOver100k: boolean;
  inrUnder1_7: boolean;
  className?: string;
}

export const StrokeTpaChecklist: React.FC<StrokeTpaChecklistProps> = ({
  headCtHemorrhageExcluded,
  bpControlledUnder185,
  plateletsOver100k,
  inrUnder1_7,
  className = "",
}) => {
  const eligible = headCtHemorrhageExcluded && bpControlledUnder185 && plateletsOver100k && inrUnder1_7;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${eligible ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800" : "border-rose-300 bg-rose-50 dark:border-rose-800"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Alteplase / Tenecteplase Eligibility</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${eligible ? "bg-emerald-600 text-white" : "bg-rose-600 text-white"}`}>
          {eligible ? "Eligible for Thrombolysis" : "Contraindicated"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Non-contrast Head CT: {headCtHemorrhageExcluded ? "No Bleed ✓" : "Hemorrhage Present ✗"}</p>
        <p>• BP < 185/110 mmHg: {bpControlledUnder185 ? "Controlled ✓" : "Elevated ✗"}</p>
        <p>• Platelets > 100,000/mcL: {plateletsOver100k ? "Adequate ✓" : "Thrombocytopenia ✗"}</p>
        <p>• INR < 1.7: {inrUnder1_7 ? "Coagulation Normal ✓" : "Coagulopathy ✗"}</p>
      </div>
    </div>
  );
};
