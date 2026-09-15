import React from "react";

export interface VitalAlertsBannerProps {
  patientName: string;
  bedId: string;
  alertMessage: string;
  onAcknowledge: () => void;
  className?: string;
}

export const VitalAlertsBanner: React.FC<VitalAlertsBannerProps> = ({
  patientName,
  bedId,
  alertMessage,
  onAcknowledge,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between rounded-xl border border-rose-400 bg-rose-500 p-4 text-white shadow-lg animate-pulse ${className}`}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <h4 className="text-sm font-black uppercase tracking-wider">
            CRITICAL ALARM: Bed {bedId} ({patientName})
          </h4>
          <p className="text-xs font-semibold opacity-90">{alertMessage}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onAcknowledge}
        className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-rose-700 shadow hover:bg-slate-100"
      >
        Acknowledge
      </button>
    </div>
  );
};
