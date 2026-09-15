import React from "react";

export interface BloodProductTagProps {
  unitNumber: string;
  productType: "Packed Red Blood Cells (PRBC)" | "Platelets" | "Fresh Frozen Plasma (FFP)" | "Cryoprecipitate";
  donorAboRh: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  expirationDate: string;
  nurseOneVerified: boolean;
  nurseTwoVerified: boolean;
  className?: string;
}

export const BloodProductTag: React.FC<BloodProductTagProps> = ({
  unitNumber,
  productType,
  donorAboRh,
  expirationDate,
  nurseOneVerified,
  nurseTwoVerified,
  className = "",
}) => {
  const isReady = nurseOneVerified && nurseTwoVerified;

  return (
    <div className={`rounded-xl border-2 border-rose-300 bg-white p-4 shadow-sm dark:border-rose-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-rose-700 dark:text-rose-400">🩸 Transfusion Safety Tag</h4>
        <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-black text-rose-800 dark:bg-rose-950 dark:text-rose-200">
          Group {donorAboRh}
        </span>
      </div>
      <div className="mt-3 space-y-1 text-xs">
        <p className="font-semibold text-slate-900 dark:text-white">{productType}</p>
        <p className="font-mono text-slate-500">Unit ID: {unitNumber} • Exp: {expirationDate}</p>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] dark:border-slate-800">
        <span>Dual RN Sign-Off: {nurseOneVerified ? "RN 1 ✓" : "RN 1 ✗"} | {nurseTwoVerified ? "RN 2 ✓" : "RN 2 ✗"}</span>
        <span className={`font-bold ${isReady ? "text-emerald-600" : "text-rose-600"}`}>
          {isReady ? "Ready to Hang" : "Verification Incomplete"}
        </span>
      </div>
    </div>
  );
};
