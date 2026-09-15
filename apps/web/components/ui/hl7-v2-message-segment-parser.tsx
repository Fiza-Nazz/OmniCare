import React from "react";

export interface Hl7V2MessageSegmentParserProps {
  messageTriggerEvent: string;
  sendingFacilityMsh4: string;
  patientIdPid3: string;
  acknowledgmentStatus: string;
  className?: string;
}

export const Hl7V2MessageSegmentParser: React.FC<Hl7V2MessageSegmentParserProps> = ({
  messageTriggerEvent,
  sendingFacilityMsh4,
  patientIdPid3,
  acknowledgmentStatus,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">HL7 v2.5.1 Segment Inspector</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          Interface Engine
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>HL7 v2.5 Message Event:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{messageTriggerEvent}</strong></div>
        <div className="flex justify-between"><span>Interface Source Facility:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{sendingFacilityMsh4}</strong></div>
        <div className="flex justify-between"><span>Patient Medical Record ID:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{patientIdPid3}</strong></div>
        <div className="flex justify-between"><span>Engine ACK Status (MSA-1):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{acknowledgmentStatus}</strong></div>
      </div>
    </div>
  );
};
