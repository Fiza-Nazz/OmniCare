import React from "react";

export interface OcularRetinalDetachmentMaculaOnProps {
  tetheredMembraneOpticDisc: string;
  maculaStatusOnVsOff: string;
  vitreousHemorrhageDebris: string;
  emergentOphthalmologyConsult: string;
  className?: string;
}

export const OcularRetinalDetachmentMaculaOn: React.FC<OcularRetinalDetachmentMaculaOnProps> = ({
  tetheredMembraneOpticDisc,
  maculaStatusOnVsOff,
  vitreousHemorrhageDebris,
  emergentOphthalmologyConsult,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Retinal Detachment Ocular POCUS</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Ophthalmic POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Tethered Optic Disc Membrane:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{tetheredMembraneOpticDisc}</strong></div>
        <div className="flex justify-between"><span>Macula Status:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{maculaStatusOnVsOff}</strong></div>
        <div className="flex justify-between"><span>Posterior Vitreous Mobility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{vitreousHemorrhageDebris}</strong></div>
        <div className="flex justify-between"><span>Same-Day Surgical Retinopexy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{emergentOphthalmologyConsult}</strong></div>
      </div>
    </div>
  );
};
