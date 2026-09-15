import React from "react";

export interface BispectralIndexMonitorProps {
  bisValue: number;
  signalQualityIndexPercent: number;
  suppressionRatioPercent: number;
  className?: string;
}

export const BispectralIndexMonitor: React.FC<BispectralIndexMonitorProps> = ({
  bisValue,
  signalQualityIndexPercent,
  suppressionRatioPercent,
  className = "",
}) => {
  const isGeneralAnesthesiaTarget = bisValue >= 40 && bisValue <= 60;

  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 text-white font-mono shadow-md text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-sm text-purple-400">BIS Anesthesia Depth</span>
        <span className="text-slate-400">SQI: {signalQualityIndexPercent}%</span>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <span className="text-3xl font-black text-purple-300">{bisValue}</span>
          <p className="text-[10px] text-slate-400">Target: 40 - 60 (GA)</p>
        </div>
        <div className="text-right text-[11px] text-slate-400">
          <p>Suppression Ratio: {suppressionRatioPercent}%</p>
          <span className={`font-bold ${isGeneralAnesthesiaTarget ? "text-emerald-400" : "text-amber-400"}`}>
            {isGeneralAnesthesiaTarget ? "Target Depth Maintained" : bisValue > 60 ? "Light Anesthesia Risk" : "Deep Burst Suppression"}
          </span>
        </div>
      </div>
    </div>
  );
};
