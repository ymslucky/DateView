'use client';

import { GlowingMultipleStrokeRadarChart, ChartDataItem } from "@/components/ui/glowing-multiple-stroke-radar-chart";
import { getKVData } from "@/lib/utils";
import { useEffect, useState } from "react";

export default async function Home() {
	// 自定义数据示例
	// const customData: ChartDataItem[] = [
	// 	{ month: "一月", desktop: 220, mobile: 150 },
	// 	{ month: "二月", desktop: 180, mobile: 120 },
	// 	{ month: "三月", desktop: 300, mobile: 200 },
	// 	{ month: "四月", desktop: 250, mobile: 180 },
	// 	{ month: "五月", desktop: 280, mobile: 220 },
	// 	{ month: "六月", desktop: 320, mobile: 160 },
	// ];

	const data = await fetch('https://date-view.edgeone.app:8088').then(res => res.json());
	console.log(data);

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-background">
			<div className="w-1/3 h-1/3 min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px]">
				<GlowingMultipleStrokeRadarChart
					data={data}
					title="自定义数据雷达图"
					description="展示最近6个月的访问数据"
					showBadge={true}
					badgeValue="11.5%"
				/>
			</div>
		</div>
	);
}
