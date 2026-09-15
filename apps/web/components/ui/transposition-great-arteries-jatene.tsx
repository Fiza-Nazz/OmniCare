import React from "react";

export interface TranspositionGreatArteriesJateneProps {
  coronaryAnatomyType: string;
  leftVentricularPressureMmHg: number;
  neoAorticRegurgitationGrade: string;
  postSwitchEcgStSegments: string;
  className?: string;
}

export const TranspositionGreatArteriesJatene: React.FC<TranspositionGreatArteriesJateneProps> = ({
  coronaryAnatomyType,
  leftVentricularPressureMmHg,
  neoAorticRegurgitationGrade,
  postSwitchEcgStSegments,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">d-TGA Arterial Switch (Jatene)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Arterial Switch
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Coronary Branching Pattern:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{coronaryAnatomyType}</strong></div>
        <div className="flex justify-between"><span>LV Mass Training Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${leftVentricularPressureMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Neoaortic Valve Competence:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{neoAorticRegurgitationGrade}</strong></div>
        <div className="flex justify-between"><span>Coronary Ischemia ST Changes:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{postSwitchEcgStSegments}</strong></div>
      </div>
    </div>
  );
};
