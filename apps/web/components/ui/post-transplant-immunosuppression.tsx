import React from "react";

export interface PostTransplantImmunosuppressionProps {
  organType: "Kidney" | "Liver" | "Heart" | "Lung";
  tacrolimusLevelNgMl: number;
  targetRangeNgMl: string;
  daysPostTransplant: number;
  className?: string;
}

export const PostTransplantImmunosuppression: React.FC<PostTransplantImmunosuppressionProps> = ({
  organType,
  tacrolimusLevelNgMl,
  targetRangeNgMl,
  daysPostTransplant,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Post-{organType} Allograft Protocol</h4>
        <span className="text-slate-400">POD #{daysPostTransplant}</span>
      </div>
      <div className="mt-3 space-y-1">
        <p>Tacrolimus (FK506) Trough: <strong className="font-mono text-blue-600">{tacrolimusLevelNgMl} ng/mL</strong></p>
        <p className="text-slate-500">Target Therapeutic Window: {targetRangeNgMl}</p>
      </div>
    </div>
  );
};
