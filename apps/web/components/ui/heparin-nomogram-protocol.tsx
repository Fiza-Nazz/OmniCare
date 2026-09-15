import React from "react";

export interface HeparinNomogramProtocolProps {
  currentAntiXa: number;
  currentRateUnitsPerHour: number;
  recommendedAdjustment: string;
  nextLabDrawTime: string;
  className?: string;
}

export const HeparinNomogramProtocol: React.FC<HeparinNomogramProtocolProps> = ({
  currentAntiXa,
  currentRateUnitsPerHour,
  recommendedAdjustment,
  nextLabDrawTime,
  className = "",
}) => {
  const isTherapeutic = currentAntiXa >= 0.3 && currentAntiXa <= 0.7;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isTherapeutic ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800" : "border-amber-200 bg-amber-50 dark:border-amber-800"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Heparin Nomogram (Target Anti-Xa: 0.3 - 0.7)</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isTherapeutic ? "bg-emerald-200 text-emerald-900" : "bg-amber-200 text-amber-900"}`}>
          Anti-Xa: {currentAntiXa} ({isTherapeutic ? "Therapeutic" : "Adjustment Required"})
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Current Infusion: <strong className="font-mono">{currentRateUnitsPerHour} units/hr</strong></p>
        <p>• Titration Order: <strong>{recommendedAdjustment}</strong></p>
        <p className="text-slate-500">Next Anti-Xa Draw: {nextLabDrawTime}</p>
      </div>
    </div>
  );
};
