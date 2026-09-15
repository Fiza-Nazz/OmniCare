import React from "react";

export interface IntraAorticBalloonPumpProps {
  frequency: "1:1" | "1:2" | "1:3";
  triggerMode: "ECG" | "Arterial Pressure" | "Internal";
  balloonVolumeMl: number;
  augmentationMmHg: number;
  className?: string;
}

export const IntraAorticBalloonPump: React.FC<IntraAorticBalloonPumpProps> = ({
  frequency,
  triggerMode,
  balloonVolumeMl,
  augmentationMmHg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-200 bg-rose-50/50 p-4 shadow-sm dark:border-rose-900 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-100 pb-2 dark:border-rose-900">
        <h4 className="font-bold text-sm text-rose-950 dark:text-rose-200">IABP Counterpulsation: {frequency}</h4>
        <span className="font-mono font-bold text-rose-700">Augmentation: +{augmentationMmHg} mmHg</span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>• Trigger Source: <strong className="text-slate-900 dark:text-white">{triggerMode}</strong></p>
        <p>• Balloon Fill Volume: <strong className="text-slate-900 dark:text-white">{balloonVolumeMl} mL Helium</strong></p>
      </div>
    </div>
  );
};
