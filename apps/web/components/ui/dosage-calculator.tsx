import React, { useState } from "react";

export interface DosageCalculatorProps {
  drugName?: string;
  defaultDosePerKg?: number;
  maxDoseMg?: number;
  className?: string;
}

export const DosageCalculator: React.FC<DosageCalculatorProps> = ({
  drugName = "Amoxicillin",
  defaultDosePerKg = 25,
  maxDoseMg = 1000,
  className = "",
}) => {
  const [weightKg, setWeightKg] = useState<number>(20);
  const [dosePerKg, setDosePerKg] = useState<number>(defaultDosePerKg);

  const calculatedDose = Math.min(weightKg * dosePerKg, maxDoseMg);
  const isCapped = weightKg * dosePerKg > maxDoseMg;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h3 className="text-base font-bold text-slate-900 dark:text-white">
        Weight-Based Dosage: {drugName}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400">Patient Weight (kg)</label>
          <input
            type="number"
            value={weightKg}
            onChange={(e) => setWeightKg(Number(e.target.value))}
            className="mt-1 w-full rounded border px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-700"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400">Dose (mg/kg/day)</label>
          <input
            type="number"
            value={dosePerKg}
            onChange={(e) => setDosePerKg(Number(e.target.value))}
            className="mt-1 w-full rounded border px-3 py-1.5 text-sm dark:bg-slate-800 dark:border-slate-700"
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-950/40">
        <div>
          <span className="text-xs text-blue-800 dark:text-blue-300 font-medium">Calculated Single/Daily Dose</span>
          <p className="text-xl font-black text-blue-950 dark:text-blue-200">{calculatedDose.toFixed(1)} mg</p>
        </div>
        {isCapped && (
          <span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
            Capped at Max ({maxDoseMg}mg)
          </span>
        )}
      </div>
    </div>
  );
};
