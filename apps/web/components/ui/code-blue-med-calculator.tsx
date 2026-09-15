import React from "react";

export interface CodeBlueMedCalculatorProps {
  patientWeightKg?: number;
  className?: string;
}

export const CodeBlueMedCalculator: React.FC<CodeBlueMedCalculatorProps> = ({
  patientWeightKg = 70,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 p-4 text-white shadow-xl text-xs font-mono ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h4 className="font-bold text-sm text-rose-500">ACLS Resuscitation Drug Dosing</h4>
        <span className="text-slate-400">Wt: {patientWeightKg}kg</span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex justify-between">
          <span className="text-slate-300">Epinephrine (1:10,000)</span>
          <span className="font-bold text-amber-400">1 mg IV/IO q3-5min</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-300">Amiodarone (1st / 2nd dose)</span>
          <span className="font-bold text-blue-400">300 mg / 150 mg IV/IO</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-300">Atropine (Bradycardia)</span>
          <span className="font-bold text-emerald-400">1 mg IV q3-5min (max 3mg)</span>
        </div>
      </div>
    </div>
  );
};
