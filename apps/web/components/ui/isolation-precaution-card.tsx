import React from "react";

export type IsolationType = "contact" | "droplet" | "airborne" | "protective";

export interface IsolationPrecautionCardProps {
  type: IsolationType;
  instructions: string[];
  ppeRequired: string[];
  className?: string;
}

const isolationTheme: Record<IsolationType, { title: string; color: string; border: string; bg: string }> = {
  contact: { title: "CONTACT PRECAUTIONS", color: "text-amber-800 dark:text-amber-300", border: "border-amber-300", bg: "bg-amber-50 dark:bg-amber-950/40" },
  droplet: { title: "DROPLET PRECAUTIONS", color: "text-sky-800 dark:text-sky-300", border: "border-sky-300", bg: "bg-sky-50 dark:bg-sky-950/40" },
  airborne: { title: "AIRBORNE PRECAUTIONS", color: "text-rose-800 dark:text-rose-300", border: "border-rose-300", bg: "bg-rose-50 dark:bg-rose-950/40" },
  protective: { title: "REVERSE ISOLATION (PROTECTIVE)", color: "text-purple-800 dark:text-purple-300", border: "border-purple-300", bg: "bg-purple-50 dark:bg-purple-950/40" },
};

export const IsolationPrecautionCard: React.FC<IsolationPrecautionCardProps> = ({
  type,
  instructions,
  ppeRequired,
  className = "",
}) => {
  const config = isolationTheme[type];

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${config.border} ${config.bg} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className={`text-sm font-black tracking-wider ${config.color}`}>{config.title}</h4>
        <span className="text-xs font-bold text-slate-500">PPE REQUIRED</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {ppeRequired.map((item, idx) => (
          <span key={idx} className="rounded bg-white px-2 py-0.5 text-xs font-bold text-slate-700 shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-200">
            🧤 {item}
          </span>
        ))}
      </div>
      <ul className="mt-3 list-disc list-inside space-y-1 text-xs text-slate-600 dark:text-slate-400">
        {instructions.map((inst, idx) => (
          <li key={idx}>{inst}</li>
        ))}
      </ul>
    </div>
  );
};
