import React from "react";

export interface PediatricVitalSignsCardProps {
  patientAgeString: string;
  heartRate: number;
  respiratoryRate: number;
  systolicBp: number;
  diastolicBp: number;
  className?: string;
}

export const PediatricVitalSignsCard: React.FC<PediatricVitalSignsCardProps> = ({
  patientAgeString,
  heartRate,
  respiratoryRate,
  systolicBp,
  diastolicBp,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Pediatric Vitals ({patientAgeString})</h4>
        <span className="text-slate-400">PALS Normal Ranges</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Heart Rate</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{heartRate} bpm</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Resp Rate</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{respiratoryRate} /min</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Blood Pressure</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{systolicBp}/{diastolicBp}</p>
        </div>
      </div>
    </div>
  );
};
