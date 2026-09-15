import React from "react";

export type AdminStatus = "due" | "given" | "refused" | "held";

export interface MedicationAdministrationRecordProps {
  scheduledTime: string;
  medication: string;
  dose: string;
  status: AdminStatus;
  administeredBy?: string;
  barcodeVerified?: boolean;
  onAdminister?: () => void;
  className?: string;
}

const statusBadge: Record<AdminStatus, string> = {
  due: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  given: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",
  refused: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200",
  held: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
};

export const MedicationAdministrationRecord: React.FC<MedicationAdministrationRecordProps> = ({
  scheduledTime,
  medication,
  dose,
  status,
  administeredBy,
  barcodeVerified,
  onAdminister,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono font-bold text-slate-500">{scheduledTime}</span>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white">{medication}</h5>
          <p className="text-slate-400">{dose} {barcodeVerified && "• Barcode Scanned ✓"}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusBadge[status]}`}>
          {status}
        </span>
        {status === "due" && onAdminister && (
          <button
            type="button"
            onClick={onAdminister}
            className="rounded bg-blue-600 px-3 py-1 text-xs font-semibold text-white hover:bg-blue-700"
          >
            Administer
          </button>
        )}
        {status === "given" && administeredBy && (
          <span className="text-slate-400">by {administeredBy}</span>
        )}
      </div>
    </div>
  );
};
