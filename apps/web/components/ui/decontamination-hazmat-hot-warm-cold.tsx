import React from "react";

export interface DecontaminationHazmatHotWarmColdProps {
  hazmatZoneLocation: string;
  chemicalAgentClass: string;
  waterShowerContactTimeMin: number;
  dryDeconClothingRemovalPercent: number;
  className?: string;
}

export const DecontaminationHazmatHotWarmCold: React.FC<DecontaminationHazmatHotWarmColdProps> = ({
  hazmatZoneLocation,
  chemicalAgentClass,
  waterShowerContactTimeMin,
  dryDeconClothingRemovalPercent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HAZMAT Decontamination Corridors</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          HAZMAT Decon
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>HAZMAT Operational Sector:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hazmatZoneLocation}</strong></div>
        <div className="flex justify-between"><span>Suspected Toxic Chemical:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{chemicalAgentClass}</strong></div>
        <div className="flex justify-between"><span>Warm Zone Wash Shower Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${waterShowerContactTimeMin} min`}</strong></div>
        <div className="flex justify-between"><span>Contamination Removal (Clothing):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dryDeconClothingRemovalPercent}% (80-90% cut)`}</strong></div>
      </div>
    </div>
  );
};
