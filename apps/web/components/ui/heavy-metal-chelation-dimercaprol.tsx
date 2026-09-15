import React from "react";

export interface HeavyMetalChelationDimercaprolProps {
  toxicMetalIdentified: string;
  bloodLeadOrArsenicLevel: string;
  dimercaprolBalDosing: string;
  dmsaSuccimerOral: string;
  className?: string;
}

export const HeavyMetalChelationDimercaprol: React.FC<HeavyMetalChelationDimercaprolProps> = ({
  toxicMetalIdentified,
  bloodLeadOrArsenicLevel,
  dimercaprolBalDosing,
  dmsaSuccimerOral,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Heavy Metal Chelation Therapy</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Metal Chelation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Heavy Metal Tox Ingestion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{toxicMetalIdentified}</strong></div>
        <div className="flex justify-between"><span>Confirmed Whole Blood Assay:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bloodLeadOrArsenicLevel}</strong></div>
        <div className="flex justify-between"><span>Dimercaprol (BAL IM):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dimercaprolBalDosing}</strong></div>
        <div className="flex justify-between"><span>Succimer (DMSA Oral):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dmsaSuccimerOral}</strong></div>
      </div>
    </div>
  );
};
