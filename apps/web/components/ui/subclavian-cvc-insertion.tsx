import React from "react";

export interface SubclavianCvcInsertionProps {
  veinTarget: "Right Internal Jugular" | "Right Subclavian" | "Left Internal Jugular" | "Femoral";
  ultrasoundGuided: boolean;
  bloodReturnConfirmed: boolean;
  postProcCxrOrdered: boolean;
  operatorName: string;
  className?: string;
}

export const SubclavianCvcInsertion: React.FC<SubclavianCvcInsertionProps> = ({
  veinTarget,
  ultrasoundGuided,
  bloodReturnConfirmed,
  postProcCxrOrdered,
  operatorName,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Central Line Insertion: {veinTarget}</h4>
        <span className="text-slate-400">MD: {operatorName}</span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Dynamic Real-Time Ultrasound: {ultrasoundGuided ? "Used ✓" : "Landmark Only"}</p>
        <p>• Venous Flash & Manometry: {bloodReturnConfirmed ? "Dark Non-Pulsatile Blood ✓" : "Pending"}</p>
        <p>• Post-Procedure CXR: {postProcCxrOrdered ? "Ordered (Rule out Pneumothorax) ✓" : "Not Ordered"}</p>
      </div>
    </div>
  );
};
