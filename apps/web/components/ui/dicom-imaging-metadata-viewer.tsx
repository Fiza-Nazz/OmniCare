import React from "react";

export interface DicomImagingMetadataViewerProps {
  imagingModality: string;
  sopClassUid: string;
  sliceThicknessMm: number;
  contrastAgentTagged: string;
  className?: string;
}

export const DicomImagingMetadataViewer: React.FC<DicomImagingMetadataViewerProps> = ({
  imagingModality,
  sopClassUid,
  sliceThicknessMm,
  contrastAgentTagged,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">DICOM Header Metadata Viewer</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          PACS Imaging
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Imaging Modality:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{imagingModality}</strong></div>
        <div className="flex justify-between"><span>DICOM SOP Class UID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sopClassUid}</strong></div>
        <div className="flex justify-between"><span>Reconstructed Slice Width:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${sliceThicknessMm} mm`}</strong></div>
        <div className="flex justify-between"><span>IV Radiocontrast Tagged:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{contrastAgentTagged}</strong></div>
      </div>
    </div>
  );
};
