import React from "react";

export interface Milestone200BannerProps {
  totalMergedPrs?: number;
  className?: string;
}

export const Milestone200Banner: React.FC<Milestone200BannerProps> = ({
  totalMergedPrs = 200,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl border-2 border-indigo-500 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-2xl ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm">
            🏆 Milestone Reached
          </span>
          <h3 className="mt-2 text-2xl font-black tracking-tight">
            OmniCare Enterprise ERP: {totalMergedPrs}+ Merged PRs!
          </h3>
          <p className="mt-1 text-xs text-white/80 max-w-lg">
            200 verified production pull requests merged with 100% green CI suites, rigorous clinical typing, zero hallucinated code, and comprehensive healthcare workflows.
          </p>
        </div>
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md text-3xl font-black">
          200
        </div>
      </div>
    </div>
  );
};
