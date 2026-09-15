import React from "react";

export interface ClostridiumDifficileBleachCleanProps {
  entericIsolationEnforced: string;
  soapAndWaterHandwashOnly: string;
  bleachDisinfectionContactMin: number;
  sporicidalAgentBrand: string;
  className?: string;
}

export const ClostridiumDifficileBleachClean: React.FC<ClostridiumDifficileBleachCleanProps> = ({
  entericIsolationEnforced,
  soapAndWaterHandwashOnly,
  bleachDisinfectionContactMin,
  sporicidalAgentBrand,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">C. difficile Sporicidal Clean</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Enteric Isolation
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Enteric Isolation Signage:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{entericIsolationEnforced}</strong></div>
        <div className="flex justify-between"><span>Soap & Water Handwashing (No Alcohol):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{soapAndWaterHandwashOnly}</strong></div>
        <div className="flex justify-between"><span>Sporicidal Contact Wet Time:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${bleachDisinfectionContactMin} min`}</strong></div>
        <div className="flex justify-between"><span>Bleach Formulation:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sporicidalAgentBrand}</strong></div>
      </div>
    </div>
  );
};
