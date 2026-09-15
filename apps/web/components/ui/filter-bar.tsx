import React from "react";

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterBarProps {
  filters: FilterOption[];
  activeFilterId: string;
  onSelectFilter: (id: string) => void;
  searchSlot?: React.ReactNode;
  onReset?: () => void;
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  activeFilterId,
  onSelectFilter,
  searchSlot,
  onReset,
  className = "",
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 ${className}`}>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const isActive = f.id === activeFilterId;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onSelectFilter(f.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
              }`}
            >
              <span>{f.label}</span>
              {f.count !== undefined && (
                <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${isActive ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"}`}>
                  {f.count}
                </span>
              )}
            </button>
          );
        })}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="text-xs font-medium text-slate-500 hover:text-slate-700 px-2 py-1"
          >
            Reset
          </button>
        )}
      </div>
      {searchSlot && <div className="w-full sm:w-auto">{searchSlot}</div>}
    </div>
  );
};
