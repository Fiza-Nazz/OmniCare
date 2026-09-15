import React from "react";

export interface NeurolepticMalignantDantroleneProps {
  leadPipeRigidity: string;
  coreBodyTemperatureC: number;
  serumCreatineKinaseU_L: number;
  dopamineAgonistTherapy: string;
  className?: string;
}

export const NeurolepticMalignantDantrolene: React.FC<NeurolepticMalignantDantroleneProps> = ({
  leadPipeRigidity,
  coreBodyTemperatureC,
  serumCreatineKinaseU_L,
  dopamineAgonistTherapy,
  className = "",
}) => {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 text-xs ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="font-bold text-sm text-slate-900 dark:text-white">Neuroleptic Malignant Syndrome (NMS)</h4>
        <span className="rounded bg-indigo-50 px-2 py-0.5 font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          NMS Protocol
        </span>
      </div>
      <div className="mt-3 space-y-1.5 text-slate-600 dark:text-slate-400">
        <div className="flex justify-between"><span>Lead-Pipe Muscular Rigidity:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{leadPipeRigidity}</strong></div>
        <div className="flex justify-between"><span>Severe Hyperthermia:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${coreBodyTemperatureC} °C`}</strong></div>
        <div className="flex justify-between"><span>Serum Creatine Kinase (CK):</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{`${serumCreatineKinaseU_L} U/L`}</strong></div>
        <div className="flex justify-between"><span>Bromocriptine / Amantadine:</span> <strong className="font-mono text-slate-800 dark:text-slate-200">{dopamineAgonistTherapy}</strong></div>
      </div>
    </div>
  );
};
