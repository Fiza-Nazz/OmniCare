import React from "react";

export interface NurseHandoverSheetProps {
  situation: string;
  background: string;
  assessment: string;
  recommendation: string;
  outgoingNurse: string;
  incomingNurse?: string;
  className?: string;
}

export const NurseHandoverSheet: React.FC<NurseHandoverSheetProps> = ({
  situation,
  background,
  assessment,
  recommendation,
  outgoingNurse,
  incomingNurse,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <h4 className="text-base font-bold text-slate-900 dark:text-white">SBAR Nurse Handover Report</h4>
        <span className="text-xs text-slate-500">From: <strong>{outgoingNurse}</strong></span>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">S - Situation</span>
          <p className="text-slate-700 dark:text-slate-300">{situation}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">B - Background</span>
          <p className="text-slate-700 dark:text-slate-300">{background}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">A - Assessment</span>
          <p className="text-slate-700 dark:text-slate-300">{assessment}</p>
        </div>
        <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
          <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">R - Recommendation</span>
          <p className="text-slate-700 dark:text-slate-300">{recommendation}</p>
        </div>
      </div>
    </div>
  );
};
