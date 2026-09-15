import React from "react";

export interface TranscatheterAorticValveTavrProps {
  valveProsthesis: string;
  meanGradientMmHg: number;
  aorticValveAreaCm2: number;
  paravalvularLeakGrade: string;
  className?: string;
}

export const TranscatheterAorticValveTavr: React.FC<TranscatheterAorticValveTavrProps> = ({
  valveProsthesis,
  meanGradientMmHg,
  aorticValveAreaCm2,
  paravalvularLeakGrade,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">TAVR Valve Hemodynamics</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Structural Heart
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Prosthetic Valve Model:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{valveProsthesis}</strong></div>
        <div className="flex justify-between"><span>Mean Transvalvular Gradient:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${meanGradientMmHg} mmHg`}</strong></div>
        <div className="flex justify-between"><span>Effective Orifice Area:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${aorticValveAreaCm2} cm²`}</strong></div>
        <div className="flex justify-between"><span>Paravalvular Leak:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{paravalvularLeakGrade}</strong></div>
      </div>
    </div>
  );
};
