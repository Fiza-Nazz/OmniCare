import React from "react";

export interface BloodGasCalculatorProps {
  ph: number;
  pco2MmHg: number;
  po2MmHg: number;
  hco3MeqL: number;
  className?: string;
}

export const BloodGasCalculator: React.FC<BloodGasCalculatorProps> = ({
  ph,
  pco2MmHg,
  po2MmHg,
  hco3MeqL,
  className = "",
}) => {
  let interpretation = "Normal Acid-Base Status";
  if (ph < 7.35) {
    interpretation = pco2MmHg > 45 ? "Respiratory Acidosis" : "Metabolic Acidosis";
  } else if (ph > 7.45) {
    interpretation = pco2MmHg < 35 ? "Respiratory Alkalosis" : "Metabolic Alkalosis";
  }

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Arterial Blood Gas (ABG)</h4>
        <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-200">
          {interpretation}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">pH</span>
          <p className="font-bold text-slate-900 dark:text-white">{ph}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">pCO2</span>
          <p className="font-bold text-slate-900 dark:text-white">{pco2MmHg}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">pO2</span>
          <p className="font-bold text-slate-900 dark:text-white">{po2MmHg}</p>
        </div>
        <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
          <span className="text-slate-400">HCO3</span>
          <p className="font-bold text-slate-900 dark:text-white">{hco3MeqL}</p>
        </div>
      </div>
    </div>
  );
};
