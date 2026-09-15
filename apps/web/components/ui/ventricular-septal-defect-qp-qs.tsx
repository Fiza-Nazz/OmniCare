import React from "react";

export interface VentricularSeptalDefectQpQsProps {
  vsdDiameterMm: number;
  calculatedQpQsRatio: number;
  pulmonaryArteryPressureSystolic: number;
  anticongestiveDiureticRegimen: string;
  className?: string;
}

export const VentricularSeptalDefectQpQs: React.FC<VentricularSeptalDefectQpQsProps> = ({
  vsdDiameterMm,
  calculatedQpQsRatio,
  pulmonaryArteryPressureSystolic,
  anticongestiveDiureticRegimen,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Perimembranous VSD Shunt (Qp:Qs)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Left-to-Right Shunt
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Defect Anatomic Size:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${vsdDiameterMm} mm`}</strong></div>
        <div className="flex justify-between"><span>Shunt Flow Ratio (Qp:Qs):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calculatedQpQsRatio}:1 (&gt;1.5 significant)`}</strong></div>
        <div className="flex justify-between"><span>PA Systolic Pressure:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${pulmonaryArteryPressureSystolic} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Diuretic / Enalapril Therapy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{anticongestiveDiureticRegimen}</strong></div>
      </div>
    </div>
  );
};
