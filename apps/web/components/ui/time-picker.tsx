import React, { forwardRef } from "react";

export interface TimePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, error, helperText, className = "", id, ...props }, ref) => {
    const inputId = id || (label ? `tp-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    return (
      <div className="w-full space-y-1">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type="time"
          className={`w-full rounded-md border px-3 py-2 text-sm bg-white dark:bg-slate-900 transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error
              ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
              : "border-slate-300 focus:border-blue-500 focus:ring-blue-100 dark:border-slate-700"
          } ${className}`}
          {...props}
        />
        {error ? (
          <p className="text-xs text-rose-600 dark:text-rose-400">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-slate-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
TimePicker.displayName = "TimePicker";
