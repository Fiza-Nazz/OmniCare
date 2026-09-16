import React from "react";

export interface FamilyReunificationTrackingTagProps {
  disasterTrackingBarcodeId: string;
  estimatedAgeYears: number;
  distinguishingTattoosBirthmarks: string;
  redCrossRegistrySubmitted: string;
  className?: string;
}

export const FamilyReunificationTrackingTag: React.FC<FamilyReunificationTrackingTagProps> = ({
  disasterTrackingBarcodeId,
  estimatedAgeYears,
  distinguishingTattoosBirthmarks,
  redCrossRegistrySubmitted,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Disaster Family Reunification</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Humanitarian
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Disaster Barcode Wristband:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{disasterTrackingBarcodeId}</strong></div>
        <div className="flex justify-between"><span>Estimated Age Tier:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${estimatedAgeYears} Years`}</strong></div>
        <div className="flex justify-between"><span>Physical Distinguishing Features:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{distinguishingTattoosBirthmarks}</strong></div>
        <div className="flex justify-between"><span>Red Cross Safe & Well Match:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{redCrossRegistrySubmitted}</strong></div>
      </div>
    </div>
  );
};
