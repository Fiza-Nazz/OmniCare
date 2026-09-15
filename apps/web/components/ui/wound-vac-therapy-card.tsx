import React from "react";

export interface WoundVacTherapyCardProps {
  location: string;
  suctionMmHg: number;
  therapyMode: "Continuous" | "Intermittent";
  canisterOutputMl: number;
  sealIntegrityGood: boolean;
  className?: string;
}

export const WoundVacTherapyCard: React.FC<WoundVacTherapyCardProps> = ({
  location,
  suctionMmHg,
  therapyMode,
  canisterOutputMl,
  sealIntegrityGood,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Wound VAC (NPWT): {location}</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${sealIntegrityGood ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
          {sealIntegrityGood ? "Airtight Seal ✓" : "LEAK DETECTED ✗"}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span>Pressure: <strong className="font-mono">-{suctionMmHg} mmHg ({therapyMode})</strong></span>
        <span>Canister Drainage: <strong className="font-mono">{canisterOutputMl} mL</strong></span>
      </div>
    </div>
  );
};
