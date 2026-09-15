import React from "react";

export type MallampatiClass = "Class I" | "Class II" | "Class III" | "Class IV";

export interface AirwayAssessmentCardProps {
  mallampati: MallampatiClass;
  thyromentalDistanceCm: number;
  cervicalMobilityNormal: boolean;
  className?: string;
}

export const AirwayAssessmentCard: React.FC<AirwayAssessmentCardProps> = ({
  mallampati,
  thyromentalDistanceCm,
  cervicalMobilityNormal,
  className = "",
}) => {
  const isDifficultAirway = mallampati === "Class III" || mallampati === "Class IV" || thyromentalDistanceCm < 6;

  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${isDifficultAirway ? "border-amber-300 bg-amber-50 dark:border-amber-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Airway Intubation Assessment</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${isDifficultAirway ? "bg-amber-600 text-white" : "bg-emerald-100 text-emerald-800"}`}>
          {isDifficultAirway ? "Anticipated Difficult Airway" : "Normal Airway"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Mallampati: <strong>{mallampati}</strong></p>
        <p>• Thyromental Distance: <strong>{thyromentalDistanceCm} cm</strong></p>
        <p>• Neck Extension: {cervicalMobilityNormal ? "Full Range ✓" : "Restricted ✗"}</p>
      </div>
    </div>
  );
};
