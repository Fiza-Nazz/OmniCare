import React from "react";

export interface TransfusionAssociatedTacoTraliProps {
  suspectedDiagnosis: "TACO" | "TRALI";
  bnpElevated: boolean;
  feverPresent: boolean;
  hypertensionPresent: boolean;
  className?: string;
}

export const TransfusionAssociatedTacoTrali: React.FC<TransfusionAssociatedTacoTraliProps> = ({
  suspectedDiagnosis,
  bnpElevated,
  feverPresent,
  hypertensionPresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-sm dark:border-rose-900 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm">Transfusion Pulmonary Complication</h4>
        <span className="rounded bg-rose-600 px-2 py-0.5 font-bold text-white uppercase text-[10px]">
          {suspectedDiagnosis === "TACO" ? "TACO (Overload - Diurese)" : "TRALI (Immune - Supportive Care)"}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-rose-950 dark:text-rose-300">
        <p>• Elevated BNP / NT-proBNP: {bnpElevated ? "Yes (Points to TACO)" : "No"}</p>
        <p>• Febrile Reaction: {feverPresent ? "Yes (Points to TRALI)" : "No"}</p>
        <p>• Systolic Hypertension: {hypertensionPresent ? "Yes (Points to TACO)" : "Hypotensive (TRALI)"}</p>
      </div>
    </div>
  );
};
