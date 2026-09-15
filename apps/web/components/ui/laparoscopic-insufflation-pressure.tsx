import React from "react";

export interface LaparoscopicInsufflationPressureProps {
  targetPressureMmHg: number;
  currentPressureMmHg: number;
  co2FlowRateLMin: number;
  totalCo2UsedL: number;
  className?: string;
}

export const LaparoscopicInsufflationPressure: React.FC<LaparoscopicInsufflationPressureProps> = ({
  targetPressureMmHg,
  currentPressureMmHg,
  co2FlowRateLMin,
  totalCo2UsedL,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Laparoscopic Insufflation Monitor</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Lap Insufflator
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Set Limit Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${targetPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Actual Pneumoperitoneum:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${currentPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Continuous Flow Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${co2FlowRateLMin} L/min`}</strong></div>
        <div className="flex justify-between"><span>Cumulative Gas Consumed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalCo2UsedL} L`}</strong></div>
      </div>
    </div>
  );
};
