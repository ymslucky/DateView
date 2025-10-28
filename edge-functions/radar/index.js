import { getKVData } from '../../lib/utils.ts';


export async function onRequest(context) {
    const data = await date_view.get('test1');
    return new Response(JSON.stringify(data.json), {
        headers: {
            'content-type': 'application/json',
            'x-edgefunctions': 'Welcome to use EdgeOne Pages Functions.',
        },
    });
}

