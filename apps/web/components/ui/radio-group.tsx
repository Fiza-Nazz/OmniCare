import React from "react";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  label,
  error,
  className = "",
}) => {
  return (
    <fieldset className={`space-y-2 ${className}`}>
      {label && <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</legend>}
      <div className="space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
              selectedValue === opt.value
                ? "border-blue-500 bg-blue-50/50 dark:border-blue-400 dark:bg-blue-950/20"
                : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
            } ${opt.disabled ? "cursor-not-allowed opacity-50" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selectedValue === opt.value}
              disabled={opt.disabled}
              onChange={() => onChange(opt.value)}
              className="mt-0.5 h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <div className="text-xs">
              <span className="font-semibold text-slate-900 dark:text-white block">{opt.label}</span>
              {opt.description && <span className="text-slate-500 dark:text-slate-400 mt-0.5 block">{opt.description}</span>}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-xs text-rose-600 dark:text-rose-400">{error}</p>}
    </fieldset>
  );
};
