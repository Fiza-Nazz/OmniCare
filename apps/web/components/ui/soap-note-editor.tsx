import React from "react";

export interface SoapNoteEditorProps {
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
  onChangeSubjective?: (val: string) => void;
  onChangeObjective?: (val: string) => void;
  onChangeAssessment?: (val: string) => void;
  onChangePlan?: (val: string) => void;
  className?: string;
}

export const SoapNoteEditor: React.FC<SoapNoteEditorProps> = ({
  subjective,
  objective,
  assessment,
  plan,
  onChangeSubjective,
  onChangeObjective,
  onChangeAssessment,
  onChangePlan,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Subjective (Chief Complaint & HPI)</label>
        <textarea
          rows={3}
          value={subjective}
          onChange={(e) => onChangeSubjective?.(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Objective (Physical Exam & Labs)</label>
        <textarea
          rows={3}
          value={objective}
          onChange={(e) => onChangeObjective?.(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Assessment (Diagnoses & Differential)</label>
        <textarea
          rows={3}
          value={assessment}
          onChange={(e) => onChangeAssessment?.(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Plan (Orders, Rx & Follow-Up)</label>
        <textarea
          rows={3}
          value={plan}
          onChange={(e) => onChangePlan?.(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
      </div>
    </div>
  );
};
