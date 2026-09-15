import React from "react";

export interface HypoglycemiaProtocolCardProps {
  currentBgMgDl: number;
  patientConscious: boolean;
  className?: string;
}

export const HypoglycemiaProtocolCard: React.FC<HypoglycemiaProtocolCardProps> = ({
  currentBgMgDl,
  patientConscious,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-rose-300 bg-rose-50 p-4 shadow-sm dark:border-rose-900 dark:bg-rose-950/40 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-rose-200 pb-2 dark:border-rose-900">
        <h4 className="font-black text-rose-900 dark:text-rose-200 text-sm">Hypoglycemia Protocol (BG: {currentBgMgDl} mg/dL)</h4>
        <span className="rounded bg-rose-600 px-2 py-0.5 font-bold text-white">Rule of 15s</span>
      </div>
      <div className="mt-2 space-y-1 text-rose-950 dark:text-rose-300">
        {patientConscious ? (
          <p>• Give 15g fast-acting carbohydrate (4oz juice / 3-4 glucose tabs). Recheck BG in 15 minutes.</p>
        ) : (
          <p>• Patient unconscious: Give 25g D50W IV Push OR 1mg Glucagon IM/SQ immediately!</p>
        )}
      </div>
    </div>
  );
};
