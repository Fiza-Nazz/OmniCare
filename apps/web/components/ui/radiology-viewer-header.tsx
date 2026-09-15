import React from "react";

export interface RadiologyViewerHeaderProps {
  modality: "CT" | "MRI" | "XR" | "US" | "NM";
  studyDescription: string;
  accessionNumber: string;
  sliceCount?: number;
  studyDate: string;
  className?: string;
}

export const RadiologyViewerHeader: React.FC<RadiologyViewerHeaderProps> = ({
  modality,
  studyDescription,
  accessionNumber,
  sliceCount,
  studyDate,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap items-center justify-between rounded-t-xl bg-slate-900 px-4 py-2.5 text-white ${className}`}>
      <div className="flex items-center gap-3">
        <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-black uppercase tracking-wider">
          {modality}
        </span>
        <h4 className="text-sm font-semibold">{studyDescription}</h4>
      </div>
      <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
        <span>Acc: {accessionNumber}</span>
        {sliceCount && <span>{sliceCount} Slices</span>}
        <span>{studyDate}</span>
      </div>
    </div>
  );
};
