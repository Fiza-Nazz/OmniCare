import React from "react";

export interface DermatomyositisInflammatoryMyopathyProps {
  myositisSpecificAntibody: string;
  creatineKinaseIuL: number;
  gottronPapulesPresent: string;
  interstitialLungDiseaseHighRisk: string;
  className?: string;
}

export const DermatomyositisInflammatoryMyopathy: React.FC<DermatomyositisInflammatoryMyopathyProps> = ({
  myositisSpecificAntibody,
  creatineKinaseIuL,
  gottronPapulesPresent,
  interstitialLungDiseaseHighRisk,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Dermatomyositis & Idiopathic Myositis</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Neuromuscular & Autoimmune
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Myositis Autoantibody:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{myositisSpecificAntibody}</strong></div>
        <div className="flex justify-between"><span>Serum Creatine Kinase:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${creatineKinaseIuL} IU/L`}</strong></div>
        <div className="flex justify-between"><span>Gottron Papules / Heliotrope:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gottronPapulesPresent}</strong></div>
        <div className="flex justify-between"><span>Rapidly Progressive ILD Risk:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{interstitialLungDiseaseHighRisk}</strong></div>
      </div>
    </div>
  );
};
