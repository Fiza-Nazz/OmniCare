import React, { forwardRef } from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharCount?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, showCharCount = false, maxLength, value, className = "", id, ...props }, ref) => {
    const textareaId = id || (label ? `txt-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
    const currentLength = typeof value === "string" ? value.length : 0;

    return (
      <div className="w-full space-y-1">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          rows={4}
          className={`w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error
              ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
              : "border-slate-300 focus:border-blue-500 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          } ${className}`}
          {...props}
        />
        <div className="flex items-center justify-between text-xs">
          {error ? (
            <p className="text-rose-600 dark:text-rose-400">{error}</p>
          ) : helperText ? (
            <p className="text-slate-500">{helperText}</p>
          ) : (
            <span />
          )}
          {showCharCount && maxLength && (
            <span className="text-slate-400">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
