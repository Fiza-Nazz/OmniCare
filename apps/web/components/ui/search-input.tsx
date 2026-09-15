import React, { forwardRef } from "react";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  shortcut?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, onClear, shortcut = "Ctrl+K", className = "", ...props }, ref) => {
    return (
      <div className={`relative flex items-center w-full max-w-md ${className}`}>
        <div className="pointer-events-none absolute left-3 flex items-center text-slate-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search patients, MRN, encounters..."
          className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-16 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          {...props}
        />
        {value ? (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Clear search"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        ) : shortcut ? (
          <div className="pointer-events-none absolute right-3 hidden items-center sm:flex">
            <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
              {shortcut}
            </kbd>
          </div>
        ) : null}
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";
