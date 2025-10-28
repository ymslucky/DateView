import { GlowingMultipleStrokeRadarChart } from "@/components/ui/glowing-multiple-stroke-radar-chart";

export default function Home() {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-background">
			<div className="w-1/3 h-1/3 min-w-[300px] min-h-[300px] max-w-[600px] max-h-[600px]">
				<GlowingMultipleStrokeRadarChart />
			</div>
		</div>
	);
}
