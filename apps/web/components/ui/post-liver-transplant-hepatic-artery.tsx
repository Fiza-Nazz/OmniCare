import React from "react";

export interface PostLiverTransplantHepaticArteryProps {
  hepaticArteryPeakVelocityCmS: number;
  resistiveIndexDoppler: number;
  accelerationTimeSeconds: number;
  urgentReexplorationStatus: string;
  className?: string;
}

export const PostLiverTransplantHepaticArtery: React.FC<PostLiverTransplantHepaticArteryProps> = ({
  hepaticArteryPeakVelocityCmS,
  resistiveIndexDoppler,
  accelerationTimeSeconds,
  urgentReexplorationStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hepatic Artery Doppler Surveillance</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Liver Vascular
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Systolic Peak Velocity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${hepaticArteryPeakVelocityCmS} cm/s`}</strong></div>
        <div className="flex justify-between"><span>Doppler Resistive Index (RI):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${resistiveIndexDoppler} (0.60-0.70 normal)`}</strong></div>
        <div className="flex justify-between"><span>Systolic Acceleration Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${accelerationTimeSeconds}s (&lt;0.08s)`}</strong></div>
        <div className="flex justify-between"><span>Surgical HAT Thrombectomy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{urgentReexplorationStatus}</strong></div>
      </div>
    </div>
  );
};
