import React from "react";

export type AlertType = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  type?: AlertType;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const alertConfig: Record<AlertType, { bg: string; border: string; text: string; iconPath: string }> = {
  info: {
    bg: "bg-sky-50 dark:bg-sky-950/50",
    border: "border-sky-200 dark:border-sky-800",
    text: "text-sky-800 dark:text-sky-200",
    iconPath: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
  },
  success: {
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-800 dark:text-emerald-200",
    iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/50",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-800 dark:text-amber-200",
    iconPath: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  },
  danger: {
    bg: "bg-rose-50 dark:bg-rose-950/50",
    border: "border-rose-200 dark:border-rose-800",
    text: "text-rose-800 dark:text-rose-200",
    iconPath: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
  },
};

export const Alert: React.FC<AlertProps> = ({
  type = "info",
  title,
  children,
  onDismiss,
  className = "",
}) => {
  const config = alertConfig[type];

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-lg border p-4 ${config.bg} ${config.border} ${config.text} ${className}`}
    >
      <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d={config.iconPath} clipRule="evenodd" />
      </svg>
      <div className="flex-1">
        {title && <h5 className="font-semibold text-sm">{title}</h5>}
        <div className="text-sm mt-0.5 opacity-90">{children}</div>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="rounded p-1 opacity-70 hover:opacity-100 focus:outline-none"
        >
          <span className="sr-only">Dismiss</span>
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
};
