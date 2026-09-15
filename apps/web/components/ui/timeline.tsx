import React from "react";

export interface TimelineEvent {
  id: string;
  timestamp: string;
  title: string;
  description?: string;
  author?: string;
  badge?: string;
  icon?: React.ReactNode;
}

export interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ events, className = "" }) => {
  return (
    <div className={`relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 ${className}`}>
      {events.map((event) => (
        <div key={event.id} className="relative group">
          <div className="absolute -left-6 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-slate-900 dark:ring-slate-900">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              {event.title}
            </h4>
            <time className="text-xs font-medium text-slate-400 dark:text-slate-500">
              {event.timestamp}
            </time>
          </div>
          {event.description && (
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              {event.description}
            </p>
          )}
          <div className="mt-2 flex items-center gap-2 text-xs">
            {event.author && (
              <span className="text-slate-500">By <strong className="font-medium text-slate-700 dark:text-slate-300">{event.author}</strong></span>
            )}
            {event.badge && (
              <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {event.badge}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
