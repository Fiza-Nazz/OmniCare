import React, { useEffect } from "react";

export type ToastType = "info" | "success" | "warning" | "error";

export interface ToastProps {
  id: string;
  type?: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onDismiss: (id: string) => void;
}

const typeStyles: Record<ToastType, { bg: string; border: string; icon: string }> = {
  info: { bg: "bg-sky-50 text-sky-800", border: "border-sky-200", icon: "text-sky-500" },
  success: { bg: "bg-emerald-50 text-emerald-800", border: "border-emerald-200", icon: "text-emerald-500" },
  warning: { bg: "bg-amber-50 text-amber-800", border: "border-amber-200", icon: "text-amber-500" },
  error: { bg: "bg-rose-50 text-rose-800", border: "border-rose-200", icon: "text-rose-500" },
};

export const Toast: React.FC<ToastProps> = ({
  id,
  type = "info",
  title,
  message,
  duration = 5000,
  onDismiss,
}) => {
  useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => onDismiss(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onDismiss]);

  const style = typeStyles[type];

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg transition-all ${style.bg} ${style.border}`}
    >
      <div className="flex-1">
        <h4 className="text-sm font-semibold">{title}</h4>
        {message && <p className="mt-1 text-xs opacity-90">{message}</p>}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        className="text-slate-400 hover:text-slate-600 focus:outline-none"
      >
        <span className="sr-only">Dismiss</span>
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};
