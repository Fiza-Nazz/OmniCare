import React from "react";

export interface CasualtyCollectionPointCcpDispatchProps {
  ccpFieldLocation: string;
  immediateRedPatientsAwaitingAirEvac: number;
  delayedYellowPatientsGroundTransit: number;
  ambulanceTurnaroundTimeMin: number;
  className?: string;
}

export const CasualtyCollectionPointCcpDispatch: React.FC<CasualtyCollectionPointCcpDispatchProps> = ({
  ccpFieldLocation,
  immediateRedPatientsAwaitingAirEvac,
  delayedYellowPatientsGroundTransit,
  ambulanceTurnaroundTimeMin,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Casualty Collection Point (CCP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Disaster Logistics
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>CCP Staging Area:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ccpFieldLocation}</strong></div>
        <div className="flex justify-between"><span>Red Priority Helicopter Evac:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${immediateRedPatientsAwaitingAirEvac} Patients`}</strong></div>
        <div className="flex justify-between"><span>Yellow Priority Ground Transport:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${delayedYellowPatientsGroundTransit} Patients`}</strong></div>
        <div className="flex justify-between"><span>Ambulance Turnaround Cycle:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ambulanceTurnaroundTimeMin} min`}</strong></div>
      </div>
    </div>
  );
};
