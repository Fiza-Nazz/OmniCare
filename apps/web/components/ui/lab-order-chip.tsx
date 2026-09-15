import React from "react";

export type OrderPriority = "STAT" | "Urgent" | "Routine";

export interface LabOrderChipProps {
  orderName: string;
  priority?: OrderPriority;
  orderNumber?: string;
  onRemove?: () => void;
  className?: string;
}

const priorityTheme: Record<OrderPriority, string> = {
  STAT: "bg-rose-100 text-rose-800 border-rose-300 font-black dark:bg-rose-950 dark:text-rose-200",
  Urgent: "bg-amber-100 text-amber-800 border-amber-300 font-bold dark:bg-amber-950 dark:text-amber-200",
  Routine: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300",
};

export const LabOrderChip: React.FC<LabOrderChipProps> = ({
  orderName,
  priority = "Routine",
  orderNumber,
  onRemove,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs ${priorityTheme[priority]} ${className}`}>
      <span className="font-semibold">{orderName}</span>
      {orderNumber && <span className="font-mono text-[10px] opacity-75">#{orderNumber}</span>}
      <span className="rounded bg-black/10 px-1 py-0.2 text-[10px] uppercase font-bold dark:bg-white/10">
        {priority}
      </span>
      {onRemove && (
        <button type="button" onClick={onRemove} className="ml-1 opacity-60 hover:opacity-100">
          ✕
        </button>
      )}
    </div>
  );
};
