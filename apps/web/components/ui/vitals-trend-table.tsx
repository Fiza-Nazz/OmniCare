import React from "react";

export interface VitalRecord {
  timestamp: string;
  bp: string;
  hr: number;
  temp: number;
  spo2: number;
  recordedBy: string;
}

export interface VitalsTrendTableProps {
  records: VitalRecord[];
  className?: string;
}

export const VitalsTrendTable: React.FC<VitalsTrendTableProps> = ({ records, className = "" }) => {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 ${className}`}>
      <table className="w-full text-left text-xs">
        <thead className="bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 uppercase font-semibold">
          <tr>
            <th className="p-3">Time</th>
            <th className="p-3">BP (mmHg)</th>
            <th className="p-3">HR (bpm)</th>
            <th className="p-3">Temp (F)</th>
            <th className="p-3">SpO2 (%)</th>
            <th className="p-3">Nurse</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {records.map((r, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
              <td className="p-3 font-mono text-slate-500">{r.timestamp}</td>
              <td className="p-3 font-semibold text-slate-900 dark:text-white">{r.bp}</td>
              <td className="p-3 font-semibold text-slate-900 dark:text-white">{r.hr}</td>
              <td className="p-3 font-semibold text-slate-900 dark:text-white">{r.temp}</td>
              <td className="p-3 font-semibold text-slate-900 dark:text-white">{r.spo2}%</td>
              <td className="p-3 text-slate-500">{r.recordedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
