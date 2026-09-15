import React from "react";

export interface SepsisBundleHourOneProps {
  serumLactateDrawn: boolean;
  bloodCulturesPriorToAntibiotics: boolean;
  broadSpectrumAntibioticsAdministered: boolean;
  crystalloidBolusGiven: boolean;
  vasopressorInitiatedIfHypotensive: boolean;
  className?: string;
}

export const SepsisBundleHourOne: React.FC<SepsisBundleHourOneProps> = ({
  serumLactateDrawn,
  bloodCulturesPriorToAntibiotics,
  broadSpectrumAntibioticsAdministered,
  crystalloidBolusGiven,
  vasopressorInitiatedIfHypotensive,
  className = "",
}) => {
  const completedSteps =
    [serumLactateDrawn, bloodCulturesPriorToAntibiotics, broadSpectrumAntibioticsAdministered, crystalloidBolusGiven, vasopressorInitiatedIfHypotensive].filter(Boolean).length;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Surviving Sepsis 1-Hour Bundle</h4>
        <span className="rounded bg-blue-100 px-2 py-0.5 font-bold text-blue-800">{completedSteps}/5 Done</span>
      </div>
      <div className="mt-2 space-y-1 text-slate-600 dark:text-slate-400">
        <p>1. Serum Lactate: {serumLactateDrawn ? "Drawn ✓" : "Pending ✗"}</p>
        <p>2. Blood Cultures x2: {bloodCulturesPriorToAntibiotics ? "Drawn Before Abx ✓" : "Pending ✗"}</p>
        <p>3. Broad-Spectrum Antibiotics: {broadSpectrumAntibioticsAdministered ? "Infusing ✓" : "Pending ✗"}</p>
        <p>4. 30 mL/kg Crystalloid Bolus: {crystalloidBolusGiven ? "Completed ✓" : "In Progress"}</p>
        <p>5. Vasopressors for MAP < 65: {vasopressorInitiatedIfHypotensive ? "Titrated ✓" : "N/A"}</p>
      </div>
    </div>
  );
};
