import React from "react";

export interface BradenScaleCalculatorProps {
  sensory: number;
  moisture: number;
  activity: number;
  mobility: number;
  nutrition: number;
  frictionShear: number;
  className?: string;
}

export const BradenScaleCalculator: React.FC<BradenScaleCalculatorProps> = ({
  sensory,
  moisture,
  activity,
  mobility,
  nutrition,
  frictionShear,
  className = "",
}) => {
  const total = sensory + moisture + activity + mobility + nutrition + frictionShear;
  const risk = total <= 9 ? "Severe Risk" : total <= 12 ? "High Risk" : total <= 14 ? "Moderate Risk" : total <= 18 ? "Mild Risk" : "No Risk";

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Braden Scale Pressure Ulcer Risk</h4>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${total <= 14 ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200" : "bg-emerald-100 text-emerald-800"}`}>
          Score: {total}/23 ({risk})
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Sensory: {sensory}/4</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Moisture: {moisture}/4</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Activity: {activity}/4</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Mobility: {mobility}/4</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Nutrition: {nutrition}/4</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Friction: {frictionShear}/3</div>
      </div>
    </div>
  );
};
