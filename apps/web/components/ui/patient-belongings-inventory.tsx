import React from "react";

export interface BelongingItem {
  id: string;
  name: string;
  withPatient: boolean;
  sentHome: boolean;
  inHospitalSafe: boolean;
}

export interface PatientBelongingsInventoryProps {
  items: BelongingItem[];
  className?: string;
}

export const PatientBelongingsInventory: React.FC<PatientBelongingsInventoryProps> = ({
  items,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-3">Patient Valuables & Belongings</h4>
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.id} className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-800">
            <span className="font-semibold text-slate-800 dark:text-slate-200">{i.name}</span>
            <span className="text-slate-500 font-mono text-[11px]">
              {i.inHospitalSafe ? "🔒 Hospital Safe" : i.sentHome ? "🏠 Sent Home" : "🛏️ At Bedside"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
