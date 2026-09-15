import React from "react";

export interface GraftVersusHostGvhdGradeProps {
  skinStageTbsa: string;
  liverBilirubinStage: string;
  gutDiarrheaStage: string;
  overallGlucksbergGrade: string;
  className?: string;
}

export const GraftVersusHostGvhdGrade: React.FC<GraftVersusHostGvhdGradeProps> = ({
  skinStageTbsa,
  liverBilirubinStage,
  gutDiarrheaStage,
  overallGlucksbergGrade,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Acute GVHD Clinical Staging</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Transplant GVHD
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Cutaneous Rash TBSA:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{skinStageTbsa}</strong></div>
        <div className="flex justify-between"><span>Hepatic Bilirubin:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{liverBilirubinStage}</strong></div>
        <div className="flex justify-between"><span>Gastrointestinal Volume:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{gutDiarrheaStage}</strong></div>
        <div className="flex justify-between"><span>Glucksberg Composite Grade:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{overallGlucksbergGrade}</strong></div>
      </div>
    </div>
  );
};
