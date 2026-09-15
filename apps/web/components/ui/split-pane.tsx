import React from "react";

export interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftRatio?: string;
  className?: string;
}

export const SplitPane: React.FC<SplitPaneProps> = ({
  left,
  right,
  leftRatio = "w-1/2",
  className = "",
}) => {
  return (
    <div className={`flex flex-col lg:flex-row h-full divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 ${className}`}>
      <div className={`${leftRatio} overflow-auto p-4`}>
        {left}
      </div>
      <div className="flex-1 overflow-auto p-4">
        {right}
      </div>
    </div>
  );
};
