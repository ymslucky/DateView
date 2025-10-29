
export async function onRequest(context) {
    try {
        const data = await date_view.get('test1');
        console.log('KV 数据:', data);
        
        // 如果 KV 存储中没有数据，提供默认数据
        const defaultData = [
            { month: "一月", desktop: 220, mobile: 150 },
            { month: "二月", desktop: 180, mobile: 120 },
            { month: "三月", desktop: 300, mobile: 200 },
            { month: "四月", desktop: 250, mobile: 180 },
            { month: "五月", desktop: 280, mobile: 220 },
            { month: "六月", desktop: 320, mobile: 160 },
        ];
        
        const responseData = data || defaultData;
        
        return new Response(JSON.stringify(responseData), {
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        console.error('Error in radar function:', error);
        
        // 发生错误时返回默认数据
        const defaultData = [
            { month: "一月", desktop: 220, mobile: 150 },
            { month: "二月", desktop: 180, mobile: 120 },
            { month: "三月", desktop: 300, mobile: 200 },
            { month: "四月", desktop: 250, mobile: 180 },
            { month: "五月", desktop: 280, mobile: 220 },
            { month: "六月", desktop: 320, mobile: 160 },
        ];
        
        return new Response(JSON.stringify(defaultData), {
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
}

