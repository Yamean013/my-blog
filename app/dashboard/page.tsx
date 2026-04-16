"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { dailyView, weeklyView } from "@/lib/views";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AreaChartComponent() {
  const [viewType, setViewType] = useState<"daily" | "weekly">("daily");

  const getChartData = () => {
    switch (viewType) {
      case "daily":
        return dailyView;
      case "weekly":
        return weeklyView;
      default:
        return dailyView;
    }
  };

  const currentData = getChartData();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-gray-300">View by:</label>
        <Select
          value={viewType}
          onValueChange={(value) => setViewType(value as "daily" | "weekly")}
        >
          <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Select view" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            <SelectItem value="daily" className="text-white">
              Daily
            </SelectItem>
            <SelectItem value="weekly" className="text-white">
              Weekly
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={currentData}>
          <defs>
            <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="label" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
            }}
            labelStyle={{ color: "#fff" }}
          />
          <Area
            type="monotone"
            dataKey="visits"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorVisits)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
