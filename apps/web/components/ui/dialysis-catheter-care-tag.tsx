import React from "react";

export interface DialysisCatheterCareTagProps {
  accessType: "AV Fistula" | "AV Graft" | "PermCath";
  limbLocation: "Left Arm" | "Right Arm" | "Right Internal Jugular";
  thrillPresent: boolean;
  bruitAudible: boolean;
  className?: string;
}

export const DialysisCatheterCareTag: React.FC<DialysisCatheterCareTagProps> = ({
  accessType,
  limbLocation,
  thrillPresent,
  bruitAudible,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border-2 border-rose-400 bg-rose-50 p-4 text-xs dark:border-rose-800 dark:bg-rose-950/40 ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm">
          ⚠️ DIALYSIS ACCESS: {limbLocation}
        </h4>
        <span className="rounded bg-rose-600 px-2 py-0.5 font-black text-white uppercase text-[10px]">
          NO BP / NO IV
        </span>
      </div>
      <div className="mt-3 space-y-1 text-rose-950 dark:text-rose-300">
        <p>Type: <strong>{accessType}</strong></p>
        <p>Thrill Palpable: {thrillPresent ? "Yes ✓" : "Absent (ALERT) ✗"}</p>
        <p>Bruit Auscultated: {bruitAudible ? "Yes ✓" : "Absent (ALERT) ✗"}</p>
      </div>
    </div>
  );
};
