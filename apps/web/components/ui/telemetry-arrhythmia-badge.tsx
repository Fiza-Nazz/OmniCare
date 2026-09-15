import React from "react";

export type CardiacRhythm = "NSR" | "AFib" | "SVT" | "VTach" | "VFib" | "Asystole" | "HeartBlock";

export interface TelemetryArrhythmiaBadgeProps {
  rhythm: CardiacRhythm;
  className?: string;
}

const rhythmTheme: Record<CardiacRhythm, { label: string; color: string }> = {
  NSR: { label: "Normal Sinus Rhythm", color: "bg-emerald-100 text-emerald-800" },
  AFib: { label: "Atrial Fibrillation with RVR", color: "bg-amber-100 text-amber-800" },
  SVT: { label: "Supraventricular Tachycardia", color: "bg-orange-100 text-orange-800" },
  VTach: { label: "VENTRICULAR TACHYCARDIA (STAT)", color: "bg-rose-600 text-white" },
  VFib: { label: "VENTRICULAR FIBRILLATION (CODE)", color: "bg-rose-700 text-white animate-pulse" },
  Asystole: { label: "ASYSTOLE (START CPR)", color: "bg-purple-800 text-white" },
  HeartBlock: { label: "3rd Degree Complete Heart Block", color: "bg-red-500 text-white" },
};

export const TelemetryArrhythmiaBadge: React.FC<TelemetryArrhythmiaBadgeProps> = ({ rhythm, className = "" }) => {
  const config = rhythmTheme[rhythm];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-black uppercase tracking-wider ${config.color} ${className}`}>
      <span>⚡</span>
      <span>{config.label}</span>
    </span>
  );
};
