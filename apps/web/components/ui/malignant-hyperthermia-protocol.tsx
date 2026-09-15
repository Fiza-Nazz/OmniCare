import React from "react";

export interface MalignantHyperthermiaProtocolProps {
  patientWeightKg: number;
  className?: string;
}

export const MalignantHyperthermiaProtocol: React.FC<MalignantHyperthermiaProtocolProps> = ({
  patientWeightKg,
  className = "",
}) => {
  const initialDantroleneMg = (patientWeightKg * 2.5).toFixed(0);

  return (
    <div className={`rounded-xl border-2 border-rose-600 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm">🚨 MALIGNANT HYPERTHERMIA CRISIS</h4>
        <span className="rounded bg-rose-600 px-2 py-0.5 font-bold text-white">CALL MH HOTLINE</span>
      </div>
      <div className="mt-2 space-y-1 text-rose-950 dark:text-rose-300">
        <p>1. <strong>Stop Inhalation Agents:</strong> Switch to 100% O2 @ high flow (>10 L/min)</p>
        <p>2. <strong>Dantrolene:</strong> Push 2.5 mg/kg IV (<strong className="font-mono">{initialDantroleneMg} mg</strong>) STAT</p>
        <p>3. <strong>Active Cooling:</strong> Iced saline IV, ice packs to axillae/groin until core temp < 38°C</p>
      </div>
    </div>
  );
};
