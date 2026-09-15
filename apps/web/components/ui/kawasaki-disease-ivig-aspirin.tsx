import React from "react";

export interface KawasakiDiseaseIvigAspirinProps {
  feverDurationDays: number;
  coronaryArteryZScore: number;
  ivigDoseGramsKg: number;
  aspirinAntiplateletDoseMg: number;
  className?: string;
}

export const KawasakiDiseaseIvigAspirin: React.FC<KawasakiDiseaseIvigAspirinProps> = ({
  feverDurationDays,
  coronaryArteryZScore,
  ivigDoseGramsKg,
  aspirinAntiplateletDoseMg,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Kawasaki Disease Coronary Aneurysm</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Kawasaki Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Diagnostic High Fever Duration:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${feverDurationDays} Days`}</strong></div>
        <div className="flex justify-between"><span>Coronary Artery Dimension (Z-Score):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${coronaryArteryZScore} (&ge;2.5 aneurysm)`}</strong></div>
        <div className="flex justify-between"><span>High-Dose IVIG Infusion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${ivigDoseGramsKg} g/kg single-dose`}</strong></div>
        <div className="flex justify-between"><span>Anti-Inflammatory Aspirin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${aspirinAntiplateletDoseMg} mg/kg/day`}</strong></div>
      </div>
    </div>
  );
};
