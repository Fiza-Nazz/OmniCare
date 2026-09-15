import React from "react";

export interface ChemoExtravasationKitProps {
  kitLocation: string;
  expirationDate: string;
  tamperSealIntact: boolean;
  hyaluronidasePresent: boolean;
  dexrazoxanePresent: boolean;
  className?: string;
}

export const ChemoExtravasationKit: React.FC<ChemoExtravasationKitProps> = ({
  kitLocation,
  expirationDate,
  tamperSealIntact,
  hyaluronidasePresent,
  dexrazoxanePresent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-rose-700 dark:text-rose-400">Chemo Vesicant Emergency Kit</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${tamperSealIntact ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
          {tamperSealIntact ? "Seal Intact ✓" : "SEAL BROKEN ✗"}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>Location: {kitLocation} • Exp: {expirationDate}</p>
        <p>Hyaluronidase: {hyaluronidasePresent ? "Stocked ✓" : "Missing ✗"} | Dexrazoxane (Totect): {dexrazoxanePresent ? "Stocked ✓" : "Missing ✗"}</p>
      </div>
    </div>
  );
};
