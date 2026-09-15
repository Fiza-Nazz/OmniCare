import React, { forwardRef } from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, error, indeterminate = false, className = "", id, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const checkboxId = id || (label ? `chk-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <div className={`flex items-start gap-2.5 ${className}`}>
        <div className="flex h-5 items-center">
          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
            }}
            id={checkboxId}
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900"
            {...props}
          />
        </div>
        {(label || helperText || error) && (
          <div className="space-y-0.5">
            {label && (
              <label htmlFor={checkboxId} className="text-sm font-medium text-slate-700 dark:text-slate-300 select-none cursor-pointer">
                {label}
              </label>
            )}
            {error ? (
              <p className="text-xs text-rose-600 dark:text-rose-400">{error}</p>
            ) : helperText ? (
              <p className="text-xs text-slate-500">{helperText}</p>
            ) : null}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
