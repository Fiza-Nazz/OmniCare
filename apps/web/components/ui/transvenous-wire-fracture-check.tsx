import React from "react";

export interface TransvenousWireFractureCheckProps {
  measuredImpedanceOhms: number;
  captureThresholdVolts: number;
  leadFractureSuspected: boolean;
  className?: string;
}

export const TransvenousWireFractureCheck: React.FC<TransvenousWireFractureCheckProps> = ({
  measuredImpedanceOhms,
  captureThresholdVolts,
  leadFractureSuspected,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${leadFractureSuspected ? "border-rose-400 bg-rose-50 dark:border-rose-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Pacing Lead Integrity Check</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${leadFractureSuspected ? "bg-rose-600 text-white" : "bg-emerald-100 text-emerald-800"}`}>
          {leadFractureSuspected ? "SUSPECTED LEAD FRACTURE (>2000Ω)" : "Lead Intact"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Impedance: <strong className="font-mono">{measuredImpedanceOhms} Ω</strong> (Normal: 300 - 1000 Ω)</p>
        <p>• Pacing Threshold: {captureThresholdVolts} Volts</p>
      </div>
    </div>
  );
};
