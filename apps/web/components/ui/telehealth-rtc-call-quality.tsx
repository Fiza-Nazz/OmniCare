import React from "react";

export interface TelehealthRtcCallQualityProps {
  videoBitrateKbps: number;
  audioPacketLossPercent: number;
  networkJitterMs: number;
  callQualityHealthStatus: string;
  className?: string;
}

export const TelehealthRtcCallQuality: React.FC<TelehealthRtcCallQualityProps> = ({
  videoBitrateKbps,
  audioPacketLossPercent,
  networkJitterMs,
  callQualityHealthStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Telehealth Video Call Quality</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Telemedicine
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Encrypted Video Bitrate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${videoBitrateKbps} kbps`}</strong></div>
        <div className="flex justify-between"><span>Audio Packet Loss Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${audioPacketLossPercent}% (&lt;2% goal)`}</strong></div>
        <div className="flex justify-between"><span>Buffer Network Jitter:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${networkJitterMs} ms`}</strong></div>
        <div className="flex justify-between"><span>Connection Health State:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{callQualityHealthStatus}</strong></div>
      </div>
    </div>
  );
};
