import React from "react";

export interface SwitchProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}) => {
  const switchId = id || (label ? `switch-${label.toLowerCase().replace(/\s+/g, "-")}` : "switch");

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          checked ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      {label && (
        <label
          htmlFor={switchId}
          className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
};
