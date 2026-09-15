import React from "react";

export interface PciAccessSiteMonitorProps {
  siteLocation: "Right Radial" | "Right Femoral" | "Left Radial" | "Left Femoral";
  distalPulsePresent: boolean;
  hematomaDetected: boolean;
  trBandPressureMmL?: number;
  className?: string;
}

export const PciAccessSiteMonitor: React.FC<PciAccessSiteMonitorProps> = ({
  siteLocation,
  distalPulsePresent,
  hematomaDetected,
  trBandPressureMmL,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border p-4 shadow-sm text-xs ${hematomaDetected ? "border-rose-400 bg-rose-50 dark:border-rose-800" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"} ${className}`}>
      <div className="flex items-center justify-between border-b border-black/10 pb-2 dark:border-white/10">
        <h4 className="font-bold text-sm">Post-PCI Puncture Site: {siteLocation}</h4>
        <span className={`rounded px-2 py-0.5 font-bold ${distalPulsePresent ? "bg-emerald-100 text-emerald-800" : "bg-rose-600 text-white"}`}>
          {distalPulsePresent ? "Distal Pulse Intact (+2)" : "LOSS OF PULSE (STAT)"}
        </span>
      </div>
      <div className="mt-2 space-y-1">
        <p>• Hematoma / Bleeding: {hematomaDetected ? "Active Hematoma Palpable (Manual Pressure) ✗" : "Soft & Flat, No Bruit ✓"}</p>
        {trBandPressureMmL !== undefined && <p>• TR-Band Air Volume: {trBandPressureMmL} mL (Weaning Schedule Active)</p>}
      </div>
    </div>
  );
};
