import React from "react";

export interface ThoracentesisDrainCardProps {
  hemithorax: "Left" | "Right";
  volumeRemovedMl: number;
  lightsCriteriaType: "Exudate" | "Transudate";
  postProcedureCxrCompleted: boolean;
  className?: string;
}

export const ThoracentesisDrainCard: React.FC<ThoracentesisDrainCardProps> = ({
  hemithorax,
  volumeRemovedMl,
  lightsCriteriaType,
  postProcedureCxrCompleted,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">{hemithorax} Thoracentesis</h4>
        <span className="rounded bg-blue-100 px-2 py-0.5 font-bold text-blue-800">{lightsCriteriaType}</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-slate-600 dark:text-slate-400">
        <span>Volume Removed: <strong className="font-mono">{volumeRemovedMl} mL</strong></span>
        <span>Post-CXR: {postProcedureCxrCompleted ? "Clean ✓" : "Pending"}</span>
      </div>
    </div>
  );
};
