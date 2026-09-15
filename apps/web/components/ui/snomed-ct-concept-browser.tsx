import React from "react";

export interface SnomedCtConceptBrowserProps {
  snomedConceptId: string;
  fullySpecifiedName: string;
  semanticTag: string;
  isAChildHierarchy: string;
  className?: string;
}

export const SnomedCtConceptBrowser: React.FC<SnomedCtConceptBrowserProps> = ({
  snomedConceptId,
  fullySpecifiedName,
  semanticTag,
  isAChildHierarchy,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">SNOMED CT Semantic Terminology</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Clinical Terminology
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>SNOMED Concept ID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{snomedConceptId}</strong></div>
        <div className="flex justify-between"><span>Fully Specified Name (FSN):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{fullySpecifiedName}</strong></div>
        <div className="flex justify-between"><span>Clinical Semantic Domain:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{semanticTag}</strong></div>
        <div className="flex justify-between"><span>Taxonomic Parent Hierarchy:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{isAChildHierarchy}</strong></div>
      </div>
    </div>
  );
};
