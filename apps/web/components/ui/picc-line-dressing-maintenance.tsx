import React from "react";

export interface PiccLineDressingMaintenanceProps {
  externalLengthCm: number;
  insertionLengthCm: number;
  lastDressingChangeDate: string;
  daysUntilNextChange: number;
  className?: string;
}

export const PiccLineDressingMaintenance: React.FC<PiccLineDressingMaintenanceProps> = ({
  externalLengthCm,
  insertionLengthCm,
  lastDressingChangeDate,
  daysUntilNextChange,
  className = "",
}) => {
  const isMigrationSuspected = externalLengthCm !== 2; // Baseline 2cm external

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">PICC Line Dressing & Catheter Audit</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isMigrationSuspected ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
          {isMigrationSuspected ? "Catheter Migration Check" : "Depth Confirmed ✓"}
        </span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>External Length: <strong className="font-mono">{externalLengthCm} cm</strong> • Insertion Depth: {insertionLengthCm} cm</p>
        <p>Last Dressing Change: {lastDressingChangeDate} (Due in {daysUntilNextChange} days)</p>
      </div>
    </div>
  );
};
