import React from "react";

export interface BiliaryAnastomoticStrictureErcpProps {
  alkalinePhosphataseU_L: number;
  commonBileDuctDiameterMm: number;
  anastomoticStricturePresent: string;
  plasticPlasticStentsDeployed: number;
  className?: string;
}

export const BiliaryAnastomoticStrictureErcp: React.FC<BiliaryAnastomoticStrictureErcpProps> = ({
  alkalinePhosphataseU_L,
  commonBileDuctDiameterMm,
  anastomoticStricturePresent,
  plasticPlasticStentsDeployed,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Biliary Stricture (Post-LT ERCP)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Biliary Complications
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Alkaline Phosphatase:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${alkalinePhosphataseU_L} U/L`}</strong></div>
        <div className="flex justify-between"><span>Proximal Duct Dilation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${commonBileDuctDiameterMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Focal Anastomotic Narrowing:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anastomoticStricturePresent}</strong></div>
        <div className="flex justify-between"><span>ERCP Stents Placed:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${plasticPlasticStentsDeployed} Plastic Stents`}</strong></div>
      </div>
    </div>
  );
};
