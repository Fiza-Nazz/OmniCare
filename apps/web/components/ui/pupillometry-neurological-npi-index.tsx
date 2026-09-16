import React from "react";

export interface PupillometryNeurologicalNpiIndexProps {
  rightEyeNpiScore: number;
  leftEyeNpiScore: number;
  pupilConstrictionVelocityMmS: number;
  uncalHerniationAlert: string;
  className?: string;
}

export const PupillometryNeurologicalNpiIndex: React.FC<PupillometryNeurologicalNpiIndexProps> = ({
  rightEyeNpiScore,
  leftEyeNpiScore,
  pupilConstrictionVelocityMmS,
  uncalHerniationAlert,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Automated Infrared Pupillometry (NPi)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pupillometry
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Right Eye NPi Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${rightEyeNpiScore} (3.0-5.0 normal)`}</strong></div>
        <div className="flex justify-between"><span>Left Eye NPi Index:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${leftEyeNpiScore} (3.0-5.0 normal)`}</strong></div>
        <div className="flex justify-between"><span>Constriction Velocity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pupilConstrictionVelocityMmS} mm/s`}</strong></div>
        <div className="flex justify-between"><span>Impending Uncal Herniation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{uncalHerniationAlert}</strong></div>
      </div>
    </div>
  );
};
