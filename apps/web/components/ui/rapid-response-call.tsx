import React from "react";

export interface RapidResponseCallProps {
  roomNumber: string;
  triggerCriteria: string[];
  callerName: string;
  onActivate: () => void;
  className?: string;
}

export const RapidResponseCall: React.FC<RapidResponseCallProps> = ({
  roomNumber,
  triggerCriteria,
  callerName,
  onActivate,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border-2 border-amber-400 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/40 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-black text-amber-900 dark:text-amber-200">
          ⚡ Rapid Response Team (RRT) Activation
        </h4>
        <span className="font-mono text-xs font-bold text-amber-800">Room {roomNumber}</span>
      </div>
      <div className="mt-2 text-xs text-amber-950 dark:text-amber-300">
        <p className="font-semibold">Trigger Criteria:</p>
        <ul className="list-disc list-inside mt-1 space-y-0.5">
          {triggerCriteria.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={onActivate}
        className="mt-3 w-full rounded-lg bg-amber-600 py-2 text-xs font-bold text-white hover:bg-amber-700"
      >
        Dispatch ICU Rapid Response Team ({callerName})
      </button>
    </div>
  );
};
