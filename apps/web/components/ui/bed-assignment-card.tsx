import React from "react";

export type BedStatus = "available" | "occupied" | "cleaning" | "reserved";

export interface BedAssignmentCardProps {
  roomNumber: string;
  bedId: string;
  status: BedStatus;
  patientName?: string;
  admissionDate?: string;
  className?: string;
}

const statusTheme: Record<BedStatus, { bg: string; text: string; label: string }> = {
  available: { bg: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300", label: "Available" },
  occupied: { bg: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300", label: "Occupied" },
  cleaning: { bg: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300", label: "Cleaning Required" },
  reserved: { bg: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300", label: "Reserved" },
};

export const BedAssignmentCard: React.FC<BedAssignmentCardProps> = ({
  roomNumber,
  bedId,
  status,
  patientName,
  admissionDate,
  className = "",
}) => {
  const config = statusTheme[status];

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${config.bg} ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold">Room {roomNumber} - Bed {bedId}</h4>
        <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold uppercase dark:bg-white/10">
          {config.label}
        </span>
      </div>
      {status === "occupied" && patientName && (
        <div className="mt-2 text-xs">
          <p className="font-semibold">{patientName}</p>
          {admissionDate && <span className="opacity-75">Admitted: {admissionDate}</span>}
        </div>
      )}
    </div>
  );
};
