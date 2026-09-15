import React from "react";

export interface NeonatalPhototherapyCardProps {
  hoursOfLife: number;
  serumBilirubinMgDl: number;
  phototherapyThresholdMgDl: number;
  exchangeTransfusionThresholdMgDl: number;
  className?: string;
}

export const NeonatalPhototherapyCard: React.FC<NeonatalPhototherapyCardProps> = ({
  hoursOfLife,
  serumBilirubinMgDl,
  phototherapyThresholdMgDl,
  exchangeTransfusionThresholdMgDl,
  className = "",
}) => {
  const needsBiliLights = serumBilirubinMgDl >= phototherapyThresholdMgDl;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${needsBiliLights ? "border-amber-300 bg-amber-50 dark:border-amber-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">AAP Neonatal Bilirubin ({hoursOfLife}h of Life)</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${needsBiliLights ? "bg-amber-600 text-white" : "bg-emerald-100 text-emerald-800"}`}>
          {needsBiliLights ? "Phototherapy Indicated" : "Below Threshold"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Total Serum Bilirubin (TSB): <strong className="font-mono">{serumBilirubinMgDl} mg/dL</strong></p>
        <p>• Phototherapy Threshold: {phototherapyThresholdMgDl} mg/dL</p>
        <p>• Exchange Transfusion Threshold: {exchangeTransfusionThresholdMgDl} mg/dL</p>
      </div>
    </div>
  );
};
