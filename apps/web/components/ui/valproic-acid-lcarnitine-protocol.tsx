import React from "react";

export interface ValproicAcidLcarnitineProtocolProps {
  serumAmmoniaUmolPerL: number;
  valproicAcidLevelUgMl: number;
  levocarnitineLoadingDoseMgKg: number;
  hepaticTransaminasesStatus: string;
  className?: string;
}

export const ValproicAcidLcarnitineProtocol: React.FC<ValproicAcidLcarnitineProtocolProps> = ({
  serumAmmoniaUmolPerL,
  valproicAcidLevelUgMl,
  levocarnitineLoadingDoseMgKg,
  hepaticTransaminasesStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Valproate Hyperammonemia (L-Carnitine)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Metabolic Toxicology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Serum Ammonia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumAmmoniaUmolPerL} µmol/L`}</strong></div>
        <div className="flex justify-between"><span>Serum Valproate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${valproicAcidLevelUgMl} µg/mL`}</strong></div>
        <div className="flex justify-between"><span>IV L-Carnitine Loading:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${levocarnitineLoadingDoseMgKg} mg/kg`}</strong></div>
        <div className="flex justify-between"><span>AST/ALT Transaminases:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{hepaticTransaminasesStatus}</strong></div>
      </div>
    </div>
  );
};
