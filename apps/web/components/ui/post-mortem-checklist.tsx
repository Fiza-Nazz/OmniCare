import React from "react";

export interface PostMortemChecklistProps {
  timeOfDeath: string;
  pronouncingPhysician: string;
  coronerNotified: boolean;
  medicalExaminerCase: boolean;
  belongingsCataloged: boolean;
  className?: string;
}

export const PostMortemChecklist: React.FC<PostMortemChecklistProps> = ({
  timeOfDeath,
  pronouncingPhysician,
  coronerNotified,
  medicalExaminerCase,
  belongingsCataloged,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-300 bg-slate-50 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Post-Mortem Protocol</h4>
        <time className="font-mono text-slate-500">TOD: {timeOfDeath}</time>
      </div>
      <div className="mt-3 space-y-1 text-slate-700 dark:text-slate-300">
        <p>Pronouncing Physician: <strong>{pronouncingPhysician}</strong></p>
        <p>Coroner / Medical Examiner: {coronerNotified ? (medicalExaminerCase ? "Accepted ME Case ⚠️" : "Released by Coroner ✓") : "Notification Pending ✗"}</p>
        <p>Personal Belongings: {belongingsCataloged ? "Inventoried & Bagged ✓" : "Pending Inventory"}</p>
      </div>
    </div>
  );
};
