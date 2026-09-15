import React from "react";

export type AcuityLevel = 1 | 2 | 3 | 4;

export interface PatientAcuityScoringProps {
  level: AcuityLevel;
  requiredRatio: string;
  nursingHoursPerDay: number;
  className?: string;
}

const acuityDesc: Record<AcuityLevel, { label: string; color: string }> = {
  1: { label: "Level 1: Minimal Care / Discharge Pending", color: "bg-emerald-100 text-emerald-800" },
  2: { label: "Level 2: Moderate Care / Intermediate", color: "bg-blue-100 text-blue-800" },
  3: { label: "Level 3: Complex Care / Step-Down", color: "bg-amber-100 text-amber-800" },
  4: { label: "Level 4: Critical Care / 1:1 Intensive", color: "bg-rose-100 text-rose-800" },
};

export const PatientAcuityScoring: React.FC<PatientAcuityScoringProps> = ({
  level,
  requiredRatio,
  nursingHoursPerDay,
  className = "",
}) => {
  const config = acuityDesc[level];

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Patient Acuity & Staffing Ratio</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${config.color}`}>
          Level {level}
        </span>
      </div>
      <p className="mt-2 text-slate-700 dark:text-slate-300 font-semibold">{config.label}</p>
      <div className="mt-2 flex justify-between text-slate-500">
        <span>Nurse-Patient Ratio: <strong>{requiredRatio}</strong></span>
        <span>Nursing Intensity: <strong>{nursingHoursPerDay} hrs/day</strong></span>
      </div>
    </div>
  );
};
