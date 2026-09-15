import React from "react";

export interface ImmunizationRecordRowProps {
  vaccineName: string;
  cvxCode: string;
  doseNumber: number;
  administeredDate: string;
  lotNumber?: string;
  administeredBy?: string;
  className?: string;
}

export const ImmunizationRecordRow: React.FC<ImmunizationRecordRowProps> = ({
  vaccineName,
  cvxCode,
  doseNumber,
  administeredDate,
  lotNumber,
  administeredBy,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between py-3 px-4 border-b border-slate-100 dark:border-slate-800 ${className}`}>
      <div>
        <h5 className="text-sm font-bold text-slate-900 dark:text-white">{vaccineName}</h5>
        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
          <span>CVX: {cvxCode}</span>
          <span>•</span>
          <span>Dose #{doseNumber}</span>
          {lotNumber && (
            <>
              <span>•</span>
              <span>Lot: {lotNumber}</span>
            </>
          )}
        </div>
      </div>
      <div className="text-right text-xs">
        <time className="font-semibold text-slate-800 dark:text-slate-200">{administeredDate}</time>
        {administeredBy && <p className="text-slate-400">By {administeredBy}</p>}
      </div>
    </div>
  );
};
