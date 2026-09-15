import React from "react";

export interface PainScaleSelectorProps {
  score: number;
  onSelectScore: (score: number) => void;
  className?: string;
}

const faces = [
  { score: 0, label: "No Hurt", emoji: "😊", color: "text-emerald-500" },
  { score: 2, label: "Hurts Little", emoji: "🙂", color: "text-emerald-600" },
  { score: 4, label: "Hurts More", emoji: "😐", color: "text-amber-500" },
  { score: 6, label: "Hurts Even More", emoji: "😟", color: "text-amber-600" },
  { score: 8, label: "Hurts Whole Lot", emoji: "😢", color: "text-orange-600" },
  { score: 10, label: "Hurts Worst", emoji: "😭", color: "text-rose-600" },
];

export const PainScaleSelector: React.FC<PainScaleSelectorProps> = ({
  score,
  onSelectScore,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Wong-Baker Pain Scale</h4>
        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Score: {score}/10</span>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {faces.map((f) => {
          const isSelected = score === f.score;
          return (
            <button
              key={f.score}
              type="button"
              onClick={() => onSelectScore(f.score)}
              className={`flex flex-col items-center rounded-lg border p-2 text-center transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500 dark:bg-blue-950/40"
                  : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
              }`}
            >
              <span className="text-2xl">{f.emoji}</span>
              <span className="mt-1 text-xs font-bold">{f.score}</span>
              <span className="text-[10px] text-slate-400 leading-tight hidden sm:block">{f.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
