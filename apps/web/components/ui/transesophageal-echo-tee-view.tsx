import React from "react";

export interface TransesophagealEchoTeeViewProps {
  probeDepthCm: number;
  probeOmniplaneAngle: number;
  lAAThrombusExcluded: string;
  spontaneousContrastSmoke: string;
  className?: string;
}

export const TransesophagealEchoTeeView: React.FC<TransesophagealEchoTeeViewProps> = ({
  probeDepthCm,
  probeOmniplaneAngle,
  lAAThrombusExcluded,
  spontaneousContrastSmoke,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Transesophageal Echo (TEE)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          TEE Imaging
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Probe Insertion Depth:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${probeDepthCm} cm`}</strong></div>
        <div className="flex justify-between"><span>Omniplane Angle:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${probeOmniplaneAngle}°`}</strong></div>
        <div className="flex justify-between"><span>LAA Appendage Thrombus:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{lAAThrombusExcluded}</strong></div>
        <div className="flex justify-between"><span>Spontaneous Echo Smoke:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{spontaneousContrastSmoke}</strong></div>
      </div>
    </div>
  );
};
