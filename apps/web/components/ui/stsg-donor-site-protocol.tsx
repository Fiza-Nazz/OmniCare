import React from "react";

export interface StsgDonorSiteProtocolProps {
  donorSiteLocation: string;
  harvestThicknessInches: number;
  dressingTypeApplied: string;
  epithelializationPercentage: number;
  className?: string;
}

export const StsgDonorSiteProtocol: React.FC<StsgDonorSiteProtocolProps> = ({
  donorSiteLocation,
  harvestThicknessInches,
  dressingTypeApplied,
  epithelializationPercentage,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">STSG Donor Site Management</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Plastic & Burn Care
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Anatomical Donor Site:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{donorSiteLocation}</strong></div>
        <div className="flex justify-between"><span>Harvest Thickness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${harvestThicknessInches} in`}</strong></div>
        <div className="flex justify-between"><span>Contact Dressing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dressingTypeApplied}</strong></div>
        <div className="flex justify-between"><span>Re-Epithelialization:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${epithelializationPercentage}%`}</strong></div>
      </div>
    </div>
  );
};
