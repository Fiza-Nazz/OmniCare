import React from "react";

export interface PacemakerInterrogationCardProps {
  deviceType: "PPM" | "ICD" | "CRT-D";
  atrialLeadImpedanceOhms: number;
  ventricularLeadImpedanceOhms: number;
  pacingPercentageVentricular: number;
  yearsBatteryRemaining: number;
  className?: string;
}

export const PacemakerInterrogationCard: React.FC<PacemakerInterrogationCardProps> = ({
  deviceType,
  atrialLeadImpedanceOhms,
  ventricularLeadImpedanceOhms,
  pacingPercentageVentricular,
  yearsBatteryRemaining,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CIED Interrogation: {deviceType}</h4>
        <span className="font-mono text-slate-500">Battery: ~{yearsBatteryRemaining} yrs remaining</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">RA Lead</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{atrialLeadImpedanceOhms} Ω</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">RV Lead</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{ventricularLeadImpedanceOhms} Ω</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">% RV Paced</span>
          <p className="font-bold text-blue-600">{pacingPercentageVentricular}%</p>
        </div>
      </div>
    </div>
  );
};
