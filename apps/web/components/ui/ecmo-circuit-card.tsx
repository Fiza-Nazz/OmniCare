import React from "react";

export interface EcmoCircuitCardProps {
  ecmoType: "Veno-Venous (VV)" | "Veno-Arterial (VA)";
  pumpSpeedRpm: number;
  flowRateLpm: number;
  sweepGasLpm: number;
  preMembranePressure: number;
  postMembranePressure: number;
  className?: string;
}

export const EcmoCircuitCard: React.FC<EcmoCircuitCardProps> = ({
  ecmoType,
  pumpSpeedRpm,
  flowRateLpm,
  sweepGasLpm,
  preMembranePressure,
  postMembranePressure,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-200 bg-rose-50/50 p-4 shadow-sm dark:border-rose-900 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-100 pb-2 dark:border-rose-900">
        <h4 className="text-sm font-bold text-rose-900 dark:text-rose-200">ECMO Circuit: {ecmoType}</h4>
        <span className="font-mono text-xs font-bold text-rose-700 dark:text-rose-300">{flowRateLpm} L/min Flow</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
        <div className="rounded bg-white p-2 dark:bg-slate-800">
          <span className="text-slate-400">Pump RPM</span>
          <p className="font-bold">{pumpSpeedRpm}</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800">
          <span className="text-slate-400">Sweep Gas</span>
          <p className="font-bold">{sweepGasLpm} L/min</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800">
          <span className="text-slate-400">Pre-Membrane</span>
          <p className="font-bold">{preMembranePressure} mmHg</p>
        </div>
        <div className="rounded bg-white p-2 dark:bg-slate-800">
          <span className="text-slate-400">Post-Membrane</span>
          <p className="font-bold">{postMembranePressure} mmHg</p>
        </div>
      </div>
    </div>
  );
};
