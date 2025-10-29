
export async function onRequest(context) {
    const data = await date_view.get('test1');
    console.log(data);
    return new Response(JSON.stringify(data), {
        headers: {
            'content-type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

