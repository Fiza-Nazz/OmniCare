import React from "react";

export interface DeepVeinThrombosisCompressionUsProps {
  cfvCompressionComplete: string;
  poplitealVeinCompressionComplete: string;
  intraluminalEchogenicClot: string;
  therapeuticAnticoagulationDue: string;
  className?: string;
}

export const DeepVeinThrombosisCompressionUs: React.FC<DeepVeinThrombosisCompressionUsProps> = ({
  cfvCompressionComplete,
  poplitealVeinCompressionComplete,
  intraluminalEchogenicClot,
  therapeuticAnticoagulationDue,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Point-of-Care DVT Compression</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Vascular POCUS
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Common Femoral Wall Coaptation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{cfvCompressionComplete}</strong></div>
        <div className="flex justify-between"><span>Popliteal Vein Wall Coaptation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{poplitealVeinCompressionComplete}</strong></div>
        <div className="flex justify-between"><span>Intraluminal Thrombus Visualization:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{intraluminalEchogenicClot}</strong></div>
        <div className="flex justify-between"><span>Stat Therapeutic Anticoagulant:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{therapeuticAnticoagulationDue}</strong></div>
      </div>
    </div>
  );
};
