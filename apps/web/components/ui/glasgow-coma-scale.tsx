import React from "react";

export interface GlasgowComaScaleProps {
  eyeResponse: number; // 1-4
  verbalResponse: number; // 1-5
  motorResponse: number; // 1-6
  className?: string;
}

export const GlasgowComaScale: React.FC<GlasgowComaScaleProps> = ({
  eyeResponse,
  verbalResponse,
  motorResponse,
  className = "",
}) => {
  const totalGcs = eyeResponse + verbalResponse + motorResponse;
  const severity = totalGcs <= 8 ? "Severe (Coma)" : totalGcs <= 12 ? "Moderate" : "Mild";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Glasgow Coma Scale (GCS)</h4>
        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-black text-blue-800 dark:bg-blue-950 dark:text-blue-200">
          Total: {totalGcs}/15 ({severity})
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500 font-medium">Eye (E)</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{eyeResponse}/4</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500 font-medium">Verbal (V)</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{verbalResponse}/5</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-500 font-medium">Motor (M)</span>
          <p className="text-base font-bold text-slate-800 dark:text-slate-200">{motorResponse}/6</p>
        </div>
      </div>
    </div>
  );
};
