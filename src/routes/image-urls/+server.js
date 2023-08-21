import { supabase } from '$lib/supabaseClient'

export async function GET() {
    const { data: images, error } = await supabase
    .from('images')
    .select('url')

    if(error)
        return new Response(JSON.stringify({'error': error}))

    return new Response(JSON.stringify({images}, {'status': 200}))
}