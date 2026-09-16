import React from "react";

export interface AspectsCtEarlyIschemiaScoreProps {
  totalAspectsScore: number;
  lentiformNucleusInvolved: string;
  internalCapsuleInvolved: string;
  evcCoreVolumeMl: number;
  className?: string;
}

export const AspectsCtEarlyIschemiaScore: React.FC<AspectsCtEarlyIschemiaScoreProps> = ({
  totalAspectsScore,
  lentiformNucleusInvolved,
  internalCapsuleInvolved,
  evcCoreVolumeMl,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">ASPECTS Non-Contrast CT Score</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuroradiology CT
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Composite ASPECTS Score:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalAspectsScore} / 10 (&ge;6 EVT eligible)`}</strong></div>
        <div className="flex justify-between"><span>Basal Ganglia Lentiform Loss:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lentiformNucleusInvolved}</strong></div>
        <div className="flex justify-between"><span>Posterior Limb Internal Capsule:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{internalCapsuleInvolved}</strong></div>
        <div className="flex justify-between"><span>Estimated Ischemic Core:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${evcCoreVolumeMl} mL`}</strong></div>
      </div>
    </div>
  );
};
