import React from "react";

export interface ParklandBurnResuscitationFormulaProps {
  patientWeightKg: number;
  tbsaBurnPercent: number;
  totalFirst24HoursFluidMl: number;
  first8HoursHourlyRateMlHr: number;
  className?: string;
}

export const ParklandBurnResuscitationFormula: React.FC<ParklandBurnResuscitationFormulaProps> = ({
  patientWeightKg,
  tbsaBurnPercent,
  totalFirst24HoursFluidMl,
  first8HoursHourlyRateMlHr,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Parkland Resuscitation (4mL/kg/%TBSA)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Burn Shock Resuscitation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Dry Weight:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${patientWeightKg} kg`}</strong></div>
        <div className="flex justify-between"><span>Burn TBSA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${tbsaBurnPercent}%`}</strong></div>
        <div className="flex justify-between"><span>Total 24h Crystalloid:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${totalFirst24HoursFluidMl} mL`}</strong></div>
        <div className="flex justify-between"><span>First 8-Hour Infusion Rate:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${first8HoursHourlyRateMlHr} mL/hr`}</strong></div>
      </div>
    </div>
  );
};
