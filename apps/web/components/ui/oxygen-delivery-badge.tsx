import React from "react";

export type OxygenDevice = "room_air" | "nasal_cannula" | "simple_mask" | "high_flow" | "bipap" | "ventilator";

export interface OxygenDeliveryBadgeProps {
  device: OxygenDevice;
  flowRateLpm?: number;
  fio2Percent?: number;
  className?: string;
}

const deviceLabels: Record<OxygenDevice, string> = {
  room_air: "Room Air (21% FiO2)",
  nasal_cannula: "Nasal Cannula",
  simple_mask: "Simple Face Mask",
  high_flow: "High Flow Nasal Cannula (HFNC)",
  bipap: "BiPAP / Non-Invasive",
  ventilator: "Mechanical Ventilation",
};

export const OxygenDeliveryBadge: React.FC<OxygenDeliveryBadgeProps> = ({
  device,
  flowRateLpm,
  fio2Percent,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-200 ${className}`}>
      <span>💨 {deviceLabels[device]}</span>
      {flowRateLpm && <span>@ {flowRateLpm} L/min</span>}
      {fio2Percent && <span>({fio2Percent}% FiO2)</span>}
    </div>
  );
};
