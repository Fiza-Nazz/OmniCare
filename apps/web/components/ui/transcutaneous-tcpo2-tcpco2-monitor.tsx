import React from "react";

export interface TranscutaneousTcpo2Tcpco2MonitorProps {
  tcpO2MmHg: number;
  tcpCO2MmHg: number;
  electrodeTempCelsius: number;
  siteRotationTimerMinutesRemaining: number;
  className?: string;
}

export const TranscutaneousTcpo2Tcpco2Monitor: React.FC<TranscutaneousTcpo2Tcpco2MonitorProps> = ({
  tcpO2MmHg,
  tcpCO2MmHg,
  electrodeTempCelsius,
  siteRotationTimerMinutesRemaining,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Transcutaneous tcpO2 / tcpCO2 Monitor</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NICU Continuous Monitoring
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Transcutaneous tcpO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tcpO2MmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Transcutaneous tcpCO2:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tcpCO2MmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Electrode Temperature:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${electrodeTempCelsius} °C`}</strong></div>
        <div className="flex justify-between"><span>Site Rotation Due In:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${siteRotationTimerMinutesRemaining} min`}</strong></div>
      </div>
    </div>
  );
};
