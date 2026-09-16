import React from "react";

export interface BluntTraumaPelvicPouchDouglasProps {
  pelvicDependentFreeFluid: string;
  bladderContourIntact: string;
  anechoicDepthMillimeters: number;
  pelvicRingFractureCoincident: string;
  className?: string;
}

export const BluntTraumaPelvicPouchDouglas: React.FC<BluntTraumaPelvicPouchDouglasProps> = ({
  pelvicDependentFreeFluid,
  bladderContourIntact,
  anechoicDepthMillimeters,
  pelvicRingFractureCoincident,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">FAST Pelvic Window (Pouch of Douglas)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pelvic POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Pouch of Douglas Fluid Collection:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pelvicDependentFreeFluid}</strong></div>
        <div className="flex justify-between"><span>Bladder Wall Intactness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{bladderContourIntact}</strong></div>
        <div className="flex justify-between"><span>Maximal Fluid Pocket Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${anechoicDepthMillimeters} mm`}</strong></div>
        <div className="flex justify-between"><span>Unstable Pelvic Ring Fracture:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pelvicRingFractureCoincident}</strong></div>
      </div>
    </div>
  );
};
