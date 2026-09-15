import React from "react";

export interface GlomerulonephritisNephriticScreenProps {
  dysmorphicRbcPercent: number;
  redBloodCellCasts: string;
  complementC3Level: string;
  ancaVasculitisTiter: string;
  className?: string;
}

export const GlomerulonephritisNephriticScreen: React.FC<GlomerulonephritisNephriticScreenProps> = ({
  dysmorphicRbcPercent,
  redBloodCellCasts,
  complementC3Level,
  ancaVasculitisTiter,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Rapidly Progressive GN (RPGN) Screen</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Nephritic Workup
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Glomerular Dysmorphic RBCs:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${dysmorphicRbcPercent}% of Sediment`}</strong></div>
        <div className="flex justify-between"><span>Urinary Red Cell Casts:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{redBloodCellCasts}</strong></div>
        <div className="flex justify-between"><span>Serum Complement C3/C4:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{complementC3Level}</strong></div>
        <div className="flex justify-between"><span>ANCA / Anti-GBM Serology:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{ancaVasculitisTiter}</strong></div>
      </div>
    </div>
  );
};
