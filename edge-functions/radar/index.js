
export async function onRequest(context) {
    const data = await date_view.get('test1');
    console.log(data);
    return new Response(JSON.stringify(data), {
        headers: {
            'content-type': 'application/json',
            'x-edgefunctions': 'Welcome to use EdgeOne Pages Functions.',
        },
    });
}

