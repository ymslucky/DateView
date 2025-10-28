"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingDown } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 92 },
  { month: "February", desktop: 305, mobile: 178 },
  { month: "March", desktop: 237, mobile: 145 },
  { month: "April", desktop: 273, mobile: 203 },
  { month: "May", desktop: 209, mobile: 167 },
  { month: "June", desktop: 298, mobile: 132 },
  { month: "July", desktop: 245, mobile: 189 },
  { month: "August", desktop: 312, mobile: 156 },
  { month: "September", desktop: 187, mobile: 210 },
  { month: "October", desktop: 263, mobile: 124 },
  { month: "November", desktop: 229, mobile: 198 },
  { month: "December", desktop: 276, mobile: 172 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function GlowingMultipleStrokeRadarChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>
          Glowing Multiple Stroke
          <span className="inline-flex items-center rounded-full border-none bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-500 ml-2">
            <TrendingDown className="h-4 w-4" />
            <span>5.2%</span>
          </span>
        </CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid strokeDasharray="3 3" />
            <Radar
              stroke="var(--color-desktop)"
              dataKey="desktop"
              fill="none"
              filter="url(#multi-stroke-line-glow)"
            />
            <Radar
              stroke="var(--color-mobile)"
              dataKey="mobile"
              fill="none"
              filter="url(#multi-stroke-line-glow)"
            />
            <defs>
              <filter
                id="multi-stroke-line-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
