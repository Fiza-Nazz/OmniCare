import React from "react";

export interface DefibrillatorChargeIndicatorProps {
  selectedJoules: number;
  isCharged: boolean;
  syncModeActive: boolean;
  onDeliverShock?: () => void;
  className?: string;
}

export const DefibrillatorChargeIndicator: React.FC<DefibrillatorChargeIndicatorProps> = ({
  selectedJoules,
  isCharged,
  syncModeActive,
  onDeliverShock,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border-2 border-rose-500 bg-slate-950 p-4 text-white font-mono shadow-xl text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h4 className="font-black text-rose-500 text-sm">⚡ Biphasic Defibrillator</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${syncModeActive ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>
          {syncModeActive ? "SYNC ON (Cardioversion)" : "ASYNC (Defib)"}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-2xl font-black text-amber-400">{selectedJoules} Joules</span>
          <p className="text-[10px] text-slate-400">{isCharged ? "READY TO DISCHARGE" : "Charging..."}</p>
        </div>
        {isCharged && onDeliverShock && (
          <button
            type="button"
            onClick={onDeliverShock}
            className="rounded-full bg-rose-600 px-5 py-2 font-black text-white hover:bg-rose-700 animate-bounce"
          >
            SHOCK
          </button>
        )}
      </div>
    </div>
  );
};
