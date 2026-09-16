import React from "react";

export interface EscharotomyCircumferentialBurnProps {
  anatomicalSite: string;
  intracompartmentalPressureMmHg: number;
  distalDopplerSignalAudible: string;
  bedsideEscharotomyUrgent: string;
  className?: string;
}

export const EscharotomyCircumferentialBurn: React.FC<EscharotomyCircumferentialBurnProps> = ({
  anatomicalSite,
  intracompartmentalPressureMmHg,
  distalDopplerSignalAudible,
  bedsideEscharotomyUrgent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Circumferential Burn & Escharotomy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Emergency Surgical
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Burn Location:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anatomicalSite}</strong></div>
        <div className="flex justify-between"><span>Compartment Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${intracompartmentalPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Distal Arterial Doppler:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{distalDopplerSignalAudible}</strong></div>
        <div className="flex justify-between"><span>Surgical Escharotomy Required:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bedsideEscharotomyUrgent}</strong></div>
      </div>
    </div>
  );
};
