import React from "react";

export interface BloodTransfusionReactionCardProps {
  reactionSymptoms: string[];
  transfusionStoppedImmediately: boolean;
  bloodBankNotified: boolean;
  unitReturnedToBloodBank: boolean;
  className?: string;
}

export const BloodTransfusionReactionCard: React.FC<BloodTransfusionReactionCardProps> = ({
  reactionSymptoms,
  transfusionStoppedImmediately,
  bloodBankNotified,
  unitReturnedToBloodBank,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border-2 border-rose-500 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm">🚨 TRANSFUSION REACTION EMERGENCY</h4>
        <span className="rounded bg-rose-600 px-2 py-0.5 font-bold text-white">STOP BLOOD</span>
      </div>
      <div className="mt-2 space-y-1 text-rose-950 dark:text-rose-300">
        <p>Symptoms: <strong>{reactionSymptoms.join(", ")}</strong></p>
        <p>• Transfusion Halted Immediately: {transfusionStoppedImmediately ? "Yes ✓" : "No ✗"}</p>
        <p>• Blood Bank & Attending Contacted: {bloodBankNotified ? "Yes ✓" : "Pending"}</p>
        <p>• Blood Bag & Tubing Sent to Lab: {unitReturnedToBloodBank ? "Sent ✓" : "At Bedside"}</p>
      </div>
    </div>
  );
};
