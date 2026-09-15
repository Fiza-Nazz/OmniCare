import React from "react";

export interface PostOpEpiduralHematomaScreenerProps {
  severeBackPain: boolean;
  progressiveMotorWeakness: boolean;
  bowelBladderDysfunction: boolean;
  className?: string;
}

export const PostOpEpiduralHematomaScreener: React.FC<PostOpEpiduralHematomaScreenerProps> = ({
  severeBackPain,
  progressiveMotorWeakness,
  bowelBladderDysfunction,
  className = "",
}) => {
  const isEmergency = severeBackPain || progressiveMotorWeakness || bowelBladderDysfunction;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isEmergency ? "border-rose-500 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/40" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Epidural Hematoma Safety Screen</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isEmergency ? "bg-rose-600 text-white animate-pulse" : "bg-emerald-100 text-emerald-800"}`}>
          {isEmergency ? "STAT MRI LUMBAR SPINE" : "Neuro Exam Normal ✓"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Sharp / Worsening Back Pain: {severeBackPain ? "Present (ALERT)" : "Absent"}</p>
        <p>• Progressive Leg Motor Weakness: {progressiveMotorWeakness ? "Present (ALERT)" : "Absent"}</p>
        <p>• Sphincter / Bladder Dysfunction: {bowelBladderDysfunction ? "Present (ALERT)" : "Absent"}</p>
      </div>
    </div>
  );
};
