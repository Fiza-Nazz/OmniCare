import React from "react";

export type HuntHessGrade = 1 | 2 | 3 | 4 | 5;

export interface SubarachnoidHuntHessScoreProps {
  grade: HuntHessGrade;
  clinicalPresentation: string;
  className?: string;
}

const descriptions: Record<HuntHessGrade, string> = {
  1: "Asymptomatic or mild headache, slight nuchal rigidity (Mortality ~1-3%)",
  2: "Moderate to severe headache, nuchal rigidity, cranial nerve palsy (Mortality ~5-10%)",
  3: "Drowsiness, confusion, or mild focal deficit (Mortality ~10-15%)",
  4: "Stupor, moderate-to-severe hemiparesis, early decerebrate rigidity (Mortality ~60-70%)",
  5: "Deep coma, decerebrate posturing, moribund appearance (Mortality ~70-100%)",
};

export const SubarachnoidHuntHessScore: React.FC<SubarachnoidHuntHessScoreProps> = ({
  grade,
  clinicalPresentation,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Hunt & Hess SAH Classification</h4>
        <span className="font-mono font-bold text-blue-600 text-base">Grade {grade}/5</span>
      </div>
      <p className="mt-2 text-slate-700 dark:text-slate-300 font-semibold">{descriptions[grade]}</p>
      <p className="mt-1 text-slate-500">Exam: {clinicalPresentation}</p>
    </div>
  );
};
