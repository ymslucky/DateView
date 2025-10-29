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
		{ month: "小米", desktop: 220, mobile: 150 },
		{ month: "三星", desktop: 180, mobile: 120 },
		{ month: "TCL", desktop: 300, mobile: 200 },
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getKVData('radar');
				// 如果返回的是字符串，需要解析为 JSON 数组
				const parsedData = typeof res === 'string' ? JSON.parse(res) : res;
				setData(parsedData);
				setLoading(false);
				console.log('原始数据:', res);
				console.log('解析后数据:', parsedData);
			} catch (err) {
				console.error('Error fetching data:', err);
				setError("获取数据失败，请稍后重试");
				setData(fallbackData); // 使用备用数据
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
					title="各平台销售数据"
					description={error ? "展示备用数据（API 暂时不可用）" : "最近6个月的访问数据"}
					showBadge={true}
					badgeValue="11.5%"
				/>
			</div>
		</div>
	);
}
