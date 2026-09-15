import React from "react";

export interface OrganDonorStatusProps {
  isRegisteredDonor: boolean;
  donorRegistryState: string;
  donorCardVerified: boolean;
  className?: string;
}

export const OrganDonorStatus: React.FC<OrganDonorStatusProps> = ({
  isRegisteredDonor,
  donorRegistryState,
  donorCardVerified,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border p-4 shadow-sm ${isRegisteredDonor ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold">🕊️ Organ & Tissue Donor Registry</h4>
        <span className={`rounded px-2 py-0.5 text-xs font-bold ${isRegisteredDonor ? "bg-emerald-200 text-emerald-900" : "bg-slate-100 text-slate-600"}`}>
          {isRegisteredDonor ? `Registered Donor (${donorRegistryState})` : "Not Registered"}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500">Verification: {donorCardVerified ? "Card on File ✓" : "Registry Database Check Only"}</p>
    </div>
  );
};
