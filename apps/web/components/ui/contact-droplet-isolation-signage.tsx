import React from "react";

export interface ContactDropletIsolationSignageProps {
  isolationTier: string;
  imperviousGownRequired: string;
  eyeShieldProtection: string;
  dedicatedEquipmentOnly: string;
  className?: string;
}

export const ContactDropletIsolationSignage: React.FC<ContactDropletIsolationSignageProps> = ({
  isolationTier,
  imperviousGownRequired,
  eyeShieldProtection,
  dedicatedEquipmentOnly,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Contact & Droplet Precautions Sign</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Infection Control
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Isolation Classification:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{isolationTier}</strong></div>
        <div className="flex justify-between"><span>Fluid-Resistant Isolation Gown:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{imperviousGownRequired}</strong></div>
        <div className="flex justify-between"><span>Face Mask & Eye Protection:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{eyeShieldProtection}</strong></div>
        <div className="flex justify-between"><span>Dedicated Stethoscope / BP Cuff:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dedicatedEquipmentOnly}</strong></div>
      </div>
    </div>
  );
};
