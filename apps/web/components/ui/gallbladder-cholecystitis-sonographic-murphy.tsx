import React from "react";

export interface GallbladderCholecystitisSonographicMurphyProps {
  cholelithiasisPresent: string;
  gallbladderWallThicknessMm: number;
  sonographicMurphySignPositive: string;
  pericholecysticFluidStripe: string;
  className?: string;
}

export const GallbladderCholecystitisSonographicMurphy: React.FC<GallbladderCholecystitisSonographicMurphyProps> = ({
  cholelithiasisPresent,
  gallbladderWallThicknessMm,
  sonographicMurphySignPositive,
  pericholecysticFluidStripe,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute Cholecystitis POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Biliary POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Gallstones with Acoustic Shadow:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cholelithiasisPresent}</strong></div>
        <div className="flex justify-between"><span>Anterior Wall Thickness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${gallbladderWallThicknessMm} mm (&gt;3mm abnormal)`}</strong></div>
        <div className="flex justify-between"><span>Sonographic Murphy Probe Tenderness:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sonographicMurphySignPositive}</strong></div>
        <div className="flex justify-between"><span>Pericholecystic Fluid Halo:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{pericholecysticFluidStripe}</strong></div>
      </div>
    </div>
  );
};
