import React from "react";

export interface NavbarProps {
  title?: string;
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  userMenu?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title = "OmniCare",
  logo,
  actions,
  userMenu,
  className = "",
}) => {
  return (
    <header className={`sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center gap-3">
        {logo}
        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {actions}
        {userMenu}
      </div>
    </header>
  );
};
