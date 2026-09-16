import React from "react";

export interface AortaAneurysmTransverseDiameterProps {
  maxTransverseDiameterCm: number;
  intraluminalThrombusPresent: string;
  freeRetroperitonealFluid: string;
  vascularSurgeryConsultStatus: string;
  className?: string;
}

export const AortaAneurysmTransverseDiameter: React.FC<AortaAneurysmTransverseDiameterProps> = ({
  maxTransverseDiameterCm,
  intraluminalThrombusPresent,
  freeRetroperitonealFluid,
  vascularSurgeryConsultStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Abdominal Aorta (AAA) POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Aortic POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Maximal Outer-to-Outer Caliber:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${maxTransverseDiameterCm} cm (&gt;3.0 AAA)`}</strong></div>
        <div className="flex justify-between"><span>Intraluminal Crescent Thrombus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intraluminalThrombusPresent}</strong></div>
        <div className="flex justify-between"><span>Retroperitoneal Hematoma Halo:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{freeRetroperitonealFluid}</strong></div>
        <div className="flex justify-between"><span>Emergent Surgical Disposition:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vascularSurgeryConsultStatus}</strong></div>
      </div>
    </div>
  );
};
