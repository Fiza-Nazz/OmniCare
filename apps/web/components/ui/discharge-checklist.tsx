import React from "react";

export interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface DischargeChecklistProps {
  items: ChecklistItem[];
  onToggleItem?: (id: string) => void;
  className?: string;
}

export const DischargeChecklist: React.FC<DischargeChecklistProps> = ({
  items,
  onToggleItem,
  className = "",
}) => {
  const completedCount = items.filter((i) => i.completed).length;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Discharge Readiness</h4>
        <span className="text-xs font-bold text-slate-500">{completedCount}/{items.length} Complete</span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item.id} className="flex items-center gap-3 cursor-pointer text-xs">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggleItem?.(item.id)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span className={item.completed ? "line-through text-slate-400" : "text-slate-800 dark:text-slate-200 font-medium"}>
              {item.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
