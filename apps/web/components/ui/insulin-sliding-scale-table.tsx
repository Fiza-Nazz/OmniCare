import React from "react";

export interface SlidingScaleTier {
  glucoseRange: string;
  unitsToGive: number;
}

export interface InsulinSlidingScaleTableProps {
  scaleType: "Low" | "Moderate" | "High";
  tiers?: SlidingScaleTier[];
  className?: string;
}

const defaultTiers: SlidingScaleTier[] = [
  { glucoseRange: "150 - 199 mg/dL", unitsToGive: 2 },
  { glucoseRange: "200 - 249 mg/dL", unitsToGive: 4 },
  { glucoseRange: "250 - 299 mg/dL", unitsToGive: 6 },
  { glucoseRange: "300 - 349 mg/dL", unitsToGive: 8 },
  { glucoseRange: "≥ 350 mg/dL", unitsToGive: 10 },
];

export const InsulinSlidingScaleTable: React.FC<InsulinSlidingScaleTableProps> = ({
  scaleType,
  tiers = defaultTiers,
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 text-xs ${className}`}>
      <div className="bg-slate-50 p-2.5 font-bold dark:bg-slate-800 flex justify-between">
        <span>Sliding Scale Insulin Protocol</span>
        <span className="text-blue-600">{scaleType} Sensitivity Protocol</span>
      </div>
      <table className="w-full text-left">
        <thead className="border-y border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900 font-semibold text-slate-500">
          <tr>
            <th className="p-2.5">Blood Glucose Range</th>
            <th className="p-2.5">Regular Insulin Units</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {tiers.map((t, idx) => (
            <tr key={idx}>
              <td className="p-2.5 font-mono text-slate-700 dark:text-slate-300">{t.glucoseRange}</td>
              <td className="p-2.5 font-bold text-blue-600">{t.unitsToGive} units SQ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
