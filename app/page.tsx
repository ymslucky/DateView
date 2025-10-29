'use client';

import { GlowingMultipleStrokeRadarChart, ChartDataItem } from "@/components/ui/glowing-multiple-stroke-radar-chart";
import { getKVData } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState<ChartDataItem[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// 备用数据示例
	const fallbackData: ChartDataItem[] = [
		{ month: "一月", desktop: 220, mobile: 150 },
		{ month: "二月", desktop: 180, mobile: 120 },
		{ month: "三月", desktop: 300, mobile: 200 },
		{ month: "四月", desktop: 250, mobile: 180 },
		{ month: "五月", desktop: 280, mobile: 220 },
		{ month: "六月", desktop: 320, mobile: 160 },
	];

	useEffect(() => {
		const fetchData = async () => {
			const res = await getKVData('radar');
			try {
				setData(res);
				setLoading(false);
			} catch (err) {
				setError("获取数据失败，请稍后重试");
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="w-screen h-screen flex items-center justify-center bg-background">
				<div className="text-center">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
					<p>加载数据中...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="w-screen h-screen flex items-center justify-center bg-background">
			<div className="w-1/3 h-1/3 min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px]">
				<GlowingMultipleStrokeRadarChart
					data={data || fallbackData}
					title="自定义数据雷达图"
					description={error ? "展示备用数据（API 暂时不可用）" : "展示最近6个月的访问数据"}
					showBadge={true}
					badgeValue="11.5%"
				/>
			</div>
		</div>
	);
}
