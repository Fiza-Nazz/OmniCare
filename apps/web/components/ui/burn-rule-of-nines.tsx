import React from "react";

export interface BurnRuleOfNinesProps {
  headPercent?: number;
  chestPercent?: number;
  abdomenPercent?: number;
  upperBackPercent?: number;
  lowerBackPercent?: number;
  leftArmPercent?: number;
  rightArmPercent?: number;
  leftLegPercent?: number;
  rightLegPercent?: number;
  perineumPercent?: number;
  className?: string;
}

export const BurnRuleOfNines: React.FC<BurnRuleOfNinesProps> = ({
  headPercent = 0,
  chestPercent = 0,
  abdomenPercent = 0,
  upperBackPercent = 0,
  lowerBackPercent = 0,
  leftArmPercent = 0,
  rightArmPercent = 0,
  leftLegPercent = 0,
  rightLegPercent = 0,
  perineumPercent = 0,
  className = "",
}) => {
  const totalTbsa =
    headPercent + chestPercent + abdomenPercent + upperBackPercent + lowerBackPercent +
    leftArmPercent + rightArmPercent + leftLegPercent + rightLegPercent + perineumPercent;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Rule of Nines TBSA Calculation</h4>
        <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-black text-rose-800 dark:bg-rose-950 dark:text-rose-200">
          Total TBSA: {totalTbsa}%
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-500">Parkland Resuscitation Formula: 4 mL × Weight(kg) × %TBSA</p>
    </div>
  );
};
