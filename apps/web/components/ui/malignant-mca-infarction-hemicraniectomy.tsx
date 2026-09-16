import React from "react";

export interface MalignantMcaInfarctionHemicraniectomyProps {
  midlineShiftMm: number;
  basalCisternEfference: string;
  ipsilateralPupilDilated: string;
  decompressiveHemicraniectomyPlanned: string;
  className?: string;
}

export const MalignantMcaInfarctionHemicraniectomy: React.FC<MalignantMcaInfarctionHemicraniectomyProps> = ({
  midlineShiftMm,
  basalCisternEfference,
  ipsilateralPupilDilated,
  decompressiveHemicraniectomyPlanned,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Malignant MCA Decompressive Craniectomy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neurotrauma
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Septum Pellucidum Midline Shift:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${midlineShiftMm} mm (&gt;5mm alert)`}</strong></div>
        <div className="flex justify-between"><span>Basal Cistern Effacement:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{basalCisternEfference}</strong></div>
        <div className="flex justify-between"><span>Ipsilateral Anisocoria:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ipsilateralPupilDilated}</strong></div>
        <div className="flex justify-between"><span>Surgical Hemicraniectomy Window:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{decompressiveHemicraniectomyPlanned}</strong></div>
      </div>
    </div>
  );
};
