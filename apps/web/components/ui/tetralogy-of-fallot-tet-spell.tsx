import React from "react";

export interface TetralogyOfFallotTetSpellProps {
  oxygenSaturationNadir: number;
  kneeChestPositionEnforced: string;
  ivMorphineDoseMg: number;
  systemicVascularResistanceTarget: string;
  className?: string;
}

export const TetralogyOfFallotTetSpell: React.FC<TetralogyOfFallotTetSpellProps> = ({
  oxygenSaturationNadir,
  kneeChestPositionEnforced,
  ivMorphineDoseMg,
  systemicVascularResistanceTarget,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Tetralogy of Fallot (Tet Spell)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Pediatric Congenital
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SpO2 Cyanosis Nadir:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${oxygenSaturationNadir}%`}</strong></div>
        <div className="flex justify-between"><span>Knee-to-Chest Positioning:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{kneeChestPositionEnforced}</strong></div>
        <div className="flex justify-between"><span>Morphine Sedation Dose:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ivMorphineDoseMg} mg IV`}</strong></div>
        <div className="flex justify-between"><span>SVR Augmentation (Phenylephrine):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{systemicVascularResistanceTarget}</strong></div>
      </div>
    </div>
  );
};
