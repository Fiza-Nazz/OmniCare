import React from "react";

export interface PericardiocentesisTrayProps {
  fluidAspiratedMl: number;
  fluidCharacteristics: string;
  hemodynamicsImproved: boolean;
  operator: string;
  className?: string;
}

export const PericardiocentesisTray: React.FC<PericardiocentesisTrayProps> = ({
  fluidAspiratedMl,
  fluidCharacteristics,
  hemodynamicsImproved,
  operator,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Emergency Pericardiocentesis</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${hemodynamicsImproved ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
          {hemodynamicsImproved ? "Beck's Triad Resolved ✓" : "Monitoring Hemodynamics"}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Volume Aspirated: <strong className="font-mono text-slate-900 dark:text-white">{fluidAspiratedMl} mL</strong> ({fluidCharacteristics})</p>
        <p>• Operator: {operator}</p>
      </div>
    </div>
  );
};
