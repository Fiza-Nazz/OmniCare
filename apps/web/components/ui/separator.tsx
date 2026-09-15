import React from "react";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  label,
  className = "",
  ...props
}) => {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`inline-block h-full w-[1px] bg-slate-200 dark:bg-slate-800 ${className}`}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={`relative my-4 flex items-center ${className}`}
        {...props}
      >
        <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
        <span className="mx-3 flex-shrink text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
          {label}
        </span>
        <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`h-[1px] w-full bg-slate-200 dark:bg-slate-800 my-4 ${className}`}
      {...props}
    />
  );
};
