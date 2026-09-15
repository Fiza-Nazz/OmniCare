import React from "react";

export type CodingSystem = "ICD-10" | "CPT" | "HCPCS";

export interface BillingCodeSearchProps {
  system: CodingSystem;
  code: string;
  description: string;
  onSelect?: () => void;
  className?: string;
}

export const BillingCodeSearch: React.FC<BillingCodeSearchProps> = ({
  system,
  code,
  description,
  onSelect,
  className = "",
}) => {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2.5 text-xs shadow-sm hover:border-blue-400 cursor-pointer dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {system}: {code}
        </span>
        <span className="font-medium text-slate-800 dark:text-slate-200">{description}</span>
      </div>
      <span className="text-blue-600 dark:text-blue-400 font-bold">+</span>
    </div>
  );
};
