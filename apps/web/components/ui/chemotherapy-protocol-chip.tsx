import React from "react";

export interface ChemotherapyProtocolChipProps {
  regimenName: string;
  currentCycle: number;
  totalCycles: number;
  dayOfCycle: number;
  className?: string;
}

export const ChemotherapyProtocolChip: React.FC<ChemotherapyProtocolChipProps> = ({
  regimenName,
  currentCycle,
  totalCycles,
  dayOfCycle,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold text-purple-800 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-200 ${className}`}>
      <span>🎗️ {regimenName}</span>
      <span className="font-mono text-[11px] opacity-75">• Cycle {currentCycle}/{totalCycles} (Day {dayOfCycle})</span>
    </div>
  );
};
