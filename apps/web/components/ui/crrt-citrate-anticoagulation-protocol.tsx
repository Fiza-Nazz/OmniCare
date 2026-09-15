import React from "react";

export interface CrrtCitrateAnticoagulationProtocolProps {
  systemicIonizedCalciumMmolL: number;
  postFilterIonizedCalciumMmolL: number;
  citrateInfusionRateMlh: number;
  calciumChlorideCompRateMlh: number;
  className?: string;
}

export const CrrtCitrateAnticoagulationProtocol: React.FC<CrrtCitrateAnticoagulationProtocolProps> = ({
  systemicIonizedCalciumMmolL,
  postFilterIonizedCalciumMmolL,
  citrateInfusionRateMlh,
  calciumChlorideCompRateMlh,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">CRRT Regional Citrate Anticoagulation</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          CRRT Safety
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Patient Systemic iCa (Goal 1.1-1.3):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${systemicIonizedCalciumMmolL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Post-Filter Circuit iCa (Goal 0.25-0.35):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${postFilterIonizedCalciumMmolL} mmol/L`}</strong></div>
        <div className="flex justify-between"><span>Pre-Filter ACD-A Citrate Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${citrateInfusionRateMlh} mL/hr`}</strong></div>
        <div className="flex justify-between"><span>Post-Filter Calcium Repletion:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${calciumChlorideCompRateMlh} mL/hr`}</strong></div>
      </div>
    </div>
  );
};
