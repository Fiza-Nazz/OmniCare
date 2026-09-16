import React from "react";

export interface AdultStillDiseaseYamaguchiProps {
  quotidianSpikingFeverCelsius: number;
  evanescentSalmonRashObserved: string;
  wbcCountGranulocytePercent: number;
  glycosylatedFerritinPercent: number;
  className?: string;
}

export const AdultStillDiseaseYamaguchi: React.FC<AdultStillDiseaseYamaguchiProps> = ({
  quotidianSpikingFeverCelsius,
  evanescentSalmonRashObserved,
  wbcCountGranulocytePercent,
  glycosylatedFerritinPercent,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Adult-Onset Still Disease (AOSD)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Systemic Autoimmune
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Spiking Fever Spike:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${quotidianSpikingFeverCelsius} °C`}</strong></div>
        <div className="flex justify-between"><span>Salmon-Pink Rash:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{evanescentSalmonRashObserved}</strong></div>
        <div className="flex justify-between"><span>Granulocyte Fraction:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${wbcCountGranulocytePercent}%`}</strong></div>
        <div className="flex justify-between"><span>Glycosylated Ferritin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${glycosylatedFerritinPercent}% (Low <=20%)`}</strong></div>
      </div>
    </div>
  );
};
