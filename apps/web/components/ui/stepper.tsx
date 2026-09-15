import React from "react";

export interface StepItem {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepClick,
  className = "",
}) => {
  return (
    <nav aria-label="Progress" className={className}>
      <ol className="flex items-center">
        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <li key={step.id} className={`relative ${idx !== steps.length - 1 ? "pr-8 sm:pr-20 flex-1" : ""}`}>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => onStepClick?.(idx)}
                  disabled={!onStepClick}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isCompleted
                      ? "bg-emerald-600 text-white"
                      : isCurrent
                      ? "border-2 border-blue-600 bg-white text-blue-600 dark:bg-slate-900"
                      : "border border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-slate-900"
                  }`}
                  aria-current={isCurrent ? "step" : undefined}
                >
                  {isCompleted ? "✓" : idx + 1}
                </button>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-xs font-semibold ${isCurrent ? "text-blue-600" : "text-slate-700 dark:text-slate-300"}`}>
                    {step.title}
                  </p>
                </div>
              </div>
              {idx !== steps.length - 1 && (
                <div
                  className={`absolute top-4 right-0 h-0.5 w-full -translate-y-1/2 ${
                    isCompleted ? "bg-emerald-600" : "bg-slate-200 dark:bg-slate-800"
                  }`}
                  style={{ left: "2.5rem", right: "1rem", width: "auto" }}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
