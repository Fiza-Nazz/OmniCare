import React from "react";

export interface ImplantableDeviceCardProps {
  deviceName: string;
  manufacturer: string;
  serialNumber: string;
  mriSafety: "mri_safe" | "mri_conditional" | "mri_unsafe";
  implantDate: string;
  className?: string;
}

const mriStyles = {
  mri_safe: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  mri_conditional: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  mri_unsafe: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

export const ImplantableDeviceCard: React.FC<ImplantableDeviceCardProps> = ({
  deviceName,
  manufacturer,
  serialNumber,
  mriSafety,
  implantDate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{deviceName}</h4>
        <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${mriStyles[mriSafety]}`}>
          {mriSafety.replace("_", " ")}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500">Mfr: <strong>{manufacturer}</strong> • SN: <strong className="font-mono">{serialNumber}</strong></p>
      <span className="block mt-2 text-[11px] text-slate-400">Implanted on {implantDate}</span>
    </div>
  );
};
