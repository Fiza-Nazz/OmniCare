import React from "react";

export interface SubxiphoidPericardialEffusionEchoProps {
  pericardialFluidThicknessMm: number;
  rvDiastolicInversionCollapse: string;
  hepaticVeinPlethoraPresent: string;
  emergentPericardiocentesisDue: string;
  className?: string;
}

export const SubxiphoidPericardialEffusionEcho: React.FC<SubxiphoidPericardialEffusionEchoProps> = ({
  pericardialFluidThicknessMm,
  rvDiastolicInversionCollapse,
  hepaticVeinPlethoraPresent,
  emergentPericardiocentesisDue,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Subxiphoid Pericardial Tamponade</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Cardiac POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Circumferential Fluid Stripe:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pericardialFluidThicknessMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Right Ventricular Free Wall Diastolic Collapse:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{rvDiastolicInversionCollapse}</strong></div>
        <div className="flex justify-between"><span>Inferior Vena Cava / Hepatic Plethora:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hepaticVeinPlethoraPresent}</strong></div>
        <div className="flex justify-between"><span>Emergency Needle Aspiration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergentPericardiocentesisDue}</strong></div>
      </div>
    </div>
  );
};
