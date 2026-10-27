import { useId } from "react"
import { Area, AreaChart, XAxis, YAxis, usePlotArea, type DotProps } from "recharts"

import { ChartContainer, ChartTooltip, type ChartConfig } from "@/components/ui/chart"

const usageData = [
  { time: "08:00", requests: 2350 },
  { time: "10:00", requests: 2910 },
  { time: "12:00", requests: 2560 },
  { time: "14:00", requests: 3833 },
  { time: "16:00", requests: 3540 },
  { time: "18:00", requests: 4370 },
  { time: "20:00", requests: 5680 },
]

const chartConfig = {
  requests: { label: "Requests", color: "var(--brand)" },
} satisfies ChartConfig

function UsageHighlight({ cx, cy, value }: DotProps & { value?: number | number[] }) {
  const plot = usePlotArea()
  const guideId = useId()
  const amount = Array.isArray(value) ? value[value.length - 1] : value

  if (cx == null || cy == null || !plot || amount == null) return null

  const labelX = Math.max(plot.x + 8, Math.min(cx - 82, plot.x + plot.width - 84))
  const labelY = Math.max(8, cy - 46)
  const formattedValue = amount.toLocaleString("en-US")

  return (
    <g className="pointer-events-none">
      <title>{formattedValue} requests</title>
      <defs>
        <linearGradient id={guideId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-requests)" stopOpacity={0.95} />
          <stop offset="100%" stopColor="var(--color-requests)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <line x1={cx} y1={cy} x2={cx} y2={plot.y + plot.height} stroke={`url(#${guideId})`} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={16} fill="none" stroke="var(--color-requests)" strokeOpacity={0.25} />
      <circle cx={cx} cy={cy} r={10} fill="var(--background)" fillOpacity={0.5} stroke="var(--color-requests)" strokeOpacity={0.65} />
      <circle cx={cx} cy={cy} r={4} fill="var(--color-requests)" />
      <rect x={labelX} y={labelY} width={76} height={30} rx={15} fill="var(--card)" stroke="var(--border)" />
      <text
        x={labelX + 38}
        y={labelY + 15}
        dy="0.35em"
        textAnchor="middle"
        fill="var(--foreground)"
        className="font-mono text-xs"
      >
        {formattedValue}
      </text>
    </g>
  )
}

export function UsageChart() {
  const fillId = useId()

  return (
    <ChartContainer config={chartConfig} className="h-full min-h-[270px] w-full min-w-0 aspect-auto">
      <AreaChart
        accessibilityLayer
        aria-label="Example model usage: requests increase from 2,350 to 5,680 over the day. Use the arrow keys to explore."
        data={usageData}
        margin={{ left: 0, right: 0, top: 96, bottom: 24 }}
      >
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-requests)" stopOpacity={0.42} />
            <stop offset="65%" stopColor="var(--color-requests)" stopOpacity={0.12} />
            <stop offset="100%" stopColor="var(--color-requests)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" hide padding={{ left: 0, right: 0 }} />
        <YAxis hide domain={[0, 6400]} />
        <ChartTooltip active defaultIndex={3} cursor={false} content={() => null} />
        <Area
          dataKey="requests"
          type="monotone"
          fill={`url(#${fillId})`}
          fillOpacity={1}
          stroke="var(--color-requests)"
          strokeWidth={1.75}
          dot={false}
          activeDot={<UsageHighlight />}
          isAnimationActive={false}
        />
      </AreaChart>
    </ChartContainer>
  )
}
