import * as React from "react";
import {
  TooltipProps,
  LegendProps,
  Legend,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
// import { useChart } from "./chart-context"; // assuming you have this
import { cn } from "./utils";

interface ChartTooltipItem {
  name: string;
  value: number | string;
  color?: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  payload?: ChartTooltipItem[];
  label?: string;
}

export const ChartTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-white p-2 shadow-md rounded-md">
      {label && <div className="font-bold mb-1">{label}</div>}
      {payload.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};
