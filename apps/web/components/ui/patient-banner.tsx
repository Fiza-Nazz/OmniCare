import React from "react";

export interface PatientBannerProps {
  name: string;
  mrn: string;
  dob: string;
  age: number;
  gender: string;
  bloodType?: string;
  allergies?: string[];
  attendingPhysician?: string;
  className?: string;
}

export const PatientBanner: React.FC<PatientBannerProps> = ({
  name,
  mrn,
  dob,
  age,
  gender,
  bloodType,
  allergies = [],
  attendingPhysician,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h2>
            <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span>MRN: <strong className="font-mono text-slate-700 dark:text-slate-200">{mrn}</strong></span>
              <span>•</span>
              <span>DOB: {dob} ({age} yo)</span>
              <span>•</span>
              <span>Gender: {gender}</span>
              {bloodType && (
                <>
                  <span>•</span>
                  <span>Blood: <strong className="text-rose-600">{bloodType}</strong></span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {attendingPhysician && (
            <div className="text-xs">
              <span className="text-slate-400 block">Attending</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{attendingPhysician}</span>
            </div>
          )}

          {allergies.length > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase text-rose-600">Allergies:</span>
              <div className="flex flex-wrap gap-1">
                {allergies.map((allergy, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700 border border-rose-200 dark:bg-rose-950 dark:border-rose-800 dark:text-rose-300"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
