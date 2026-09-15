import React from "react";

export interface DkaInsulinPotassiumCardProps {
  anionGap: number;
  bloodGlucoseMgDl: number;
  potassiumMeqL: number;
  insulinDripUnitsPerHour: number;
  className?: string;
}

export const DkaInsulinPotassiumCard: React.FC<DkaInsulinPotassiumCardProps> = ({
  anionGap,
  bloodGlucoseMgDl,
  potassiumMeqL,
  insulinDripUnitsPerHour,
  className = "",
}) => {
  const isGapClosed = anionGap <= 12;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">DKA Resuscitation Protocol</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isGapClosed ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
          {isGapClosed ? "Anion Gap Closed ✓" : `Gap Open: ${anionGap} mEq/L`}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">BG (mg/dL)</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{bloodGlucoseMgDl}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">K+ (mEq/L)</span>
          <p className="font-bold text-slate-800 dark:text-slate-200">{potassiumMeqL}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">Insulin Drip</span>
          <p className="font-bold text-blue-600">{insulinDripUnitsPerHour} u/hr</p>
        </div>
      </div>
    </div>
  );
};
