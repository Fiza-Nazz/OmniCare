import React from "react";

export interface LumbarPunctureTrayCardProps {
  openingPressureCmH2O: number;
  performedBy: string;
  tube1CellCount: string;
  tube2ProteinGlucose: string;
  tube3GramStain: string;
  tube4Reserve: string;
  className?: string;
}

export const LumbarPunctureTrayCard: React.FC<LumbarPunctureTrayCardProps> = ({
  openingPressureCmH2O,
  performedBy,
  tube1CellCount,
  tube2ProteinGlucose,
  tube3GramStain,
  tube4Reserve,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Lumbar Puncture (CSF) Protocol</h4>
        <span className="font-mono font-bold text-blue-600">Opening Pressure: {openingPressureCmH2O} cmH2O</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-400">
        <p>Tube 1: {tube1CellCount}</p>
        <p>Tube 2: {tube2ProteinGlucose}</p>
        <p>Tube 3: {tube3GramStain}</p>
        <p>Tube 4: {tube4Reserve}</p>
      </div>
      <p className="mt-2 text-slate-400 text-[11px]">Provider: {performedBy}</p>
    </div>
  );
};
