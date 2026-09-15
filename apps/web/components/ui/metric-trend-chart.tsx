import React from "react";

export interface MetricTrendChartProps {
  data: number[];
  color?: string;
  height?: number;
  width?: number;
  className?: string;
}

export const MetricTrendChart: React.FC<MetricTrendChartProps> = ({
  data,
  color = "#2563eb",
  height = 40,
  width = 120,
  className = "",
}) => {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min === 0 ? 1 : max - min;
  const padding = 4;

  const points = data
    .map((val, idx) => {
      const x = padding + (idx / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((val - min) / range) * (height - 2 * padding);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      className={`overflow-visible ${className}`}
      aria-label="Trend Sparkline"
    >
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
};
