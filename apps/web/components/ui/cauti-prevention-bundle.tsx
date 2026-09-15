import React from "react";

export interface CautiPreventionBundleProps {
  daysCatheterInPlace: number;
  validMedicalIndication: boolean;
  bagBelowBladderLevel: boolean;
  tamperEvidentSealIntact: boolean;
  className?: string;
}

export const CautiPreventionBundle: React.FC<CautiPreventionBundleProps> = ({
  daysCatheterInPlace,
  validMedicalIndication,
  bagBelowBladderLevel,
  tamperEvidentSealIntact,
  className = "",
}) => {
  const isCompliant = validMedicalIndication && bagBelowBladderLevel && tamperEvidentSealIntact;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isCompliant ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800" : "border-amber-200 bg-amber-50 dark:border-amber-800"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">CAUTI Prevention Audit (Day {daysCatheterInPlace})</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isCompliant ? "bg-emerald-200 text-emerald-900" : "bg-amber-200 text-amber-900"}`}>
          {isCompliant ? "Bundle Maintained" : "Action Required"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Documented Necessity Indication: {validMedicalIndication ? "Confirmed ✓" : "Review for Removal ✗"}</p>
        <p>• Drainage Bag Below Bladder Level: {bagBelowBladderLevel ? "Yes ✓" : "Reposition ✗"}</p>
        <p>• Sterile Closed System Seal: {tamperEvidentSealIntact ? "Intact ✓" : "Compromised ✗"}</p>
      </div>
    </div>
  );
};
