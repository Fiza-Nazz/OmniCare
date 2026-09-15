import React from "react";

export type BodyRegion = "head" | "chest" | "abdomen" | "arms" | "legs" | "back";

export interface BodyMapProps {
  selectedRegions?: BodyRegion[];
  onToggleRegion?: (region: BodyRegion) => void;
  className?: string;
}

const regions: { id: BodyRegion; label: string }[] = [
  { id: "head", label: "Head & Neck" },
  { id: "chest", label: "Chest & Torso" },
  { id: "abdomen", label: "Abdomen & Pelvis" },
  { id: "arms", label: "Upper Extremities" },
  { id: "legs", label: "Lower Extremities" },
  { id: "back", label: "Spine & Back" },
];

export const BodyMap: React.FC<BodyMapProps> = ({
  selectedRegions = [],
  onToggleRegion,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Anatomical Region Selector</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {regions.map((r) => {
          const isSelected = selectedRegions.includes(r.id);
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => onToggleRegion?.(r.id)}
              className={`rounded-lg border px-3 py-2 text-xs font-semibold text-center transition-all ${
                isSelected
                  ? "border-rose-500 bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300"
                  : "border-slate-200 hover:bg-slate-50 text-slate-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {r.label}
              {isSelected && <span className="ml-1 text-rose-500 font-bold">•</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
