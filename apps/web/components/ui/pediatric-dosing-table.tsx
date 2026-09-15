import React from "react";

export interface PediatricBracket {
  ageGroup: string;
  weightRangeKg: string;
  normalHrBpm: string;
  normalRrBpm: string;
}

export interface PediatricDosingTableProps {
  brackets?: PediatricBracket[];
  className?: string;
}

const defaultBrackets: PediatricBracket[] = [
  { ageGroup: "Neonate (0-28d)", weightRangeKg: "2.5 - 4.5", normalHrBpm: "100 - 180", normalRrBpm: "30 - 60" },
  { ageGroup: "Infant (1-12m)", weightRangeKg: "4.5 - 10.0", normalHrBpm: "100 - 160", normalRrBpm: "25 - 45" },
  { ageGroup: "Toddler (1-3y)", weightRangeKg: "10.0 - 15.0", normalHrBpm: "80 - 130", normalRrBpm: "20 - 30" },
  { ageGroup: "Preschool (3-5y)", weightRangeKg: "15.0 - 20.0", normalHrBpm: "70 - 120", normalRrBpm: "20 - 25" },
  { ageGroup: "School Age (6-12y)", weightRangeKg: "20.0 - 40.0", normalHrBpm: "70 - 110", normalRrBpm: "14 - 22" },
];

export const PediatricDosingTable: React.FC<PediatricDosingTableProps> = ({
  brackets = defaultBrackets,
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 ${className}`}>
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 uppercase font-bold">
          <tr>
            <th className="p-3">Age Group</th>
            <th className="p-3">Weight (kg)</th>
            <th className="p-3">Normal HR (bpm)</th>
            <th className="p-3">Normal RR (/min)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {brackets.map((b, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
              <td className="p-3 font-semibold text-slate-900 dark:text-white">{b.ageGroup}</td>
              <td className="p-3 text-slate-700 dark:text-slate-300 font-mono">{b.weightRangeKg}</td>
              <td className="p-3 text-slate-700 dark:text-slate-300 font-mono">{b.normalHrBpm}</td>
              <td className="p-3 text-slate-700 dark:text-slate-300 font-mono">{b.normalRrBpm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
