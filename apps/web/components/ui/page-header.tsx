import React from "react";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  actions,
  className = "",
}) => {
  return (
    <div className={`border-b border-slate-200 pb-5 pt-2 dark:border-slate-800 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-2 flex text-xs text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1">
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="inline-flex items-center">
                {idx > 0 && <span className="mx-1 text-slate-400">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-slate-700 dark:hover:text-slate-200">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
};
