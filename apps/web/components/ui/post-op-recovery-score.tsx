import React from "react";

export interface PostOpRecoveryScoreProps {
  activityScore: number;
  respirationScore: number;
  circulationScore: number;
  consciousnessScore: number;
  o2SaturationScore: number;
  className?: string;
}

export const PostOpRecoveryScore: React.FC<PostOpRecoveryScoreProps> = ({
  activityScore,
  respirationScore,
  circulationScore,
  consciousnessScore,
  o2SaturationScore,
  className = "",
}) => {
  const totalScore = activityScore + respirationScore + circulationScore + consciousnessScore + o2SaturationScore;
  const isDischargeReady = totalScore >= 9;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Aldrete PACU Recovery Score</h4>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-black ${isDischargeReady ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
          Score: {totalScore}/10 ({isDischargeReady ? "PACU Discharge Eligible" : "Recovery Monitoring Required"})
        </span>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2 text-center text-xs">
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Activity: {activityScore}/2</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Resp: {respirationScore}/2</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">Circ: {circulationScore}/2</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">CNS: {consciousnessScore}/2</div>
        <div className="rounded bg-slate-50 p-1.5 dark:bg-slate-800">SpO2: {o2SaturationScore}/2</div>
      </div>
    </div>
  );
};
